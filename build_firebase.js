const fs = require('fs');

try {
    let code = fs.readFileSync('app.js', 'utf8');

    // The replacement for firebase setup
    const FIREBASE_SETUP = `// --- FIREBASE CONFIGURATION ---
const firebaseConfig = {
  apiKey: "AIzaSyD7cMdHGcA51lQbc3RgzKBIp1zS2scPiYQ",
  authDomain: "animal-arcade-71bc0.firebaseapp.com",
  projectId: "animal-arcade-71bc0",
  storageBucket: "animal-arcade-71bc0.firebasestorage.app",
  messagingSenderId: "761973324064",
  appId: "1:761973324064:web:86717862b82bd1e56f3f45",
  measurementId: "G-4J0NSRPRXJ"
};

let db, auth;
let isFirebaseInitialized = false;
if (typeof firebase !== 'undefined') {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    db = firebase.firestore();
    auth = firebase.auth();
    isFirebaseInitialized = true;
}

window.saveState = function(key, stringifiedData) {
    window.localStorage.setItem(key, stringifiedData);
    if (db && isFirebaseInitialized) {
        db.collection('store').doc(key).set({ data: stringifiedData }, { merge: true })
          .catch(e => console.error("Firebase sync error", e));
    }
};

async function loadFromFirebase() {
    if (!db || !isFirebaseInitialized) return;
    try {
        const snap = await db.collection('store').get();
        if (!snap.empty) {
            snap.forEach(doc => {
                const docData = doc.data();
                if(docData && docData.data) {
                    window.localStorage.setItem(doc.id, docData.data);
                }
            });
        }
    } catch(e) {
        console.error("Firebase load err", e);
    }
}
`;

    // Replace the block
    const startIdx = code.indexOf('// --- FIREBASE CONFIGURATION ---');
    const endMarker = 'isFirebaseInitialized = true;\\n}';
    let endIdx = code.indexOf('isFirebaseInitialized = true;');
    if(endIdx > -1) {
        endIdx = code.indexOf('}', endIdx) + 1;
        code = code.substring(0, startIdx) + FIREBASE_SETUP + code.substring(endIdx);
    }

    // Now change initApp
    const INIT_APP_OLD = `// Application Initialization\\nfunction initApp() {`;
    const INIT_APP_NEW = `// Application Initialization\\nasync function initApp() {\\n    await loadFromFirebase();`;
    code = code.replace(INIT_APP_OLD, INIT_APP_NEW);
    
    // Also change initApp without whitespace if it varies
    code = code.replace(/function initApp\(\) \{/g, 'async function initApp() {\\n    await loadFromFirebase();');
    
    // Remove the double await if we messed it up
    code = code.replace(/async function initApp\(\) \{\\n    await loadFromFirebase\(\);\\n    await loadFromFirebase\(\);/g, 'async function initApp() {\\n    await loadFromFirebase();');

    // Replace all localStorage.setItem with saveState
    code = code.replace(/(?<!window\.)localStorage\.setItem/g, 'saveState');

    fs.writeFileSync('app.js', code);
    console.log("Migration successful");
} catch(e) {
    console.error(e);
}
