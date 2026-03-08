document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Mobile Menu Logic ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        const menuIcon = menuBtn.querySelector('i');
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            if(mobileMenu.classList.contains('hidden')) {
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            } else {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-xmark');
            }
        });
    }

    // --- 2. Dark/Light Mode Logic ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const mobileThemeToggleBtn = document.getElementById('mobile-theme-toggle');
    const htmlElement = document.documentElement;

    function toggleTheme() {
        htmlElement.classList.toggle('dark');
        updateIcons();
    }

    function updateIcons() {
        const isDark = htmlElement.classList.contains('dark');
        const iconClasses = isDark ? ['fa-solid', 'fa-sun', 'text-yellow-400'] : ['fa-solid', 'fa-moon', 'text-gray-700'];
        
        if (themeToggleBtn) {
            const desktopIcon = document.getElementById('theme-icon');
            if(desktopIcon) {
                desktopIcon.className = ''; 
                desktopIcon.classList.add(...iconClasses);
            }
        }

        if (mobileThemeToggleBtn) {
            const mobileIcon = document.getElementById('mobile-theme-icon');
            if(mobileIcon) {
                mobileIcon.className = '';
                mobileIcon.classList.add(...iconClasses);
            }
        }
    }

    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
    if (mobileThemeToggleBtn) mobileThemeToggleBtn.addEventListener('click', toggleTheme);
    updateIcons(); 

    // --- 3. Dynamic Portfolio Engine ---
    const portfolioContainer = document.getElementById('portfolio-container');

    if (portfolioContainer) {
        // This line wipes the container clean to prevent Live Server duplication!
        portfolioContainer.innerHTML = '';

const projects = [
            {
                "id": 1,
                "title": "Enterprise Management Dashboard",
                "category": "Full-Stack",
                "tech": "HTML/CSS • JavaScript • Java Backend",
                "description": "A secure, full-stack administrative dashboard designed for handling complex data routing and user authentication without sacrificing speed.",
                "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
                "link": "#"
            },
            {
                "id": 2,
                "title": "B2B Retail Ecosystem",
                "category": "WordPress",
                "tech": "WooCommerce • Security Hardening",
                "description": "A highly optimized e-commerce platform built for scale. Features custom integrations and rigorous penetration testing protocols to ensure complete transaction security.",
                "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
                "link": "#"
            },
            {
                "id": 3,
                "title": "Secure Vault Mobile",
                "category": "Mobile App",
                "tech": "Java • Android SDK • Encryption",
                "description": "A fluid native Android application engineered with offline-first capabilities and robust data encryption, optimizing the user experience across all devices.",
                "image": "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop",
                "link": "#"
            }
        ];
        
        // Loop through the array and build the HTML cards
        projects.forEach(project => {
            const card = `
                <div class="deep-glass rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-500 flex flex-col h-full relative group shadow-xl">
                    
                    <div class="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center z-20">
                        <i class="fa-solid fa-arrow-up-right-from-square text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition"></i>
                    </div>

                    <div class="h-48 w-full border-b border-black/5 dark:border-white/5 overflow-hidden relative">
                        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    </div>
                    
                    <div class="p-8 flex flex-col flex-grow">
                        <span class="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3 block">${project.category}</span>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">${project.title}</h3>
                        <p class="text-[11px] text-gray-500 font-mono mb-4 pb-4 border-b border-black/5 dark:border-white/5">${project.tech}</p>
                        <p class="text-gray-600 dark:text-gray-400 font-light text-sm mb-8 flex-grow leading-relaxed">${project.description}</p>
                        
                        <a href="${project.link}" class="inline-flex items-center justify-center w-full px-4 py-3 border border-gray-300 dark:border-white/10 hover:border-blue-600 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-xl text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-all duration-300">
                            View Project <i class="fa-solid fa-arrow-right ml-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"></i>
                        </a>
                    </div>
                </div>
            `;
            portfolioContainer.innerHTML += card;
        });
    }

    // --- 4. Floating Scroll-to-Top Button Logic ---
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.remove('opacity-0', 'invisible');
                scrollToTopBtn.classList.add('opacity-100', 'visible');
            } else {
                scrollToTopBtn.classList.remove('opacity-100', 'visible');
                scrollToTopBtn.classList.add('opacity-0', 'invisible');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});