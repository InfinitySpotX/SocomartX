document.addEventListener("DOMContentLoaded", function () {
    
    // ==========================================================================
    // 1. AUTO SLIDING HERO BANNER (ഓട്ടോ സ്ലൈഡർ - 5 സെക്കൻഡ്)
    // ==========================================================================
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    const slideInterval = 5000; // നിങ്ങൾ ആവശ്യപ്പെട്ടതുപോലെ കൃത്യം 5 സെക്കൻഡ്

    function nextSlide() {
        if (slides.length === 0) return;
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    if (slides.length > 0) {
        setInterval(nextSlide, slideInterval);
    }

    // ==========================================================================
    // 2. MOBILE TOGGLE MENU (മൊബൈൽ മെനു സിസ്റ്റം)
    // ==========================================================================
    const menuTrigger = document.querySelector(".menu-toggle-trigger");
    const navMenu = document.querySelector(".nav-links-menu");

    if (menuTrigger && navMenu) {
        menuTrigger.addEventListener("click", function (e) {
            e.stopPropagation();
            navMenu.classList.toggle("show");
        });

        // മെനുവിന് പുറത്ത് തൊട്ടാൽ തനിയെ ക്ലോസ് ആകാൻ
        document.addEventListener("click", function (e) {
            if (!navMenu.contains(e.target) && !menuTrigger.contains(e.target)) {
                navMenu.classList.remove("show");
            }
        });
    }

    // ==========================================================================
    // 3. LIGHT/DARK THEME STICKER (തീം മാറ്റാനുള്ള സ്റ്റിക്കർ ബട്ടൺ)
    // ==========================================================================
    const themeBtn = document.getElementById("theme-sticker-btn");
    const themeIcon = themeBtn ? themeBtn.querySelector(".theme-icon") : null;

    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            // നിലവിലെ തീം നോക്കുന്നു
            const currentTheme = document.documentElement.getAttribute("data-theme");
            
            if (currentTheme === "light") {
                document.documentElement.setAttribute("data-theme", "dark");
                if (themeIcon) themeIcon.textContent = "🌙"; // ഡാർക്ക് മോഡിൽ ചന്ദ്രൻ
            } else {
                document.documentElement.setAttribute("data-theme", "light");
                if (themeIcon) themeIcon.textContent = "☀️"; // ലൈറ്റ് മോഡിൽ സൂര്യൻ
            }
        });
    }

    // ==========================================================================
    // 4. SMART INSTANT SEARCH SYSTEM (പ്രൊഡക്റ്റ് ഉണ്ടോ എന്ന് നോക്കുന്ന സിസ്റ്റം)
    // ==========================================================================
    // ടെസ്റ്റിംഗിന് വേണ്ടിയുള്ള ചില പ്രൊഡക്റ്റുകൾ (Mock Data)
    const availableProducts = [
        "Chopper", "Vegetable Chopper", "Kitchen Knife", "Mixer Grinder",
        "Smart Watch", "Earbuds", "T-Shirt", "Jeans", "Groceries"
    ];

    const searchInput = document.getElementById("main-search-input");
    const resultsBox = document.getElementById("search-results-box");
    const statusMessage = document.getElementById("search-status-message");
    const resultsList = document.getElementById("search-results-list");

    if (searchInput && resultsBox) {
        searchInput.addEventListener("input", function () {
            const query = searchInput.value.toLowerCase().trim();

            // സെർച്ച് ബാർ ശൂന്യമാണെങ്കിൽ റിസൾട്ട് ബോക്സ് മറച്ചു വെക്കുക
            if (query === "") {
                resultsBox.hidden = true;
                return;
            }

            // ബോക്സ് കാണിക്കുക
            resultsBox.hidden = false;
            resultsList.innerHTML = ""; // പഴയ ലിസ്റ്റ് കളയുന്നു

            // കസ്റ്റമർ ടൈപ്പ് ചെയ്ത സാധനം നമ്മുടെ ഷോപ്പിൽ ഉണ്ടോ എന്ന് നോക്കുന്നു
            const filteredProducts = availableProducts.filter(product => 
                product.toLowerCase().includes(query)
            );

            if (filteredProducts.length > 0) {
                statusMessage.textContent = "🟢 ഈ ഉൽപ്പന്നം ലഭ്യമാണ്!";
                statusMessage.style.color = "#2ed573"; // പച്ച നിറം

                // ലഭ്യമായ പ്രൊഡക്റ്റുകൾ ലിസ്റ്റിൽ കാണിക്കുന്നു
                filteredProducts.forEach(product => {
                    const li = document.createElement("li");
                    li.textContent = product;
                    li.style.padding = "8px 5px";
                    li.style.borderBottom = "1px solid #222";
                    li.style.cursor = "pointer";
                    resultsList.appendChild(li);
                });
            } else {
                statusMessage.textContent = "🔴 ക്ഷമിക്കണം, ഈ ഉൽപ്പന്നം നിലവിൽ ലഭ്യമല്ല.";
                statusMessage.style.color = "#ff4757"; // ചുവപ്പ് നിറം
            }
        });

        // സെർച്ച് ബോക്സിന് പുറത്ത് ക്ലിക്ക് ചെയ്താൽ ലിസ്റ്റ് മറയാൻ
        document.addEventListener("click", function (e) {
            if (!searchInput.contains(e.target) && !resultsBox.contains(e.target)) {
                resultsBox.hidden = true;
            }
        });
    }
});

// ==========================================================================
// AUTO SLIDING HERO BANNER LAYER (5 Seconds)
// ==========================================================================
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    const slideInterval = 5000; // കൃത്യം 5 സെക്കൻഡ് (5000 മില്ലിസെക്കൻഡ്)

    function nextSlide() {
        if (slides.length === 0) return;
        
        // 1. നിലവിലെ സ്ലൈഡിൽ നിന്ന് 'active' ക്ലാസ് മാറ്റുന്നു
        slides[currentSlide].classList.remove("active");
        
        // 2. അടുത്ത സ്ലൈഡിന്റെ നമ്പറിലേക്ക് മാറുന്നു
        currentSlide = (currentSlide + 1) % slides.length;
        
        // 3. പുതിയ സ്ലൈഡിലേക്ക് 'active' ക്ലാസ് കൊടുക്കുന്നു
        slides[currentSlide].classList.add("active");
    }

    // പേജിൽ സ്ലൈഡ് ഫോട്ടോകൾ ഉണ്ടെങ്കിൽ മാത്രം ടൈമർ സ്റ്റാർട്ട് ചെയ്യുക
    if (slides.length > 0) {
        setInterval(nextSlide, slideInterval);
    }
});

// PROFILE PAGE - LOCAL STORAGE DATA SAVE SYSTEM
document.addEventListener("DOMContentLoaded", function () {
    const accountForm = document.getElementById("account-form");

    if (accountForm) {
        accountForm.addEventListener("submit", function (e) {
            e.preventDefault(); // പേജ് തനിയെ റീഫ്രഷ് ആകുന്നത് തടയാൻ

            // കസ്റ്റമർ ടൈപ്പ് ചെയ്ത വാല്യൂസ് എടുക്കുന്നു
            const name = document.getElementById("reg-name").value.trim();
            const phone = document.getElementById("reg-phone").value.trim();
            const address = document.getElementById("reg-address").value.trim();

            // ഫോണിന്റെ ബ്രൗസർ മെമ്മറിയിലേക്ക് (localStorage) മാറ്റുന്നു
            localStorage.setItem("custName", name);
            localStorage.setItem("custPhone", phone);
            localStorage.setItem("custAddress", address);

            // വിജയകരമായി സേവ് ആയാൽ അലർട്ട് കാണിക്കുന്നു
            alert("🎉 Profile Created Successfully! ഇനി നിങ്ങൾക്ക് എളുപ്പത്തിൽ ഓർഡർ ചെയ്യാം.");

            // ⚡ സേവ് ചെയ്ത ശേഷം കസ്റ്റമറെ നേരെ നിങ്ങളുടെ ഹോം പേജിലേക്ക് (index.html) കൊണ്ടുപോകുന്നു
            window.location.href = "index.html";
        });
    }
});


// 📦 1. പ്രൊഡക്റ്റുകളുടെ ലിസ്റ്റ്
const productsData = [
    { id: 1, name: "Premium Kitchen Chopper", price: 299, category: "kitchen", image: "https://via.placeholder.com/250x180", desc: "ഇലക്ട്രിസിറ്റി ഇല്ലാതെ വളരെ എളുപ്പത്തിൽ ഉള്ളിയും പച്ചക്കറികളും കട്ട് ചെയ്യാം. സ്റ്റെയിൻലെസ്സ് സ്റ്റീൽ ബ്ലേഡുകൾ അടങ്ങിയ പ്രീമിയം ക്വാളിറ്റി ചോപ്പർ." },
    { id: 2, name: "Smart Motion Sensor Light", price: 499, category: "gadgets", image: "https://via.placeholder.com/250x180", desc: "ആളുകൾ അടുത്ത് വരുമ്പോൾ തനിയെ കത്തുന്ന സ്മാർട്ട് ലൈറ്റ്. രാത്രികാലങ്ങളിൽ കോണിപ്പടികളിലും ബെഡ്റൂമിലും വെക്കാൻ ഏറ്റവും അനുയോജ്യം." },
    { id: 3, name: "Mini Electric Whisk", price: 199, category: "kitchen", image: "https://via.placeholder.com/250x180", desc: "കോഫിയും മുട്ടയും വളരെ വേഗത്തിൽ ബീറ്റ് ചെയ്തെടുക്കാൻ പറ്റിയ പോർട്ടബിൾ ഇലക്ട്രിക് വിസ്ക്. ബാക്റ്റീരിയ ഫ്രീ ഡിസൈൻ." },
    { id: 4, name: "Galaxy Projector Lamp", price: 899, category: "home", image: "https://via.placeholder.com/250x180", desc: "മുറിയിൽ നക്ഷത്രങ്ങളും ആകാശവും വിരിയിക്കുന്ന മനോഹരമായ പ്രൊജക്ടർ ലാമ്പ്. പാർട്ടി മൂഡിനും ബെഡ്റൂമിനും നൈറ്റ് ലൈറ്റ് ആയി ഉപയോഗിക്കാം." }
];

document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("products-container");
    const searchInput = document.getElementById("search-input");
    const categoryFilter = document.getElementById("category-filter");
    const priceSort = document.getElementById("price-sort");
    
    const detailsView = document.getElementById("product-details-view");
    const orderModal = document.getElementById("order-modal");
    const detailsForm = document.getElementById("details-form");
    const closeMdlBtn = document.querySelector(".close-modal-btn");

    // ==========================================
    // 🛒 A. CATEGORY PAGE FUNCTION (പ്രൊഡക്റ്റുകൾ കാണിക്കാൻ)
    // ==========================================
    function displayProducts(products) {
        if (!productsContainer) return;
        productsContainer.innerHTML = "";
        
        if (products.length === 0) {
            productsContainer.innerHTML = "<p style='grid-column: 1/-1; text-align:center; color:#9ca3af;'>No products found!</p>";
            return;
        }

        products.forEach(product => {
            const card = document.createElement("div");
            card.className = "product-card";
            
            // ⚡ എവിടെ ക്ലിക്ക് ചെയ്താലും ഐഡി സഹിതം product-details.html പേജിലേക്ക് പോകും
            card.innerHTML = `
                <a href="product-details.html?id=${product.id}">
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <h3>
                    <a href="product-details.html?id=${product.id}" style="color:inherit; text-decoration:none;">
                        ${product.name}
                    </a>
                </h3>
                <div class="price">₹${product.price}</div>
                <button class="buy-btn" onclick="window.location.href='product-details.html?id=${product.id}'">
                    Buy / View Details
                </button>
            `;
            productsContainer.appendChild(card);
        });
    }

    // 🔍 സെർച്ച്, ഫിൽട്ടർ ലോജിക്
    function filterAndSortProducts() {
        let filtered = [...productsData];
        const searchValue = searchInput.value.toLowerCase();
        const categoryValue = categoryFilter.value;
        const sortValue = priceSort.value;

        if (searchValue) {
            filtered = filtered.filter(p => p.name.toLowerCase().includes(searchValue));
        }
        if (categoryValue !== "all") {
            filtered = filtered.filter(p => p.category === categoryValue);
        }
        if (sortValue === "low-high") {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortValue === "high-low") {
            filtered.sort((a, b) => b.price - a.price);
        }

        displayProducts(filtered);
    }

    // കാറ്റഗറി പേജ് കൺട്രോളുകൾ കണക്ട് ചെയ്യുന്നു
    if (searchInput) searchInput.addEventListener("input", filterAndSortProducts);
    if (categoryFilter) categoryFilter.addEventListener("change", filterAndSortProducts);
    if (priceSort) priceSort.addEventListener("change", filterAndSortProducts);

    // കാറ്റഗറി പേജ് തുറക്കുമ്പോൾ ആദ്യം റൺ ചെയ്യാൻ
    if (productsContainer) displayProducts(productsData);

    // ==========================================
    // 🔍 B. PRODUCT DETAILS PAGE FUNCTION (വിവരങ്ങൾ കാണിക്കാൻ)
    // ==========================================
    if (detailsView) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id'); // string ആയി എടുക്കുന്നു

        // '==' ഉപയോഗിച്ചതുകൊണ്ട് സ്ട്രിംഗും നമ്പറും തമ്മിൽ മാച്ച് ആകും (എറർ വരില്ല)
        const product = productsData.find(p => p.id == productId);

        if (product) {
            detailsView.innerHTML = `
                <div class="details-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="details-info">
                    <h1>${product.name}</h1>
                    <div class="price">₹${product.price}</div>
                    <p class="description">${product.desc}</p>
                    <button class="buy-btn" id="open-order-form" data-name="${product.name}">Buy Now</button>
                </div>
            `;

            // Buy Now ഞെക്കുമ്പോൾ ഓർഡർ ഫോം വരാൻ
            document.getElementById("open-order-form").addEventListener("click", function () {
                const prodName = this.getAttribute("data-name");
                document.getElementById("selected-product-name").value = prodName;
                
                orderModal.classList.add("open");

                // LocalStorage Auto-fill ⚡
                const savedName = localStorage.getItem("custName");
                const savedPhone = localStorage.getItem("custPhone");
                const savedAddress = localStorage.getItem("custAddress");

                if (savedName) document.getElementById("cust-name").value = savedName;
                if (savedPhone) document.getElementById("cust-phone").value = savedPhone;
                if (savedAddress) document.getElementById("cust-address").value = savedAddress;
            });
        } else {
            detailsView.innerHTML = "<p style='text-align:center; padding:50px;'>Product not found!</p>";
        }
    }

    // ポップアップを閉じる (Close Modal)
    if (closeMdlBtn) {
        closeMdlBtn.addEventListener("click", () => orderModal.classList.remove("open"));
    }

    // ==========================================
    // 📤 C. TELEGRAM SUBMIT FUNCTION
    // ==========================================
    if (detailsForm) {
        detailsForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const copyBtn = document.getElementById("copy-btn");
            copyBtn.textContent = "Sending...";
            copyBtn.disabled = true;

            const prodName = document.getElementById("selected-product-name").value;
            const name = document.getElementById("cust-name").value;
            const phone = document.getElementById("cust-phone").value;
            const address = document.getElementById("cust-address").value;

            // 🔗 1. ഗൂഗിളിൽ നിന്ന് കിട്ടിയ Web App URL ഇവിടെ പേസ്റ്റ് ചെയ്യുക (ടോക്കണും ചാറ്റ് ഐഡിയും ഇവിടെ ആവശ്യമില്ല)
            const googleWebhookUrl = "https://script.google.com/macros/s/AKfycbzdx-4t25U858T9Zz8ty5AH9QZ12nbSfQF8sw5aC7sGCnVZaGF5_TUDdcATf1TGel0w/exec"; 

            // 📄 മെസ്സേജ് ഫോർമാറ്റ് (ഗൂഗിൾ സ്ക്രിപ്റ്റിൽ HTML ആയതുകൊണ്ട് ഇവിടെയും HTML ടാഗുകൾ ഉപയോഗിക്കാം)
            const textMessage = `🛍️ <b>NEW ORDER - SOCOMART</b>\n` +
                                `-----------------------\n` +
                                `📦 <b>Product:</b> ${prodName}\n` +
                                `👤 <b>Name:</b> ${name}\n` +
                                `📞 <b>Phone:</b> ${phone}\n` +
                                `📍 <b>Address:</b> ${address}`;

            // 🚀 2. ഗൂഗിൾ യുആർഎല്ലിലേക്ക് ഡാറ്റ അയക്കുന്നു
            fetch(googleWebhookUrl, {
                method: "POST",
                mode: "no-cors", // നെറ്റ്‌വർക്ക് എറർ വരാതിരിക്കാൻ
                headers: { 
                    // ഗൂഗിൾ സ്ക്രിപ്റ്റിലേക്ക് data സുഖമായി കടന്നുപോകാൻ text/plain അല്ലെങ്കിൽ URL encoded ഫോർമാറ്റ് ആണ് നല്ലത്
                    "Content-Type": "application/x-www-form-urlencoded" 
                },
                // ഡാറ്റ വെറും ടെക്സ്റ്റ് ആയിട്ട് തന്നെ ഗൂഗിളിലേക്ക് നേരിട്ട് വിടുന്നു
                body: JSON.stringify({ text: textMessage })
            })
            .then(() => {
                // സക്സസ് ആയാൽ നേരെ പേജ് മാറുന്നു
                window.location.href = 'success.html';
            })
            .catch((err) => {
                console.error("Error:", err);
                alert("Network error!");
            });
