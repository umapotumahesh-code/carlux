// script.js

// Utility function to format price in Indian Rupees
const formatPrice = (price) => {
    return `₹${price.toLocaleString('en-IN')}`;
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
            element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
        }
    }, duration / steps);
};

// Dynamic Content Rendering Functions (Placeholders)
const renderHomePage = (data) => {
    if (document.body.id !== 'home-page') return;

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

    // 2. Testimonials Carousel
    const testimonialsContainer = document.getElementById('testimonials-container');
    if (testimonialsContainer) {
        testimonialsContainer.innerHTML = ''; // Clear loading message

        data.testimonials.forEach((testimonial, index) => {
            const testimonialItem = document.createElement('div');
            testimonialItem.className = `carousel-item text-center ${index === 0 ? 'active' : ''}`;
            testimonialItem.innerHTML = `
                <div class="card h-100 shadow-sm mx-auto" style="max-width: 700px;">
                    <div class="card-body p-5">
                        <img src="${testimonial.photo_url}" class="rounded-circle mb-3 shadow-sm" alt="${testimonial.name}" style="width: 80px; height: 80px; object-fit: cover;">
                        <p class="card-text fst-italic lead">"${testimonial.feedback}"</p>
                        <div class="text-warning mb-2">
                            ${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}
                        </div>
                        <h5 class="card-title mt-3 text-primary">- ${testimonial.name}</h5>
                    </div>
                </div>
            `;
            testimonialsContainer.appendChild(testimonialItem);
        });
    }

    // 3. Featured Cars (Top 4)
    const featuredCarsContainer = document.getElementById('featured-cars-container');
    if (featuredCarsContainer) {
        featuredCarsContainer.innerHTML = ''; // Clear loading message
        const featuredCars = data.cars.slice(0, 4); // Get first 4 cars

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
                        <ul class="list-unstyled small text-muted">
                            <li><i class="fas fa-gas-pump me-2"></i> ${car.fuel_type}</li>
                            <li><i class="fas fa-cogs me-2"></i> ${car.transmission}</li>
                            <li><i class="fas fa-tachometer-alt me-2"></i> ${car.km_driven.toLocaleString('en-IN')} KM</li>
                        </ul>
                        <a href="car-details.html?id=${car.id}" class="btn btn-outline-primary w-100 view-details-btn">View Details</a>
                    </div>
                </div>
            `;
            featuredCarsContainer.appendChild(carCard);
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

const renderServicesPage = (data) => {
    if (document.body.id !== 'services-page') return;

    const servicesContainer = document.getElementById('services-container');
    servicesContainer.innerHTML = ''; // Clear loading message

    const createServiceCardHtml = (service, index, isRelated = false) => {
        // Determine if the 'New' badge should be shown (e.g., based on a property or index)
        // Using a simple check for demonstration (e.g., first two services are 'New')
        const isNew = index < 2 && !isRelated;
        const newBadge = isNew ? '<span class="new-badge">New</span>' : '';
        
        // Use a Font Awesome icon as a placeholder for the service image/icon
        const serviceIconClass = service.icon_class || 'fas fa-car-wrench';

        return `
            <div class="col animate__animated animate__fadeInUp" style="animation-delay: ${index * 0.1}s;">
                <a href="${service.file_name}" class="text-decoration-none">
                    <div class="card service-card-new">
                        ${newBadge}
                        <i class="${serviceIconClass} service-icon"></i>
                        <h5 class="service-title">${service.title}</h5>
                    </div>
                </a>
            </div>
        `;
    };

    data.services.forEach((service, index) => {
        servicesContainer.innerHTML += createServiceCardHtml(service, index);
    });
};

const renderServiceDetailsPage = (data) => {
    if (document.body.id !== 'service-details-page') return;

    // Determine the service based on the current page's filename
    const currentFileName = window.location.pathname.split('/').pop();
    // Fallback for service-details.html if accessed directly (e.g., for testing)
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = parseInt(urlParams.get('id')) || 1; // Default to ID 1 for testing if no ID is provided

    let service;
    if (currentFileName === 'service-details.html') {
        service = data.services.find(s => s.id === serviceId);
    } else {
        service = data.services.find(s => s.file_name === currentFileName);
    }

    if (!service) {
        document.getElementById('service-title').textContent = 'Service Not Found';
        document.getElementById('service-description').textContent = 'Details unavailable.';
        document.getElementById('service-price').textContent = 'N/A';
        document.getElementById('service-main-image').src = 'https://via.placeholder.com/800x500?text=Service+Not+Found';
        document.getElementById('process-steps-list').innerHTML = '<li class="list-group-item">No process steps available.</li>';
        document.getElementById('customer-reviews-container').innerHTML = '<p>No reviews available.</p>';
        document.getElementById('related-services-container').innerHTML = '<div class="col-12 text-center"><p>No related services available.</p></div>';
        return;
    }

    // 1. Service Details
    document.getElementById('service-title').textContent = service.title;
    document.getElementById('service-description').textContent = service.full_description;
    document.getElementById('service-price').textContent = formatPrice(service.price_in_inr);
    document.getElementById('service-main-image').src = service.image_url;
    document.getElementById('modal-service-name').textContent = service.title;

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
            reviewsContainer.innerHTML += `
                <div class="card mb-3 shadow-sm">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h6 class="card-title text-primary">${review.name}</h6>
                            <div class="text-warning">
                                ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
                            </div>
                        </div>
                        <p class="card-text fst-italic">"${review.feedback}"</p>
                    </div>
                </div>
            `;
        });
    }

    // 4. Related Services (All other services)
    const relatedServicesContainer = document.getElementById('related-services-container');
    relatedServicesContainer.innerHTML = '';
    
    const relatedServices = data.services
        .filter(s => s.file_name && service.file_name && s.file_name !== service.file_name)
        .slice(0, 4); // Show up to 4 related services

    if (relatedServices.length === 0) {
        relatedServicesContainer.innerHTML = '<div class="col-12 text-center"><p>No other services available.</p></div>';
    } else {
        relatedServices.forEach((rservice, index) => {
            relatedServicesContainer.innerHTML += createServiceCardHtml(rservice, index, true);
        });
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

// Main DOMContentLoaded Handler
document.addEventListener('DOMContentLoaded', async () => {
    // Load Data
    const data = await fetchData();

    // Setup Utilities
    setupDarkMode();
    setupNavbarScroll();
    setupBackToTop();
    setupStoryStatsAnimation();

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
});