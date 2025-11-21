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
        const response = await fetch('/api/cars');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const cars = await response.json();
        return { cars };
    } catch (error) {
        // Fallback to direct JSON file if API is not available
        try {
            const response = await fetch('data.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return { cars: data.cars || [] };
        } catch (fallbackError) {
            console.error("Could not fetch data:", fallbackError);
            return { cars: getSellerCars(), services: [], testimonials: [] };
        }
    }
};

// Get seller cars from localStorage
const getSellerCars = () => {
    try {
        return JSON.parse(localStorage.getItem('gocarz_seller_cars') || '[]');
    } catch (e) {
        return [];
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
        const folder = `/assets/cars/${car.brand.toLowerCase().replace(/\s/g, '')}/${car.model.toLowerCase().replace(/\s/g, '')}/`;
        const cardHtml = `
            <div class="col animate__animated animate__fadeInUp" style="animation-delay: ${index * 0.05}s;">
                <div class="card h-100 car-card">
                    <div class="car-image-zoom position-relative">
                        <img src="${car.image_urls[0]}" class="card-img-top" alt="${car.brand} ${car.model}" />
                    </div>
                    <div class="card-body d-flex flex-column">
                        <div class="d-flex justify-content-between align-items-start">
                            <h5 class="card-title text-primary mb-1">${car.brand} ${car.model} (${car.year})</h5>
                            <i class="far fa-heart favorite-icon" title="Add to Favorites"></i>
                        </div>
                        <p class="text-muted small mb-1">${car.body_type}</p>
                        <p class="card-text price mb-2">${formatPrice(car.price_in_inr)}</p>
                        <div class="row row-cols-2 g-2 small text-muted mb-3">
                            <div class="col d-flex align-items-center">
                                <i class="fas fa-map-marker-alt me-1"></i> ${car.location}
                            </div>
                            <div class="col d-flex align-items-center">
                                <i class="fas fa-gas-pump me-1"></i> ${car.fuel_type}
                            </div>
                            <div class="col d-flex align-items-center">
                                <i class="fas fa-cogs me-1"></i> ${car.transmission}
                            </div>
                            <div class="col d-flex align-items-center">
                                <i class="fas fa-tachometer-alt me-1"></i> ${car.km_driven.toLocaleString('en-IN')} KM
                            </div>
                        </div>
                        <div class="d-grid mt-auto">
                            <a href="car-details.html?id=${car._id || car.id}" class="btn btn-primary btn-sm">View Details</a>
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

// AI Search Function
const performAISearch = (query, cars) => {
    const lowerQuery = query.toLowerCase();
    const tokens = lowerQuery.split(/\s+/).filter(token => token.length > 0);

    return cars.filter(car => {
        let score = 0;
        const carText = `${car.brand} ${car.model} ${car.fuel_type} ${car.transmission} ${car.body_type} ${car.color} ${car.location} ${car.owner_type}`.toLowerCase();

        tokens.forEach(token => {
            // Brand/Model match
            if (car.brand.toLowerCase().includes(token) || car.model.toLowerCase().includes(token)) {
                score += 10;
            }
            // Fuel type match
            else if (car.fuel_type.toLowerCase().includes(token)) {
                score += 8;
            }
            // Body type match
            else if (car.body_type.toLowerCase().includes(token)) {
                score += 8;
            }
            // Color match
            else if (car.color.toLowerCase().includes(token)) {
                score += 6;
            }
            // Transmission match
            else if (car.transmission.toLowerCase().includes(token)) {
                score += 6;
            }
            // Location match
            else if (car.location.toLowerCase().includes(token)) {
                score += 4;
            }
            // Owner type match
            else if (car.owner_type.toLowerCase().includes(token)) {
                score += 4;
            }
            // Price keywords
            else if (token.includes('under') || token.includes('below') || token.includes('less')) {
                const nextToken = tokens[tokens.indexOf(token) + 1];
                if (nextToken) {
                    const priceMatch = nextToken.match(/(\d+(?:\.\d+)?)\s*(lakh|l|k)/i);
                    if (priceMatch) {
                        let maxPrice = parseFloat(priceMatch);
                        if (priceMatch.toLowerCase().startsWith('l')) {
                            maxPrice *= 100000;
                        } else if (priceMatch.toLowerCase() === 'k') {
                            maxPrice *= 1000;
                        }
                        if (car.price_in_inr <= maxPrice) {
                            score += 12;
                        }
                    }
                }
            }
            // Year keywords
            else if (token.match(/\d{4}/)) {
                const year = parseInt(token);
                if (car.year === year) {
                    score += 10;
                } else if (Math.abs(car.year - year) <= 2) {
                    score += 6;
                }
            }
            // KM keywords
            else if (token.includes('km') || token.includes('mile')) {
                // Simple match for now
                score += 2;
            }
            // Generic match
            else if (carText.includes(token)) {
                score += 1;
            }
        });

        return score > 0;
    }).sort((a, b) => {
        // Sort by relevance score (higher score first)
        const scoreA = calculateRelevanceScore(a, tokens);
        const scoreB = calculateRelevanceScore(b, tokens);
        return scoreB - scoreA;
    });
};

const calculateRelevanceScore = (car, tokens) => {
    let score = 0;
    const carText = `${car.brand} ${car.model} ${car.fuel_type} ${car.transmission} ${car.body_type} ${car.color}`.toLowerCase();

    tokens.forEach(token => {
        if (car.brand.toLowerCase().includes(token) || car.model.toLowerCase().includes(token)) {
            score += 10;
        } else if (car.fuel_type.toLowerCase().includes(token)) {
            score += 8;
        } else if (car.body_type.toLowerCase().includes(token)) {
            score += 8;
        } else if (car.color.toLowerCase().includes(token)) {
            score += 6;
        } else if (carText.includes(token)) {
            score += 1;
        }
    });

    return score;
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
    const aiSearchInput = document.getElementById('ai-search-input');
    const aiSearchBtn = document.getElementById('ai-search-btn');
    const micBtn = document.getElementById('mic-btn');

    // 1. Populate Filters
    const brands = [...new Set(cars.map(c => c.brand))].sort();
    const fuelTypes = [...new Set(cars.map(c => c.fuel_type))].sort();
    const bodyTypes = ["SUV", "Sedan", "Hatchback", "Coupe", "MUV", "Convertible", "Truck"]; // Extended dummy list
    const colours = [...new Set(cars.map(c => c.color))].sort();

    const brandCheckboxes = document.getElementById('brand-checkboxes');
    const fuelTypeCheckboxes = document.getElementById('fuel-type-checkboxes');
    const bodyTypeCheckboxes = document.getElementById('body-type-checkboxes');
    const colourCheckboxes = document.getElementById('colour-checkboxes');

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
    populateCheckboxes(colourCheckboxes, colours, 'colour');

    // 2. Filter Logic
    const applyFilters = (allCars = cars) => {
        let minPrice = parseInt(document.getElementById('min-price-input').value) || 0;
        let maxPrice = parseInt(document.getElementById('max-price-input').value) || parseInt(priceRangeSlider.max);
        const minYear = parseInt(document.getElementById('min-year-input').value) || 1900;
        const maxYear = parseInt(document.getElementById('max-year-input').value) || new Date().getFullYear();
        const maxKm = parseInt(kmRangeSlider.value);
        const locationQuery = document.getElementById('location-input').value.trim().toLowerCase();

        // Price Preset Logic
        const selectedPreset = document.querySelector('.price-range-preset:checked');
        if (selectedPreset) {
            maxPrice = parseInt(selectedPreset.value);
            minPrice = 0; // Presets are "Under X Lakh"
        }

        const selectedBrands = Array.from(document.querySelectorAll('.brand-check:checked')).map(el => el.value);
        const selectedFuelTypes = Array.from(document.querySelectorAll('.fuel-check:checked')).map(el => el.value);
        const selectedBodyTypes = Array.from(document.querySelectorAll('.body-check:checked')).map(el => el.value);
        const selectedColours = Array.from(document.querySelectorAll('.colour-check:checked')).map(el => el.value);

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
            // Colour filter
            if (selectedColours.length > 0 && !selectedColours.includes(car.color)) return false;
            // Location filter
            if (locationQuery && !car.location.toLowerCase().includes(locationQuery)) return false;

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

    // Voice Search Functionality
    let isListening = false;
    let recognition = null;

    const initVoiceSearch = () => {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            console.warn('Speech recognition not supported in this browser');
            if (micBtn) micBtn.style.display = 'none';
            return;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onstart = () => {
            isListening = true;
            micBtn.innerHTML = '<i class="fas fa-stop"></i>';
            micBtn.classList.add('btn-danger');
            micBtn.classList.remove('btn-outline-secondary');
            aiSearchInput.placeholder = 'Listening...';
        };

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            aiSearchInput.value = transcript;
            handleAISearch();
        };

        recognition.onend = () => {
            isListening = false;
            micBtn.innerHTML = '<i class="fas fa-microphone"></i>';
            micBtn.classList.remove('btn-danger');
            micBtn.classList.add('btn-outline-secondary');
            aiSearchInput.placeholder = "Search cars with AI (e.g., 'red sedan under 5 lakh')";
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            isListening = false;
            micBtn.innerHTML = '<i class="fas fa-microphone"></i>';
            micBtn.classList.remove('btn-danger');
            micBtn.classList.add('btn-outline-secondary');
            aiSearchInput.placeholder = "Search cars with AI (e.g., 'red sedan under 5 lakh')";
        };
    };

    // AI Search Event Listeners
    if (aiSearchBtn && aiSearchInput) {
        const handleAISearch = () => {
            const query = aiSearchInput.value.trim();
            if (query) {
                const searchResults = performAISearch(query, cars);
                renderCarCards(searchResults, 'car-cards-container');
            } else {
                applyFilters(cars); // Reset to all cars if query is empty
            }
        };

        aiSearchBtn.addEventListener('click', handleAISearch);
        aiSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleAISearch();
            }
        });
    }

    // Microphone Button Event Listener
    if (micBtn) {
        initVoiceSearch();
        micBtn.addEventListener('click', () => {
            if (isListening) {
                recognition.stop();
            } else {
                recognition.start();
            }
        });
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