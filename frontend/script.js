// script.js

// Utility function to format price in Indian Rupees
const formatPrice = (price) => {
    return `₹${price.toLocaleString('en-IN')}`;
};

// Internationalization (i18n) System
let currentLanguage = 'en';
let translations = {};

const loadTranslations = async (lang) => {
    try {
        const response = await fetch(`translations/${lang}.json`);
        if (!response.ok) {
            throw new Error(`Failed to load translations for ${lang}`);
        }
        translations = await response.json();
        currentLanguage = lang;
        localStorage.setItem('selectedLanguage', lang);
        applyTranslations();
        updateLanguageDropdown();
    } catch (error) {
        console.error('Error loading translations:', error);
    }
};

const applyTranslations = () => {
    // Update navbar links
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations;
        for (const k of keys) {
            value = value?.[k];
        }
        if (value) {
            element.textContent = value;
        }
    });

    // Update specific elements that don't have data-i18n attributes
    if (translations.nav) {
        const navLinks = document.querySelectorAll('#navbarNav .nav-link');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === 'index.html') link.textContent = translations.nav.home;
            else if (href === 'categories.html') link.textContent = translations.nav.categories;
            else if (href === 'rental.html') link.textContent = translations.nav.rental;
            else if (href === 'services.html') link.textContent = translations.nav.services;
            else if (href === 'contact.html') link.textContent = translations.nav.contact;
            else if (href === 'login.html') link.textContent = translations.nav.login;
        });
    }

    // Update hero section
    if (translations.hero) {
        const heroTitle = document.querySelector('.carousel-caption p');
        if (heroTitle) heroTitle.textContent = translations.hero.subtitle;
        const bookNowBtn = document.querySelector('.carousel-caption a');
        if (bookNowBtn) bookNowBtn.textContent = translations.hero.bookNow;
    }

    // Update stats section
    if (translations.stats) {
        const statItems = document.querySelectorAll('#stats p');
        statItems.forEach((item, index) => {
            if (index === 0) item.textContent = translations.stats.carsSold;
            else if (index === 1) item.textContent = translations.stats.verifiedSellers;
            else if (index === 2) item.textContent = translations.stats.happyCustomers;
        });
    }

    // Update featured cars section
    if (translations.featuredCars) {
        const featuredTitle = document.querySelector('#featured-cars h2');
        if (featuredTitle) featuredTitle.textContent = translations.featuredCars.title;
        const viewDetailsBtns = document.querySelectorAll('.view-details-btn');
        viewDetailsBtns.forEach(btn => btn.textContent = translations.featuredCars.viewDetails);
    }

    // Update brands section
    if (translations.brands) {
        const brandsTitle = document.querySelector('#car-brands h2');
        if (brandsTitle) brandsTitle.textContent = translations.brands.title;
    }

    // Update about section
    if (translations.about) {
        const aboutTitle = document.querySelector('#about h2');
        if (aboutTitle) aboutTitle.textContent = translations.about.title;
        const aboutSubtitle = document.querySelector('#about .lead');
        if (aboutSubtitle) aboutSubtitle.textContent = translations.about.subtitle;

        // Update feature cards
        const featureCards = document.querySelectorAll('.feature-story-card');
        featureCards.forEach((card, index) => {
            const title = card.querySelector('h4');
            const desc = card.querySelector('p');
            if (index === 0) {
                if (title) title.textContent = translations.about.wideSelection;
                if (desc) desc.textContent = translations.about.wideSelectionDesc;
            } else if (index === 1) {
                if (title) title.textContent = translations.about.verifiedSellers;
                if (desc) desc.textContent = translations.about.verifiedSellersDesc;
            } else if (index === 2) {
                if (title) title.textContent = translations.about.expertServices;
                if (desc) desc.textContent = translations.about.expertServicesDesc;
            }
        });

        // Update journey timeline
        const journeyTitle = document.querySelector('#about h3');
        if (journeyTitle) journeyTitle.textContent = translations.about.journeyTitle;
        const timelineItems = document.querySelectorAll('.timeline-content h5');
        timelineItems.forEach((item, index) => {
            if (index === 0) item.textContent = translations.about.explore;
            else if (index === 1) item.textContent = translations.about.connect;
            else if (index === 2) item.textContent = translations.about.verify;
            else if (index === 3) item.textContent = translations.about.driveAway;
        });
        const timelineDescs = document.querySelectorAll('.timeline-content p');
        timelineDescs.forEach((desc, index) => {
            if (index === 0) desc.textContent = translations.about.exploreDesc;
            else if (index === 1) desc.textContent = translations.about.connectDesc;
            else if (index === 2) desc.textContent = translations.about.verifyDesc;
            else if (index === 3) desc.textContent = translations.about.driveAwayDesc;
        });
    }

    // Update testimonials section
    if (translations.testimonials) {
        const testimonialsTitle = document.querySelector('#testimonials h2');
        if (testimonialsTitle) testimonialsTitle.textContent = translations.testimonials.title;
    }

    // Update footer
    if (translations.footer) {
        const footerDesc = document.querySelector('footer p');
        if (footerDesc) footerDesc.textContent = translations.footer.description;
        const quickLinksTitle = document.querySelector('footer h5:nth-of-type(1)');
        if (quickLinksTitle) quickLinksTitle.textContent = translations.footer.quickLinks;
        const carBrandsTitle = document.querySelector('footer h5:nth-of-type(2)');
        if (carBrandsTitle) carBrandsTitle.textContent = translations.footer.carBrands;
        const contactInfoTitle = document.querySelector('footer h5:nth-of-type(3)');
        if (contactInfoTitle) contactInfoTitle.textContent = translations.footer.contactInfo;
        const address = document.querySelector('footer li:nth-child(1)');
        if (address) address.innerHTML = `<i class="fas fa-map-marker-alt me-2"></i> ${translations.footer.address}`;
        const phone = document.querySelector('footer li:nth-child(2)');
        if (phone) phone.innerHTML = `<i class="fas fa-phone me-2"></i> ${translations.footer.phone}`;
        const email = document.querySelector('footer li:nth-child(3)');
        if (email) email.innerHTML = `<i class="fas fa-envelope me-2"></i> ${translations.footer.email}`;
        const copyright = document.querySelector('footer .text-center p');
        if (copyright) copyright.textContent = translations.footer.copyright;
    }
};

const updateLanguageDropdown = () => {
    const dropdownItems = document.querySelectorAll('#languageDropdown + .dropdown-menu .dropdown-item');
    dropdownItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-lang') === currentLanguage) {
            item.classList.add('active');
        }
    });
};

const setupLanguageSelector = () => {
    const dropdownItems = document.querySelectorAll('#languageDropdown + .dropdown-menu .dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = item.getAttribute('data-lang');
            loadTranslations(lang);
        });
    });
};

// Detect browser language on first visit
const detectBrowserLanguage = () => {
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang) {
        loadTranslations(savedLang);
    } else {
        const browserLang = navigator.language.split('-')[0];
        const supportedLangs = ['en', 'hi', 'te', 'ta', 'kn', 'ml', 'mr', 'bn'];
        if (supportedLangs.includes(browserLang)) {
            loadTranslations(browserLang);
        } else {
            loadTranslations('en');
        }
    }
};

// Function to fetch data from API or JSON fallback
const fetchData = async () => {
    try {
        // Try to fetch from API endpoint (when server is running)
        const response = await fetch('/api/data');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        // Fallback to direct JSON file if API is not available
        try {
            const response = await fetch('data.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (fallbackError) {
            console.error("Could not fetch data:", fallbackError);
            return { cars: [], services: [], testimonials: [] };
        }
    }
};

// Check Login Status and Update Navbar
const checkLoginStatus = () => {
    const token = localStorage.getItem('gocarz_token');
    const user = JSON.parse(localStorage.getItem('gocarz_user') || 'null');
    const loginLink = document.querySelector('a[href="login.html"]');

    if (token && user && loginLink) {
        // User is logged in - replace login link with profile dropdown
        const profileDropdown = document.createElement('div');
        profileDropdown.className = 'dropdown';
        profileDropdown.innerHTML = `
            <a class="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" title="Profile">
                <i class="fas fa-user-circle"></i>
            </a>
            <ul class="dropdown-menu" aria-labelledby="profileDropdown">
                <li><h6 class="dropdown-header">${user.name || 'User'}</h6></li>
                <li><a class="dropdown-item" href="categories.html"><i class="fas fa-car me-2"></i>Buy and Sell</a></li>
                <li><a class="dropdown-item" href="rental.html"><i class="fas fa-calendar-alt me-2"></i>Add and Hire the Rental</a></li>
                <li><a class="dropdown-item" href="services.html"><i class="fas fa-tools me-2"></i>Add and Hire the Services</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#" id="logout"><i class="fas fa-sign-out-alt me-2"></i>Logout</a></li>
            </ul>
        `;

        loginLink.parentNode.replaceChild(profileDropdown, loginLink);

        // Add logout functionality
        document.getElementById('logout').addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('gocarz_token');
            localStorage.removeItem('gocarz_user');
            location.reload(); // Reload to update navbar
        });

        // Add my account functionality (placeholder)
        document.getElementById('my-account').addEventListener('click', (e) => {
            e.preventDefault();
            // TODO: Implement account page navigation
            alert('Account page coming soon!');
        });
    }
};

// Dark Mode Toggle Logic
const setupDarkMode = () => {
    const toggle = document.getElementById('dark-mode-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    if (toggle) {
        toggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            let theme = 'light';
            if (document.body.classList.contains('dark-mode')) {
                theme = 'dark';
            }
            localStorage.setItem('theme', theme);
            toggle.classList.toggle('fa-sun');
            toggle.classList.toggle('fa-moon');
        });
    }
};

// Navbar Scroll Effect
const setupNavbarScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

// Featured Cars Slider
const featuredCarsContainer = document.querySelector('.featured-cars-container');
const prevArrow = document.querySelector('.featured-cars-slider-wrapper .prev-arrow');
const nextArrow = document.querySelector('.featured-cars-slider-wrapper .next-arrow');

if (prevArrow && nextArrow && featuredCarsContainer) {
    prevArrow.addEventListener('click', () => {
        featuredCarsContainer.scrollLeft -= featuredCarsContainer.offsetWidth;
    });

    nextArrow.addEventListener('click', () => {
        featuredCarsContainer.scrollLeft += featuredCarsContainer.offsetWidth;
    });

    // Arrows are hidden by default and shown on hover via CSS
}
    }
};

// Back to Top Button Logic
const setupBackToTop = () => {
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
};

// Story Stats Animation
const setupStoryStatsAnimation = () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length === 0) return;

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target;
                const target = parseInt(statNumber.getAttribute('data-target'));
                
                if (!statNumber.dataset.animated) {
                    animateNumber(statNumber, target);
                    statNumber.dataset.animated = 'true';
                }
            }
        });
    }, observerOptions);

    statNumbers.forEach(stat => observer.observe(stat));
};

// Animate number counting
const animateNumber = (element, target) => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.textContent.includes('+') ? '+' : '');
            clearInterval(timer);
        } else {
            element.textContent = `${Math.floor(current).toLocaleString('en-IN')}+`;
        }
    }, duration / steps);
};

// New: Brand Scroller Arrows Logic
const setupBrandScroller = () => {
    const wrapper = document.querySelector('.brands-scroller-wrapper');
    if (!wrapper) return;

    const container = wrapper.querySelector('.brands-scroll-container');
    const prevBtn = wrapper.querySelector('.prev-arrow');
    const nextBtn = wrapper.querySelector('.next-arrow');
    const scrollAmount = 300; // Amount to scroll on each click

    const toggleArrows = () => {
        // Hide prev button if at the start
        prevBtn.style.display = container.scrollLeft <= 0 ? 'none' : 'flex';
        // Hide next button if at the end
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        nextBtn.style.display = container.scrollLeft >= maxScrollLeft - 1 ? 'none' : 'flex';
    };

    prevBtn.addEventListener('click', () => {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    container.addEventListener('scroll', toggleArrows);
    window.addEventListener('resize', toggleArrows); // Adjust on window resize
    toggleArrows(); // Initial check
};
// New: Featured Cars Scroller
const setupFeaturedCarsScroller = () => {
    const wrapper = document.querySelector('.featured-cars-slider-wrapper');
    if (!wrapper) return;

    const container = wrapper.querySelector('.featured-cars-container');
    const prevBtn = wrapper.querySelector('.prev-arrow');
    const nextBtn = wrapper.querySelector('.next-arrow');

    const scrollAmount = container.offsetWidth * 0.8; // Scroll by 80% of the container width

    prevBtn.addEventListener('click', () => {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
};
// Dynamic Content Rendering Functions (Placeholders)
const renderHomePage = (data) => {
    if (document.body.id !== 'home-page') return;

    // Inject CSS styles to fix testimonial alignment
    const style = document.createElement('style');
    style.textContent = `
        #testimonials .card .card-body {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        #testimonials .card-title {
            text-align: center;
        }
    `;
    document.head.appendChild(style);

    // 1. Stats Counters
    const carsSoldCount = document.getElementById('cars-sold-count');

    const verifiedSellersCount = document.getElementById('verified-sellers-count');
    const happyCustomersCount = document.getElementById('happy-customers-count');

    // Dummy stats for animation
    const animateCounter = (element, target) => {
        let count = 0;
        const increment = target / 100; // 100 steps
        const interval = setInterval(() => {
            count += increment;
            if (count >= target) {
                element.textContent = `${target.toLocaleString('en-IN')}+`;
                clearInterval(interval);
            } else {
                element.textContent = `${Math.floor(count).toLocaleString('en-IN')}+`;
            }
        }, 10);
    };

    // Use Intersection Observer to start animation when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(carsSoldCount, 500);
                animateCounter(verifiedSellersCount, 100);
                animateCounter(happyCustomersCount, 1000);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.getElementById('stats');
    if (statsSection) {
        observer.observe(statsSection);
    }

    // 2. Testimonials Carousel (3 per row)
    const testimonialsContainer = document.getElementById('testimonials-container');
    if (testimonialsContainer) {
        testimonialsContainer.innerHTML = ''; // Clear loading message

        const testimonials = data.testimonials;
        for (let i = 0; i < testimonials.length; i += 3) {
            const slide = document.createElement('div');
            slide.className = `carousel-item ${i === 0 ? 'active' : ''}`;
            const row = document.createElement('div');
            row.className = 'row justify-content-center';
            const group = testimonials.slice(i, i + 3);
            group.forEach(testimonial => {
                // Create avatar: image if photo_url exists, otherwise initials
                let avatarHtml;
                // Corrected initials logic: take first letter of each word
                const initials = testimonial.name.split(' ').map(n => n[0]).join('').toUpperCase();
                // Generate a consistent background color from the name
                let hash = 0;

                for (let i = 0; i < testimonial.name.length; i++) {
                    hash = testimonial.name.charCodeAt(i) + ((hash << 5) - hash);
                }
                let color = '#';
                for (let i = 0; i < 3; i++) {
                    const value = (hash >> (i * 8)) & 0xFF;
                    color += ('00' + value.toString(16)).substr(-2);
                }

                // Prioritize initials over any existing placeholder image
                if (testimonial.photo_url && !testimonial.photo_url.includes('placeholder')) {
                    // Use image if available and not a placeholder
                    avatarHtml = `<img src="${testimonial.photo_url}" class="rounded-circle mb-3 shadow-sm testimonial-avatar" alt="${testimonial.name}">`;
                } else {
                    // Use initials-based avatar
                    avatarHtml = `<div class="testimonial-avatar testimonial-initials mb-3 shadow-sm" style="background-color: ${color};">${initials}</div>`;
                }

                const col = document.createElement('div');
                col.className = 'col-md-4 mb-4';
                col.innerHTML = `
                    <div class="card h-100 shadow-sm text-center">
                        <div class="card-body p-4 d-flex flex-column">
                            ${avatarHtml}
                            <p class="card-text fst-italic flex-grow-1">"${testimonial.feedback}"</p>
                            <div class="mt-auto">
                                <div class="text-warning mb-2">
                                    ${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}
                                </div>
                                <h6 class="card-title text-primary">- ${testimonial.name}</h6>
                            </div>
                        </div>
                    </div>
                `;
                row.appendChild(col);
            });
            slide.appendChild(row);
            testimonialsContainer.appendChild(slide);
        }
    }
    // 3. Featured Cars (Top 4)
    const featuredCarsContainer = document.getElementById('featured-cars-container');
    if (featuredCarsContainer) {
        featuredCarsContainer.innerHTML = ''; // Clear loading message
        const featuredCars = data.cars.slice(0, 20); // Get first 20 cars for the scroller

        featuredCars.forEach(car => {
            const carCard = document.createElement('div');
            carCard.className = 'col animate__animated animate__fadeInUp';
            carCard.innerHTML = `
                <div class="card h-100 car-card">
                    <div class="car-image-zoom">
                        <img src="${car.image_urls[0]}" class="card-img-top" alt="${car.brand} ${car.model}">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-primary">${car.brand} ${car.model} (${car.year})</h5>
                        <p class="card-text fw-bold">${formatPrice(car.price_in_inr)}</p>
                        <ul class="list-unstyled small text-muted mb-3">
                            <li class="mb-1"><i class="fas fa-gas-pump me-2 text-primary"></i> ${car.fuel_type}</li>
                            <li class="mb-1"><i class="fas fa-car me-2 text-primary"></i> ${car.body_type}</li>
                            <li class="mb-1"><i class="fas fa-tachometer-alt me-2 text-primary"></i> ${car.km_driven.toLocaleString('en-IN')} KM</li>
                            <li class="mb-1"><i class="fas fa-map-marker-alt me-2 text-primary"></i> ${car.location}</li>
                        </ul>
                        <a href="car-details.html?id=${car.id}" class="btn btn-primary w-100 mt-auto view-details-btn">View Details</a>
                    </div>
                </div>
            `;
            featuredCarsContainer.appendChild(carCard);
        });
    }

    // 4. Browse by Brands
    const brandsContainer = document.getElementById('brands-container');
    if (brandsContainer) {
        brandsContainer.innerHTML = ''; // Clear loading message
        const brands = [...new Set(data.cars.map(car => car.brand))].sort();

        // Brand to logo mapping (using available images as logos)
        const brandLogos = {
            "Maruti": "/images/maruthi1.png",
            "Hyundai": "/images/hyundai.png",
            "Tata": "/images/tata1.png",
            "Mahindra": "/images/mahindra1.png",
            "Toyota": "/images/toyota1.png",
            "Honda": "/images/honda1.png"
        };

        brands.forEach(brand => {
            const logoSrc = brandLogos[brand] || '/images/car-placeholder.svg'; // Fallback for missing logos
            const brandCard = document.createElement('div');
            brandCard.className = 'col animate__animated animate__fadeInUp';
            brandCard.innerHTML = `
                <div class="card brand-card h-100 d-flex flex-column align-items-center justify-content-center p-3" onclick="window.location.href='categories.html?brand=${brand}'">
                    <img src="${logoSrc}" class="brand-logo mb-3" alt="${brand} Logo" style="max-width: 80px; max-height: 60px;">
                    <h6 class="card-title text-center mb-0">${brand}</h6>
                </div>
            `;
            brandsContainer.appendChild(brandCard);
        });
    }
};

// Categories page logic is now in categories.js and imported as a module
// import { renderCategoriesPage } from './categories.js'; // Not needed as categories.js will run on its own DOMContentLoaded
const renderCategoriesPage = (data) => {
    if (document.body.id !== 'categories-page') return;
    console.log('Categories Page logic delegated to categories.js module.');
    // The categories.js module will handle rendering on its own DOMContentLoaded
};

const renderCarDetailsPage = (data) => {
    if (document.body.id !== 'car-details-page') return;

    const urlParams = new URLSearchParams(window.location.search);
    const carId = parseInt(urlParams.get('id'));
    const car = data.cars.find(c => c.id === carId);

    if (!car) {
        document.getElementById('car-name').textContent = 'Car Not Found';
        document.getElementById('car-price').textContent = 'N/A';
        document.getElementById('car-image-gallery').innerHTML = '<div class="carousel-item active"><img src="https://via.placeholder.com/800x500?text=Car+Not+Found" class="d-block w-100" alt="Car Not Found"></div>';
        document.getElementById('car-features-container').innerHTML = '<div class="col-12"><p>Details unavailable.</p></div>';
        document.getElementById('recommended-cars-container').innerHTML = '<div class="col-12 text-center"><p>No recommendations available.</p></div>';
        return;
    }

    // New: View Toggler Logic
    const galleryView = document.getElementById('gallery-view');
    const view360 = document.getElementById('360-view');
    const showGalleryBtn = document.getElementById('show-gallery-btn');
    const show360Btn = document.getElementById('show-360-btn');

    showGalleryBtn.addEventListener('click', () => {
        galleryView.style.display = 'block';
        view360.style.display = 'none';
        showGalleryBtn.classList.add('active');
        show360Btn.classList.remove('active');
    });

    show360Btn.addEventListener('click', () => {
        galleryView.style.display = 'none';
        view360.style.display = 'block';
        show360Btn.classList.add('active');
        showGalleryBtn.classList.remove('active');
        // Initialize viewer only when first shown
        if (!viewerContainer.dataset.initialized) {
            initialize360Viewer(car);
        }
    });

    // 1. Car Details
    document.getElementById('car-name').textContent = `${car.brand} ${car.model} (${car.year})`;
    document.getElementById('car-price').textContent = formatPrice(car.price_in_inr);
    document.getElementById('modal-car-name').textContent = `${car.brand} ${car.model}`;

    // 2. Image Gallery
    const imageGallery = document.getElementById('car-image-gallery');
    imageGallery.innerHTML = '';
    car.image_urls.forEach((url, index) => {
        imageGallery.innerHTML += `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img src="${url}" class="d-block w-100" alt="${car.brand} ${car.model} Image ${index + 1}">
            </div>
        `;
    });

    // 3. Overview Specs
    document.getElementById('spec-brand').textContent = car.brand;
    document.getElementById('spec-model').textContent = car.model;
    document.getElementById('spec-year').textContent = car.year;
    document.getElementById('spec-km').textContent = car.km_driven.toLocaleString('en-IN') + ' KM';
    document.getElementById('spec-fuel').textContent = car.fuel_type;
    document.getElementById('spec-transmission').textContent = car.transmission;
    document.getElementById('spec-seats').textContent = car.seats;
    document.getElementById('spec-color').textContent = car.color;
    document.getElementById('spec-engine').textContent = car.engine_type;
    document.getElementById('spec-mileage').textContent = car.mileage;
    document.getElementById('spec-owner').textContent = car.owner_type;
    document.getElementById('spec-location').textContent = car.location;

    // 4. Features
    const featuresContainer = document.getElementById('car-features-container');
    featuresContainer.innerHTML = '';
    const col1 = document.createElement('div');
    col1.className = 'col-md-6';
    const ul1 = document.createElement('ul');
    ul1.className = 'list-unstyled';
    const col2 = document.createElement('div');
    col2.className = 'col-md-6';
    const ul2 = document.createElement('ul');
    ul2.className = 'list-unstyled';

    car.features.forEach((feature, index) => {
        const li = document.createElement('div');
        li.className = 'col-6 col-md-4 mb-2';
        li.innerHTML = `<i class="fas fa-check-circle text-success me-2"></i> ${feature}`;
        featuresContainer.appendChild(li);
    });
    
    // 5. Full Specs (Placeholder for now, as data.json is missing full specs)
    document.getElementById('spec-engine-full').textContent = car.engine_type;
    document.getElementById('spec-transmission-full').textContent = car.transmission;
    document.getElementById('spec-fuel-full').textContent = car.fuel_type;
    // Dummy data for missing specs
    document.getElementById('spec-power-full').textContent = 'N/A';
    document.getElementById('spec-torque-full').textContent = 'N/A';
    document.getElementById('spec-top-speed-full').textContent = 'N/A';
    document.getElementById('spec-0-100-full').textContent = 'N/A';
    document.getElementById('spec-drive-type-full').textContent = 'N/A';
    document.getElementById('spec-mileage-full').textContent = car.mileage;


    // 6. Recommended Cars (Same Brand or Similar Price)
    const recommendedCarsContainer = document.getElementById('recommended-cars-container');
    recommendedCarsContainer.innerHTML = '';
    
    const similarCars = data.cars
        .filter(c => c.id !== carId)
        .sort((a, b) => {
            // Prioritize same brand, then similar price
            const brandMatchA = a.brand === car.brand ? 0 : 1;
            const brandMatchB = b.brand === car.brand ? 0 : 1;
            if (brandMatchA !== brandMatchB) return brandMatchA - brandMatchB;

            const priceDiffA = Math.abs(a.price_in_inr - car.price_in_inr);
            const priceDiffB = Math.abs(b.price_in_inr - car.price_in_inr);
            return priceDiffA - priceDiffB;
        })
        .slice(0, 4);

    similarCars.forEach(rcar => {
        const cardHtml = `
            <div class="col animate__animated animate__fadeInUp">
                <div class="card h-100 car-card">
                    <div class="car-image-zoom">
                        <img src="${rcar.image_urls[0]}" class="card-img-top" alt="${rcar.brand} ${rcar.model}">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-primary">${rcar.brand} ${rcar.model}</h5>
                        <p class="card-text fw-bold">${formatPrice(rcar.price_in_inr)}</p>
                        <ul class="list-unstyled small text-muted">
                            <li><i class="fas fa-gas-pump me-2"></i> ${rcar.fuel_type}</li>
                            <li><i class="fas fa-cogs me-2"></i> ${rcar.transmission}</li>
                        </ul>
                        <a href="car-details.html?id=${rcar.id}" class="btn btn-outline-primary w-100 view-details-btn">View Details</a>
                    </div>
                </div>
            </div>
        `;
        recommendedCarsContainer.innerHTML += cardHtml;
    });

    // Enquire Form Submission (inside modal)
    const enquireForm = document.getElementById('enquire-form');
    const enquireModal = bootstrap.Modal.getInstance(document.getElementById('enquireModal'));
    const thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));

    if (enquireForm) {
        enquireForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log(`Enquiry submitted for Car ID: ${carId}`);
            enquireModal.hide();
            thankYouModal.show();
            enquireForm.reset();
        });
    }
};

// New: Function to initialize 360 viewer on demand
const initialize360Viewer = (car) => {
    const viewerContainer = document.getElementById('car-360-viewer-container');
    if (viewerContainer && car) {
        const brandSlug = car.brand.toLowerCase().replace(/\s/g, '');
        const modelSlug = car.model.toLowerCase().replace(/\s/g, '');
        const folder = `/assets/cars/${brandSlug}/${modelSlug}/`;
        const fallbackImage = car.image_urls[0]; // Use the first image as fallback

        // The Car360Viewer class handles all the logic
        new Car360Viewer(viewerContainer, folder, 36, fallbackImage);
        viewerContainer.dataset.initialized = 'true'; // Mark as initialized
    }
}

const renderServicesPage = (data) => {
    if (document.body.id !== 'services-page') return;

    const servicesContainer = document.getElementById('services-container');
    servicesContainer.innerHTML = ''; // Clear loading message

    // Combine main services with additional services
    const allServices = data.services.concat([
        {
            id: 13,
            title: "Tyres & Wheel Care",
            price_in_inr: 3000,
            icon_class: "fas fa-circle-dot",
            short_description: "Professional tyre services and wheel alignment",
            file_name: "#"
        },
        {
            id: 14,
            title: "Suspension & Fitments",
            price_in_inr: 5000,
            icon_class: "fas fa-wrench",
            short_description: "Complete suspension system service and parts fitting",
            file_name: "#"
        },
        {
            id: 15,
            title: "Car Services (General)",
            price_in_inr: 4000,
            icon_class: "fas fa-car",
            short_description: "Comprehensive general car maintenance and servicing",
            file_name: "#"
        },
        {
            id: 16,
            title: "Car Spa & Cleaning",
            price_in_inr: 2500,
            icon_class: "fas fa-shower",
            short_description: "Premium car washing and detailing services",
            file_name: "#"
        }
    ]);

    // Make all services available globally for related services
    window.allServices = allServices;

    const createServiceCardHtml = (service, index, isRelated = false) => {
        // Determine if the 'New' badge should be shown (e.g., based on a property or index)
        // Using a simple check for demonstration (e.g., first two services are 'New')
        const isNew = index < 2 && !isRelated;
        const newBadge = isNew ? '<span class="new-badge">New</span>' : '';

        // Use a Font Awesome icon as a placeholder for the service image/icon
        const serviceIconClass = service.icon_class || 'fas fa-car-wrench';

        // Use proper link for navigation
        const serviceLink = service.file_name && service.file_name !== '#' ? service.file_name : `service-details.html?id=${service.id}`;

        // Save service data to localStorage on click
        const saveServiceData = () => {
            const serviceData = {
                id: service.id,
                title: service.title,
                short_description: service.short_description,
                price_in_inr: service.price_in_inr,
                image_url: service.image_url || 'images/default-service.jpg',
                overview: service.overview || service.short_description,
                includes: service.includes || [],
                icon_class: service.icon_class
            };
            localStorage.setItem('selectedService', JSON.stringify(serviceData));
        };

        return `
            <div class="col animate__animated animate__fadeInUp" style="animation-delay: ${index * 0.1}s;">
                <a href="${serviceLink}" class="text-decoration-none" onclick="(${saveServiceData.toString()})()">
                    <div class="card service-card-new" data-service-id="${service.id}">
                        ${newBadge}
                        <i class="${serviceIconClass} service-icon"></i>
                        <h5 class="service-title">${service.title}</h5>
                    </div>
                </a>
            </div>
        `;
    };

    allServices.forEach((service, index) => {
        servicesContainer.innerHTML += createServiceCardHtml(service, index);
    });
};

const renderServiceDetailsPage = (data) => {
    if (document.body.id !== 'service-details-page') return;

    // Check for service data in localStorage first
    let service = null;
    const storedService = localStorage.getItem('selectedService');
    if (storedService) {
        try {
            service = JSON.parse(storedService);
        } catch (e) {
            console.error('Error parsing stored service data:', e);
        }
    }

    // If no stored service, determine from URL or filename
    if (!service) {
        const currentFileName = window.location.pathname.split('/').pop();
        const urlParams = new URLSearchParams(window.location.search);
        const serviceId = parseInt(urlParams.get('id')) || 1;

        if (currentFileName === 'service-details.html') {
            service = data.services.find(s => s.id === serviceId);
        } else {
            service = data.services.find(s => s.file_name === currentFileName);
        }
    }

    if (!service) {
        document.getElementById('service-title').textContent = 'Service Not Found';
        document.getElementById('service-description').textContent = 'Details unavailable.';
        document.getElementById('service-price').textContent = 'N/A';
        document.getElementById('service-main-image').src = 'https://via.placeholder.com/800x500?text=Service+Not+Found';
        document.getElementById('process-steps-list').innerHTML = '<li class="list-group-item">No process steps available.</li>';
        document.getElementById('customer-reviews-container').innerHTML = '<p>No reviews available.</p>';
        document.getElementById('related-services-container').innerHTML = '<div class="text-center"><p>No related services available.</p></div>';
        return;
    }

    // 1. Service Details
    document.getElementById('service-title').textContent = service.title;
    document.getElementById('service-description').textContent = service.full_description || service.short_description || 'Description not available.';
    document.getElementById('service-price').textContent = formatPrice(service.price_in_inr);

    // Handle image with fallback and smooth transition
    const serviceImage = document.getElementById('service-main-image');
    const fallbackImage = 'images/default-service.jpg';

    const loadImage = (src) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(src);
            img.onerror = () => reject();
            img.src = src;
        });
    };

    // Set initial opacity to 0 for smooth transition
    serviceImage.style.opacity = '0';
    serviceImage.style.transition = 'opacity 0.3s ease-in-out';

    // Try to load the service image, fallback to default if fails
    loadImage(service.image_url || fallbackImage)
        .then(src => {
            serviceImage.src = src;
            // Fade in after setting src
            requestAnimationFrame(() => {
                serviceImage.style.opacity = '1';
            });
        })
        .catch(() => {
            serviceImage.src = fallbackImage;
            // Fade in after setting src
            requestAnimationFrame(() => {
                serviceImage.style.opacity = '1';
            });
        });

    document.getElementById('modal-service-name').textContent = service.title;

    // Add Emergency Service button below the Book This Service button
    const bookButton = document.querySelector('.book-service-btn');
    if (bookButton) {
        const emergencyButton = document.createElement('button');
        emergencyButton.className = 'btn btn-danger btn-lg w-100 mt-3';
        emergencyButton.setAttribute('data-bs-toggle', 'modal');
        emergencyButton.setAttribute('data-bs-target', '#emergencyModal');
        emergencyButton.innerHTML = '<i class="fas fa-exclamation-triangle me-2"></i> Emergency Service';
        bookButton.insertAdjacentElement('afterend', emergencyButton);
    }

    // Add Emergency Service Modal to the body
    const emergencyModalHtml = `
        <div class="modal fade" id="emergencyModal" tabindex="-1" aria-labelledby="emergencyModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-danger text-white">
                        <h5 class="modal-title" id="emergencyModalLabel"><i class="fas fa-exclamation-triangle me-2"></i> Emergency Service</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p class="mb-3">For urgent assistance, our emergency service is available 24/7. We provide immediate help for breakdowns, towing, and roadside support.</p>
                        <div class="d-flex align-items-center justify-content-center mb-3">
                            <i class="fas fa-phone text-success me-3" style="font-size: 2rem;"></i>
                            <div>
                                <strong class="fs-5">Emergency Hotline:</strong><br>
                                <span class="text-primary fs-4">+91 98765 43210</span>
                            </div>
                        </div>
                        <h6 class="text-primary">Services Offered:</h6>
                        <ul class="list-unstyled">
                            <li><i class="fas fa-check-circle text-success me-2"></i> 24/7 Breakdown Assistance</li>
                            <li><i class="fas fa-check-circle text-success me-2"></i> Towing Services</li>
                            <li><i class="fas fa-check-circle text-success me-2"></i> Roadside Support</li>
                            <li><i class="fas fa-check-circle text-success me-2"></i> Battery Jump Start</li>
                            <li><i class="fas fa-check-circle text-success me-2"></i> Flat Tire Assistance</li>
                        </ul>
                        <p class="text-muted small">Call now for immediate help. Our team will respond quickly to get you back on the road.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <a href="tel:+919876543210" class="btn btn-danger"><i class="fas fa-phone me-2"></i> Call Now</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', emergencyModalHtml);

    // 2. Process Steps
    const processStepsList = document.getElementById('process-steps-list');
    processStepsList.innerHTML = '';
    service.process_steps.forEach(step => {
        processStepsList.innerHTML += `<li class="list-group-item"><i class="fas fa-check-circle text-primary me-2"></i> ${step}</li>`;
    });

    // 3. Customer Reviews
    const reviewsContainer = document.getElementById('customer-reviews-container');
    reviewsContainer.innerHTML = '';
    if (service.customer_reviews.length === 0) {
        reviewsContainer.innerHTML = '<p>Be the first to review this service!</p>';
    } else {
        service.customer_reviews.forEach(review => {
            // Avatar logic for service reviews
            let avatarHtml;
            // Corrected initials logic: take first letter of each word
            const initials = review.name.split(' ').map(n => n).join('').toUpperCase();
            // Generate a consistent background color from the name
            let hash = 0;
            for (let i = 0; i < review.name.length; i++) {
                hash = review.name.charCodeAt(i) + ((hash << 5) - hash);
            }
            let color = '#';
            for (let i = 0; i < 3; i++) {
                const value = (hash >> (i * 8)) & 0xFF;
                color += ('00' + value.toString(16)).substr(-2);
            }

            // Prioritize initials over any existing placeholder image
            if (review.photo_url && !review.photo_url.includes('placeholder')) {
                // Use image if available and not a placeholder
                avatarHtml = `<img src="${review.photo_url}" class="rounded-circle me-3 testimonial-avatar" alt="${review.name}">`;
            } else {
                // Use initials-based avatar
                avatarHtml = `<div class="testimonial-avatar testimonial-initials me-3" style="background-color: ${color};">${initials}</div>`;
            }

            reviewsContainer.innerHTML += `
                <div class="card mb-3 shadow-sm">
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-2">
                            ${avatarHtml}
                            <div>
                                <h6 class="card-title text-primary mb-0">${review.name}</h6>
                                <div class="text-warning small">
                                    ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
                                </div>
                            </div>
                        </div>
                        <p class="card-text fst-italic">"${review.feedback}"</p>
                    </div>
                </div>
            `;
        });
    }

    // 4. Related Services Carousel
    const relatedServicesContainer = document.getElementById('related-services-container');
    relatedServicesContainer.innerHTML = '';

    // Combine services from data.json and additionalServices from services-new.js
    const allServices = data.services.concat(window.additionalServices || []);

    const relatedServices = allServices
        .filter(s => s.id !== service.id)
        .slice(0, 15); // Show up to 15 related services

    if (relatedServices.length === 0) {
        relatedServicesContainer.innerHTML = '<div class="text-center"><p>No related services available.</p></div>';
    } else {
        relatedServices.forEach(rservice => {
            const serviceIconClass = rservice.icon_class || 'fas fa-car-wrench';
            const cardHtml = `
                <a href="${rservice.file_name || `service-details.html?id=${rservice.id}`}" class="related-service-card">
                    <div class="card-body">
                        <i class="${serviceIconClass} service-icon"></i>
                        <h5 class="card-title">${rservice.title}</h5>
                        <p class="card-text">${rservice.short_description}</p>
                    </div>
                </a>
            `;
            relatedServicesContainer.innerHTML += cardHtml;
        });
    }

    // Add carousel navigation
    const prevArrow = document.getElementById('related-prev-arrow');
    const nextArrow = document.getElementById('related-next-arrow');

    if (prevArrow && nextArrow) {
        const updateArrows = () => {
            const scrollLeft = relatedServicesContainer.scrollLeft;
            const maxScrollLeft = relatedServicesContainer.scrollWidth - relatedServicesContainer.clientWidth;
            prevArrow.disabled = scrollLeft <= 0;
            nextArrow.disabled = scrollLeft >= maxScrollLeft - 1;
        };

        prevArrow.addEventListener('click', () => {
            relatedServicesContainer.scrollBy({ left: -1200, behavior: 'smooth' }); // Scroll by 4 cards width
        });

        nextArrow.addEventListener('click', () => {
            relatedServicesContainer.scrollBy({ left: 1200, behavior: 'smooth' }); // Scroll by 4 cards width
        });

        relatedServicesContainer.addEventListener('scroll', updateArrows);
        updateArrows(); // Initial check
    }

    // Book Service Form Submission (inside modal)
    const bookServiceForm = document.getElementById('book-service-form');
    const bookServiceModal = bootstrap.Modal.getInstance(document.getElementById('bookServiceModal'));
    const thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));

    if (bookServiceForm) {
        bookServiceForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log(`Service booking submitted for Service ID: ${serviceId}`);
            bookServiceModal.hide();
            thankYouModal.show();
            bookServiceForm.reset();
        });
    }
};

// Rental Page Rendering Function
const renderRentalPage = (data) => {
    if (document.body.id !== 'rental-page') return;

    const rentalCarsContainer = document.getElementById('rental-cars-container');
    if (!rentalCarsContainer) return;

    rentalCarsContainer.innerHTML = ''; // Clear existing content

    // Get filter values
    const locationFilter = document.getElementById('location-filter')?.value || '';
    const carTypeFilter = document.getElementById('car-type-filter')?.value || '';
    const pickupDate = document.getElementById('pickup-date')?.value || '';
    const dropoffDate = document.getElementById('dropoff-date')?.value || '';

    // Filter rentals based on criteria
    let filteredRentals = data.rentals || [];

    if (locationFilter) {
        filteredRentals = filteredRentals.filter(rental => rental.locations.includes(locationFilter));
    }

    if (carTypeFilter) {
        filteredRentals = filteredRentals.filter(rental => rental.body_type === carTypeFilter);
    }

    // If no rentals match, show message
    if (filteredRentals.length === 0) {
        rentalCarsContainer.innerHTML = '<div class="col-12 text-center"><p>No rental cars available for the selected criteria.</p></div>';
        return;
    }

    // Render rental car cards
    filteredRentals.forEach(rental => {
        const rentalCard = document.createElement('div');
        rentalCard.className = 'col animate__animated animate__fadeInUp';
        rentalCard.innerHTML = `
            <div class="card h-100 car-card">
                <div class="car-image-zoom">
                    <img src="${rental.image_urls[0]}" class="card-img-top" alt="${rental.brand} ${rental.model}">
                </div>
                <div class="card-body">
                    <h5 class="card-title text-primary">${rental.brand} ${rental.model} (${rental.year})</h5>
                    <p class="card-text fw-bold">₹${rental.daily_rate}/day</p>
                    <p class="card-text small text-muted">₹${rental.weekly_rate}/week | ₹${rental.monthly_rate}/month</p>
                    <ul class="list-unstyled small text-muted">
                        <li><i class="fas fa-gas-pump me-2"></i> ${rental.fuel_type}</li>
                        <li><i class="fas fa-cogs me-2"></i> ${rental.transmission}</li>
                        <li><i class="fas fa-users me-2"></i> ${rental.seats} Seats</li>
                        <li><i class="fas fa-map-marker-alt me-2"></i> ${rental.locations.join(', ')}</li>
                    </ul>
                    <button class="btn btn-outline-primary w-100 book-now-btn" data-name="${rental.brand} ${rental.model}" data-price="${rental.daily_rate}">Book Now</button>
                </div>
            </div>
        `;
        rentalCarsContainer.appendChild(rentalCard);
    });
};

// Rental Car Details Modal Functionality
const setupRentalCarDetails = () => {
    if (document.body.id !== 'rental-page') return;

    // Event listener for rental car image clicks
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('rental-car-image')) {
            const carId = parseInt(e.target.getAttribute('data-car-id'));
            const data = { rentals: [] }; // Placeholder, will be fetched in DOMContentLoaded
            fetchData().then(fetchedData => {
                const car = fetchedData.rentals.find(r => r.id === carId);
                if (car) {
                    populateCarDetailsModal(car);
                    const modal = new bootstrap.Modal(document.getElementById('carDetailsModal'));
                    modal.show();
                }
            });
        }
    });
};

// Function to populate car details modal
const populateCarDetailsModal = (car) => {
    // Image gallery
    const imageGallery = document.getElementById('car-image-gallery');
    imageGallery.innerHTML = '';
    car.image_urls.forEach((url, index) => {
        const activeClass = index === 0 ? 'active' : '';
        imageGallery.innerHTML += `
            <div class="carousel-item ${activeClass}">
                <img src="${url}" class="d-block w-100" alt="${car.brand} ${car.model}">
            </div>
        `;
    });

    // Car details
    document.getElementById('car-detail-name').textContent = `${car.brand} ${car.model} (${car.year})`;
    document.getElementById('car-detail-type').textContent = car.body_type;
    document.getElementById('car-detail-seats').textContent = `${car.seats} Seater`;
    document.getElementById('car-detail-description').textContent = `Experience the ${car.brand} ${car.model} with ${car.fuel_type} engine and ${car.transmission} transmission. Perfect for your rental needs.`;

    // Specifications
    document.getElementById('car-fuel-type').textContent = car.fuel_type;
    document.getElementById('car-transmission').textContent = car.transmission;
    document.getElementById('car-engine').textContent = car.mileage;
    document.getElementById('car-mileage').textContent = car.mileage;
    document.getElementById('car-airbags').textContent = car.features.includes('Airbags') ? 'Yes' : 'No';
    document.getElementById('car-abs').textContent = car.features.includes('ABS') ? 'Yes' : 'No';

    // Pricing
    document.getElementById('car-daily-price').textContent = `₹${car.daily_rate}`;
    document.getElementById('car-weekly-price').textContent = `₹${car.weekly_rate}`;
    document.getElementById('car-monthly-price').textContent = `₹${car.monthly_rate}`;

    // Locations
    const locationsContainer = document.getElementById('car-locations');
    locationsContainer.innerHTML = '';
    car.locations.forEach(location => {
        locationsContainer.innerHTML += `<span class="badge bg-secondary me-1">${location}</span>`;
    });

    // Book from details button
    document.getElementById('book-from-details').addEventListener('click', () => {
        // Trigger the same booking flow as book-now-btn
        const bookingData = {
            car: { name: `${car.brand} ${car.model}`, price: car.daily_rate, image: car.image_urls[0] }
        };
        // Populate booking details modal
        document.getElementById('booking-car-image').src = car.image_urls[0];
        document.getElementById('booking-car-name').textContent = `${car.brand} ${car.model}`;
        document.getElementById('booking-car-price').textContent = `₹${car.daily_rate}/day`;

        // Hide details modal and show booking modal
        bootstrap.Modal.getInstance(document.getElementById('carDetailsModal')).hide();
        const modal = new bootstrap.Modal(document.getElementById('bookingDetailsModal'));
        modal.show();
    });
};

// Rental Booking Functionality
const setupRentalBooking = () => {
    if (document.body.id !== 'rental-page') return;

    // Global variables to store booking data
    let bookingData = {
        car: {},
        pickupLocation: '',
        pickupDatetime: '',
        returnDatetime: '',
        kmLimit: '',
        fuelOption: '',
        addons: [],
        userName: '',
        userPhone: '',
        userEmail: '',
        drivingLicense: '',
        paymentOption: '',
        promoCode: '',
        totalPrice: 0,
        bookingId: '',
        days: 0,
        basePrice: 0,
        addonsTotal: 0,
        grandTotal: 0,
        tax: 0,
        discount: 0,
        finalTotal: 0
    };

    // Event listeners for book now buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('book-now-btn')) {
            const carName = e.target.getAttribute('data-name');
            const carPrice = parseInt(e.target.getAttribute('data-price'));
            const carImage = e.target.closest('.card').querySelector('img').src;

            bookingData.car = { name: carName, price: carPrice, image: carImage };

            // Show privacy policy modal first
            const privacyModal = new bootstrap.Modal(document.getElementById('privacyPolicyModal'));
            privacyModal.show();
        }
    });

    // Handle privacy policy agreement
    document.getElementById('agree-privacy').addEventListener('click', () => {
        // Hide privacy modal and show booking details modal
        bootstrap.Modal.getInstance(document.getElementById('privacyPolicyModal')).hide();
        const bookingDetailsModal = new bootstrap.Modal(document.getElementById('bookingDetailsModal'));
        bookingDetailsModal.show();
    });

    // Continue to add-ons
    document.getElementById('continue-to-addons').addEventListener('click', () => {
        // Validate required fields
        const pickupLocation = document.getElementById('pickup-location').value;
        const pickupDatetime = document.getElementById('pickup-datetime').value;
        const returnDatetime = document.getElementById('return-datetime').value;

        if (!pickupLocation || !pickupDatetime || !returnDatetime) {
            alert('Please fill in all required fields.');
            return;
        }

        // Collect data from booking details modal
        bookingData.pickupLocation = pickupLocation;
        bookingData.pickupDatetime = pickupDatetime;
        bookingData.returnDatetime = returnDatetime;
        bookingData.kmLimit = document.getElementById('km-limit').value;
        bookingData.fuelOption = document.getElementById('fuel-option').value;

        // Calculate number of days
        const pickup = new Date(bookingData.pickupDatetime);
        const returnD = new Date(bookingData.returnDatetime);
        const days = Math.ceil((returnD - pickup) / (1000 * 60 * 60 * 24));
        bookingData.days = days;

        // Base price
        const basePrice = bookingData.car.price * days;
        bookingData.basePrice = basePrice;

        // Update price in addons modal
        document.getElementById('base-price-display').textContent = `₹${basePrice}`;
        document.getElementById('grand-total').textContent = `₹${basePrice}`;

        // Hide current modal and show addons modal
        bootstrap.Modal.getInstance(document.getElementById('bookingDetailsModal')).hide();
        const addonsModal = new bootstrap.Modal(document.getElementById('addonsModal'));
        addonsModal.show();
    });

    // Handle add-ons selection
    document.querySelectorAll('#addonsModal input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            updateAddonsTotal();
        });
    });

    const updateAddonsTotal = () => {
        let addonsTotal = 0;
        bookingData.addons = [];
        document.querySelectorAll('#addonsModal input[type="checkbox"]:checked').forEach(checkbox => {
            if (checkbox.id !== 'fastag') { // fastag is free
                const price = parseInt(checkbox.getAttribute('data-price'));
                addonsTotal += price;
                bookingData.addons.push({
                    name: checkbox.nextElementSibling.querySelector('strong').textContent,
                    price: price
                });
            }
        });
        bookingData.addonsTotal = addonsTotal;
        const grandTotal = bookingData.basePrice + addonsTotal;
        bookingData.grandTotal = grandTotal;
        document.getElementById('addons-total').textContent = `₹${addonsTotal}`;
        document.getElementById('grand-total').textContent = `₹${grandTotal}`;
    };

    // Continue to user info
    document.getElementById('continue-to-payment').addEventListener('click', () => {
        bootstrap.Modal.getInstance(document.getElementById('addonsModal')).hide();
        const userInfoModal = new bootstrap.Modal(document.getElementById('userInfoModal'));
        userInfoModal.show();
    });

    // Back to details
    document.getElementById('back-to-details').addEventListener('click', () => {
        bootstrap.Modal.getInstance(document.getElementById('addonsModal')).hide();
        const bookingDetailsModal = new bootstrap.Modal(document.getElementById('bookingDetailsModal'));
        bookingDetailsModal.show();
    });

    // Continue to payment final
    document.getElementById('continue-to-payment-final').addEventListener('click', () => {
        // Validate user info
        const userName = document.getElementById('user-name').value;
        const userPhone = document.getElementById('user-phone').value;
        const userEmail = document.getElementById('user-email').value;

        if (!userName || !userPhone || !userEmail) {
            alert('Please fill in all required fields.');
            return;
        }

        // Collect user info
        bookingData.userName = userName;
        bookingData.userPhone = userPhone;
        bookingData.userEmail = userEmail;
        bookingData.drivingLicense = document.getElementById('driving-license').files[0];

        bootstrap.Modal.getInstance(document.getElementById('userInfoModal')).hide();

        // Populate payment modal
        document.getElementById('final-base-price').textContent = `₹${bookingData.basePrice}`;
        document.getElementById('final-addons-price').textContent = `₹${bookingData.addonsTotal}`;

        const tax = Math.round(bookingData.grandTotal * 0.18); // 18% GST
        bookingData.tax = tax;
        document.getElementById('tax-fees').textContent = `₹${tax}`;

        document.getElementById('discount-amount').textContent = '₹0';

        const finalTotal = bookingData.grandTotal + tax;
        bookingData.finalTotal = finalTotal;
        document.getElementById('final-total').textContent = `₹${finalTotal}`;

        const paymentModal = new bootstrap.Modal(document.getElementById('paymentModal'));
        paymentModal.show();
    });

    // Back to addons
    document.getElementById('back-to-addons').addEventListener('click', () => {
        bootstrap.Modal.getInstance(document.getElementById('userInfoModal')).hide();
        const addonsModal = new bootstrap.Modal(document.getElementById('addonsModal'));
        addonsModal.show();
    });

    // Apply promo
    document.getElementById('apply-promo').addEventListener('click', () => {
        const promoCode = document.getElementById('promo-code').value.toUpperCase();
        let discount = 0;
        if (promoCode === 'GOCARZ10') {
            discount = Math.round(bookingData.finalTotal * 0.1);
        } else if (promoCode && promoCode !== 'GOCARZ10') {
            alert('Invalid promo code.');
            return;
        }
        bookingData.discount = discount;
        document.getElementById('discount-amount').textContent = `₹${discount}`;
        const newTotal = bookingData.finalTotal - discount;
        bookingData.finalTotal = newTotal;
        document.getElementById('final-total').textContent = `₹${newTotal}`;
    });

    // Confirm booking
    document.getElementById('confirm-booking').addEventListener('click', () => {
        const paymentOption = document.querySelector('input[name="payment-option"]:checked');
        if (!paymentOption) {
            alert('Please select a payment option.');
            return;
        }
        bookingData.paymentOption = paymentOption.value;

        // Generate booking ID
        bookingData.bookingId = 'GCZ' + Date.now();

        // Populate confirmation modal
        document.getElementById('booking-id').textContent = bookingData.bookingId;
        document.getElementById('confirm-car-name').textContent = bookingData.car.name;
        document.getElementById('confirm-pickup').textContent = `${bookingData.pickupLocation} on ${new Date(bookingData.pickupDatetime).toLocaleString()}`;
        document.getElementById('confirm-return').textContent = new Date(bookingData.returnDatetime).toLocaleString();
        document.getElementById('confirm-customer-name').textContent = bookingData.userName;
        document.getElementById('confirm-customer-phone').textContent = bookingData.userPhone;
        document.getElementById('confirm-customer-email').textContent = bookingData.userEmail;
        document.getElementById('confirm-addons-list').innerHTML = bookingData.addons.length > 0 ? bookingData.addons.map(addon => `<li>${addon.name} - ₹${addon.price}</li>`).join('') : '<li>No add-ons selected</li>';
        document.getElementById('confirm-total-paid').textContent = `₹${bookingData.finalTotal}`;
        document.getElementById('confirm-payment-method').textContent = bookingData.paymentOption === 'advance' ? 'Advance Payment (₹500)' : bookingData.paymentOption === 'full' ? 'Full Payment' : 'Cash on Delivery';

        bootstrap.Modal.getInstance(document.getElementById('paymentModal')).hide();
        const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
        confirmationModal.show();
    });

    // Back to user info
    document.getElementById('back-to-user-info').addEventListener('click', () => {
        bootstrap.Modal.getInstance(document.getElementById('paymentModal')).hide();
        const userInfoModal = new bootstrap.Modal(document.getElementById('userInfoModal'));
        userInfoModal.show();
    });

    // Download receipt (placeholder)
    document.getElementById('download-receipt').addEventListener('click', () => {
        alert('Receipt download feature coming soon!');
    });

    // Download confirmation (placeholder)
    document.getElementById('download-confirmation').addEventListener('click', () => {
        alert('Confirmation download feature coming soon!');
    });
};

// Main DOMContentLoaded Handler
document.addEventListener('DOMContentLoaded', async () => {
    // Preloader logic
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.classList.add('hidden');
        });
    }

    // Load Data
    const data = await fetchData();

    // Setup Utilities
    setupDarkMode();
    setupNavbarScroll();
    setupBackToTop();
    setupStoryStatsAnimation();
    setupBrandScroller(); // Initialize the new brand scroller
    setupFeaturedCarsScroller(); // Initialize the featured cars scroller
    setupLanguageSelector();
    detectBrowserLanguage();
    checkLoginStatus();

    // Smooth scrolling for internal links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact Form Submission Handler (using Bootstrap Modal)
    const contactForm = document.getElementById('contact-form');
    // Check if the modal element exists before creating a new instance
    const thankYouModalElement = document.getElementById('thankYouModal');
    const thankYouModal = thankYouModalElement ? new bootstrap.Modal(thankYouModalElement) : null;

    if (contactForm && thankYouModal) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission success
            console.log('Form submitted successfully!');
            
            // Show thank you modal
            thankYouModal.show();

            // Reset form
            contactForm.reset();
        });
    }

    // Categories Page: Price Range Display Update (Removed - now in categories.js)
    // Categories Page: KM Driven Range Display Update (Removed - now in categories.js)
    // Categories Page: Filter Submission (Removed - now in categories.js)

    // Render Page Content
    renderHomePage(data);
    // renderCategoriesPage(data); // Categories page logic is now self-contained in categories.js module
    renderCarDetailsPage(data);
    renderServicesPage(data);
    renderServiceDetailsPage(data);
    renderRentalPage(data);
    setupRentalBooking();
    setupRentalCarDetails();

    // Rental Page Search Functionality
    const searchRentalsBtn = document.getElementById('search-rentals');
    if (searchRentalsBtn) {
        searchRentalsBtn.addEventListener('click', () => {
            renderRentalPage(data);
        });
    }
});
