// Mock Data Initializer
const demoPets = [
    {
        id: "p1", name: "Max", type: "dog", breed: "Golden Retriever", price: 40000, location: "New York, NY",
        age: "2 Years", gender: "Male", weight: 30, height: 60, diet: "High-protein Dry Kibble",
        desc: "Max is a very friendly and energetic Golden Retriever. Loves parsing through the park and playing fetch.",
        photos: ["https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800"],
        photo: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=400",
        sellerId: "admin", sellerName: "Admin Manager", status: "available",
        seller: { phone: "9876543210", whatsapp: "9876543210", email: "admin@animalarcade.com", instagram: "animal_arcade" }
    },
    {
        id: "p2", name: "Bella", type: "dog", breed: "Poodle", price: 56000, location: "Los Angeles, CA",
        age: "1 Year", gender: "Female", weight: 10, height: 35, diet: "Premium Wet Food",
        desc: "Bella is a highly intelligent Poodle. She knows several tricks and is looking for a loving home.",
        photos: ["https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800"],
        photo: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&q=80&w=400",
        sellerId: "admin", sellerName: "Admin Manager", status: "available",
        seller: { phone: "9876543210", whatsapp: "9876543210", email: "admin@animalarcade.com", instagram: "animal_arcade" }
    },
    {
        id: "p3", name: "Luna", type: "cat", breed: "Siamese", price: 24000, location: "Miami, FL",
        age: "3 Years", gender: "Female", weight: 4.5, height: 25, diet: "Wet Fish Diet",
        desc: "Luna is an elegant Siamese cat with striking blue eyes. Very affectionate and vocal.",
        photos: ["https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=800"],
        photo: "https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=400",
        sellerId: "admin", sellerName: "Admin Manager", status: "available",
        seller: { phone: "9876543210", whatsapp: "9876543210", email: "admin@animalarcade.com", instagram: "animal_arcade" }
    },
    {
        id: "p4", name: "Milo", type: "cat", breed: "Maine Coon", price: 48000, location: "Seattle, WA",
        age: "2 Years", gender: "Male", weight: 8.2, height: 40, diet: "Raw Meat & High Protein",
        desc: "Milo is a gentle giant. He's a Maine Coon with a beautiful fluffy coat and loves lounging.",
        photo: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=400",
        sellerId: "admin", sellerName: "Admin Manager", status: "available",
        seller: { phone: "9876543210", whatsapp: "9876543210", email: "admin@animalarcade.com", instagram: "animal_arcade" }
    },
    {
        id: "p5", name: "Bessie", type: "cow", breed: "Holstein", price: 120000, location: "Austin, TX",
        age: "4 Years", gender: "Female", weight: 650, height: 145, diet: "Grass & Quality Hay",
        desc: "Bessie is a fantastic dairy cow, very docile and easy to handle. Produces excellent milk.",
        photo: "https://images.unsplash.com/photo-1595186255018-b78809ff4f93?auto=format&fit=crop&q=80&w=400",
        sellerId: "admin", sellerName: "Admin Manager", status: "available",
        seller: { phone: "9876543210", whatsapp: "9876543210", email: "admin@animalarcade.com", instagram: "animal_arcade" }
    },
    {
        id: "p6", name: "Ferdinand", type: "bull", breed: "Black Angus", price: 200000, location: "Bozeman, MT",
        age: "3 Years", gender: "Male", weight: 850, height: 160, diet: "Roughage & Silage",
        desc: "Ferdinand is a strong and surprisingly gentle Angus bull. Perfect for breeding programs.",
        photo: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=400",
        sellerId: "admin", sellerName: "Admin Manager", status: "available",
        seller: { phone: "9876543210", whatsapp: "9876543210", email: "admin@animalarcade.com", instagram: "animal_arcade" }
    },
    {
        id: "p7", name: "Diablo", type: "bull", breed: "Brahman", price: 224000, location: "Houston, TX",
        age: "4 Years", gender: "Male", weight: 900, height: 170, diet: "Pasture Forage",
        desc: "Diablo has a champion bloodline. Heat tolerant and incredible rustling ability.",
        photo: "https://images.unsplash.com/photo-1625904835711-cb2dcfaecdd0?auto=format&fit=crop&q=80&w=400",
        sellerId: "admin", sellerName: "Admin Manager", status: "available",
        seller: { phone: "9876543210", whatsapp: "9876543210", email: "admin@animalarcade.com", instagram: "animal_arcade" }
    },
    {
        id: "p8", name: "Thumper", type: "rabbit", breed: "Holland Lop", price: 4000, location: "Portland, OR",
        age: "1 Year", gender: "Male", weight: 2.1, height: 20, diet: "Timothy Hay & Pellets",
        desc: "Thumper is a playful Holland Lop. He is perfectly litter trained and great with kids.",
        photo: "https://images.unsplash.com/photo-1585110396000-c9fd4e4e508b?auto=format&fit=crop&q=80&w=400",
        sellerId: "admin", sellerName: "Admin Manager", status: "available",
        seller: { phone: "9876543210", whatsapp: "9876543210", email: "admin@animalarcade.com", instagram: "animal_arcade" }
    },
    {
        id: "p9", name: "Daisy", type: "rabbit", breed: "Angora", price: 6000, location: "Olympia, WA",
        age: "6 Months", gender: "Female", weight: 2.5, height: 22, diet: "Fresh Greens & Hay",
        desc: "Daisy produces incredibly soft wool. Requires regular grooming but is extremely affectionate.",
        photo: "https://images.unsplash.com/photo-1591561582301-7ce6588cc286?auto=format&fit=crop&q=80&w=400",
        sellerId: "admin", sellerName: "Admin Manager", status: "available",
        seller: { phone: "9876543210", whatsapp: "9876543210", email: "admin@animalarcade.com", instagram: "animal_arcade" }
    }
];

// --- FIREBASE CONFIGURATION ---
const firebaseConfig = {
  apiKey: "AIzaSyD7cMdHGcA51lQbc3RgzKBIp1zS2scPiYQ",
  authDomain: "animal-arcade-71bc0.firebaseapp.com",
  projectId: "animal-arcade-71bc0",
  storageBucket: "animal-arcade-71bc0.firebasestorage.app",
  messagingSenderId: "761973324064",
  appId: "1:761973324064:web:86717862b82bd1e56f3f45",
  measurementId: "G-4J0NSRPRXJ"
};

let db, auth, analytics;
let isFirebaseInitialized = false;
if (typeof firebase !== 'undefined') {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    db = firebase.firestore();
    auth = firebase.auth();
    analytics = firebase.analytics();
    isFirebaseInitialized = true;
}

window.saveState = function(key, stringifiedData) {
    try {
        window.localStorage.setItem(key, stringifiedData);
    } catch (e) {
        console.warn("LocalStorage quota exceeded", e);
    }
    
    if (db && isFirebaseInitialized) {
        // Special handling for large data sets to avoid 1MB document limit
        if (key === 'aa_pets' || key === 'aa_purchases') {
            const collectionName = key.replace('aa_', '');
            const dataArray = JSON.parse(stringifiedData);
            
            // For pets and purchases, save each item as a separate document
            // Using ID as document name for easy updates/merges
            dataArray.forEach(item => {
                const docId = item.id || 'item_' + Date.now();
                db.collection(collectionName).doc(docId).set(item, { merge: true })
                  .catch(err => console.error(`Error saving ${key} item:`, err));
            });
        } else {
            // Standard sync for smaller documents
            db.collection('store').doc(key).set({ data: stringifiedData }, { merge: true })
              .catch(e => console.error("Firebase sync error", e));
        }
    }
};

// Image Compression Helper
async function compressImage(base64Str, maxWidth = 600, maxHeight = 600, quality = 0.5) {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = base64Str;
        img.onload = () => {
            const canvas = document.createElement('canvas');
            let width = img.width;
            let height = img.height;

            if (width > height) {
                if (width > maxWidth) {
                    height *= maxWidth / width;
                    width = maxWidth;
                }
            } else {
                if (height > maxHeight) {
                    width *= maxHeight / height;
                    height = maxHeight;
                }
            }

            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            resolve(canvas.toDataURL('image/jpeg', quality));
        };
        img.onerror = () => resolve(base64Str); // Fallback
    });
}

async function loadFromFirebase() {
    if (!db || !isFirebaseInitialized) return;
    try {
        // Load miscellaneous store data
        const storeSnap = await db.collection('store').get();
        if (!storeSnap.empty) {
            storeSnap.forEach(doc => {
                const docData = doc.data();
                if(docData && docData.data) {
                    window.localStorage.setItem(doc.id, docData.data);
                }
            });
        }

        // Load collection-based data
        const collections = ['pets', 'purchases'];
        for (const col of collections) {
            const snap = await db.collection(col).get();
            if (!snap.empty) {
                const dataArray = [];
                snap.forEach(doc => dataArray.push(doc.data()));
                
                // Sort by date/timestamp if possible for consistency
                if (col === 'pets') dataArray.sort((a, b) => (b.id.substring(1)) - (a.id.substring(1))); // Rough sort by ID
                if (col === 'purchases') dataArray.sort((a, b) => new Date(b.date) - new Date(a.date));

                window.localStorage.setItem('aa_' + col, JSON.stringify(dataArray));
            }
        }
    } catch(e) {
        console.error("Firebase load error:", e);
    }
}

const defaultUsers = [
    { id: "admin", name: "Admin Manager", email: "admin@animalarcade.com", password: "admin", role: "admin", registrationDate: new Date().toISOString() },
    { id: "u1", name: "John Doe", email: "user@test.com", password: "password", role: "user", registrationDate: new Date().toISOString() }
];

// State Management
let state = {
    users: [],
    pets: [],
    currentUser: null,
    cart: [],
    purchases: [],
    favorites: [],
    reviews: []
};

// Application Initialization
async function initApp() {
    await loadFromFirebase();
    // Check version to force clear old schema
    if (localStorage.getItem('aa_version') !== '1.2') {
        localStorage.removeItem('aa_pets');
        saveState('aa_version', '1.2');
    }

    // Load from Local Storage
    const storedUsers = localStorage.getItem('aa_users');
    let storedPets = localStorage.getItem('aa_pets');
    const storedCart = localStorage.getItem('aa_cart');
    const storedPurchases = localStorage.getItem('aa_purchases');
    const storedUser = localStorage.getItem('aa_currentUser');
    const storedFavorites = localStorage.getItem('aa_favorites');
    const storedReviews = localStorage.getItem('aa_reviews');

    if (!storedUsers) {
        state.users = defaultUsers;
        saveState('aa_users', JSON.stringify(state.users));
    } else {
        state.users = JSON.parse(storedUsers);
    }

    if (!storedPets) {
        state.pets = demoPets;
        saveState('aa_pets', JSON.stringify(state.pets));
    } else {
        state.pets = JSON.parse(storedPets);
    }

    if (storedCart) state.cart = JSON.parse(storedCart);
    if (storedPurchases) state.purchases = JSON.parse(storedPurchases);
    if (storedFavorites) state.favorites = JSON.parse(storedFavorites);
    if (storedReviews) state.reviews = JSON.parse(storedReviews);
    if (storedUser) {
        state.currentUser = JSON.parse(storedUser);
        updateNavForUser();
    }

    bindEvents();
    renderGallery();
    updateCartIcon();
    
    // Check hash for routing
    handleRouting();

    // Real-time Dashboard Sync (Simulates Firebase onSnapshot across tabs)
    window.addEventListener('storage', (e) => {
        if (e.key === 'aa_pets') {
            state.pets = JSON.parse(e.newValue);
            if (document.getElementById('section-gallery').classList.contains('active')) renderGallery();
        }
        if (e.key === 'aa_users') state.users = JSON.parse(e.newValue);
        if (e.key === 'aa_purchases') state.purchases = JSON.parse(e.newValue);
        
        if (document.getElementById('section-admin').classList.contains('active')) {
            renderAdminPanels();
        }
    });
}

// Routing & Navigation
function switchSection(sectionId) {
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.add('hidden'));
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    
    document.getElementById(sectionId).classList.remove('hidden');
    document.getElementById(sectionId).classList.add('active');

    // Update Nav Links
    document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
    
    if (sectionId === 'section-home') {
        document.getElementById('nav-home').classList.add('active');
    }
    if (sectionId === 'section-gallery' && state.viewContext === 'all') document.getElementById('nav-gallery').classList.add('active');
    if (sectionId === 'section-pet-form') document.getElementById('nav-add-pet').classList.add('active');
    if (sectionId === 'section-admin') document.getElementById('nav-admin').classList.add('active');
    if (sectionId === 'section-history') document.getElementById('nav-history').classList.add('active');

    // Specific renders based on section
    if (sectionId === 'section-admin') renderAdminPanels();
    if (sectionId === 'section-cart') renderCart();
    if (sectionId === 'section-history') renderPurchaseHistory();
    if (sectionId === 'section-history') renderPurchaseHistory();
    if (sectionId === 'section-history') renderPurchaseHistory();
    if (sectionId === 'section-gallery') {
        document.getElementById('pet-detail-container').classList.add('hidden'); // Reset detailed view
        document.getElementById('pet-grid').classList.remove('hidden'); // Restore grid view upon backward navigation
        document.querySelector('.gallery-header-row')?.classList.remove('hidden');
        if (state.viewContext !== 'mine' && state.viewContext !== 'favorites') {
            document.querySelector('.search-bar-container')?.classList.remove('hidden');
        }
        renderGallery();
    }
}

function handleRouting() {
    const hash = window.location.hash || '#home';
    switch(hash) {
        case '#home': switchSection('section-home'); break;
        case '#gallery': 
            state.viewContext = 'all';
            switchSection('section-gallery'); 
            break;
        case '#my-listings':
            if (!state.currentUser) { window.location.hash = '#login'; return; }
            state.viewContext = 'mine';
            switchSection('section-gallery');
            break;
        case '#my-favorites':
            if (!state.currentUser) { window.location.hash = '#login'; return; }
            state.viewContext = 'favorites';
            switchSection('section-gallery');
            break;
        case '#add-pet': switchSection('section-pet-form'); break;
        case '#admin': switchSection('section-admin'); break;
        case '#history': switchSection('section-history'); break;
        case '#cart': switchSection('section-cart'); break;
        case '#login': 
            setAuthMode('login');
            switchSection('section-auth'); 
            break;
        case '#signup': 
            setAuthMode('signup');
            switchSection('section-auth'); 
            break;
        default: switchSection('section-home');
    }
}

window.addEventListener('hashchange', handleRouting);

// Event Binders
function bindEvents() {
    // Navigation binds
    document.getElementById('nav-home')?.addEventListener('click', () => window.location.hash = '#home');
    document.getElementById('nav-gallery')?.addEventListener('click', () => window.location.hash = '#gallery');
    document.getElementById('nav-add-pet')?.addEventListener('click', () => window.location.hash = '#add-pet');
    document.getElementById('nav-admin')?.addEventListener('click', () => window.location.hash = '#admin');
    document.getElementById('nav-history')?.addEventListener('click', () => window.location.hash = '#history');
    document.getElementById('nav-logo')?.addEventListener('click', () => window.location.hash = '#home');
    
    // Listen for dashboard cards
    document.querySelectorAll('.dash-card').forEach(card => {
        if (card.querySelector('h3').innerText === 'My Listings') {
            card.onclick = () => window.location.hash = '#my-listings';
        }
    });

    // Auth flows
    document.getElementById('btn-login')?.addEventListener('click', () => window.location.hash = '#login');
    document.getElementById('btn-signup')?.addEventListener('click', () => window.location.hash = '#signup');
    document.getElementById('btn-logout')?.addEventListener('click', handleLogout);
    
    document.getElementById('auth-switch-link')?.addEventListener('click', (e) => {
        e.preventDefault();
        const isLogin = document.getElementById('auth-title').innerText === 'Log In';
        window.location.hash = isLogin ? '#signup' : '#login';
    });

    document.getElementById('auth-form')?.addEventListener('submit', handleAuthForm);
    
    // Gallery filters
    document.getElementById('search-input')?.addEventListener('input', renderGallery);
    document.getElementById('filter-type')?.addEventListener('change', renderGallery);
    document.getElementById('filter-age')?.addEventListener('change', renderGallery);
    document.getElementById('filter-min-price')?.addEventListener('input', renderGallery);
    document.getElementById('filter-max-price')?.addEventListener('input', renderGallery);
    document.getElementById('btn-search')?.addEventListener('click', renderGallery);

    // Form Submissions
    document.getElementById('pet-listing-form')?.addEventListener('submit', handlePetListing);

    // Admin Tabs
    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.add('hidden'));
            
            e.target.classList.add('active');
            document.getElementById(e.target.dataset.target).classList.remove('hidden');
        });
    });

    // Checkout
    document.querySelectorAll('.pay-btn').forEach(btn => {
        btn.addEventListener('click', (e) => handleCheckout(e.target.dataset.method));
    });
}

// Notifications
function showToast(message, type = 'info') {
    const toast = document.getElementById('notification-toast');
    const msgEl = document.getElementById('toast-message');
    
    toast.className = `toast ${type}`;
    msgEl.innerText = message;
    
    toast.classList.remove('hidden');
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

// User & Auth Functions
function updateNavForUser() {
    const u = state.currentUser;
    if (u) {
        document.getElementById('nav-auth').classList.add('hidden');
        document.getElementById('nav-user').classList.remove('hidden');
        document.getElementById('user-name-display').innerText = u.name.split(' ')[0];
        
        document.getElementById('nav-add-pet').classList.remove('hidden');
        document.getElementById('nav-history').classList.remove('hidden');
        document.getElementById('nav-home').classList.remove('hidden');
        document.getElementById('nav-gallery').classList.remove('hidden');
        
        document.getElementById('demoSection')?.classList.add('hidden');
        document.getElementById('home-dashboard-content')?.classList.remove('hidden');
        
        if (u.role === 'admin') {
            document.getElementById('nav-admin').classList.remove('hidden');
            const dashAdmin = document.getElementById('dash-card-admin');
            if(dashAdmin) dashAdmin.style.display = 'block';
        } else {
            document.getElementById('nav-admin').classList.add('hidden');
            const dashAdmin = document.getElementById('dash-card-admin');
            if(dashAdmin) dashAdmin.style.display = 'none';
        }
    } else {
        document.getElementById('nav-auth').classList.remove('hidden');
        document.getElementById('nav-user').classList.add('hidden');
        document.getElementById('nav-add-pet').classList.add('hidden');
        document.getElementById('nav-admin').classList.add('hidden');
        document.getElementById('nav-history').classList.add('hidden');
        document.getElementById('nav-home').classList.add('hidden');
        document.getElementById('nav-gallery').classList.add('hidden');

        document.getElementById('demoSection')?.classList.remove('hidden');
        document.getElementById('home-dashboard-content')?.classList.add('hidden');
        
        const dashAdmin = document.getElementById('dash-card-admin');
        if(dashAdmin) dashAdmin.style.display = 'none';
    }
}

function setAuthMode(mode) {
    const isLogin = mode === 'login';
    document.getElementById('auth-title').innerText = isLogin ? 'Log In' : 'Sign Up';
    document.getElementById('btn-submit-auth').innerText = isLogin ? 'Log In' : 'Sign Up';
    document.getElementById('auth-switch-text').innerText = isLogin ? "Don't have an account?" : "Already have an account?";
    document.getElementById('auth-switch-link').innerText = isLogin ? "Sign Up" : "Log In";
    
    if (isLogin) {
        document.querySelector('.signup-only').classList.add('hidden');
        const loginOnly = document.querySelector('.login-only');
        if(loginOnly) loginOnly.classList.remove('hidden');
        document.getElementById('auth-name').removeAttribute('required');
    } else {
        document.querySelector('.signup-only').classList.remove('hidden');
        const loginOnly = document.querySelector('.login-only');
        if(loginOnly) loginOnly.classList.add('hidden');
        document.getElementById('auth-name').setAttribute('required', 'true');
    }
}

function handleAuthForm(e) {
    e.preventDefault();
    const isLogin = document.getElementById('auth-title').innerText === 'Log In';
    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-password').value;
    
    if (isLogin) {
        const user = state.users.find(u => u.email === email && u.password === password);
        if (user) {
            state.currentUser = user;
            saveState('aa_currentUser', JSON.stringify(user));
            updateNavForUser();
            showToast('Logged in successfully!', 'success');
            window.location.hash = '#home';
        } else {
            showToast('Invalid credentials!', 'error');
        }
    } else {
        const name = document.getElementById('auth-name').value;
        if (state.users.find(u => u.email === email)) {
            showToast('Email already in use!', 'error');
            return;
        }
        const newUser = { 
            id: 'u' + Date.now(), 
            name, 
            email, 
            password, 
            role: 'user',
            registrationDate: new Date().toISOString()
        };
        state.users.push(newUser);
        saveState('aa_users', JSON.stringify(state.users));
        
        state.currentUser = newUser;
        saveState('aa_currentUser', JSON.stringify(newUser));
        updateNavForUser();
        showToast('Account created successfully!', 'success');
        window.location.hash = '#home';
    }
    e.target.reset();
}

function handleLogout() {
    state.currentUser = null;
    localStorage.removeItem('aa_currentUser');
    updateNavForUser();
    showToast('Logged out successfully', 'info');
    window.location.hash = '#home';
}

// Gallery & Detail Functions
function renderGallery() {
    const grid = document.getElementById('pet-grid');
    const searchQuery = document.getElementById('search-input')?.value.toLowerCase().trim();
    const filterType = document.getElementById('filter-type')?.value.toLowerCase();
    const minPrice = document.getElementById('filter-min-price')?.value;
    const maxPrice = document.getElementById('filter-max-price')?.value;
    const ageCategory = document.getElementById('filter-age')?.value;

    grid.innerHTML = '';
    
    let pets = [];
    if (state.viewContext === 'mine') {
        pets = state.pets.filter(p => p.sellerId === state.currentUser?.id);
        document.querySelector('.gallery-header-row h2').innerText = "My Listings";
        document.querySelector('.search-bar-container').classList.add('hidden');
    } else if (state.viewContext === 'favorites') {
        pets = state.pets.filter(p => state.favorites.includes(p.id));
        document.querySelector('.gallery-header-row h2').innerText = "My Favorites";
        document.querySelector('.search-bar-container').classList.add('hidden');
    } else {
        // Show everything: available, sold, and own listings
        pets = [...state.pets];
        document.querySelector('.gallery-header-row h2').innerText = "Find Your Perfect Pet";
        document.querySelector('.search-bar-container').classList.remove('hidden');
    }

    if (searchQuery) {
        pets = pets.filter(p => {
            const nameMatch = p.name ? p.name.toLowerCase().includes(searchQuery) : false;
            const typeMatch = p.type ? p.type.toLowerCase().includes(searchQuery) : false;
            const breedMatch = p.breed ? p.breed.toLowerCase().includes(searchQuery) : false;
            return nameMatch || typeMatch || breedMatch;
        });
    }
    if (filterType) pets = pets.filter(p => p.type.toLowerCase().includes(filterType));
    if (minPrice) pets = pets.filter(p => p.price >= parseFloat(minPrice));
    if (maxPrice) pets = pets.filter(p => p.price <= parseFloat(maxPrice));
    if (ageCategory) {
        pets = pets.filter(p => {
            const ageStr = p.age.toLowerCase();
            const isBaby = ageStr.includes('month') || ageStr.includes('week') || ageStr.startsWith('0');
            if (ageCategory === 'baby') return isBaby;
            if (ageCategory === 'adult') return !isBaby;
            return true;
        });
    }

    // Featured Sort
    pets.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));

    if (pets.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No pets found matching your criteria.</p>`;
        return;
    }

    pets.forEach(pet => {
        const card = document.createElement('div');
        const isFav = state.favorites.includes(pet.id);
        const isOwnPet = state.currentUser && state.currentUser.id === pet.sellerId;
        const isSold = pet.status === 'sold';
        
        const favBtnHtml = state.currentUser && !isOwnPet ? `<button class="btn-favorite ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite('${pet.id}')"><i class="fa-solid fa-heart"></i></button>` : '';
        const featuredBadge = pet.isFeatured ? `<div class="featured-badge">HOT</div>` : '';
        const soldBadge = isSold ? `<div class="status-badge sold">SOLD</div>` : '';
        const ownerBadge = isOwnPet ? `<div class="status-badge owner">Your Listing</div>` : '';
        
        card.className = `pet-card ${pet.isFeatured ? 'featured' : ''} ${isSold ? 'sold-out' : ''}`;
        card.dataset.id = pet.id;
        
        // Support array of photos (multi-media) or legacy single photo
        const primaryMedia = (Array.isArray(pet.photos) && pet.photos.length > 0) ? pet.photos[0] : pet.photo;
        const isVideo = pet.isVideo || (primaryMedia && primaryMedia.startsWith('data:video/'));
        const mediaHtml = isVideo ? `<video src="${primaryMedia}" class="pet-image" autoplay loop muted playsinline style="object-fit: cover;"></video>` : `<img src="${primaryMedia}" alt="${pet.name}" class="pet-image">`;
        
        const actionButtons = (isSold || isOwnPet) ? `
            <div class="pet-card-notice">${isSold ? 'This pet has been adopted 🎉' : 'Manage this pet in "My Listings"'}</div>
            ${(isOwnPet && state.viewContext === 'mine') ? `
                <button class="btn btn-danger btn-sm" style="margin-top: 10px; width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;" onclick="event.stopPropagation(); userDeletePet('${pet.id}')">
                    <i class="fa-solid fa-trash-can"></i> Delete Listing
                </button>
            ` : ''}
        ` : `
            <div class="pet-card-actions">
                <button class="btn btn-cart" onclick="event.stopPropagation(); addToCart('${pet.id}')">
                    <i class="fa-solid fa-cart-plus"></i> Add to Cart
                </button>
                <button class="btn btn-checkout-fast" onclick="event.stopPropagation(); buyNowSingle('${pet.id}')">
                    <i class="fa-solid fa-bolt"></i> Buy Now
                </button>
            </div>
        `;

        card.innerHTML = `
            ${featuredBadge}
            ${soldBadge}
            ${ownerBadge}
            ${favBtnHtml}
            ${mediaHtml}
            <div class="pet-card-body">
                <div class="pet-card-header">
                    <h3 class="pet-card-title">${pet.name}</h3>
                    <div class="pet-card-price">₹${pet.price.toLocaleString('en-IN')}</div>
                </div>
                <div class="pet-info-grid">
                    <div class="info-pill"><i class="fa-solid fa-paw icon-accent"></i> <span style="text-transform: capitalize;">${pet.breed.length > 15 ? pet.breed.substring(0,12)+'...' : pet.breed}</span></div>
                    <div class="info-pill"><i class="fa-solid fa-location-dot icon-accent"></i> ${pet.location.split(',')[0]}</div>
                    <div class="info-pill"><i class="fa-solid fa-calendar icon-accent"></i> ${pet.age}</div>
                    <div class="info-pill"><i class="fa-solid fa-venus-mars icon-accent"></i> ${pet.gender}</div>
                </div>
                ${actionButtons}
            </div>
        `;
        card.addEventListener('click', () => showPetDetails(pet.id, card));
        grid.appendChild(card);
    });
}

let currentImageIndex = 0;

function showPetDetails(petId, cardElement) {
    const pet = state.pets.find(p => p.id === petId);
    if (!pet) return;

    currentImageIndex = 0;
    const photos = Array.isArray(pet.photos) ? pet.photos : [pet.photo || pet.photo];

    // Highlight selected card (if returning to grid later)
    document.querySelectorAll('.pet-card').forEach(c => c.classList.remove('selected'));
    if (cardElement) cardElement.classList.add('selected');

    // Hide grid and header to simulate fresh page
    document.getElementById('pet-grid').classList.add('hidden');
    document.querySelector('.gallery-header-row')?.classList.add('hidden');
    document.querySelector('.search-bar-container')?.classList.add('hidden');

    const renderGalleryMedia = (index) => {
        const src = photos[index];
        const isVid = src && (src.startsWith('data:video/') || src.includes('.mp4'));
        const mediaTag = isVid ? `<video src="${src}" autoplay loop muted playsinline class="gallery-main-media"></video>` : `<img src="${src}" alt="${pet.name}" class="gallery-main-media">`;
        return `
            <div class="detail-image-wrapper" style="position: relative; cursor: zoom-in;" onclick="openFullScreenMedia('${src}', ${isVid})">
                ${mediaTag}
                <div class="expand-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.2); display: flex; align-items: center; justify-content: center; opacity: 0; transition: 0.3s;">
                    <i class="fa-solid fa-expand" style="color: white; font-size: 2.5rem;"></i>
                </div>
            </div>
        `;
    };

    const detailContainer = document.getElementById('pet-detail-container');
    const dietHtml = pet.diet ? `<div class="detail-item"><div class="detail-label">Recommended Diet</div><div class="detail-value">${pet.diet}</div></div>` : '';

    detailContainer.innerHTML = `
        <button class="btn-gallery-back" onclick="closePetDetails()" style="margin-bottom: 2rem; color: var(--text-main); border-color: var(--border-color);">
            <i class="fa-solid fa-arrow-left"></i> Back to Gallery
        </button>
        <div class="pet-detail-content">
            <div class="pet-detail-img-container">
                <div class="gallery-viewport" id="gallery-viewport">
                    ${renderGalleryMedia(0)}
                </div>
                ${photos.length > 1 ? `
                    <button class="gallery-nav prev" onclick="changeImage(-1, '${pet.id}')"><i class="fa-solid fa-chevron-left"></i></button>
                    <button class="gallery-nav next" onclick="changeImage(1, '${pet.id}')"><i class="fa-solid fa-chevron-right"></i></button>
                    <div class="gallery-counter"><span id="current-img-idx">1</span> / ${photos.length}</div>
                ` : ''}
            </div>
            <div class="pet-detail-info">
                <h2>${pet.name}</h2>
                <div class="detail-price">₹${pet.price.toLocaleString('en-IN')}</div>
                
                <div class="detail-grid">
                    <div class="detail-item">
                        <div class="detail-label">Breed</div>
                        <div class="detail-value">${pet.breed}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Type</div>
                        <div class="detail-value" style="text-transform: capitalize;">${pet.type}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Age</div>
                        <div class="detail-value">${pet.age}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Gender</div>
                        <div class="detail-value">${pet.gender}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Weight</div>
                        <div class="detail-value">${pet.weight} kg</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Height</div>
                        <div class="detail-value">${pet.height} cm</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Location</div>
                        <div class="detail-value">${pet.location}</div>
                    </div>
                    ${dietHtml}
                </div>
                
                <div class="detail-desc">
                    <div class="detail-label">Description</div>
                    <p>${pet.desc}</p>
                </div>
                

                <div id="sellerContactButtons" style="margin-top: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap;"></div>
                
                <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
                    <h3 style="margin-bottom: 1rem;">Payment Method</h3>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin: 2rem 0;">
                        <a href="https://www.phonepe.com" target="_blank" class="payment-option" style="background: rgba(255,255,255,0.05); padding: 1rem; text-align: center; border-radius: 8px; text-decoration: none; color: var(--text-main);" onclick="return processPaymentWithRedirect('PhonePe', event, '${pet.id}')">
                            <i class="fas fa-mobile-alt" style="font-size: 2rem; margin-bottom: 0.5rem; display: block;"></i>
                            PhonePe
                        </a>
                        <a href="https://pay.google.com" target="_blank" class="payment-option" style="background: rgba(255,255,255,0.05); padding: 1rem; text-align: center; border-radius: 8px; text-decoration: none; color: var(--text-main);" onclick="return processPaymentWithRedirect('Google Pay', event, '${pet.id}')">
                            <i class="fab fa-google" style="font-size: 2rem; margin-bottom: 0.5rem; display: block;"></i>
                            Google Pay
                        </a>
                        <a href="https://paytm.com" target="_blank" class="payment-option" style="background: rgba(255,255,255,0.05); padding: 1rem; text-align: center; border-radius: 8px; text-decoration: none; color: var(--text-main);" onclick="return processPaymentWithRedirect('Paytm', event, '${pet.id}')">
                            <i class="fas fa-rupee-sign" style="font-size: 2rem; margin-bottom: 0.5rem; display: block;"></i>
                            Paytm
                        </a>
                        <div class="payment-option" style="background: rgba(255,255,255,0.05); padding: 1rem; text-align: center; border-radius: 8px; cursor: pointer; color: var(--text-main);" onclick="processPaymentCOD('${pet.id}')">
                            <i class="fas fa-money-bill-wave" style="font-size: 2rem; margin-bottom: 0.5rem; display: block;"></i>
                            Cash on Delivery
                        </div>
                    </div>
                    <div style="margin-top: 1rem;">
                        <button class="btn btn-outline btn-block" onclick="addToCart('${pet.id}')">
                            <i class="fa-solid fa-cart-shopping"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    let contactHtml = '';
    
    // Compute seller average rating
    const sellerReviews = state.reviews.filter(r => r.targetSellerId === pet.sellerId);
    if (sellerReviews.length > 0) {
        const avg = (sellerReviews.reduce((sum, r) => sum + r.rating, 0) / sellerReviews.length).toFixed(1);
        contactHtml += `<div style="width:100%; margin-bottom:1rem; font-weight:bold; color:#FFB703;"><i class="fa-solid fa-star"></i> Seller Rating: ${avg} / 5.0 (${sellerReviews.length} reviews)</div>`;
    }

    const s = pet.seller || {};
    if (s.email) contactHtml += `<a href="mailto:${s.email}" class="btn btn-outline contact-link email"><i class="fas fa-envelope"></i> Email</a>`;
    if (s.phone) contactHtml += `<div class="contact-number-display" style="padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 600; border: 2px solid var(--primary-color); display:flex; align-items:center; gap:0.5rem; color:var(--primary-color); background:rgba(50, 102, 156, 0.05);"><i class="fas fa-phone"></i> Seller Contact: ${s.phone}</div>`;
    if (s.whatsapp) contactHtml += `<a href="https://wa.me/${s.whatsapp.replace(/\D/g,'')}" target="_blank" class="btn btn-outline contact-link whatsapp" style="border-color:#25D366; color:#25D366;"><i class="fab fa-whatsapp"></i> WhatsApp</a>`;
    if (s.instagram) contactHtml += `<a href="https://instagram.com/${s.instagram.replace('@','')}" target="_blank" class="btn btn-outline contact-link instagram" style="border-color:#E1306C; color:#E1306C;"><i class="fab fa-instagram"></i> Instagram</a>`;
    
    const contactContainer = document.getElementById('sellerContactButtons');
    if (contactContainer && contactHtml !== '') contactContainer.innerHTML = contactHtml;
    
    // Unhide and scroll
    detailContainer.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.changeImage = function(direction, petId) {
    const pet = state.pets.find(p => p.id === petId);
    if (!pet) return;
    const photos = Array.isArray(pet.photos) ? pet.photos : [pet.photo];
    
    currentImageIndex += direction;
    if (currentImageIndex >= photos.length) currentImageIndex = 0;
    if (currentImageIndex < 0) currentImageIndex = photos.length - 1;
    
    const viewport = document.getElementById('gallery-viewport');
    const src = photos[currentImageIndex];
    const isVid = src && (src.startsWith('data:video/') || src.includes('.mp4'));
    const mediaTag = isVid ? `<video src="${src}" autoplay loop muted playsinline class="gallery-main-media"></video>` : `<img src="${src}" alt="${pet.name}" class="gallery-main-media">`;
    
    viewport.innerHTML = `
        <div class="detail-image-wrapper" style="position: relative; cursor: zoom-in;" onclick="openFullScreenMedia('${src}', ${isVid})">
            ${mediaTag}
            <div class="expand-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.2); display: flex; align-items: center; justify-content: center; opacity: 0; transition: 0.3s;">
                <i class="fa-solid fa-expand" style="color: white; font-size: 2.5rem;"></i>
            </div>
        </div>
    `;
    document.getElementById('current-img-idx').innerText = currentImageIndex + 1;
};

window.closePetDetails = function() {
    document.getElementById('pet-detail-container').classList.add('hidden');
    document.getElementById('pet-grid').classList.remove('hidden');
    document.querySelector('.gallery-header-row')?.classList.remove('hidden');
    
    if (state.viewContext !== 'mine') {
        document.querySelector('.search-bar-container')?.classList.remove('hidden');
    }
}

window.processPaymentWithRedirect = function(method, event, petId) {
    if (!state.currentUser) {
        event.preventDefault();
        showToast('Please login to purchase a pet', 'error');
        window.location.hash = '#login';
        return false;
    }
    const pet = state.pets.find(p => p.id === petId);
    if (pet && pet.status === 'sold') {
        event.preventDefault();
        showToast('This pet is already adopted!', 'error');
        return false;
    }

    if (!state.cart.find(item => item.id === petId)) {
        state.cart.push(pet);
        saveCart();
    }
    handleCheckout(method);
    return true; 
};

window.processPaymentCOD = function(petId) {
    if (!state.currentUser) {
        showToast('Please login to purchase a pet', 'error');
        window.location.hash = '#login';
        return;
    }
    const pet = state.pets.find(p => p.id === petId);
    if (pet && pet.status === 'sold') {
        showToast('This pet is already adopted!', 'error');
        return;
    }

    if (!state.cart.find(item => item.id === petId)) {
        state.cart.push(pet);
        saveCart();
    }
    handleCheckout('COD');
};

// --- PREMIUM UPLOAD LOGIC ---
let currentListingFiles = [];

function setupUploadLogic() {
    const dropZone = document.getElementById('media-drop-zone');
    const fileInput = document.getElementById('pet-media');

    if (!dropZone || !fileInput) return;

    dropZone.onclick = () => fileInput.click();

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        if (e.dataTransfer.files.length > 0) {
            handleMediaFiles(e.dataTransfer.files);
        }
    });

    fileInput.onchange = (e) => {
        if (e.target.files.length > 0) {
            handleMediaFiles(e.target.files);
        }
    };
}

async function handleMediaFiles(files) {
    const freshFiles = Array.from(files);
    for (const file of freshFiles) {
        if (currentListingFiles.length >= 10) {
            showToast('Maximum 10 files allowed', 'info');
            break;
        }
        const reader = new FileReader();
        const promise = new Promise((resolve) => {
            reader.onload = (e) => resolve({
                data: e.target.result,
                type: file.type,
                name: file.name
            });
        });
        reader.readAsDataURL(file);
        const fileData = await promise;
    
        // Compress if image
        let finalData = fileData.data;
        if (fileData.type.startsWith('image/')) {
            finalData = await compressImage(fileData.data);
        }

        currentListingFiles.push({
            data: finalData,
            type: fileData.type,
            name: fileData.name
        });
    }
    renderMediaPreviews();
}



function renderMediaPreviews() {
    const grid = document.getElementById('media-preview-grid');
    if (!grid) return;
    grid.innerHTML = '';

    currentListingFiles.forEach((file, index) => {
        const isVideo = file.type.startsWith('video/');
        const item = document.createElement('div');
        item.className = 'preview-item';
        
        item.innerHTML = `
            ${isVideo ? `<video src="${file.data}"></video><div class="video-icon-overlay"><i class="fa-solid fa-video"></i></div>` : `<img src="${file.data}" alt="Preview">`}
            <div class="type-badge">${isVideo ? 'Video' : 'Image'}</div>
            <button class="remove-btn" onclick="removeMediaAtIndex(${index})"><i class="fa-solid fa-xmark"></i></button>
        `;
        grid.appendChild(item);
    });
}

window.removeMediaAtIndex = function(index) {
    currentListingFiles.splice(index, 1);
    renderMediaPreviews();
};

window.buyNowSingle = function(petId) {
    if (!state.currentUser) {
        showToast('Please login to purchase a pet', 'error');
        window.location.hash = '#login';
        return;
    }
    showPetDetails(petId);
};
// --- END PREMIUM UPLOAD ---

// Add Pet Listing
function handlePetListing(e) {
    e.preventDefault();
    if (!state.currentUser) {
        showToast('Please login to post a listing', 'error');
        window.location.hash = '#login';
        return;
    }

    if (currentListingFiles.length === 0) {
        showToast('Please select at least one photo or video', 'error');
        return;
    }

    const finalizeListing = () => {
        const mediaArray = currentListingFiles.map(f => f.data);
        const newPet = {
            id: 'p' + Date.now(),
            name: document.getElementById('pet-name').value,
            type: document.getElementById('pet-type').value,
            breed: document.getElementById('pet-breed').value,
            price: parseFloat(document.getElementById('pet-price').value),
            location: document.getElementById('pet-location').value,
            age: document.getElementById('pet-age').value,
            gender: document.getElementById('pet-gender').value,
            weight: parseFloat(document.getElementById('pet-weight').value),
            height: parseFloat(document.getElementById('pet-height').value),
            diet: document.getElementById('pet-diet').value,
            desc: document.getElementById('pet-desc').value,
            photos: mediaArray,
            photo: mediaArray[0], 
            isVideo: currentListingFiles[0].type.startsWith('video/'),
            sellerId: state.currentUser.id,
            seller: {
                phone: document.getElementById('pet-seller-phone')?.value,
                whatsapp: document.getElementById('pet-seller-whatsapp')?.value,
                email: document.getElementById('pet-seller-email')?.value,
                instagram: document.getElementById('pet-seller-instagram')?.value
            },
            isFeatured: false,
            status: 'available'
        };

        state.pets.unshift(newPet);
        saveState('aa_pets', JSON.stringify(state.pets));
        
        showToast('Listing published successfully!', 'success');
        document.getElementById('pet-listing-form').reset();
        currentListingFiles = [];
        renderMediaPreviews();
        window.location.hash = '#gallery';
        renderGallery();
    };

    finalizeListing();
}

// Cart functionality
function addToCart(petId) {
    if (!state.currentUser) {
        showToast('Please login to adopt a pet', 'error');
        window.location.hash = '#login';
        return;
    }

    if (state.cart.find(item => item.id === petId)) {
        showToast('This pet is already in your cart!', 'info');
        return;
    }

    const pet = state.pets.find(p => p.id === petId);
    state.cart.push(pet);
    saveCart();
    updateCartIcon();
    showToast(`${pet.name} added to cart!`, 'success');
}

function removeFromCart(petId) {
    state.cart = state.cart.filter(p => p.id !== petId);
    saveCart();
    updateCartIcon();
    renderCart();
}

function saveCart() {
    saveState('aa_cart', JSON.stringify(state.cart));
}

function updateCartIcon() {
    document.querySelectorAll('.cart-count').forEach(el => el.innerText = state.cart.length);
}

function renderCart() {
    const container = document.getElementById('cart-items-container');
    const subtotalEl = document.getElementById('cart-subtotal');
    const totalEl = document.getElementById('cart-total');

    container.innerHTML = '';
    
    if (state.cart.length === 0) {
        container.innerHTML = '<p>Your cart is empty. <a href="#gallery" style="color:var(--primary-color);">Browse pets</a></p>';
        document.querySelector('.checkout-actions').classList.add('hidden');
        subtotalEl.innerText = '₹0';
        totalEl.innerText = '₹0';
        return;
    }

    document.querySelector('.checkout-actions').classList.remove('hidden');

    let total = 0;
    state.cart.forEach(item => {
        total += item.price;
        const div = document.createElement('div');
        div.className = 'cart-item';
        const mediaHtml = item.isVideo ? `<video src="${item.photo}" autoplay loop muted playsinline style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px;"></video>` : `<img src="${item.photo}" alt="${item.name}">`;
        
        div.innerHTML = `
            ${mediaHtml}
            <div class="cart-item-details" style="cursor: pointer;" onclick="window.location.hash='#gallery'; setTimeout(()=>showPetDetails('${item.id}'), 100)">
                <h4 style="margin-bottom:0.25rem">${item.name} <span style="font-size:0.8rem; font-weight:normal;">(${item.breed})</span></h4>
                <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</div>
            </div>
            <button class="btn btn-outline btn-sm" onclick="removeFromCart('${item.id}')">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;
        container.appendChild(div);
    });

    subtotalEl.innerText = `₹${total.toLocaleString('en-IN')}`;
    totalEl.innerText = `₹${total.toLocaleString('en-IN')}`;
}

// Checkout Logic
function handleCheckout(method) {
    if (state.cart.length === 0) return;

    if (method === 'COD') {
        showToast('Order placed via Cash on Delivery!', 'success');
        processOrder(method, 'Order Placed');
    } else {
        showToast('Order placed successfully!', 'success');
        processOrder(method, 'Order Placed');
    }
}

function processOrder(paymentMethod, statusStr) {
    const total = state.cart.reduce((sum, item) => sum + item.price, 0);
    
    const order = {
        id: 'ORD' + Date.now(),
        userId: state.currentUser.id,
        date: new Date().toISOString(),
        items: [...state.cart],
        total: total,
        paymentMethod: paymentMethod,
        status: statusStr || 'Pending'
    };

    state.purchases.push(order);
    saveState('aa_purchases', JSON.stringify(state.purchases));

    // Mark pets as sold
    state.cart.forEach(cartItem => {
        const petIndex = state.pets.findIndex(p => p.id === cartItem.id);
        if (petIndex > -1) {
            state.pets[petIndex].status = 'sold';
        }
    });
    saveState('aa_pets', JSON.stringify(state.pets));

    // Clear cart
    state.cart = [];
    saveCart();
    updateCartIcon();
    
    // Redirect to history
    setTimeout(() => {
        window.location.hash = '#history';
    }, 1500);
}

// Purchase History
function renderPurchaseHistory() {
    const list = document.getElementById('purchase-history-list');
    list.innerHTML = '';
    
    if (!state.currentUser) return;

    const userHistory = state.purchases.filter(p => p.userId === state.currentUser.id).reverse();

    if (userHistory.length === 0) {
        list.innerHTML = '<div style="text-align:center; padding: 3rem; color: var(--text-muted);"><i class="fa-solid fa-receipt" style="font-size:3rem; margin-bottom:1rem; opacity:0.2;"></i><br>No purchases yet. Start your journey by adopting a pet!</div>';
        return;
    }

    userHistory.forEach(order => {
        const date = new Date(order.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
        const itemNames = order.items.map(i => i.name).join(', ');
        
        // Group items by seller to show contact info once per seller
        const sellersMap = {};
        order.items.forEach(item => {
            if (!sellersMap[item.sellerId]) {
                sellersMap[item.sellerId] = {
                    name: item.sellerName || 'Seller',
                    contact: item.seller || {},
                    petName: item.name
                };
            }
        });

        let contactHtml = '';
        Object.entries(sellersMap).forEach(([sid, info]) => {
            const s = info.contact;
            const hasReviewed = state.reviews.find(r => r.targetSellerId === sid && r.buyerId === state.currentUser.id);
            
            contactHtml += `
                <div class="seller-contact-card">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                        <div style="font-weight:600; font-size:0.95rem; color:var(--primary-dark);">Seller Contact for ${info.petName}</div>
                        ${hasReviewed ? `<div style="font-size:0.8rem; color:#FFB703;"><i class="fa-solid fa-check-circle"></i> Rated</div>` : ''}
                    </div>
                    <div class="contact-links-row">
                        ${s.phone ? `<div class="contact-number-display" style="font-weight:700; color:var(--primary-color); background:rgba(50, 102, 156, 0.1); padding:0.5rem 1rem; border-radius:8px; border:1px solid var(--primary-light);"><i class="fa-solid fa-phone"></i> Contact: ${s.phone}</div>` : ''}
                        ${s.whatsapp ? `<a href="https://wa.me/${s.whatsapp.replace(/\D/g,'')}" target="_blank" class="contact-link whatsapp"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>` : ''}
                        ${s.email ? `<a href="mailto:${s.email}" class="contact-link email"><i class="fa-solid fa-envelope"></i> Email</a>` : ''}
                        ${s.instagram ? `<a href="https://instagram.com/${s.instagram.replace('@','')}" target="_blank" class="contact-link instagram"><i class="fa-brands fa-instagram"></i> Instagram</a>` : ''}
                        ${!hasReviewed ? `<button class="contact-link rate" onclick="openReviewModal('${sid}')"><i class="fa-solid fa-star"></i> Rate Seller</button>` : ''}
                    </div>
                </div>
            `;
        });

        const div = document.createElement('div');
        div.className = 'history-card';
        
        div.innerHTML = `
            <div class="history-card-header">
                <div class="order-info">
                    <h3>Order #${order.id}</h3>
                    <div class="order-meta">${date} &bull; ${order.paymentMethod}</div>
                </div>
                <div class="order-status-price">
                    <div class="order-price">₹${order.total.toLocaleString('en-IN')}</div>
                    <span class="status-pill ${order.status.toLowerCase().replace(' ','-')}">${order.status}</span>
                </div>
            </div>
            <div class="order-items-list">
                <strong>Pets:</strong> ${itemNames}
            </div>
            ${contactHtml}
        `;
        list.appendChild(div);
    });
}

window.clearPurchaseHistory = function() {
    if(!state.currentUser) return;
    if(confirm('Are you sure you want to clear your purchase history?')) {
        state.purchases = state.purchases.filter(p => p.userId !== state.currentUser.id);
        saveState('aa_purchases', JSON.stringify(state.purchases));
        renderPurchaseHistory();
        showToast('Purchase history cleared.', 'info');
    }
}

// Admin Panel Functions
function renderAdminPanels() {
    if (!state.currentUser || state.currentUser.role !== 'admin') {
        window.location.hash = '#home';
        return;
    }

    // Render Users List
    const listUsers = document.getElementById('admin-users-list');
    if (listUsers) {
        listUsers.innerHTML = '';
        state.users.forEach(user => {
            const div = document.createElement('div');
            div.className = 'admin-list-item';
            div.innerHTML = `
                <div>
                    <div style="font-weight: bold; font-size: 1.1rem; margin-bottom: 0.2rem;">${user.name}</div>
                    <div style="color: rgba(255,255,255,0.7);">${user.email}</div>
                </div>
                <div>
                    ${user.role !== 'admin' ? `<button class="admin-delete-btn" onclick="adminDeleteUser('${user.id}')">Delete</button>` : ''}
                </div>
            `;
            listUsers.appendChild(div);
        });
    }

    // Render Pets List
    const listPets = document.getElementById('admin-pets-list');
    if (listPets) {
        listPets.innerHTML = '';
        state.pets.forEach(pet => {
            const seller = state.users.find(u => u.id === pet.sellerId)?.name || 'Unknown User';
            const mediaHtml = pet.isVideo ? `<video src="${pet.photo}" autoplay loop muted playsinline style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px; margin-top: 0.5rem;"></video>` : `<img src="${pet.photo}" alt="${pet.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px; margin-top: 0.5rem;">`;
            const div = document.createElement('div');
            div.className = 'admin-list-item';
            div.innerHTML = `
                <div>
                    <div style="font-weight: 700; font-size: 1.1rem; margin-bottom: 0.2rem;">${pet.name} <span style="font-weight: 400; color: rgba(255,255,255,0.7);">(${pet.breed})</span></div>
                    <div style="color: rgba(255,255,255,0.7); font-size: 0.95rem;">₹${pet.price.toLocaleString('en-IN')} | Seller: ${seller}</div>
                    ${mediaHtml}
                </div>
                <div>
                    <button class="admin-delete-btn" onclick="adminDeletePet('${pet.id}')">Delete</button>
                </div>
            `;
            listPets.appendChild(div);
        });
    }

    // Render Orders & Stats
    const listOrders = document.getElementById('admin-orders-list');
    if (listOrders) {
        listOrders.innerHTML = '';
        state.purchases.forEach(order => {
            const user = state.users.find(u => u.id === order.userId);
            const buyerStr = user ? user.name + '<br><span style="font-size:0.8rem; color: rgba(255,255,255,0.7);">' + user.email + '</span>' : 'Unknown Buyer';
            const itemNames = order.items.map(i => i.name).join(', ');
            
            const div = document.createElement('div');
            div.className = 'admin-list-item';
            div.innerHTML = `
                <div>
                    <div style="font-weight: bold; font-size: 1.1rem; margin-bottom: 0.2rem;">Order #${order.id}</div>
                    <div style="color: rgba(255,255,255,0.7); font-size: 0.95rem;">${new Date(order.date).toLocaleDateString()}</div>
                </div>
                <div>
                    <div style="font-size: 0.95rem;">${buyerStr}</div>
                </div>
                <div>
                    <div style="color: rgba(255,255,255,0.9); font-size: 0.95rem; max-width: 250px;">${itemNames}</div>
                </div>
                <div style="text-align: right;">
                    <div style="font-weight: bold; color: var(--primary-color); font-size: 1.1rem;">₹${order.total.toLocaleString('en-IN')}</div>
                    <div style="color: rgba(255,255,255,0.7); font-size: 0.9rem;">${order.status}</div>
                </div>
            `;
            listOrders.appendChild(div);
        });
        
        // Stats
        const totalUsers = state.users.length;
        const totalSoldPets = state.pets.filter(p => p.status === 'sold').length;
        const totalRevenue = state.purchases.reduce((sum, order) => sum + order.total, 0);

        const statUsers = document.getElementById('stat-users');
        const statSold = document.getElementById('stat-sold');
        const statRevenue = document.getElementById('stat-revenue');
        
        if (statUsers) statUsers.innerText = totalUsers;
        if (statSold) statSold.innerText = totalSoldPets;
        if (statRevenue) statRevenue.innerText = '₹' + totalRevenue.toLocaleString('en-IN');
        
        if (typeof renderAdminAnalyticsChart === 'function') {
            renderAdminAnalyticsChart();
        }
    }
}

window.adminDeletePet = function(id) {
    if(confirm('Are you sure you want to delete this pet?')) {
        state.pets = state.pets.filter(p => p.id !== id);
        saveState('aa_pets', JSON.stringify(state.pets));
        
        // Explicitly delete from Firebase
        if (db && isFirebaseInitialized) {
            db.collection('pets').doc(id).delete()
              .catch(err => console.error("Error deleting pet from Firebase:", err));
        }

        showToast('Pet deleted successfully.', 'success');
        renderAdminPanels();
        if (typeof renderGallery === 'function') renderGallery();
    }
};

window.adminDeleteUser = function(id) {
    if(confirm('Are you sure you want to delete this user?')) {
        state.users = state.users.filter(u => u.id !== id);
        saveState('aa_users', JSON.stringify(state.users));
        showToast('User deleted successfully.', 'success');
        renderAdminPanels();
    }
};

window.userDeletePet = function(id) {
    if(!state.currentUser) return;
    const pet = state.pets.find(p => p.id === id);
    if(!pet || pet.sellerId !== state.currentUser.id) {
        showToast('Permission denied.', 'error');
        return;
    }
    
    if(confirm('Are you sure you want to PERMANENTLY delete this listing?')) {
        state.pets = state.pets.filter(p => p.id !== id);
        saveState('aa_pets', JSON.stringify(state.pets));
        
        // Explicitly delete from Firebase
        if (db && isFirebaseInitialized) {
            db.collection('pets').doc(id).delete()
              .catch(err => console.error("Error deleting listing from Firebase:", err));
        }

        showToast('Listing removed successfully.', 'info');
        renderGallery();
    }
};

window.toggleFavorite = function(petId) {
    if(!state.currentUser) { 
        showToast('Please log in to save favorites!', 'error'); 
        window.location.hash = '#login';
        return; 
    }
    const idx = state.favorites.indexOf(petId);
    if(idx > -1) {
        state.favorites.splice(idx, 1);
        showToast('Removed from Favorites', 'info');
    } else {
        state.favorites.push(petId);
        showToast('Added to Favorites ❤️', 'success');
    }
    saveState('aa_favorites', JSON.stringify(state.favorites));
    renderGallery();
};

window.openReviewModal = function(sellerId) {
    console.log("Opening review modal for:", sellerId);
    document.getElementById('review-target-seller').value = sellerId;
    document.getElementById('review-rating-value').value = 0;
    document.getElementById('review-comment').value = '';
    
    // Reset stars
    document.querySelectorAll('#star-rating-input i').forEach(star => {
        star.classList.remove('fa-solid');
        star.classList.add('fa-regular');
    });

    const modal = document.getElementById('review-modal');
    modal.style.display = 'flex';
    modal.classList.remove('hidden');
};

window.submitReview = function() {
    const sellerId = document.getElementById('review-target-seller').value;
    const rating = parseInt(document.getElementById('review-rating-value').value);
    const comment = document.getElementById('review-comment').value;

    if (rating === 0) {
        showToast('Please select a star rating', 'error');
        return;
    }

    const newReview = { id: 'r'+Date.now(), targetSellerId: sellerId, buyerId: state.currentUser.id, rating, comment, date: new Date().toISOString() };
    state.reviews.push(newReview);
    saveState('aa_reviews', JSON.stringify(state.reviews));

    showToast('Review submitted successfully!', 'success');
    document.getElementById('review-modal').style.display = 'none';
    
    // Refresh current view if it's history
    if (document.getElementById('section-history').classList.contains('active')) {
        renderPurchaseHistory();
    }
};

window.openFullScreenMedia = function(src, isVideo) {
    const modal = document.getElementById('media-modal');
    const content = document.getElementById('media-modal-content');
    
    content.innerHTML = isVideo ? 
        `<video src="${src}" autoplay controls loop class="full-screen-media" style="max-width:100%; max-height:100%; border-radius:12px;"></video>` : 
        `<img src="${src}" alt="Full Screen" class="full-screen-media" style="max-width:100%; max-height:100%; border-radius:12px; object-fit:contain;">`;
        
    modal.style.display = 'flex';
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
};

window.closeFullScreenMedia = function() {
    const modal = document.getElementById('media-modal');
    modal.style.display = 'none';
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Restore scrolling
};

// --- CHART.JS ---
let revenueChartInstance = null;
window.renderAdminAnalyticsChart = function() {
    const ctx = document.getElementById('revenueChart');
    if(!ctx) return;
    if(typeof Chart === 'undefined') return; // Wait for CDN
    if(revenueChartInstance) { revenueChartInstance.destroy(); }

    const last30Days = [...Array(30)].map((_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - i);
        return d.toLocaleDateString();
    }).reverse();

    const revenueMap = {};
    last30Days.forEach(date => revenueMap[date] = 0);

    state.purchases.forEach(order => {
        const orderDate = new Date(order.date).toLocaleDateString();
        if(revenueMap[orderDate] !== undefined) {
            revenueMap[orderDate] += order.total;
        }
    });

    const data = Object.values(revenueMap);

    revenueChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: last30Days,
            datasets: [{
                label: 'Revenue (₹)',
                data: data,
                borderColor: '#2a9d8f',
                backgroundColor: 'rgba(42, 157, 143, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: { ticks: { color: 'rgba(255,255,255,0.7)', maxTicksLimit: 7 }, grid: { display: false } },
                y: { ticks: { color: 'rgba(255,255,255,0.7)' }, grid: { color: 'rgba(255,255,255,0.1)' } }
            }
        }
    });
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initApp();
    setupUploadLogic();
    document.getElementById('pet-listing-form')?.addEventListener('submit', handlePetListing);
    
    // Bind Stars
    const stars = document.querySelectorAll('#star-rating-input i');
    stars.forEach(star => {
        star.addEventListener('click', (e) => {
            const val = parseInt(e.target.dataset.val);
            document.getElementById('review-rating-value').value = val;
            stars.forEach(s => {
                if (parseInt(s.dataset.val) <= val) s.classList.replace('fa-regular', 'fa-solid');
                else s.classList.replace('fa-solid', 'fa-regular');
            });
        });
    });
});
