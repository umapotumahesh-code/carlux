// categories.js - ES Module for Categories Page Logic

// Utility function to format price in Indian Rupees
const formatPrice = (price) => {
    // Use toLocaleString for Indian number format (lakhs/crores)
    return `₹${price.toLocaleString('en-IN')}`;
};

// Function to fetch data from API or JSON fallback (Duplicated from script.js for module self-containment)
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

// Helper to render car cards
const renderCarCards = (cars, containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = ''; // Clear previous content

    if (cars.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center">
                <div class="alert alert-warning" role="alert">
                    <i class="fas fa-exclamation-triangle me-2"></i> No cars found matching the criteria.
                </div>
            </div>
        `;
        return;
    }

    cars.forEach((car, index) => {
        const cardHtml = `
            <div class="col animate__animated animate__fadeInUp" style="animation-delay: ${index * 0.05}s;">
                <div class="card h-100 car-card">
                    <div class="car-image-zoom">
                        <img src="${car.image_urls[0]}" class="card-img-top" alt="${car.brand} ${car.model}">
                    </div>
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-start">
                            <h5 class="card-title text-primary mb-1">${car.brand} ${car.model} (${car.year})</h5>
                            <i class="far fa-heart favorite-icon" title="Add to Favorites"></i>
                        </div>
                        <p class="card-text price mb-2">${formatPrice(car.price_in_inr)}</p>
                        <ul class="list-unstyled small text-muted mb-3 d-flex justify-content-between">
                            <li><i class="fas fa-gas-pump me-1"></i> ${car.fuel_type}</li>
                            <li><i class="fas fa-cogs me-1"></i> ${car.transmission}</li>
                            <li><i class="fas fa-tachometer-alt me-1"></i> ${car.km_driven.toLocaleString('en-IN')} KM</li>
                        </ul>
                        <div class="d-grid">
                            <a href="car-details.html?id=${car.id}" class="btn btn-sm btn-seller">View Details</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHtml;
    });
};

// Helper to render a section with a header
const renderCarSection = (cars, containerId, title) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = ''; // Clear previous content

    if (cars.length > 0) {
        const header = document.createElement('div');
        header.className = 'section-header mt-5';
        header.textContent = title;
        container.before(header); // Insert header before the container

        renderCarCards(cars, containerId);
    } else {
        container.innerHTML = `
            <div class="col-12 text-center">
                <div class="alert alert-info" role="alert">
                    <i class="fas fa-info-circle me-2"></i> No cars found for this section.
                </div>
            </div>
        `;
    }
};

// Main Categories Page Logic
const renderCategoriesPage = (data) => {
    const cars = data.cars;
    const filterForm = document.getElementById('filter-form');
    const priceRangeSlider = document.getElementById('price-range-slider');
    const priceRangeValue = document.getElementById('price-range-value');
    const kmRangeSlider = document.getElementById('km-driven-slider');
    const kmRangeValue = document.getElementById('km-driven-value');
    const carTabs = document.getElementById('carTabs');

    // 1. Populate Filters
    const brands = [...new Set(cars.map(c => c.brand))].sort();
    const fuelTypes = [...new Set(cars.map(c => c.fuel_type))].sort();
    const bodyTypes = ["SUV", "Sedan", "Hatchback", "Coupe", "MUV", "Convertible", "Truck"]; // Extended dummy list

    const brandCheckboxes = document.getElementById('brand-checkboxes');
    const fuelTypeCheckboxes = document.getElementById('fuel-type-checkboxes');
    const bodyTypeCheckboxes = document.getElementById('body-type-checkboxes');

    const populateCheckboxes = (container, items, name) => {
        container.innerHTML = '';
        items.forEach(item => {
            container.innerHTML += `
                <div class="form-check">
                    <input class="form-check-input ${name}-check" type="checkbox" value="${item}" id="${name}-${item.replace(/\s/g, '')}">
                    <label class="form-check-label" for="${name}-${item.replace(/\s/g, '')}">${item}</label>
                </div>
            `;
        });
    };

    populateCheckboxes(brandCheckboxes, brands, 'brand');
    populateCheckboxes(fuelTypeCheckboxes, fuelTypes, 'fuel');
    populateCheckboxes(bodyTypeCheckboxes, bodyTypes, 'body');

    // 2. Filter Logic
    const applyFilters = (allCars = cars) => {
        let minPrice = parseInt(document.getElementById('min-price-input').value) || 0;
        let maxPrice = parseInt(document.getElementById('max-price-input').value) || parseInt(priceRangeSlider.max);
        const minYear = parseInt(document.getElementById('min-year-input').value) || 1900;
        const maxYear = parseInt(document.getElementById('max-year-input').value) || new Date().getFullYear();
        const maxKm = parseInt(kmRangeSlider.value);

        // Price Preset Logic
        const selectedPreset = document.querySelector('.price-range-preset:checked');
        if (selectedPreset) {
            maxPrice = parseInt(selectedPreset.value);
            minPrice = 0; // Presets are "Under X Lakh"
        }

        const selectedBrands = Array.from(document.querySelectorAll('.brand-check:checked')).map(el => el.value);
        const selectedFuelTypes = Array.from(document.querySelectorAll('.fuel-check:checked')).map(el => el.value);
        const selectedBodyTypes = Array.from(document.querySelectorAll('.body-check:checked')).map(el => el.value);

        const filteredCars = allCars.filter(car => {
            // Price filter
            if (car.price_in_inr < minPrice || car.price_in_inr > maxPrice) return false;
            // Brand filter
            if (selectedBrands.length > 0 && !selectedBrands.includes(car.brand)) return false;
            // Model Year filter
            if (car.year < minYear || car.year > maxYear) return false;
            // KM Driven filter
            if (car.km_driven > maxKm) return false;
            // Fuel Type filter
            if (selectedFuelTypes.length > 0 && !selectedFuelTypes.includes(car.fuel_type)) return false;
            // Body Type filter
            if (selectedBodyTypes.length > 0 && !selectedBodyTypes.includes(car.body_type)) return false;

            return true;
        });

        renderCarCards(filteredCars, 'car-cards-container');
    };

    // 3. Event Listeners
    if (filterForm) {
        filterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            applyFilters();
        });
    }

    // Price Range Slider/Input Sync
    const syncPriceRange = () => {
        const min = parseInt(document.getElementById('min-price-input').value) || 0;
        const max = parseInt(document.getElementById('max-price-input').value) || parseInt(priceRangeSlider.max);
        
        // Ensure min is not greater than max
        if (min > max) {
            document.getElementById('min-price-input').value = max;
            min = max;
        }

        // Update slider and display
        priceRangeSlider.value = max;
        priceRangeValue.textContent = `${formatPrice(min)} - ${formatPrice(max)}`;

        // Uncheck presets when manual range is used
        document.querySelectorAll('.price-range-preset').forEach(el => el.checked = false);
    };

    document.getElementById('min-price-input').addEventListener('input', syncPriceRange);
    document.getElementById('max-price-input').addEventListener('input', syncPriceRange);
    priceRangeSlider.addEventListener('input', () => {
        document.getElementById('max-price-input').value = priceRangeSlider.value;
        syncPriceRange();
    });

    // Price Preset Listener
    document.querySelectorAll('.price-range-preset').forEach(el => {
        el.addEventListener('change', (e) => {
            const maxPrice = parseInt(e.target.value);
            document.getElementById('min-price-input').value = 0;
            document.getElementById('max-price-input').value = maxPrice;
            priceRangeSlider.value = maxPrice;
            priceRangeValue.textContent = `${formatPrice(0)} - ${formatPrice(maxPrice)}`;
        });
    });

    // KM Driven Slider/Value Sync
    kmRangeSlider.addEventListener('input', () => {
        kmRangeValue.textContent = `${kmRangeSlider.value.toLocaleString('en-IN')} KM`;
    });

    // Check for URL parameters and pre-select filters
    const urlParams = new URLSearchParams(window.location.search);
    const brandParam = urlParams.get('brand');
    if (brandParam) {
        // Wait for checkboxes to be populated, then select the brand
        setTimeout(() => {
            const brandCheckbox = document.querySelector(`input.brand-check[value="${brandParam}"]`);
            if (brandCheckbox) {
                brandCheckbox.checked = true;
                // Expand the brand filter section if collapsed
                const brandFilterContent = document.getElementById('brand-model-filter-content');
                if (brandFilterContent && !brandFilterContent.classList.contains('show')) {
                    brandFilterContent.classList.add('show');
                }
                // Apply the filter immediately with the selected brand
                applyFilters();
            }
        }, 100); // Small delay to ensure DOM is ready
    }

    // Initial render
    applyFilters(cars);
};

// Main DOMContentLoaded Handler
document.addEventListener('DOMContentLoaded', async () => {
    if (document.body.id !== 'categories-page') return;

    // Show loading message
    const loadingMessage = document.getElementById('loading-message');
    if (loadingMessage) {
        loadingMessage.style.display = 'block';
    }

    const data = await fetchData();

    // Hide loading message
    if (loadingMessage) {
        loadingMessage.style.display = 'none';
    }

    renderCategoriesPage(data);
});