// Location and area-based car data
const locationCarData = {
    'Hyderabad': {
        'KPHB (Kukatpally Housing Board)': [
            {
                id: 1,
                brand: 'Maruti',
                model: 'Alto K10',
                image: './images/hyundai20.png',
                fuel: 'petrol',
                transmission: 'manual',
                seats: 4,
                segment: 'hatchback',
                basePricing: { '395': 4499, '576': 5199, '720': 5899 },
                price: 4499,
                originalPrice: null,
                discount: 'GET FLAT 15% off',
                discountCode: 'USE CODE: DRIVE',
                kmIncluded: '395 kms',
                pricesExclude: 'fuel cost',
                freshFleet: false,
                location: 'Hyderabad',
                area: 'KPHB (Kukatpally Housing Board)'
            },
            {
                id: 2,
                brand: 'Hyundai',
                model: 'Santro MT',
                image: './images/car-placeholder.svg',
                fuel: 'petrol',
                transmission: 'manual',
                seats: 5,
                segment: 'hatchback',
                basePricing: { '395': 4862, '576': 5562, '720': 6262 },
                price: 4862,
                originalPrice: null,
                discount: 'GET FLAT 15% off',
                discountCode: 'USE CODE: DRIVE',
                kmIncluded: '395 kms',
                pricesExclude: 'fuel cost',
                freshFleet: false,
                location: 'Hyderabad',
                area: 'KPHB (Kukatpally Housing Board)'
            }
        ],
        'Gachibowli': [
            {
                id: 3,
                brand: 'Maruti',
                model: 'Swift 2024',
                image: './images/car-placeholder.svg',
                fuel: 'petrol',
                transmission: 'manual',
                seats: 5,
                segment: 'hatchback',
                basePricing: { '395': 5299, '576': 5999, '720': 6699 },
                price: 5299,
                originalPrice: null,
                discount: null,
                discountCode: null,
                kmIncluded: '395 kms',
                pricesExclude: 'fuel cost',
                freshFleet: true,
                location: 'Hyderabad',
                area: 'Gachibowli'
            },
            {
                id: 4,
                brand: 'Tata',
                model: 'Nexon',
                image: './images/car-placeholder.svg',
                fuel: 'petrol',
                transmission: 'manual',
                seats: 5,
                segment: 'suv',
                basePricing: { '395': 7999, '576': 8999, '720': 9999 },
                price: 7999,
                originalPrice: null,
                discount: null,
                discountCode: null,
                kmIncluded: '395 kms',
                pricesExclude: 'fuel cost',
                freshFleet: true,
                location: 'Hyderabad',
                area: 'Gachibowli'
            }
        ],
        'Hitech City': [
            {
                id: 5,
                brand: 'Maruti',
                model: 'Celerio AT',
                image: './images/car-placeholder.svg',
                fuel: 'petrol',
                transmission: 'automatic',
                seats: 5,
                segment: 'hatchback',
                basePricing: { '395': 5999, '576': 6699, '720': 7399 },
                price: 5999,
                originalPrice: null,
                discount: null,
                discountCode: null,
                kmIncluded: '395 kms',
                pricesExclude: 'fuel cost',
                freshFleet: false,
                location: 'Hyderabad',
                area: 'Hitech City'
            },
            {
                id: 12,
                brand: 'Hyundai',
                model: 'Grand i10 Nios',
                image: './images/car-placeholder.svg',
                fuel: 'petrol',
                transmission: 'manual',
                seats: 5,
                segment: 'hatchback',
                basePricing: { '395': 5299, '576': 5999, '720': 6699 },
                price: 5299,
                originalPrice: null,
                discount: 'GET FLAT 12% off',
                discountCode: 'USE CODE: HITECH',
                kmIncluded: '395 kms',
                pricesExclude: 'fuel cost',
                freshFleet: false,
                location: 'Hyderabad',
                area: 'Hitech City'
            }
        ],
        'Banjara Hills': [
            {
                id: 6,
                brand: 'BMW',
                model: '3 Series',
                image: './images/car-placeholder.svg',
                fuel: 'petrol',
                transmission: 'automatic',
                seats: 5,
                segment: 'luxury',
                basePricing: { '395': 15999, '576': 17999, '720': 19999 },
                price: 15999,
                originalPrice: null,
                discount: null,
                discountCode: null,
                kmIncluded: '395 kms',
                pricesExclude: 'fuel cost',
                freshFleet: true,
                location: 'Hyderabad',
                area: 'Banjara Hills'
            }
        ],
        'Kondapur': [
            {
                id: 13,
                brand: 'Maruti',
                model: 'Swift Dzire',
                image: './images/car-placeholder.svg',
                fuel: 'petrol',
                transmission: 'manual',
                seats: 5,
                segment: 'sedan',
                basePricing: { '395': 5799, '576': 6499, '720': 7199 },
                price: 5799,
                originalPrice: null,
                discount: null,
                discountCode: null,
                kmIncluded: '395 kms',
                pricesExclude: 'fuel cost',
                freshFleet: false,
                location: 'Hyderabad',
                area: 'Kondapur'
            }
        ],
        'Ameerpet': [], // No cars available in this area
        'Secunderabad': []  // No cars available in this area
    },
    'Chennai': {
        'T. Nagar': [
            {
                id: 7,
                brand: 'Honda',
                model: 'City',
                image: './images/car-placeholder.svg',
                fuel: 'petrol',
                transmission: 'manual',
                seats: 5,
                segment: 'sedan',
                basePricing: { '395': 6299, '576': 6999, '720': 7699 },
                price: 6299,
                originalPrice: null,
                discount: 'GET FLAT 10% off',
                discountCode: 'USE CODE: CHENNAI',
                kmIncluded: '395 kms',
                pricesExclude: 'fuel cost',
                freshFleet: true,
                location: 'Chennai',
                area: 'T. Nagar'
            }
        ],
        'Anna Nagar': [
            {
                id: 8,
                brand: 'Hyundai',
                model: 'Creta',
                image: './images/car-placeholder.svg',
                fuel: 'petrol',
                transmission: 'automatic',
                seats: 5,
                segment: 'suv',
                basePricing: { '395': 8999, '576': 9999, '720': 10999 },
                price: 8999,
                originalPrice: null,
                discount: null,
                discountCode: null,
                kmIncluded: '395 kms',
                pricesExclude: 'fuel cost',
                freshFleet: true,
                location: 'Chennai',
                area: 'Anna Nagar'
            },
            {
                id: 9,
                brand: 'Toyota',
                model: 'Etios',
                image: './images/car-placeholder.svg',
                fuel: 'petrol',
                transmission: 'manual',
                seats: 5,
                segment: 'sedan',
                basePricing: { '395': 5799, '576': 6499, '720': 7199 },
                price: 5799,
                originalPrice: null,
                discount: null,
                discountCode: null,
                kmIncluded: '395 kms',
                pricesExclude: 'fuel cost',
                freshFleet: false,
                location: 'Chennai',
                area: 'Anna Nagar'
            }
        ]
    },
    'Bangalore': {
        'Koramangala': [
            {
                id: 10,
                brand: 'Volkswagen',
                model: 'Polo',
                image: './images/car-placeholder.svg',
                fuel: 'petrol',
                transmission: 'manual',
                seats: 5,
                segment: 'hatchback',
                basePricing: { '395': 5899, '576': 6599, '720': 7299 },
                price: 5899,
                originalPrice: null,
                discount: null,
                discountCode: null,
                kmIncluded: '395 kms',
                pricesExclude: 'fuel cost',
                freshFleet: true,
                location: 'Bangalore',
                area: 'Koramangala'
            }
        ]
    },
    'Mumbai': {
        'Andheri': [
            {
                id: 11,
                brand: 'Audi',
                model: 'A4',
                image: './images/car-placeholder.svg',
                fuel: 'petrol',
                transmission: 'automatic',
                seats: 5,
                segment: 'luxury',
                basePricing: { '395': 18999, '576': 20999, '720': 22999 },
                price: 18999,
                originalPrice: null,
                discount: null,
                discountCode: null,
                kmIncluded: '395 kms',
                pricesExclude: 'fuel cost',
                freshFleet: true,
                location: 'Mumbai',
                area: 'Andheri'
            }
        ]
    }
};

// Legacy cars array for backward compatibility - combines all location data
const cars = Object.values(locationCarData)
    .flatMap(cityData => Object.values(cityData))
    .flat();

// Helper functions for area-based filtering
function getCarsForLocationAndArea(location, area = null) {
    const cityData = locationCarData[location];
    if (!cityData) return [];
    
    if (area) {
        // Get cars for specific area
        return cityData[area] || [];
    } else {
        // Get all cars for the location
        return Object.values(cityData).flat();
    }
}

function getAllAreasForLocation(location) {
    const cityData = locationCarData[location];
    return cityData ? Object.keys(cityData) : [];
}

// Current search state
let currentLocation = 'Hyderabad';
let currentArea = null;

// Global variables
let filteredCars = [...cars];
let activeFilters = {
    segment: [],
    brand: [],
    fuel: [],
    transmission: [],
    seating: []
};

let currentBookingCar = null;
let currentDateTimeType = '';
let selectedLocation = 'Hyderabad';

// Initialize with current real-time dates
function getCurrentDateTime() {
    const now = new Date();
    const currentDate = now.toISOString().split('T')[0]; // YYYY-MM-DD format
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    
    // Round up to next 30-minute slot
    let nextHour = currentHour;
    let nextMinute = 0;
    
    if (currentMinute >= 30) {
        nextHour += 1;
    } else if (currentMinute > 0) {
        nextMinute = 30;
    }
    
    // If it's past 23:00, move to next day
    if (nextHour >= 24) {
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowDate = tomorrow.toISOString().split('T')[0];
        return { date: tomorrowDate, time: '06:00' }; // Start early next day
    }
    
    // If it's past 23:30, start tomorrow
    if (nextHour >= 23 && nextMinute >= 30) {
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowDate = tomorrow.toISOString().split('T')[0];
        return { date: tomorrowDate, time: '06:00' };
    }
    
    const nextTime = `${nextHour.toString().padStart(2, '0')}:${nextMinute.toString().padStart(2, '0')}`;
    
    console.log('Current DateTime calculated:', { date: currentDate, time: nextTime, originalTime: `${currentHour}:${currentMinute}` });
    
    return { date: currentDate, time: nextTime };
}

function getTomorrowDateTime() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDate = tomorrow.toISOString().split('T')[0]; // YYYY-MM-DD format
    
    console.log('Tomorrow DateTime calculated:', { date: tomorrowDate, time: '20:00' });
    
    return { date: tomorrowDate, time: '20:00' };
}

let startDateTime = getCurrentDateTime();
let endDateTime = getTomorrowDateTime();
let currentKmPlan = '576';
let currentFuelPlan = 'Without Fuel';

// Function to refresh date/time to current time
function refreshDateTimeToNow(silent = false) {
    const oldStartDateTime = { ...startDateTime };
    const now = getCurrentDateTime();
    const tomorrow = getTomorrowDateTime();
    
    // Check if time has actually changed significantly
    const timeChanged = (oldStartDateTime.date !== now.date || oldStartDateTime.time !== now.time);
    
    if (timeChanged || !silent) {
        startDateTime = now;
        endDateTime = tomorrow;
        updateDateTimeDisplay();
        
        if (!silent) {
            showNotification('Date and time updated to current time', 'success');
        }
        
        console.log('Date/Time refreshed:', {
            from: oldStartDateTime,
            to: startDateTime,
            endTime: endDateTime,
            timeChanged: timeChanged
        });
    }
}

// Function to force refresh to current real-time (can be called manually)
function forceRefreshToCurrentTime() {
    refreshDateTimeToNow(false); // Not silent, show notification
}

// Live clock functionality
function updateLiveClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: false 
    });
    
    const liveTimeElement = document.getElementById('liveTime');
    if (liveTimeElement) {
        liveTimeElement.textContent = timeString;
    }
}

// Update live clock every second
setInterval(updateLiveClock, 1000);

// Auto-refresh date/time every 30 seconds to keep it current
setInterval(() => {
    refreshDateTimeToNow(true); // Silent refresh
}, 30000); // Every 30 seconds

// Also refresh when page gains focus (user returns to tab)
window.addEventListener('focus', function() {
    console.log('Page gained focus, refreshing time...');
    refreshDateTimeToNow(true); // Silent refresh
});

// Refresh when page becomes visible (tab switching)
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        console.log('Page became visible, refreshing time...');
        refreshDateTimeToNow(true); // Silent refresh
    }
});

// DOM elements - initialized after DOM loads
let filterCheckboxes;
let sortSelect;
let clearAllBtns;

// Initialize the app
// Function to update date/time display in HTML
function updateDateTimeDisplay() {
    // Update start date/time
    const startDate = new Date(startDateTime.date + 'T' + startDateTime.time);
    const startDateFormatted = startDate.toLocaleDateString('en-GB', { 
        day: 'numeric', 
        month: 'short', 
        year: '2-digit' 
    }).replace(/,/g, '');
    const startTimeFormatted = startDate.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: false 
    }) + ' ' + startDate.toLocaleDateString('en-US', { weekday: 'short' });
    
    document.getElementById('startDate').textContent = startDateFormatted;
    document.getElementById('startTime').textContent = startTimeFormatted;
    
    // Update end date/time
    const endDate = new Date(endDateTime.date + 'T' + endDateTime.time);
    const endDateFormatted = endDate.toLocaleDateString('en-GB', { 
        day: 'numeric', 
        month: 'short', 
        year: '2-digit' 
    }).replace(/,/g, '');
    const endTimeFormatted = endDate.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: false 
    }) + ' ' + endDate.toLocaleDateString('en-US', { weekday: 'short' });
    
    document.getElementById('endDate').textContent = endDateFormatted;
    document.getElementById('endTime').textContent = endTimeFormatted;
}

document.addEventListener('DOMContentLoaded', function() {
    // Refresh to current real-time on page load
    startDateTime = getCurrentDateTime();
    endDateTime = getTomorrowDateTime();
    
    // Initialize live clock
    updateLiveClock();
    
    // Add popularity scores to cars for better sorting
    addPopularityScores();
    
    // Initialize with all cars from current location
    const initialCars = getCarsForLocationAndArea(currentLocation);
    filteredCars = [...initialCars];
    renderCars(initialCars);
    
    // Update heading for initial load
    updateCarsAvailableHeading(currentLocation, null, initialCars.length);
    
    setupEventListeners();
    updateCarCount();
    
    // Update date/time display with current real-time values
    updateDateTimeDisplay();
    
    console.log('App initialized with current date/time:', startDateTime, endDateTime);
});

// Add popularity scores to cars
function addPopularityScores() {
    // Add popularity scores to all cars in the locationCarData
    Object.keys(locationCarData).forEach(location => {
        Object.keys(locationCarData[location]).forEach(area => {
            locationCarData[location][area].forEach(car => {
                let popularityScore = 0;
                
                // Brand popularity
                if (car.brand === 'Maruti') popularityScore += 50;
                else if (car.brand === 'Hyundai') popularityScore += 45;
                else if (car.brand === 'Tata') popularityScore += 40;
                else if (car.brand === 'Honda') popularityScore += 42;
                else if (car.brand === 'Toyota') popularityScore += 48;
                else if (car.brand === 'BMW') popularityScore += 30;
                else if (car.brand === 'Audi') popularityScore += 25;
                else if (car.brand === 'Volkswagen') popularityScore += 35;
                
                // Fresh fleet bonus
                if (car.freshFleet) popularityScore += 20;
                
                // Discount bonus
                if (car.discount) popularityScore += 15;
                
                // Automatic transmission bonus
                if (car.transmission === 'automatic') popularityScore += 10;
                
                // Fuel efficiency bonus (petrol more popular for city driving)
                if (car.fuel === 'petrol') popularityScore += 5;
                
                // Lower price bonus (more affordable = more popular)
                if (car.price < 5000) popularityScore += 10;
                else if (car.price < 7000) popularityScore += 5;
                
                car.popularityScore = popularityScore;
            });
        });
    });
}

// Event listeners
function setupEventListeners() {
    // Filter checkboxes
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleFilterChange);
    });

    // Sort dropdown - event listener is now handled by onchange in HTML

    // Clear all buttons
    clearAllBtns.forEach(btn => {
        btn.addEventListener('click', clearAllFilters);
    });

    // Plan options
    document.querySelectorAll('.plan-option').forEach(option => {
        option.addEventListener('click', handlePlanChange);
    });

    // Modify search button
    document.querySelector('.modify-search-btn').addEventListener('click', handleModifySearch);
}

// Render cars
function renderCars(carsToRender) {
    carGrid.innerHTML = '';
    
    carsToRender.forEach(car => {
        const carCard = createCarCard(car);
        carGrid.appendChild(carCard);
    });
}

// Create car card
function createCarCard(car) {
    const cardDiv = document.createElement('div');
    cardDiv.className = `car-card ${car.freshFleet ? 'fresh-fleet' : ''}`;
    cardDiv.innerHTML = `
        <div class="car-image">
            <img src="${car.image}" alt="${car.brand} ${car.model}" onerror="this.style.display='none'">
        </div>
        <div class="car-details">
            <div class="car-header">
                <div class="car-info">
                    <div class="car-brand">${car.brand}</div>
                    <h3>${car.model}</h3>
                </div>
            </div>
            <div class="car-specs">
                <div class="car-spec">
                    <i class="fas fa-gas-pump"></i>
                    <span>${car.fuel.charAt(0).toUpperCase() + car.fuel.slice(1)}</span>
                </div>
                <div class="car-spec">
                    <i class="fas fa-cogs"></i>
                    <span>${car.transmission.charAt(0).toUpperCase() + car.transmission.slice(1)}</span>
                </div>
                <div class="car-spec">
                    <i class="fas fa-users"></i>
                    <span>${car.seats} Seater</span>
                </div>
            </div>
            <div class="car-pricing">
                <div class="price-info">
                    ${car.discount ? `<div class="discount-badge">
                        <i class="fas fa-percentage"></i>
                        ${car.discount}
                    </div>` : ''}
                    <div class="current-price">₹ ${car.price.toLocaleString()}</div>
                    ${car.discountCode ? `<div class="price-details">${car.discountCode}</div>` : ''}
                    <div class="price-details">${car.kmIncluded} | Prices exclude ${car.pricesExclude}</div>
                </div>
                <button class="book-btn" onclick="bookCar(${car.id})">Book ></button>
            </div>
        </div>
    `;
    return cardDiv;
}

// Handle filter changes
function handleFilterChange(event) {
    const filterType = event.target.name;
    const filterValue = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
        if (!activeFilters[filterType].includes(filterValue)) {
            activeFilters[filterType].push(filterValue);
        }
    } else {
        activeFilters[filterType] = activeFilters[filterType].filter(value => value !== filterValue);
    }

    applyFilters();
}

// Apply filters
function applyFilters() {
    filteredCars = cars.filter(car => {
        // Check segment filter
        if (activeFilters.segment.length > 0 && !activeFilters.segment.includes(car.segment)) {
            return false;
        }
        
        // Check brand filter
        if (activeFilters.brand.length > 0 && !activeFilters.brand.includes(car.brand.toLowerCase())) {
            return false;
        }
        
        // Check fuel filter
        if (activeFilters.fuel.length > 0 && !activeFilters.fuel.includes(car.fuel)) {
            return false;
        }
        
        // Check transmission filter
        if (activeFilters.transmission.length > 0 && !activeFilters.transmission.includes(car.transmission)) {
            return false;
        }
        
        // Check seating capacity filter
        if (activeFilters.seating.length > 0 && !activeFilters.seating.includes(car.seats.toString())) {
            return false;
        }
        
        return true;
    });

    // Apply current sort to filtered results
    const currentSort = document.getElementById('sortSelect').value;
    if (currentSort !== 'default') {
        // Trigger sort without changing the dropdown
        const sortEvent = { target: { value: currentSort, options: document.getElementById('sortSelect').options, selectedIndex: document.getElementById('sortSelect').selectedIndex } };
        handleSortChange(sortEvent);
    } else {
        renderCars(filteredCars);
    }
    
    updateCarCount();
}

// Handle sort changes
function handleSortChange(event) {
    const sortValue = event.target.value;
    const sortOption = event.target.options[event.target.selectedIndex].text;
    
    // Show loading state
    showSortingLoader();
    
    // Apply sorting after a short delay for visual feedback
    setTimeout(() => {
        switch(sortValue) {
            case 'price-low-high':
                filteredCars.sort((a, b) => a.price - b.price);
                break;
            case 'price-high-low':
                filteredCars.sort((a, b) => b.price - a.price);
                break;
            case 'popular':
                // Sort by popularity score (higher score = more popular)
                filteredCars.sort((a, b) => {
                    return (b.popularityScore || 0) - (a.popularityScore || 0);
                });
                break;
            case 'brand':
                filteredCars.sort((a, b) => {
                    if (a.brand < b.brand) return -1;
                    if (a.brand > b.brand) return 1;
                    return a.model.localeCompare(b.model);
                });
                break;
            case 'fuel-type':
                filteredCars.sort((a, b) => {
                    if (a.fuel === b.fuel) {
                        return a.price - b.price; // Secondary sort by price
                    }
                    return a.fuel.localeCompare(b.fuel);
                });
                break;
            case 'default':
            default:
                // Reset to original order based on ID
                filteredCars.sort((a, b) => a.id - b.id);
                break;
        }
        
        // Re-render cars with sorting animation
        renderCarsWithAnimation(filteredCars);
        hideSortingLoader();
        
        // Show sort confirmation
        showSortConfirmation(sortOption);
        
    }, 500); // Delay for visual feedback
}

// Show sorting loader
function showSortingLoader() {
    const carGrid = document.getElementById('carGrid');
    carGrid.style.opacity = '0.6';
    carGrid.style.pointerEvents = 'none';
    
    // Add sorting indicator
    const sortIndicator = document.createElement('div');
    sortIndicator.id = 'sortIndicator';
    sortIndicator.className = 'sort-indicator';
    sortIndicator.innerHTML = `
        <div class="sort-spinner"></div>
        <span>Sorting cars...</span>
    `;
    document.querySelector('.car-listings').appendChild(sortIndicator);
}

// Hide sorting loader
function hideSortingLoader() {
    const carGrid = document.getElementById('carGrid');
    carGrid.style.opacity = '1';
    carGrid.style.pointerEvents = 'auto';
    
    const sortIndicator = document.getElementById('sortIndicator');
    if (sortIndicator) {
        sortIndicator.remove();
    }
}

// Render cars with animation
function renderCarsWithAnimation(carsToRender) {
    const carGrid = document.getElementById('carGrid');
    
    // Fade out existing cards
    const existingCards = carGrid.querySelectorAll('.car-card');
    existingCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = 'scale(0.9)';
            card.style.opacity = '0';
        }, index * 50);
    });
    
    // Clear and re-render after animation
    setTimeout(() => {
        carGrid.innerHTML = '';
        
        carsToRender.forEach((car, index) => {
            const carCard = createCarCard(car);
            carCard.style.opacity = '0';
            carCard.style.transform = 'translateY(20px)';
            carGrid.appendChild(carCard);
            
            // Animate in new cards
            setTimeout(() => {
                carCard.style.transition = 'all 0.3s ease';
                carCard.style.opacity = '1';
                carCard.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, existingCards.length * 50 + 100);
}

// Show sort confirmation
function showSortConfirmation(sortOption) {
    const notification = document.createElement('div');
    notification.className = 'sort-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-sort"></i>
            <span>Sorted by: ${sortOption}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 2500);
}

// Clear all filters
function clearAllFilters() {
    // Reset active filters
    activeFilters = {
        segment: [],
        brand: [],
        fuel: [],
        transmission: [],
        seating: []
    };

    // Uncheck all checkboxes
    filterCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    // Reset sort dropdown to default
    document.getElementById('sortSelect').value = 'default';

    // Reset filtered cars
    filteredCars = [...cars];
    renderCars(filteredCars);
    updateCarCount();
    
    // Show clear confirmation
    showSortConfirmation('Filters and sorting cleared');
}

// Update car count
function updateCarCount() {
    const countElement = document.querySelector('.listings-header h2');
    countElement.textContent = `${filteredCars.length} Cars available for rental in Hyderabad`;
}

// Handle plan changes
function handlePlanChange(event) {
    const planGroup = event.target.closest('.plan');
    const options = planGroup.querySelectorAll('.plan-option');
    
    // Remove active class from all options in this group
    options.forEach(option => option.classList.remove('active'));
    
    // Add active class to clicked option
    event.target.classList.add('active');
    
    // Update pricing based on plan selection (demo functionality)
    updatePricingBasedOnPlan();
}

// Update pricing based on plan selection
function updatePricingBasedOnPlan() {
    const kmPlan = document.querySelector('.plan:first-child .plan-option.active').textContent;
    const fuelPlan = document.querySelector('.plan:last-child .plan-option.active').textContent;
    
    // Extract km number from plan text (e.g., "395 kms" -> "395")
    currentKmPlan = kmPlan.replace(/\D/g, '');
    currentFuelPlan = fuelPlan;
    
    // Update car prices based on selected km plan
    cars.forEach(car => {
        if (car.basePricing && car.basePricing[currentKmPlan]) {
            car.price = car.basePricing[currentKmPlan];
            car.kmIncluded = kmPlan;
        }
    });
    
    // Update filtered cars as well
    filteredCars.forEach(car => {
        if (car.basePricing && car.basePricing[currentKmPlan]) {
            car.price = car.basePricing[currentKmPlan];
            car.kmIncluded = kmPlan;
        }
    });
    
    // Add fuel plan pricing if "With Fuel" is selected
    if (fuelPlan === 'With Fuel') {
        cars.forEach(car => {
            car.price = Math.round(car.price * 1.15); // 15% increase for fuel
            car.pricesExclude = 'tolls & parking';
        });
        filteredCars.forEach(car => {
            car.price = Math.round(car.price * 1.15);
            car.pricesExclude = 'tolls & parking';
        });
    } else {
        cars.forEach(car => {
            car.pricesExclude = 'fuel cost';
        });
        filteredCars.forEach(car => {
            car.pricesExclude = 'fuel cost';
        });
    }
    
    // Re-render cars with updated pricing
    renderCars(filteredCars);
    
    // Show pricing update notification
    showPricingUpdateNotification(kmPlan, fuelPlan);
}

// Show pricing update notification
function showPricingUpdateNotification(kmPlan, fuelPlan) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'pricing-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>Pricing updated for ${kmPlan} • ${fuelPlan}</span>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Hide and remove notification
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 2000);
}

// Handle modify search
function handleModifySearch() {
    // This would typically open a modal or redirect to search page
    alert('Modify search functionality would be implemented here');
}

// Book car function
function bookCar(carId) {
    const car = cars.find(c => c.id === carId);
    if (car) {
        // This would typically open a booking modal or redirect to booking page
        alert(`Booking ${car.brand} ${car.model} for ₹${car.price.toLocaleString()}/day`);
    }
}

// Promotional banner functionality
document.addEventListener('DOMContentLoaded', function() {
    const promoArrow = document.querySelector('.promo-arrow');
    if (promoArrow) {
        promoArrow.addEventListener('click', function() {
            // Filter cars for long duration deals (7+ days)
            const longDurationCars = cars.filter(car => car.price <= 570);
            if (longDurationCars.length > 0) {
                filteredCars = longDurationCars;
                renderCars(filteredCars);
                updateCarCount();
            }
        });
    }
});

// Responsive menu toggle (for mobile)
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('mobile-active');
}

// Search functionality
function searchCars(query) {
    if (!query) {
        filteredCars = [...cars];
    } else {
        filteredCars = cars.filter(car => 
            car.brand.toLowerCase().includes(query.toLowerCase()) ||
            car.model.toLowerCase().includes(query.toLowerCase()) ||
            car.segment.toLowerCase().includes(query.toLowerCase())
        );
    }
    renderCars(filteredCars);
    updateCarCount();
}

// Location change functionality
function changeLocation(newLocation) {
    document.querySelector('.location span').textContent = newLocation;
    // This would typically fetch new car data for the location
    alert(`Location changed to ${newLocation}. Loading cars...`);
}

// Location Dropdown Functions
function toggleLocationDropdown() {
    const dropdown = document.getElementById('locationDropdown');
    const selector = document.querySelector('.location-selector');
    
    if (!dropdown) {
        console.error('Location dropdown not found');
        return;
    }
    
    dropdown.classList.toggle('active');
    dropdown.classList.toggle('show'); // Support both classes for compatibility
    if (selector) {
        selector.classList.toggle('active');
    }
    
    // Clear search input when opening
    if (dropdown.classList.contains('active')) {
        const searchInput = document.getElementById('locationSearchInput');
        if (searchInput) {
            searchInput.value = '';
            filterLocationOptions(); // Show all options
        }
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function closeDropdown(event) {
        if (!event.target.closest('.location-selector') && !event.target.closest('.location')) {
            dropdown.classList.remove('active', 'show');
            if (selector) selector.classList.remove('active');
            document.removeEventListener('click', closeDropdown);
        }
    });
}

function selectLocation(location) {
    console.log('Selecting location:', location);
    
    selectedLocation = location;
    currentLocation = location;
    currentArea = null; // Reset area when location changes
    
    const selectedLocationElement = document.getElementById('selectedLocation');
    if (selectedLocationElement) {
        selectedLocationElement.textContent = location;
    }
    
    const dropdown = document.getElementById('locationDropdown');
    const selector = document.querySelector('.location-selector');
    
    if (dropdown) {
        dropdown.classList.remove('active', 'show');
    }
    if (selector) {
        selector.classList.remove('active');
    }
    
    // Clear area search input
    const areaInput = document.getElementById('areaSearchInput');
    if (areaInput) {
        areaInput.value = '';
    }
    
    // Update area suggestions for new location immediately
    updateAreaSuggestionsForLocation(location);
    
    // Update car listings to show all cars in the location
    const locationCars = getCarsForLocationAndArea(location);
    filteredCars = [...locationCars];
    renderCars(locationCars);
    
    // Update heading
    updateCarsAvailableHeading(location, null, locationCars.length);
    
    // Show success message
    showLocationChangeNotification(location);
}

function filterLocationOptions() {
    const searchTerm = document.getElementById('locationSearchInput').value.toLowerCase();
    const locationOptions = document.querySelectorAll('#locationOptionsList .location-option');
    
    locationOptions.forEach(option => {
        const cityName = option.getAttribute('data-city').toLowerCase();
        if (cityName.includes(searchTerm)) {
            option.style.display = 'flex';
        } else {
            option.style.display = 'none';
        }
    });
}

function useCurrentLocation() {
    if (navigator.geolocation) {
        // Show loading state
        const currentLocationOption = document.querySelector('.current-location');
        const originalContent = currentLocationOption.innerHTML;
        currentLocationOption.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Getting location...</span>';
        
        navigator.geolocation.getCurrentPosition(
            function(position) {
                // Reset content
                currentLocationOption.innerHTML = originalContent;
                
                // In a real app, you would reverse geocode the coordinates
                // For demo, we'll simulate detecting a nearby city
                const nearestCity = detectNearestCity(position.coords.latitude, position.coords.longitude);
                selectLocation(nearestCity);
                
                // Show success message
                showNotification(`Located you in ${nearestCity}`, 'success');
            },
            function(error) {
                // Reset content
                currentLocationOption.innerHTML = originalContent;
                
                let errorMessage = 'Unable to get your location';
                switch(error.code) {
                    case error.PERMISSION_DENIED:
                        errorMessage = 'Location access denied by user';
                        break;
                    case error.POSITION_UNAVAILABLE:
                        errorMessage = 'Location information unavailable';
                        break;
                    case error.TIMEOUT:
                        errorMessage = 'Location request timed out';
                        break;
                }
                showNotification(errorMessage, 'error');
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 300000
            }
        );
    } else {
        showNotification('Geolocation is not supported by this browser', 'error');
    }
}

function detectNearestCity(lat, lng) {
    // Simple distance calculation to nearest city (demo data)
    const cityCoordinates = {
        'Hyderabad': { lat: 17.3850, lng: 78.4867 },
        'Chennai': { lat: 13.0827, lng: 80.2707 },
        'Bangalore': { lat: 12.9716, lng: 77.5946 },
        'Mumbai': { lat: 19.0760, lng: 72.8777 },
        'Delhi': { lat: 28.7041, lng: 77.1025 },
        'Pune': { lat: 18.5204, lng: 73.8567 },
        'Kolkata': { lat: 22.5726, lng: 88.3639 }
    };
    
    let nearestCity = 'Hyderabad';
    let minDistance = Infinity;
    
    Object.keys(cityCoordinates).forEach(city => {
        const cityCoords = cityCoordinates[city];
        const distance = Math.sqrt(
            Math.pow(lat - cityCoords.lat, 2) + Math.pow(lng - cityCoords.lng, 2)
        );
        
        if (distance < minDistance) {
            minDistance = distance;
            nearestCity = city;
        }
    });
    
    return nearestCity;
}

// Area search functionality
const areaData = {
    'Hyderabad': [
        'KPHB (Kukatpally Housing Board)',
        'Gachibowli',
        'Hitech City',
        'Kondapur',
        'Madhapur',
        'Begumpet',
        'Secunderabad',
        'Ameerpet',
        'Banjara Hills',
        'Jubilee Hills',
        'Miyapur',
        'Uppal',
        'LB Nagar',
        'Dilsukhnagar',
        'Kothapet'
    ],
    'Chennai': [
        'T. Nagar',
        'Anna Nagar',
        'Velachery',
        'Adyar',
        'Tambaram',
        'Chrompet',
        'OMR (Old Mahabalipuram Road)',
        'ECR (East Coast Road)',
        'Porur',
        'Guindy',
        'Mylapore',
        'Nungambakkam',
        'Sholinganallur',
        'Pallavaram',
        'Perungudi'
    ],
    'Bangalore': [
        'Koramangala',
        'Indiranagar',
        'Whitefield',
        'Electronic City',
        'HSR Layout',
        'BTM Layout',
        'Marathahalli',
        'JP Nagar',
        'Jayanagar',
        'Rajajinagar',
        'Malleshwaram',
        'Banashankari',
        'Sarjapur Road',
        'Hebbal',
        'MG Road'
    ],
    'Mumbai': [
        'Andheri',
        'Bandra',
        'Juhu',
        'Powai',
        'Thane',
        'Navi Mumbai',
        'Borivali',
        'Malad',
        'Goregaon',
        'Dadar',
        'Lower Parel',
        'Worli',
        'Kandivali',
        'Vikhroli',
        'Chembur'
    ],
    'Delhi': [
        'Connaught Place',
        'Karol Bagh',
        'Lajpat Nagar',
        'South Extension',
        'Khan Market',
        'Rajouri Garden',
        'Dwarka',
        'Rohini',
        'Janakpuri',
        'Laxmi Nagar',
        'Saket',
        'Vasant Kunj',
        'Greater Kailash',
        'Nehru Place',
        'India Gate'
    ],
    'Pune': [
        'Koregaon Park',
        'Baner',
        'Hinjewadi',
        'Wakad',
        'Aundh',
        'Kothrud',
        'Shivaji Nagar',
        'Camp Area',
        'Hadapsar',
        'Magarpatta',
        'Viman Nagar',
        'Kalyani Nagar',
        'Pune Airport',
        'Deccan',
        'Pimpri-Chinchwad'
    ],
    'Kolkata': [
        'Park Street',
        'Salt Lake',
        'New Town',
        'Howrah',
        'Ballygunge',
        'Alipore',
        'Esplanade',
        'Gariahat',
        'Jadavpur',
        'Rajarhat',
        'Dumdum',
        'Sealdah',
        'Victoria Memorial',
        'Kolkata Airport',
        'Dakshineshwar'
    ]
};

function performAreaSearch() {
    const areaSearchInput = document.getElementById('areaSearchInput');
    if (!areaSearchInput) return;
    
    const searchTerm = areaSearchInput.value.toLowerCase();
    const currentCity = selectedLocation || 'Hyderabad';
    
    if (searchTerm.length > 0) {
        showAreaSuggestions();
        filterAreaSuggestions(searchTerm, currentCity);
    } else {
        hideAreaSuggestions();
    }
}

function showAreaSuggestions() {
    const suggestionsContainer = document.getElementById('areaSuggestions');
    if (!suggestionsContainer) return;
    
    const currentCity = selectedLocation || 'Hyderabad';
    const areas = areaData[currentCity] || areaData['Hyderabad'];
    
    // Always rebuild suggestions for current city
    suggestionsContainer.innerHTML = '';
    
    areas.forEach(area => {
        const suggestionDiv = document.createElement('div');
        suggestionDiv.className = 'area-suggestion';
        suggestionDiv.innerHTML = `
            <i class="fas fa-map-marker-alt"></i>
            <span>${area}</span>
        `;
        suggestionDiv.onclick = () => selectAreaSuggestion(area);
        suggestionsContainer.appendChild(suggestionDiv);
    });
    
    suggestionsContainer.classList.add('active');
}

function hideAreaSuggestions() {
    document.getElementById('areaSuggestions').classList.remove('active');
}

function filterAreaSuggestions(searchTerm, city) {
    const suggestions = document.querySelectorAll('.area-suggestion:not(.no-results)');
    let visibleCount = 0;
    
    suggestions.forEach(suggestion => {
        const spanElement = suggestion.querySelector('span');
        if (spanElement) {
            const areaText = spanElement.textContent.toLowerCase();
            if (areaText.includes(searchTerm) && visibleCount < 6) {
                suggestion.style.display = 'flex';
                visibleCount++;
            } else {
                suggestion.style.display = 'none';
            }
        }
    });
    
    // Handle "no results" message
    const existingNoResults = document.querySelector('.no-results');
    if (visibleCount === 0) {
        if (!existingNoResults) {
            const noResults = document.createElement('div');
            noResults.className = 'area-suggestion no-results';
            noResults.innerHTML = `<i class="fas fa-search"></i><span>No areas found in ${city}</span>`;
            document.getElementById('areaSuggestions').appendChild(noResults);
        }
        if (existingNoResults) existingNoResults.style.display = 'flex';
    } else {
        if (existingNoResults) {
            existingNoResults.style.display = 'none';
        }
    }
}

function selectAreaSuggestion(area) {
    const areaInput = document.getElementById('areaSearchInput');
    if (areaInput) {
        areaInput.value = area;
    }
    hideAreaSuggestions();
    
    // Perform search for the selected area immediately
    searchCars();
}

function searchCars() {
    const location = selectedLocation || 'Hyderabad';
    const areaInput = document.getElementById('areaSearchInput');
    const area = areaInput ? areaInput.value.trim() : '';
    
    console.log('Searching cars for location:', location, 'area:', area);
    
    // Update current search state
    currentLocation = location;
    currentArea = area || null;
    
    // Show loading state
    const searchBtn = document.querySelector('.search-cars-btn');
    const originalContent = searchBtn.innerHTML;
    searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
    searchBtn.disabled = true;
    
    // Simulate search
    setTimeout(() => {
        // Reset button
        searchBtn.innerHTML = originalContent;
        searchBtn.disabled = false;
        
        // Filter cars based on location and area
        const filteredCarsResult = getCarsForLocationAndArea(location, area);
        
        // Update the global filteredCars variable
        filteredCars = [...filteredCarsResult];
        
        // Show appropriate message and render results
        if (filteredCarsResult.length === 0) {
            let noResultsMessage = `No cars available in ${location}`;
            if (area) {
                noResultsMessage = `No cars available in ${area}, ${location}`;
            }
            showNotification(noResultsMessage, 'warning');
            renderNoCarsMessage(location, area);
        } else {
            let searchMessage = `Found ${filteredCarsResult.length} car${filteredCarsResult.length > 1 ? 's' : ''} in ${location}`;
            if (area) {
                searchMessage = `Found ${filteredCarsResult.length} car${filteredCarsResult.length > 1 ? 's' : ''} in ${area}, ${location}`;
            }
            showNotification(searchMessage, 'success');
            renderCars(filteredCarsResult);
        }
        
        // Update the cars available heading
        updateCarsAvailableHeading(location, area, filteredCarsResult.length);
        
        // Scroll to results
        const carGrid = document.getElementById('carGrid');
        if (carGrid) {
            carGrid.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    }, 1500);
}

// Helper function to render "no cars available" message
function renderNoCarsMessage(location, area) {
    const carGrid = document.getElementById('carGrid');
    if (!carGrid) return;
    
    const message = area 
        ? `No cars available in ${area}, ${location}`
        : `No cars available in ${location}`;
        
    carGrid.innerHTML = `
        <div class="no-cars-message">
            <div class="no-cars-icon">
                <i class="fas fa-car-side"></i>
            </div>
            <h3>No Cars Available</h3>
            <p>${message}</p>
            <div class="no-cars-suggestions">
                <p>Try searching in nearby areas:</p>
                <div class="nearby-areas">
                    ${generateNearbyAreaSuggestions(location, area)}
                </div>
            </div>
            <button class="search-all-areas-btn" onclick="searchAllAreasInLocation('${location}')">
                <i class="fas fa-search"></i>
                Show all cars in ${location}
            </button>
        </div>
    `;
}

function generateNearbyAreaSuggestions(location, currentArea) {
    const allAreas = getAllAreasForLocation(location);
    const otherAreas = allAreas.filter(area => area !== currentArea).slice(0, 4);
    
    return otherAreas.map(area => {
        const carCount = getCarsForLocationAndArea(location, area).length;
        return `
            <button class="nearby-area-btn" onclick="searchSpecificArea('${location}', '${area}')">
                ${area} (${carCount} cars)
            </button>
        `;
    }).join('');
}

function searchSpecificArea(location, area) {
    // Update the search input
    const areaInput = document.getElementById('areaSearchInput');
    if (areaInput) {
        areaInput.value = area;
    }
    
    // Perform search
    searchCars();
}

function searchAllAreasInLocation(location) {
    // Clear the area search
    const areaInput = document.getElementById('areaSearchInput');
    if (areaInput) {
        areaInput.value = '';
    }
    
    // Perform search for all areas
    searchCars();
}

function updateCarsAvailableHeading(location, area, count) {
    const headingElement = document.getElementById('carsAvailableHeading');
    if (!headingElement) return;
    
    let headingText = `${count} Cars available for rental in ${location}`;
    if (area && count > 0) {
        headingText = `${count} Cars available in ${area}, ${location}`;
    } else if (area && count === 0) {
        headingText = `No cars available in ${area}, ${location}`;
    }
    
    headingElement.textContent = headingText;
}

// Close area suggestions when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.search-input-container')) {
        hideAreaSuggestions();
    }
});

// Update area suggestions when location changes
function updateAreaSuggestionsForLocation(location) {
    const suggestionsContainer = document.getElementById('areaSuggestions');
    const areaSearchInput = document.getElementById('areaSearchInput');
    
    // Clear existing suggestions and input
    suggestionsContainer.innerHTML = '';
    if (areaSearchInput) {
        areaSearchInput.value = '';
        areaSearchInput.placeholder = `Search for area, landmark in ${location} (e.g., ${getLocationExample(location)})`;
    }
    
    // Hide suggestions
    suggestionsContainer.classList.remove('active');
}

function getLocationExample(location) {
    const examples = {
        'Hyderabad': 'KPHB, Gachibowli',
        'Chennai': 'T. Nagar, Anna Nagar',
        'Bangalore': 'Koramangala, Indiranagar',
        'Mumbai': 'Andheri, Bandra',
        'Delhi': 'Connaught Place, Karol Bagh',
        'Pune': 'Koregaon Park, Baner',
        'Kolkata': 'Park Street, Salt Lake'
    };
    return examples[location] || 'City Center, Airport';
}

function updateCarListingsForLocation(location) {
    // In a real app, this would fetch location-specific cars
    // For demo, we'll just show a message and update the count
    console.log(`Loading cars for ${location}...`);
    
    // Simulate loading time
    carGrid.classList.add('loading');
    setTimeout(() => {
        carGrid.classList.remove('loading');
        // Reset filters and show all cars
        clearAllFilters();
    }, 1000);
}

// Date/Time Picker Functions
function openDateTimePicker(type) {
    currentDateTimeType = type;
    const modal = document.getElementById('dateTimeModal');
    const title = document.getElementById('dateTimeModalTitle');
    const datePicker = document.getElementById('datePicker');
    const timePicker = document.getElementById('timePicker');
    
    // Set modal title
    title.textContent = type === 'start' ? 'Select Start Time' : 'Select End Time';
    
    // Set current values
    const currentDateTime = type === 'start' ? startDateTime : endDateTime;
    datePicker.value = currentDateTime.date;
    timePicker.value = currentDateTime.time;
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    datePicker.min = today;
    
    // Update time options based on selected date
    updateTimeOptions(currentDateTime.date, type);
    
    // Add event listener to date picker to update times when date changes
    datePicker.addEventListener('change', function() {
        updateTimeOptions(this.value, type);
    });
    
    // Remove any existing listeners to prevent duplicates
    const existingListeners = datePicker.getAttribute('data-listeners');
    if (!existingListeners) {
        datePicker.setAttribute('data-listeners', 'added');
    }
    
    modal.classList.add('show');
}

function updateTimeOptions(selectedDate, type) {
    const timePicker = document.getElementById('timePicker');
    if (!timePicker || !selectedDate) return;
    
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime24 = currentHour + (currentMinute >= 30 ? 0.5 : 0);
    
    // All available time slots (24-hour format with display names)
    const allTimeSlots = [
        { value: "06:00", display: "06:00 AM", time24: 6 },
        { value: "06:30", display: "06:30 AM", time24: 6.5 },
        { value: "07:00", display: "07:00 AM", time24: 7 },
        { value: "07:30", display: "07:30 AM", time24: 7.5 },
        { value: "08:00", display: "08:00 AM", time24: 8 },
        { value: "08:30", display: "08:30 AM", time24: 8.5 },
        { value: "09:00", display: "09:00 AM", time24: 9 },
        { value: "09:30", display: "09:30 AM", time24: 9.5 },
        { value: "10:00", display: "10:00 AM", time24: 10 },
        { value: "10:30", display: "10:30 AM", time24: 10.5 },
        { value: "11:00", display: "11:00 AM", time24: 11 },
        { value: "11:30", display: "11:30 AM", time24: 11.5 },
        { value: "12:00", display: "12:00 PM", time24: 12 },
        { value: "12:30", display: "12:30 PM", time24: 12.5 },
        { value: "13:00", display: "01:00 PM", time24: 13 },
        { value: "13:30", display: "01:30 PM", time24: 13.5 },
        { value: "14:00", display: "02:00 PM", time24: 14 },
        { value: "14:30", display: "02:30 PM", time24: 14.5 },
        { value: "15:00", display: "03:00 PM", time24: 15 },
        { value: "15:30", display: "03:30 PM", time24: 15.5 },
        { value: "16:00", display: "04:00 PM", time24: 16 },
        { value: "16:30", display: "04:30 PM", time24: 16.5 },
        { value: "17:00", display: "05:00 PM", time24: 17 },
        { value: "17:30", display: "05:30 PM", time24: 17.5 },
        { value: "18:00", display: "06:00 PM", time24: 18 },
        { value: "18:30", display: "06:30 PM", time24: 18.5 },
        { value: "19:00", display: "07:00 PM", time24: 19 },
        { value: "19:30", display: "07:30 PM", time24: 19.5 },
        { value: "20:00", display: "08:00 PM", time24: 20 },
        { value: "20:30", display: "08:30 PM", time24: 20.5 },
        { value: "21:00", display: "09:00 PM", time24: 21 },
        { value: "21:30", display: "09:30 PM", time24: 21.5 },
        { value: "22:00", display: "10:00 PM", time24: 22 },
        { value: "22:30", display: "10:30 PM", time24: 22.5 },
        { value: "23:00", display: "11:00 PM", time24: 23 },
        { value: "23:30", display: "11:30 PM", time24: 23.5 }
    ];
    
    // Store current selection
    const currentSelection = timePicker.value;
    
    // Clear existing options
    timePicker.innerHTML = '';
    
    let availableSlots = [];
    let defaultSelection = null;
    
    if (selectedDate === today) {
        // For today, filter out past times
        availableSlots = allTimeSlots.filter(slot => {
            return slot.time24 > currentTime24;
        });
        
        // If no slots available today, show message
        if (availableSlots.length === 0) {
            const noSlotsOption = document.createElement('option');
            noSlotsOption.value = '';
            noSlotsOption.textContent = 'No time slots available today - Please select tomorrow';
            noSlotsOption.disabled = true;
            noSlotsOption.selected = true;
            timePicker.appendChild(noSlotsOption);
            
            // Also suggest tomorrow's date
            const datePicker = document.getElementById('datePicker');
            if (datePicker) {
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                const tomorrowDate = tomorrow.toISOString().split('T')[0];
                
                // Show a notification suggesting tomorrow
                setTimeout(() => {
                    showNotification(`No more time slots available today. Try selecting ${tomorrow.toLocaleDateString()} instead.`, 'info');
                }, 500);
            }
            return;
        }
        
        // Set default to next available slot (round up to next 30min)
        defaultSelection = availableSlots[0].value;
        
    } else {
        // For future dates, show all slots
        availableSlots = allTimeSlots;
        
        // For end time, filter based on start time if same day
        if (type === 'end' && selectedDate === startDateTime.date) {
            const startTime24 = parseTime(startDateTime.time);
            availableSlots = allTimeSlots.filter(slot => {
                return slot.time24 > startTime24 + 1; // Minimum 1 hour rental
            });
        }
        
        defaultSelection = currentSelection || "08:00";
    }
    
    // Add available slots to select
    availableSlots.forEach(slot => {
        const option = document.createElement('option');
        option.value = slot.value;
        option.textContent = slot.display;
        timePicker.appendChild(option);
    });
    
    // Set selection
    if (availableSlots.find(slot => slot.value === currentSelection)) {
        timePicker.value = currentSelection;
    } else {
        timePicker.value = defaultSelection;
    }
}

function parseTime(timeString) {
    const [hours, minutes] = timeString.split(':').map(Number);
    return hours + (minutes >= 30 ? 0.5 : 0);
}

function closeDateTimeModal() {
    document.getElementById('dateTimeModal').classList.remove('show');
}

function confirmDateTime() {
    const datePicker = document.getElementById('datePicker');
    const timePicker = document.getElementById('timePicker');
    
    const selectedDate = datePicker.value;
    const selectedTime = timePicker.value;
    
    if (!selectedDate || !selectedTime) {
        alert('Please select both date and time');
        return;
    }
    
    // Validate past time for today's date
    if (currentDateTimeType === 'start') {
        const now = new Date();
        const today = now.toISOString().split('T')[0];
        const currentTime = now.getHours() + (now.getMinutes() >= 30 ? 0.5 : 0);
        const selectedTime24 = parseTime(selectedTime);
        
        if (selectedDate === today && selectedTime24 <= currentTime) {
            showNotification('Cannot select past time for today. Please choose a future time slot.', 'error');
            return;
        }
    }
    
    // Validate end time is after start time
    if (currentDateTimeType === 'end') {
        const startDate = new Date(startDateTime.date + 'T' + startDateTime.time);
        const endDate = new Date(selectedDate + 'T' + selectedTime);
        
        if (endDate <= startDate) {
            showNotification('End time must be at least 1 hour after start time', 'error');
            return;
        }
        
        // Check minimum rental duration (1 hour)
        const diffHours = (endDate - startDate) / (1000 * 60 * 60);
        if (diffHours < 1) {
            showNotification('Minimum rental duration is 1 hour', 'error');
            return;
        }
    }
    
    // Update the selected date/time
    if (currentDateTimeType === 'start') {
        startDateTime = { date: selectedDate, time: selectedTime };
        updateDateTimeDisplay('start');
    } else {
        endDateTime = { date: selectedDate, time: selectedTime };
        updateDateTimeDisplay('end');
    }
    
    closeDateTimeModal();
    updatePricingBasedOnDuration();
}

function updateDateTimeDisplay(type) {
    const dateTime = type === 'start' ? startDateTime : endDateTime;
    const date = new Date(dateTime.date);
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const formattedDate = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear().toString().slice(-2)}`;
    const formattedTime = `${dateTime.time} ${dayNames[date.getDay()]}`;
    
    if (type === 'start') {
        document.getElementById('startDate').textContent = formattedDate;
        document.getElementById('startTime').textContent = formattedTime;
    } else {
        document.getElementById('endDate').textContent = formattedDate;
        document.getElementById('endTime').textContent = formattedTime;
    }
}

function updatePricingBasedOnDuration() {
    const start = new Date(startDateTime.date + 'T' + startDateTime.time);
    const end = new Date(endDateTime.date + 'T' + endDateTime.time);
    const durationHours = (end - start) / (1000 * 60 * 60);
    const durationDays = Math.ceil(durationHours / 24);
    
    // Update car pricing based on duration
    cars.forEach(car => {
        // Apply discounts for longer rentals
        if (durationDays >= 7) {
            car.price = Math.round(car.price * 0.85); // 15% discount
        } else if (durationDays >= 3) {
            car.price = Math.round(car.price * 0.95); // 5% discount
        }
    });
    
    renderCars(filteredCars);
}

// Modify Search Function
function modifySearch() {
    // Validate selections
    if (!selectedLocation) {
        alert('Please select a location');
        return;
    }
    
    const start = new Date(startDateTime.date + 'T' + startDateTime.time);
    const end = new Date(endDateTime.date + 'T' + endDateTime.time);
    
    if (end <= start) {
        alert('End time must be after start time');
        return;
    }
    
    // Show loading state
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = 'Searching...';
    btn.disabled = true;
    
    // Simulate search
    setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        
        // Update results
        applyFilters();
        
        // Show success message
        const duration = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
        alert(`Found ${filteredCars.length} cars available in ${selectedLocation} for ${duration} day(s)`);
    }, 1500);
}

// Enhanced Book Car Function - Show Revv-style Booking Summary
function bookCar(carId) {
    currentBookingCar = cars.find(c => c.id === carId);
    if (!currentBookingCar) return;
    
    showBookingSummary();
}

// Show Comprehensive Booking Summary Page
function showBookingSummary() {
    if (!currentBookingCar) return;
    
    // Update car title and image
    document.getElementById('bookingSummaryTitle').textContent = `${currentBookingCar.brand} ${currentBookingCar.model}`;
    document.getElementById('summaryCarImage').src = currentBookingCar.image;
    
    // Update car specifications
    document.getElementById('summarySeats').textContent = `${currentBookingCar.seats} seats`;
    document.getElementById('summaryTransmission').textContent = currentBookingCar.transmission.charAt(0).toUpperCase() + currentBookingCar.transmission.slice(1);
    document.getElementById('summaryFuel').textContent = currentBookingCar.fuel.charAt(0).toUpperCase() + currentBookingCar.fuel.slice(1);
    
    // Calculate duration and dates
    const start = new Date(startDateTime.date + 'T' + startDateTime.time);
    const end = new Date(endDateTime.date + 'T' + endDateTime.time);
    const durationMs = end - start;
    const durationHours = durationMs / (1000 * 60 * 60);
    const durationDays = Math.floor(durationHours / 24);
    const remainingHours = Math.floor(durationHours % 24);
    
    // Format dates for display
    const formatBookingDate = (date) => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        const dayName = days[date.getDay()];
        const day = date.getDate();
        const month = months[date.getMonth()];
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        
        return `${dayName}, ${day} ${month} ${hours}:${minutes}`;
    };
    
    // Update booking timeline
    document.getElementById('summaryPickupTime').textContent = formatBookingDate(start);
    document.getElementById('summaryDropoffTime').textContent = formatBookingDate(end);
    
    // Update duration display
    let durationText = '';
    if (durationDays > 0) {
        durationText = `${durationDays} Day${durationDays > 1 ? 's' : ''}`;
        if (remainingHours > 0) {
            durationText += `, ${remainingHours} Hour${remainingHours > 1 ? 's' : ''}`;
        }
    } else {
        durationText = `${Math.floor(durationHours)} Hour${Math.floor(durationHours) !== 1 ? 's' : ''}`;
    }
    document.getElementById('summaryDuration').textContent = durationText;
    
    // Update location and km limit
    document.getElementById('summaryLocation').textContent = selectedLocation || 'Hyderabad';
    document.getElementById('summaryKmLimit').textContent = `${currentKmPlan} kms`;
    document.getElementById('summaryKmsLimit').textContent = `${currentKmPlan} kms`;
    
    // Calculate fare breakdown
    const baseFarePerDay = 1500; // ₹1500 per day as specified
    const deliveryFee = 500; // Fixed ₹500
    const securityDeposit = 2000; // Fixed ₹2000
    const extraKmCharge = 5; // ₹5 per km over limit
    
    // Calculate total days (minimum 1 day)
    const totalDays = Math.max(1, Math.ceil(durationHours / 24));
    const baseFare = baseFarePerDay * totalDays;
    const totalFare = baseFare + deliveryFee + securityDeposit;
    
    // Update fare breakdown
    document.getElementById('summaryBaseFare').textContent = baseFare.toLocaleString();
    document.getElementById('summaryDeliveryFee').textContent = deliveryFee.toLocaleString();
    document.getElementById('summaryDeposit').textContent = securityDeposit.toLocaleString();
    document.getElementById('summaryTotal').textContent = totalFare.toLocaleString();
    document.getElementById('summaryExtraKm').textContent = extraKmCharge;
    
    // Show modal
    document.getElementById('bookingSummaryModal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close booking summary
function closeBookingSummary() {
    document.getElementById('bookingSummaryModal').classList.remove('show');
    document.body.style.overflow = 'auto';
    currentBookingCar = null;
}

// Show city selector modal
function showCitySelector() {
    const modal = document.getElementById('citySelectorModal');
    
    // Clear search input
    document.getElementById('citySearchInput').value = '';
    
    // Show all cities
    document.querySelectorAll('.city-item').forEach(item => {
        item.classList.remove('hidden', 'selected');
        if (item.textContent.trim() === selectedLocation) {
            item.classList.add('selected');
        }
    });
    
    modal.classList.add('show');
}

// Close city selector modal
function closeCitySelector() {
    document.getElementById('citySelectorModal').classList.remove('show');
}

// Select a city from the modal
function selectCity(cityName) {
    selectedLocation = cityName;
    
    // Update UI
    document.getElementById('summaryLocation').textContent = cityName;
    
    // Update search location if it exists
    const locationInput = document.getElementById('location');
    if (locationInput) {
        locationInput.value = cityName;
    }
    
    // Close modal and show notification
    closeCitySelector();
    showNotification(`Location changed to ${cityName}`, 'success');
}

// Filter cities based on search input
function filterCities() {
    const searchTerm = document.getElementById('citySearchInput').value.toLowerCase();
    const cityItems = document.querySelectorAll('.city-item');
    
    cityItems.forEach(item => {
        const cityName = item.textContent.toLowerCase();
        if (cityName.includes(searchTerm)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// Show plan selector modal
function showPlanSelector() {
    showChangePlanModal();
}

// Show change plan modal (Revv style)
function showChangePlanModal() {
    const modal = document.getElementById('changePlanModal');
    
    // Reset all selections
    document.querySelectorAll('.revv-price-option').forEach(option => {
        option.classList.remove('revv-active');
    });
    
    // Highlight current selection based on current plan
    const currentKm = currentKmPlan;
    const currentFuel = currentFuelPlan === 'With Fuel';
    
    // Find and activate the current selection
    document.querySelectorAll('.revv-plan-row').forEach(row => {
        const km = row.dataset.km;
        if (km === currentKm) {
            const fuelOption = currentFuel ? 
                row.querySelector('.revv-with-fuel') : 
                row.querySelector('.revv-without-fuel');
            if (fuelOption) {
                fuelOption.classList.add('revv-active');
            }
        }
    });
    
    modal.classList.add('show');
}

// Close plan selector modal
function closePlanSelector() {
    document.getElementById('changePlanModal').classList.remove('show');
}

// Close change plan modal (alternative function name for consistency)
function closeChangePlanModal() {
    closePlanSelector();
}

// Select a plan from the modal
function selectPlan(kmLimit, baseFare, withFuel) {
    // Update global variables
    currentKmPlan = kmLimit.toString();
    currentFuelPlan = withFuel ? 'With Fuel' : 'Without Fuel';
    
    // Calculate new total (Base fare + Delivery fee + Security deposit)
    const deliveryFee = 500;
    const deposit = 2000;
    const total = baseFare + deliveryFee + deposit;
    
    // Update all fare elements
    const baseFareElements = document.querySelectorAll('#summaryBaseFare');
    baseFareElements.forEach(element => {
        if (element) element.textContent = baseFare.toLocaleString();
    });
    
    const totalElements = document.querySelectorAll('#summaryTotal');
    totalElements.forEach(element => {
        if (element) element.textContent = total.toLocaleString();
    });
    
    // Update km limit elements
    const kmLimitElements = document.querySelectorAll('#summaryKmLimit');
    kmLimitElements.forEach(element => {
        if (element) element.textContent = `${kmLimit} kms`;
    });
    
    const kmsLimitElements = document.querySelectorAll('#summaryKmsLimit');
    kmsLimitElements.forEach(element => {
        if (element) element.textContent = `${kmLimit} kms`;
    });
    
    // Update fuel status
    const fuelStatusElements = document.querySelectorAll('#summaryFuelStatus');
    fuelStatusElements.forEach(element => {
        if (element) element.textContent = withFuel ? 'includes fuel' : 'excludes fuel';
    });
    
    // Update pricing plan info text
    const pricingElements = document.querySelectorAll('.pricing-plan-info span');
    pricingElements.forEach(element => {
        if (element) {
            element.innerHTML = `Includes <span id="summaryKmLimit">${kmLimit} kms</span>, <span id="summaryFuelStatus">${withFuel ? 'includes fuel' : 'excludes fuel'}</span>`;
        }
    });
    
    // Update selection indicators
    document.querySelectorAll('.selection-indicator').forEach(indicator => {
        indicator.classList.remove('selected');
    });
    
    const selectedIndicator = document.getElementById(`indicator-${kmLimit}-${withFuel ? 'with' : 'without'}`);
    if (selectedIndicator) {
        selectedIndicator.classList.add('selected');
    }
    
    // Update extra km charge based on km limit
    let extraKmCharge = 5; // Default
    if (kmLimit >= 720) extraKmCharge = 7;
    else if (kmLimit >= 576) extraKmCharge = 6;
    
    const extraKmElements = document.querySelectorAll('#summaryExtraKm');
    extraKmElements.forEach(element => {
        if (element) element.textContent = extraKmCharge;
    });
    
    // Close modal and show notification
    closePlanSelector();
    showNotification(`Plan updated: ${kmLimit} kms ${withFuel ? 'with' : 'without'} fuel - ₹${baseFare.toLocaleString()}`, 'success');
}

// Select a plan from the Revv-style modal
function selectRevvPlan(kmLimit, baseFare, withFuel) {
    // Update global variables
    currentKmPlan = kmLimit.toString();
    currentFuelPlan = withFuel ? 'With Fuel' : 'Without Fuel';
    
    // Calculate new total (Base fare + Delivery fee + Security deposit)
    const deliveryFee = 500;
    const deposit = 2000;
    const total = baseFare + deliveryFee + deposit;
    
    // Update all fare elements
    const baseFareElements = document.querySelectorAll('#summaryBaseFare');
    baseFareElements.forEach(element => {
        if (element) element.textContent = baseFare.toLocaleString();
    });
    
    const totalElements = document.querySelectorAll('#summaryTotal');
    totalElements.forEach(element => {
        if (element) element.textContent = total.toLocaleString();
    });
    
    // Update km limit elements
    const kmLimitElements = document.querySelectorAll('#summaryKmLimit');
    kmLimitElements.forEach(element => {
        if (element) element.textContent = `${kmLimit} kms`;
    });
    
    const kmsLimitElements = document.querySelectorAll('#summaryKmsLimit');
    kmsLimitElements.forEach(element => {
        if (element) element.textContent = `${kmLimit} kms`;
    });
    
    // Update fuel status
    const fuelElements = document.querySelectorAll('#summaryFuelStatus');
    fuelElements.forEach(element => {
        if (element) element.textContent = withFuel ? 'Included' : 'Excluded';
    });
    
    // Update pricing plan info text
    const pricingPlanElements = document.querySelectorAll('.pricing-plan-info span');
    pricingPlanElements.forEach(element => {
        if (element) {
            element.textContent = `Pricing Plan: Includes ${kmLimit} kms, ${withFuel ? 'includes' : 'excludes'} fuel`;
        }
    });
    
    // Update visual selection in modal
    document.querySelectorAll('.revv-price-option').forEach(option => {
        option.classList.remove('revv-active');
    });
    
    // Find and activate the selected option
    document.querySelectorAll('.revv-plan-row').forEach(row => {
        const km = row.dataset.km;
        if (km == kmLimit) {
            const fuelOption = withFuel ? 
                row.querySelector('.revv-with-fuel') : 
                row.querySelector('.revv-without-fuel');
            if (fuelOption) {
                fuelOption.classList.add('revv-active');
            }
        }
    });
    
    // Close modal and show notification
    closeChangePlanModal();
    showNotification(`Plan updated: ${kmLimit} kms ${withFuel ? 'with' : 'without'} fuel - ₹${baseFare.toLocaleString()}`, 'success');
}

// Proceed to payment - show booking confirmation page
function proceedToPayment() {
    console.log('Proceeding to payment...');
    
    // Don't close booking summary, let showBookingConfirmationPage handle the transition
    // This ensures proper modal state management
    
    // Show booking confirmation page
    showBookingConfirmationPage();
}

// Show booking confirmation page with all selected details
function showBookingConfirmationPage() {
    const confirmationModal = document.getElementById('bookingConfirmationModal');
    const summaryModal = document.getElementById('bookingSummaryModal');
    
    if (!confirmationModal) {
        console.error('Booking confirmation modal not found');
        return;
    }
    
    console.log('Opening booking confirmation page...');
    
    // Hide summary modal first
    if (summaryModal) {
        summaryModal.classList.remove('show');
        summaryModal.style.display = 'none';
    }
    
    // Reset confirmation modal state
    confirmationModal.classList.remove('show');
    confirmationModal.style.display = 'none';
    confirmationModal.removeAttribute('style');
    
    // Populate confirmation page with current booking data
    populateConfirmationPage();
    
    // Show the confirmation modal with proper timing
    setTimeout(() => {
        confirmationModal.style.display = 'block';
        confirmationModal.classList.add('show');
        confirmationModal.scrollTop = 0; // Scroll to top
    }, 100);
    
    console.log('Booking confirmation page opened');
}

// Populate confirmation page with selected details
function populateConfirmationPage() {
    try {
        // Get current booking car
        const carName = document.getElementById('bookingSummaryTitle')?.textContent || 'Honda City';
        const carImage = document.getElementById('summaryCarImage')?.src || 'images/car-placeholder.svg';
        
        // Update car information
        const confirmCarName = document.getElementById('confirmCarName');
        const confirmCarImage = document.getElementById('confirmCarImage');
        
        if (confirmCarName) confirmCarName.textContent = carName;
        if (confirmCarImage) confirmCarImage.src = carImage;
        
        // Update car specs (get from current booking data or defaults)
        const confirmSeats = document.getElementById('confirmSeats');
        const confirmTransmission = document.getElementById('confirmTransmission');
        const confirmFuel = document.getElementById('confirmFuel');
        
        if (confirmSeats) confirmSeats.textContent = '5';
        if (confirmTransmission) confirmTransmission.textContent = 'Manual';
        if (confirmFuel) confirmFuel.textContent = 'Petrol';
        
        // Update booking timeline
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        
        const confirmPickupDate = document.getElementById('confirmPickupDate');
        const confirmPickupTime = document.getElementById('confirmPickupTime');
        const confirmReturnDate = document.getElementById('confirmReturnDate');
        const confirmReturnTime = document.getElementById('confirmReturnTime');
        const confirmDuration = document.getElementById('confirmDuration');
        
        if (confirmPickupDate) confirmPickupDate.textContent = today.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
        if (confirmPickupTime) confirmPickupTime.textContent = '08:00';
        if (confirmReturnDate) confirmReturnDate.textContent = tomorrow.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
        if (confirmReturnTime) confirmReturnTime.textContent = '20:00';
        if (confirmDuration) confirmDuration.textContent = '1 Day, 12 Hrs';
        
        // Get selected delivery option from booking summary
        const activeDeliveryOption = document.querySelector('.delivery-option.active');
        const deliveryOptionTitle = activeDeliveryOption ? activeDeliveryOption.querySelector('.option-title')?.textContent : 'Home Delivery';
        const isHomeDelivery = deliveryOptionTitle === 'Home Delivery';
        
        const confirmDeliveryOption = document.getElementById('confirmDeliveryOption');
        const confirmDeliveryFee = document.getElementById('confirmDeliveryFee');
        const confirmDeliveryIcon = document.getElementById('confirmDeliveryIcon');
        
        if (confirmDeliveryOption) confirmDeliveryOption.textContent = deliveryOptionTitle;
        if (confirmDeliveryFee) {
            if (isHomeDelivery) {
                confirmDeliveryFee.textContent = '+ ₹500';
                confirmDeliveryFee.style.color = '#dc3545';
            } else {
                confirmDeliveryFee.textContent = 'Save ₹500';
                confirmDeliveryFee.style.color = '#28a745';
            }
        }
        if (confirmDeliveryIcon) {
            confirmDeliveryIcon.className = isHomeDelivery ? 'fas fa-home' : 'fas fa-warehouse';
        }
        
        // Update pricing plan
        const confirmKmLimit = document.getElementById('confirmKmLimit');
        const confirmFuelPlan = document.getElementById('confirmFuelPlan');
        const confirmExtraKm = document.getElementById('confirmExtraKm');
        
        if (confirmKmLimit) confirmKmLimit.textContent = '395 kms';
        if (confirmFuelPlan) confirmFuelPlan.textContent = 'excludes fuel';
        if (confirmExtraKm) confirmExtraKm.textContent = '5';
        
        // Update location
        const confirmLocation = document.getElementById('confirmLocation');
        if (confirmLocation) confirmLocation.textContent = selectedLocation || 'Hyderabad';
        
        // Get actual fare values from booking summary modal
        const summaryBaseFareElement = document.getElementById('summaryBaseFare');
        const summaryDeliveryFeeElement = document.getElementById('summaryDeliveryFee');
        const summaryDepositElement = document.getElementById('summaryDeposit');
        const summaryTotalElement = document.getElementById('summaryTotal');
        
        // Parse the actual values (removing commas and converting to numbers)
        const baseFare = summaryBaseFareElement ? parseInt(summaryBaseFareElement.textContent.replace(/,/g, '')) : 1500;
        let deliveryFee = summaryDeliveryFeeElement ? parseInt(summaryDeliveryFeeElement.textContent.replace(/,/g, '')) : 500;
        const deposit = summaryDepositElement ? parseInt(summaryDepositElement.textContent.replace(/,/g, '')) : 2000;
        
        // Check selected delivery option to determine actual delivery fee
        const selectedDeliveryOption = document.querySelector('.delivery-option.active');
        const isSelfPickup = selectedDeliveryOption ? selectedDeliveryOption.querySelector('input').value === 'self-pickup' : false;
        
        // Adjust delivery fee based on selected option
        if (isSelfPickup) {
            deliveryFee = 0; // Self pickup has no delivery fee
        } else {
            deliveryFee = 500; // Home delivery costs ₹500
        }
        
        // Calculate the actual booking total (excluding security deposit as it's refundable)
        const actualBookingTotal = baseFare + deliveryFee;
        const totalAmountWithDeposit = actualBookingTotal + deposit;
        
        console.log('Fare calculation:', { baseFare, deliveryFee, deposit, actualBookingTotal, totalAmountWithDeposit });
        
        // Update final fare breakdown elements
        const confirmBaseFare = document.getElementById('confirmBaseFare');
        const confirmDeliveryFeeValue = document.getElementById('confirmDeliveryFee');
        const confirmDeposit = document.getElementById('confirmDeposit');
        const confirmTotalAmount = document.getElementById('confirmTotalAmount');
        const confirmDeliveryLabel = document.getElementById('confirmDeliveryLabel');
        
        if (confirmBaseFare) confirmBaseFare.textContent = baseFare.toLocaleString();
        if (confirmDeliveryFeeValue) {
            if (isSelfPickup) {
                confirmDeliveryFeeValue.textContent = '-500'; // Show savings for self pickup
                confirmDeliveryFeeValue.style.color = '#28a745'; // Green color for savings
            } else {
                confirmDeliveryFeeValue.textContent = deliveryFee.toLocaleString();
                confirmDeliveryFeeValue.style.color = '#dc3545'; // Red color for cost
            }
        }
        if (confirmDeposit) confirmDeposit.textContent = deposit.toLocaleString();
        if (confirmTotalAmount) confirmTotalAmount.textContent = totalAmountWithDeposit.toLocaleString();
        if (confirmDeliveryLabel) {
            // Check if delivery option is self pickup or home delivery
            confirmDeliveryLabel.textContent = deliveryFee > 0 ? 'Doorstep delivery & pickup' : 'Self pickup (savings)';
        }
        
        // Reset terms acceptance
        const acceptTerms = document.getElementById('acceptTerms');
        const confirmBookingBtn = document.getElementById('confirmBookingBtn');
        
        if (acceptTerms) acceptTerms.checked = false;
        if (confirmBookingBtn) confirmBookingBtn.disabled = true;
        
    } catch (error) {
        console.error('Error populating confirmation page:', error);
    }
}

function closeBookingModal() {
    document.getElementById('bookingModal').classList.remove('show');
    currentBookingCar = null;
}

function confirmBooking() {
    // Validate form
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const email = document.getElementById('customerEmail').value.trim();
    const license = document.getElementById('licenseNumber').value.trim();
    
    if (!name || !phone || !email || !license) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Validate phone
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
        alert('Please enter a valid 10-digit phone number');
        return;
    }
    
    // Show loading state
    const btn = event.target;
    btn.textContent = 'Processing...';
    btn.disabled = true;
    
    // Simulate booking process
    setTimeout(() => {
        closeBookingModal();
        
        // Generate booking ID
        const bookingId = 'RV' + Date.now().toString().slice(-8);
        document.getElementById('bookingId').textContent = bookingId;
        
        // Show success modal
        document.getElementById('successModal').classList.add('show');
        
        // Reset button
        btn.textContent = 'Proceed to Payment';
        btn.disabled = false;
        
        // Clear form
        document.getElementById('customerName').value = '';
        document.getElementById('customerPhone').value = '';
        document.getElementById('customerEmail').value = '';
        document.getElementById('licenseNumber').value = '';
    }, 2000);
}

function closeSuccessModal() {
    document.getElementById('successModal').classList.remove('show');
}

// Navigation Functions
function navigateToHome() {
    // Remove active class from all nav items
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    
    // Add active class to home
    event.target.closest('.nav-item').classList.add('active');
    
    alert('Welcome to GOCARZ Home!\n• Featured Cars\n• Special Offers\n• Latest News\n• Customer Reviews');
}

function showCategories() {
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    event.target.closest('.nav-item').classList.add('active');
    
    alert('Car Categories:\n• Hatchback\n• Sedan\n• SUV\n• MUV\n• Luxury Cars\n• Electric Vehicles');
}

function showCarRentalOptions() {
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    event.target.closest('.nav-item').classList.add('active');
    
    alert('Car Rental Options:\n• Self Drive Cars\n• Chauffeur Drive\n• Corporate Rentals\n• Airport Transfers\n• Monthly Rentals');
}

function showServices() {
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    event.target.closest('.nav-item').classList.add('active');
    
    alert('Our Services:\n• Car Maintenance\n• Insurance Services\n• 24/7 Roadside Assistance\n• Fuel Services\n• Car Wash & Detailing');
}

function showContactUs() {
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    event.target.closest('.nav-item').classList.add('active');
    
    alert('Contact GOCARZ:\n📞 Phone: +91 9876543210\n📧 Email: support@gocarz.com\n📍 Address: Mumbai, India\n🕒 Hours: 24/7 Support');
}

function showLogin() {
    alert('Login to GOCARZ:\n• Sign in with Email\n• Continue with Google\n• Continue with Facebook\n• Create New Account\n\nEnjoy exclusive member benefits!');
}

// Dark Mode Toggle
function toggleDarkMode() {
    const body = document.body;
    const darkModeIcon = document.getElementById('darkModeIcon');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        darkModeIcon.className = 'fas fa-sun';
        localStorage.setItem('darkMode', 'enabled');
        showNotification('Dark mode enabled', 'info');
    } else {
        darkModeIcon.className = 'fas fa-moon';
        localStorage.setItem('darkMode', 'disabled');
        showNotification('Light mode enabled', 'info');
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    
    nav.classList.toggle('mobile-active');
    mobileToggle.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (nav.classList.contains('mobile-active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// General notification function
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `general-notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'info' ? 'info-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 2500);
}

// Header scroll effect
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    const scrollY = window.scrollY;
    
    if (scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Initialize dark mode from localStorage
function initializeDarkMode() {
    const darkMode = localStorage.getItem('darkMode');
    const darkModeIcon = document.getElementById('darkModeIcon');
    
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeIcon.className = 'fas fa-sun';
    }
}

// Initialize date displays on page load
document.addEventListener('DOMContentLoaded', function() {
    updateDateTimeDisplay('start');
    updateDateTimeDisplay('end');
    
    // Initialize pricing based on default plan
    updatePricingBasedOnPlan();
    
    // Initialize dark mode
    initializeDarkMode();
    
    // Add scroll event listener for header effect
    window.addEventListener('scroll', handleHeaderScroll);
    
    // Set up click outside handlers for modals
    window.addEventListener('click', function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.classList.remove('show');
            }
        });
        
        // Close mobile menu when clicking outside
        const nav = document.querySelector('.nav');
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        if (nav.classList.contains('mobile-active') && !event.target.closest('.nav') && !event.target.closest('.mobile-menu-toggle')) {
            nav.classList.remove('mobile-active');
            mobileToggle.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// Enhanced Plan Change Function
function handlePlanChange(event) {
    const planGroup = event.target.closest('.plan');
    const options = planGroup.querySelectorAll('.plan-option');
    
    // Remove active class from all options in this group
    options.forEach(option => option.classList.remove('active'));
    
    // Add active class to clicked option
    event.target.classList.add('active');
    
    // Add visual feedback to car cards
    const carCards = document.querySelectorAll('.car-card');
    carCards.forEach(card => {
        card.classList.add('price-updated');
        setTimeout(() => card.classList.remove('price-updated'), 1000);
    });
    
    // Update pricing based on plan selection with delay for visual effect
    setTimeout(() => {
        updatePricingBasedOnPlan();
    }, 200);
    
    // Show feedback
    const planType = planGroup.querySelector('.plan-label').textContent;
    console.log(`Updated ${planType} to: ${event.target.textContent}`);
}

// Plan Preview Functions
function showPlanPreview(kmPlan) {
    // Create preview tooltip showing price differences
    const carCards = document.querySelectorAll('.car-card');
    carCards.forEach((card, index) => {
        const car = filteredCars[index];
        if (car && car.basePricing && car.basePricing[kmPlan]) {
            const previewPrice = car.basePricing[kmPlan];
            const currentPrice = car.price;
            const difference = previewPrice - currentPrice;
            
            const priceElement = card.querySelector('.current-price');
            const previewElement = document.createElement('div');
            previewElement.className = 'price-preview';
            previewElement.innerHTML = `
                <span class="preview-price">₹ ${previewPrice.toLocaleString()}</span>
                <span class="price-diff ${difference > 0 ? 'increase' : 'decrease'}">
                    ${difference > 0 ? '+' : ''}₹ ${Math.abs(difference).toLocaleString()}
                </span>
            `;
            
            priceElement.appendChild(previewElement);
        }
    });
}

function hidePlanPreview() {
    // Remove all preview tooltips
    document.querySelectorAll('.price-preview').forEach(preview => {
        preview.remove();
    });
}

// Notification Functions
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => notif.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }
    }, 4000);
}

function getNotificationIcon(type) {
    switch(type) {
        case 'success': return 'fa-check-circle';
        case 'error': return 'fa-exclamation-circle';
        case 'warning': return 'fa-exclamation-triangle';
        default: return 'fa-info-circle';
    }
}

function showLocationChangeNotification(location) {
    showNotification(`Location changed to ${location}. Loading available cars...`, 'success');
}

// Update the existing updateCarListingsForLocation function
function updateCarListingsForLocation(location) {
    // In a real app, this would fetch location-specific cars
    // For demo, we'll just show a message and update the count
    console.log(`Loading cars for ${location}...`);
    
    // Update area suggestions for new location
    updateAreaSuggestionsForLocation(location);
    
    // Simulate loading time
    const grid = document.getElementById('carGrid');
    if (grid) {
        grid.classList.add('loading');
        setTimeout(() => {
            grid.classList.remove('loading');
            // Reset filters and show all cars
            clearAllFilters();
        }, 1000);
    }
}

// Keyboard Navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        // Close any open modals
        document.querySelectorAll('.modal.show').forEach(modal => {
            modal.classList.remove('show');
        });
        
        // Close location dropdown
        const dropdown = document.getElementById('locationDropdown');
        const selector = document.querySelector('.location-selector');
        if (dropdown) dropdown.classList.remove('active');
        if (selector) selector.classList.remove('active');
        
        // Hide area suggestions
        hideAreaSuggestions();
        
        // Hide plan previews
        hidePlanPreview();
    }
});

// Important Points Acknowledgment Function
function acknowledgeImportantPoints() {
    const acknowledgeBtn = document.querySelector('.acknowledge-btn');
    
    if (acknowledgeBtn && !acknowledgeBtn.classList.contains('acknowledged')) {
        // Change button state
        acknowledgeBtn.innerHTML = '<i class="fas fa-check-double"></i> Points Acknowledged - Thank You!';
        acknowledgeBtn.classList.add('acknowledged');
        
        // Store acknowledgment in localStorage
        localStorage.setItem('importantPointsAcknowledged', 'true');
        localStorage.setItem('acknowledgmentTime', Date.now());
        
        // Show success notification
        showNotification('Important points acknowledged successfully!', 'success');
        
        // Add visual feedback with animation
        acknowledgeBtn.style.animation = 'pulseSuccess 1s ease-in-out';
        
        // Scroll to proceed button after acknowledgment
        setTimeout(() => {
            const proceedBtn = document.querySelector('.proceed-btn');
            if (proceedBtn) {
                proceedBtn.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
                
                // Add emphasis animation to proceed button
                proceedBtn.style.animation = 'emphasis 2s ease-in-out';
            }
        }, 1000);
    }
}

// Enhanced notification function
function showNotification(message, type = 'info') {
    // Remove any existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        padding: 15px 20px;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        max-width: 350px;
        display: flex;
        align-items: center;
        gap: 10px;
        transform: translateX(100%);
        opacity: 0;
        transition: all 0.3s ease;
    `;
    
    let bgColor = '#007bff';
    let icon = 'fas fa-info-circle';
    
    if (type === 'success') {
        bgColor = 'linear-gradient(135deg, #28a745, #20c997)';
        icon = 'fas fa-check-circle';
    } else if (type === 'error') {
        bgColor = 'linear-gradient(135deg, #dc3545, #e83e8c)';
        icon = 'fas fa-exclamation-circle';
    } else if (type === 'warning') {
        bgColor = 'linear-gradient(135deg, #ffc107, #fd7e14)';
        icon = 'fas fa-exclamation-triangle';
    }
    
    notification.style.background = bgColor;
    
    notification.innerHTML = `
        <i class="${icon}"></i>
        <span>${message}</span>
        <button style="background: rgba(255,255,255,0.2); border: none; color: inherit; cursor: pointer; padding: 5px 8px; border-radius: 4px; margin-left: 10px;" onclick="this.parentElement.remove()">×</button>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    }, 100);
    
    // Auto-remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 4000);
}

// Check if important points were already acknowledged
function checkImportantPointsAcknowledgment() {
    const acknowledged = localStorage.getItem('importantPointsAcknowledged');
    const acknowledgeTime = localStorage.getItem('acknowledgmentTime');
    
    // Reset acknowledgment after 24 hours
    if (acknowledged && acknowledgeTime) {
        const timeDiff = Date.now() - parseInt(acknowledgeTime);
        const twentyFourHours = 24 * 60 * 60 * 1000;
        
        if (timeDiff > twentyFourHours) {
            localStorage.removeItem('importantPointsAcknowledged');
            localStorage.removeItem('acknowledgmentTime');
            return false;
        }
        
        // If acknowledged within 24 hours, show acknowledged state
        const acknowledgeBtn = document.querySelector('.acknowledge-btn');
        if (acknowledgeBtn) {
            acknowledgeBtn.innerHTML = '<i class="fas fa-check-double"></i> Points Already Acknowledged';
            acknowledgeBtn.classList.add('acknowledged');
        }
        return true;
    }
    
    return false;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check acknowledgment status when page loads
    setTimeout(() => {
        checkImportantPointsAcknowledgment();
    }, 500);
});

// FAQ Toggle Functionality
function toggleFAQ(questionElement) {
    const faqItem = questionElement.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const arrow = questionElement.querySelector('.faq-arrow');
    
    // Close all other FAQ items
    const allFaqItems = document.querySelectorAll('.faq-item');
    allFaqItems.forEach(item => {
        if (item !== faqItem) {
            const otherQuestion = item.querySelector('.faq-question');
            const otherAnswer = item.querySelector('.faq-answer');
            const otherArrow = item.querySelector('.faq-arrow');
            
            otherQuestion.classList.remove('active');
            otherAnswer.classList.remove('active');
            if (otherArrow) {
                otherArrow.style.transform = 'rotate(0deg)';
            }
        }
    });
    
    // Toggle current FAQ item
    const isActive = questionElement.classList.contains('active');
    
    if (isActive) {
        // Close current FAQ
        questionElement.classList.remove('active');
        answer.classList.remove('active');
        arrow.style.transform = 'rotate(0deg)';
    } else {
        // Open current FAQ
        questionElement.classList.add('active');
        answer.classList.add('active');
        arrow.style.transform = 'rotate(180deg)';
        
        // Smooth scroll to FAQ item
        setTimeout(() => {
            questionElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }, 100);
        
        // Add emphasis animation
        faqItem.style.animation = 'faqEmphasize 0.6s ease-out';
        setTimeout(() => {
            faqItem.style.animation = '';
        }, 600);
    }
}

// Add FAQ keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.target.closest('.faq-question')) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleFAQ(event.target.closest('.faq-question'));
        }
    }
});

// Make FAQ questions focusable for accessibility
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.setAttribute('tabindex', '0');
        question.setAttribute('role', 'button');
        question.setAttribute('aria-expanded', 'false');
        
        // Update aria-expanded when toggled
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.attributeName === 'class') {
                    const isActive = question.classList.contains('active');
                    question.setAttribute('aria-expanded', isActive);
                }
            });
        });
        
        observer.observe(question, {
            attributes: true,
            attributeFilter: ['class']
        });
    });
});

// Delivery Options Functionality
function selectDeliveryOption(optionType, element) {
    // Remove active class from all delivery options
    const allOptions = document.querySelectorAll('.delivery-option');
    allOptions.forEach(option => {
        option.classList.remove('active');
        const radio = option.querySelector('input[type="radio"]');
        if (radio) radio.checked = false;
    });
    
    // Add active class to selected option
    element.classList.add('active');
    const selectedRadio = element.querySelector('input[type="radio"]');
    if (selectedRadio) selectedRadio.checked = true;
    
    // Update fare details based on selection
    updateDeliveryFare(optionType);
    
    // Show notification
    const optionTitle = element.querySelector('.option-title').textContent;
    showNotification(`${optionTitle} selected successfully!`, 'success');
    
    // Add emphasis animation
    element.style.animation = 'deliverySelect 0.6s ease-out';
    setTimeout(() => {
        element.style.animation = '';
    }, 600);
}

function updateDeliveryFare(optionType) {
    const deliveryFeeElement = document.getElementById('summaryDeliveryFee');
    const deliveryLabelElement = document.querySelector('.fare-item .fare-label');
    const totalElement = document.getElementById('summaryTotal');
    const baseFare = parseInt(document.getElementById('summaryBaseFare').textContent) || 1500;
    const depositAmount = parseInt(document.getElementById('summaryDeposit').textContent) || 2000;
    
    let deliveryFee = 0;
    let deliveryLabel = 'Doorstep delivery & pickup';
    
    if (optionType === 'self-pickup') {
        deliveryFee = 0;
        deliveryLabel = 'Self pickup (No delivery fee)';
        
        // Update the save banner to show current savings
        const saveBanner = document.querySelector('.save-money-banner span');
        if (saveBanner) {
            saveBanner.textContent = 'Self Pickup Selected - You Saved ₹500!';
        }
    } else if (optionType === 'home-delivery') {
        deliveryFee = 500;
        deliveryLabel = 'Doorstep delivery & pickup';
        
        // Reset save banner
        const saveBanner = document.querySelector('.save-money-banner span');
        if (saveBanner) {
            saveBanner.textContent = 'Pick Up Nearby & Save ₹500!';
        }
    }
    
    // Update delivery fee display
    if (deliveryFeeElement) {
        deliveryFeeElement.textContent = deliveryFee;
    }
    
    // Update delivery label
    const fareItems = document.querySelectorAll('.fare-item');
    fareItems.forEach(item => {
        const label = item.querySelector('.fare-label');
        if (label && (label.textContent.includes('delivery') || label.textContent.includes('pickup'))) {
            label.textContent = deliveryLabel;
            
            // Add visual feedback for the changed item
            item.style.animation = 'fareItemUpdate 0.8s ease-out';
            setTimeout(() => {
                item.style.animation = '';
            }, 800);
        }
    });
    
    // Update total amount
    const newTotal = baseFare + deliveryFee + depositAmount;
    if (totalElement) {
        totalElement.textContent = newTotal;
        
        // Add emphasis to total
        const totalItem = document.querySelector('.fare-total');
        if (totalItem) {
            totalItem.style.animation = 'totalUpdate 1s ease-out';
            setTimeout(() => {
                totalItem.style.animation = '';
            }, 1000);
        }
    }
}

// Close booking confirmation modal
function closeBookingConfirmation() {
    const confirmationModal = document.getElementById('bookingConfirmationModal');
    if (confirmationModal) {
        confirmationModal.style.display = 'none';
    }
}

// Toggle confirm button based on terms acceptance
function toggleConfirmButton() {
    const termsCheckbox = document.getElementById('confirm-terms');
    const confirmButton = document.querySelector('.final-confirm-btn');
    
    if (termsCheckbox && confirmButton) {
        confirmButton.disabled = !termsCheckbox.checked;
        if (termsCheckbox.checked) {
            confirmButton.classList.add('enabled');
        } else {
            confirmButton.classList.remove('enabled');
        }
    }
}

// Handle final booking confirmation
function finalConfirmBooking() {
    const termsCheckbox = document.getElementById('confirm-terms');
    
    if (!termsCheckbox || !termsCheckbox.checked) {
        alert('Please accept the terms and conditions to proceed with booking.');
        return;
    }
    
    // Close confirmation modal
    const confirmationModal = document.getElementById('bookingConfirmationModal');
    if (confirmationModal) {
        confirmationModal.style.display = 'none';
    }
    
    // Show success message
    alert('Booking confirmed successfully! You will receive a confirmation email shortly.');
    
    // Optional: Reset the form or redirect to a success page
    // For now, we'll just close all modals and return to main page
    const bookingModal = document.getElementById('bookingModal');
    if (bookingModal) {
        bookingModal.style.display = 'none';
    }
}

// Go back to booking summary (details page)
function goBackToSummary() {
    const confirmationModal = document.getElementById('bookingConfirmationModal');
    const summaryModal = document.getElementById('bookingSummaryModal');
    
    console.log('Going back to summary...');
    
    // Hide confirmation modal completely
    if (confirmationModal) {
        confirmationModal.classList.remove('show');
        confirmationModal.style.display = 'none';
        // Remove any inline styles that might interfere
        setTimeout(() => {
            confirmationModal.removeAttribute('style');
        }, 300);
    }
    
    // Show summary modal properly
    if (summaryModal) {
        summaryModal.style.display = 'block';
        summaryModal.classList.add('show');
        // Ensure it's visible
        setTimeout(() => {
            summaryModal.scrollTop = 0; // Scroll to top
        }, 100);
    }
    
    console.log('Returned to booking summary');
}

// Toggle confirm button based on terms acceptance
function toggleConfirmButton() {
    const termsCheckbox = document.getElementById('confirm-terms');
    const confirmButton = document.querySelector('.final-confirm-btn');
    
    if (termsCheckbox && confirmButton) {
        confirmButton.disabled = !termsCheckbox.checked;
        if (termsCheckbox.checked) {
            confirmButton.classList.add('enabled');
        } else {
            confirmButton.classList.remove('enabled');
        }
    }
}

// Handle final booking confirmation
function finalConfirmBooking() {
    const termsCheckbox = document.getElementById('confirm-terms');
    
    if (!termsCheckbox || !termsCheckbox.checked) {
        alert('Please accept the terms and conditions to proceed with booking.');
        return;
    }
    
    // Close confirmation modal
    const confirmationModal = document.getElementById('bookingConfirmationModal');
    if (confirmationModal) {
        confirmationModal.style.display = 'none';
    }
    
    // Show success message
    alert('Booking confirmed successfully! You will receive a confirmation email shortly.');
    
    // Optional: Reset the form or redirect to a success page
    // For now, we'll just close all modals and return to main page
    const bookingModal = document.getElementById('bookingModal');
    if (bookingModal) {
        bookingModal.style.display = 'none';
    }
}

// Voice Search functionality
let recognition;
let isListening = false;

// Initialize speech recognition
function initializeSpeechRecognition() {
    console.log('🔧 Initializing speech recognition...');
    
    if ('webkitSpeechRecognition' in window) {
        console.log('✅ Using webkitSpeechRecognition (Chrome/Edge)');
        recognition = new webkitSpeechRecognition();
    } else if ('SpeechRecognition' in window) {
        console.log('✅ Using SpeechRecognition (Firefox/Safari)');
        recognition = new SpeechRecognition();
    } else {
        console.error('❌ Speech recognition not supported in this browser');
        return false;
    }

    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-IN'; // Indian English
    
    console.log('⚙️ Speech recognition configured:', {
        continuous: recognition.continuous,
        interimResults: recognition.interimResults,
        lang: recognition.lang
    });

    recognition.onstart = function() {
        console.log('🎤 Speech recognition started - listening for voice input');
        isListening = true;
        const voiceBtn = document.getElementById('voiceSearchBtn');
        const micIcon = document.getElementById('micIcon');
        
        if (voiceBtn && micIcon) {
            voiceBtn.classList.add('listening');
            micIcon.className = 'fas fa-microphone-slash';
            voiceBtn.title = 'Listening... Click to stop';
            console.log('🔄 Updated UI - microphone button is now in listening state');
        } else {
            console.error('❌ Could not find voice button elements');
        }
        
        const searchInput = document.getElementById('areaSearchInput');
        if (searchInput) {
            searchInput.placeholder = 'Listening... Speak now!';
        } else {
            console.error('❌ Could not find search input element');
        }
    };

    recognition.onresult = function(event) {
        console.log('🎯 Speech recognition result received');
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            const confidence = event.results[i][0].confidence;
            
            console.log(`📝 Result ${i}: "${transcript}" (confidence: ${confidence}, final: ${event.results[i].isFinal})`);
            
            if (event.results[i].isFinal) {
                finalTranscript += transcript;
            } else {
                interimTranscript += transcript;
            }
        }

        const searchInput = document.getElementById('areaSearchInput');
        if (searchInput) {
            if (interimTranscript) {
                searchInput.value = finalTranscript + interimTranscript;
                searchInput.style.color = '#999';
                console.log('💬 Interim text displayed:', finalTranscript + interimTranscript);
            }
            
            if (finalTranscript) {
                const cleanText = finalTranscript.trim();
                searchInput.value = cleanText;
                searchInput.style.color = '#333';
                console.log('✅ Final speech result:', cleanText);
                
                // Trigger search
                if (typeof performAreaSearch === 'function') {
                    console.log('🔍 Triggering area search');
                    performAreaSearch();
                } else {
                    console.warn('⚠️ performAreaSearch function not found');
                }
                
                if (typeof showAreaSuggestions === 'function') {
                    console.log('💡 Showing area suggestions');
                    showAreaSuggestions();
                } else {
                    console.warn('⚠️ showAreaSuggestions function not found');
                }
            }
        } else {
            console.error('❌ Search input element not found');
        }
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
        stopVoiceSearch();
        
        let errorMessage = 'Voice search error. ';
        switch(event.error) {
            case 'network':
                errorMessage += 'Check your internet connection.';
                break;
            case 'not-allowed':
                errorMessage += 'Please allow microphone access.';
                break;
            case 'no-speech':
                errorMessage += 'No speech detected. Please try again.';
                break;
            default:
                errorMessage += 'Please try again.';
        }
        
        // Show error briefly
        const searchInput = document.getElementById('areaSearchInput');
        if (searchInput) {
            const originalPlaceholder = searchInput.placeholder;
            searchInput.placeholder = errorMessage;
            setTimeout(() => {
                searchInput.placeholder = originalPlaceholder;
            }, 3000);
        }
    };

    recognition.onend = function() {
        stopVoiceSearch();
    };

    return true;
}

// Start voice search
function startVoiceSearch() {
    console.log('🎤 Voice search button clicked');
    
    // Check if we're in a secure context (required for microphone)
    if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
        alert('Voice search requires HTTPS or localhost. Please use https:// or test on localhost.');
        return;
    }
    
    if (!recognition && !initializeSpeechRecognition()) {
        console.error('❌ Speech recognition initialization failed');
        alert('Voice search is not supported in your browser. Please use Chrome, Edge, or Safari.');
        return;
    }

    if (isListening) {
        console.log('🛑 Stopping current voice recognition');
        recognition.stop();
        return;
    }

    console.log('🔍 Requesting microphone access...');
    
    // Check microphone permissions
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function(stream) {
            console.log('✅ Microphone access granted');
            // Permission granted, start recognition
            stream.getTracks().forEach(track => track.stop()); // Stop the stream
            console.log('🚀 Starting speech recognition...');
            
            try {
                recognition.start();
            } catch (error) {
                console.error('❌ Error starting recognition:', error);
                alert('Failed to start voice recognition: ' + error.message);
            }
        })
        .catch(function(err) {
            console.error('❌ Microphone access denied:', err);
            alert('Please allow microphone access to use voice search. Error: ' + err.message);
        });
}

// Stop voice search
function stopVoiceSearch() {
    isListening = false;
    const voiceBtn = document.getElementById('voiceSearchBtn');
    const micIcon = document.getElementById('micIcon');
    const searchInput = document.getElementById('areaSearchInput');
    
    if (voiceBtn) {
        voiceBtn.classList.remove('listening', 'processing');
        voiceBtn.title = 'Voice Search';
    }
    
    if (micIcon) {
        micIcon.className = 'fas fa-microphone';
    }
    
    if (searchInput) {
        searchInput.style.color = '#333';
        if (searchInput.placeholder.includes('Listening')) {
            searchInput.placeholder = 'Search for area, landmark (e.g., KPHB, Gachibowli)';
        }
    }
}
