document.addEventListener("DOMContentLoaded", function () {
    
    // ==========================================================================
    // 1. AUTO SLIDING HERO BANNER (ഓട്ടോ സ്ലൈഡർ - 5 സെക്കൻഡ്)
    // ==========================================================================
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    const slideInterval = 5000; // കൃത്യം 5 സെക്കൻഡ്

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
            const currentTheme = document.documentElement.getAttribute("data-theme");
            
            if (currentTheme === "dark") {
                document.documentElement.setAttribute("data-theme", "light");
                if (themeIcon) themeIcon.textContent = "☀️"; // ലൈറ്റ് മോഡിൽ സൂര്യൻ
            } else {
                document.documentElement.setAttribute("data-theme", "dark");
                if (themeIcon) themeIcon.textContent = "🌙"; // ഡാർക്ക് മോഡിൽ ചന്ദ്രൻ
            }
        });
    }

    // ==========================================================================
    // 4. SMART INSTANT SEARCH SYSTEM (പ്രൊഡക്റ്റ് ഉണ്ടോ എന്ന് നോക്കുന്ന സിസ്റ്റം)
    // ==========================================================================
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

            if (query === "") {
                resultsBox.hidden = true;
                return;
            }

            resultsBox.hidden = false;
            resultsList.innerHTML = ""; 

            const filteredProducts = availableProducts.filter(product => 
                product.toLowerCase().includes(query)
            );

            if (filteredProducts.length > 0) {
                statusMessage.textContent = "🟢 ഈ ഉൽപ്പന്നം ലഭ്യമാണ്!";
                statusMessage.style.color = "#2ed573"; 

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
                statusMessage.style.color = "#ff4757"; 
            }
        });

        document.addEventListener("click", function (e) {
            if (!searchInput.contains(e.target) && !resultsBox.contains(e.target)) {
                resultsBox.hidden = true;
            }
        });
    }
});

// PROFILE PAGE - LOCAL STORAGE DATA SAVE SYSTEM
document.addEventListener("DOMContentLoaded", function () {
    const accountForm = document.getElementById("account-form");

    if (accountForm) {
        accountForm.addEventListener("submit", function (e) {
            e.preventDefault(); 

            const name = document.getElementById("reg-name").value.trim();
            const phone = document.getElementById("reg-phone").value.trim();
            const address = document.getElementById("reg-address").value.trim();

            localStorage.setItem("custName", name);
            localStorage.setItem("custPhone", phone);
            localStorage.setItem("custAddress", address);

            alert("🎉 Profile Created Successfully! ഇനി നിങ്ങൾക്ക് എളുപ്പത്തിൽ ഓർഡർ ചെയ്യാം.");
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

    function filterAndSortProducts() {
        let filtered = [...productsData];
        const searchValue = searchInput ? searchInput.value.toLowerCase() : "";
        const categoryValue = categoryFilter ? categoryFilter.value : "all";
        const sortValue = priceSort ? priceSort.value : "";

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

    if (searchInput) searchInput.addEventListener("input", filterAndSortProducts);
    if (categoryFilter) categoryFilter.addEventListener("change", filterAndSortProducts);
    if (priceSort) priceSort.addEventListener("change", filterAndSortProducts);

    if (productsContainer) displayProducts(productsData);

    // ==========================================
    // 🔍 B. PRODUCT DETAILS PAGE FUNCTION (വിവരങ്ങൾ കാണിക്കാൻ)
    // ==========================================
    if (detailsView) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id'); 

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

            document.getElementById("open-order-form").addEventListener("click", function () {
                const prodName = this.getAttribute("data-name");
                document.getElementById("selected-product-name").value = prodName;
                
                orderModal.classList.add("open");

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

    if (closeMdlBtn) {
        closeMdlBtn.addEventListener("click", () => orderModal.classList.remove("open"));
    }

    // ==========================================
    // 📤 C. TELEGRAM SUBMIT FUNCTION (GOOGLE WEBHOOK)
    // ==========================================
    if (detailsForm) {
        detailsForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const copyBtn = document.getElementById("copy-btn");
            if (copyBtn) {
                copyBtn.textContent = "Sending...";
                copyBtn.disabled = true;
            }

            const prodName = document.getElementById("selected-product-name").value;
            const name = document.getElementById("cust-name").value;
            const phone = document.getElementById("cust-phone").value;
            const address = document.getElementById("cust-address").value;

            const googleWebhookUrl = "https://script.google.com/macros/s/AKfycbx9vTPMeTB0buBUQNOCZh7H7dLRVZ8pfbKNAHcR9m3kVeKk6BC4wZWB-i6z4k_UpvLr/exec"; 

            const textMessage = `🛍️ <b>NEW ORDER - SOCOMART</b>\n` +
                                `-----------------------\n` +
                                `📦 <b>Product:</b> ${prodName}\n` +
                                `👤 <b>Name:</b> ${name}\n` +
                                `📞 <b>Phone:</b> ${phone}\n` +
                                `📍 <b>Address:</b> ${address}`;

            // URL Encoded ഫോർമാറ്റിലേക്ക് ഡാറ്റ മാറ്റുന്നു (ഗൂഗിൾ സ്ക്രിപ്റ്റിന് മനസ്സിലാകാൻ ഇത് നിർബന്ധമാണ്)
            const formData = new URLSearchParams();
            formData.append("text", textMessage);

            fetch(googleWebhookUrl, {
                method: "POST",
                mode: "no-cors", // ഗൂഗിൾ റീഡയറക്ട് പ്രശ്നം ഒഴിവാക്കാൻ
                headers: { 
                    "Content-Type": "application/x-www-form-urlencoded" 
                },
                body: formData.toString() // ഡാറ്റ സ്ട്രിംഗ് ആയി അയക്കുന്നു
            })
            .then(() => {
                // വിജയകരമായാൽ തനിയെ success.html പേജിലേക്ക് പോകും
                window.location.href = 'success.html';
            })
            .catch((err) => {
                console.error("Error:", err);
                alert("Network error!");
                if (copyBtn) {
                    copyBtn.textContent = "Submit Order";
                    copyBtn.disabled = false;
                }
            });
        });
    }

});
