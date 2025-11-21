// Complete Car Rental JavaScript with Microphone Integration

// Car Data - You can replace this with your existing car array
const cars = [
    { id: 1, brand: "Maruti", model: "Alto K10", fuel: "petrol", transmission: "manual", seats: 4, price: 2500 },
    { id: 2, brand: "Hyundai", model: "i20", fuel: "diesel", transmission: "manual", seats: 5, price: 3500 },
    { id: 3, brand: "Maruti", model: "Swift", fuel: "petrol", transmission: "automatic", seats: 5, price: 3200 },
    { id: 4, brand: "Toyota", model: "Innova", fuel: "diesel", transmission: "manual", seats: 7, price: 5500 },
    { id: 5, brand: "Honda", model: "City", fuel: "petrol", transmission: "automatic", seats: 5, price: 4200 },
    { id: 6, brand: "Mahindra", model: "Scorpio", fuel: "diesel", transmission: "manual", seats: 7, price: 4800 },
    { id: 7, brand: "Tata", model: "Nexon", fuel: "petrol", transmission: "automatic", seats: 5, price: 3800 },
    { id: 8, brand: "Hyundai", model: "Creta", fuel: "diesel", transmission: "automatic", seats: 5, price: 4500 },
    { id: 9, brand: "Maruti", model: "Baleno", fuel: "petrol", transmission: "manual", seats: 5, price: 3000 },
    { id: 10, brand: "Ford", model: "EcoSport", fuel: "diesel", transmission: "automatic", seats: 5, price: 4000 }
];

// DOM Elements
const searchBar = document.getElementById('searchBar');
const micButton = document.getElementById('micButton');
const micIcon = document.getElementById('micIcon');
const searchButton = document.getElementById('searchButton');
const carsGrid = document.getElementById('carsGrid');
const carsCount = document.getElementById('carsCount');
const statusMessage = document.getElementById('statusMessage');

// Global Variables
let filteredCars = [...cars];
let recognition;
let isListening = false;

// Initialize Speech Recognition
function initializeSpeechRecognition() {
    if ('webkitSpeechRecognition' in window) {
        recognition = new webkitSpeechRecognition();
    } else if ('SpeechRecognition' in window) {
        recognition = new SpeechRecognition();
    } else {
        showStatusMessage('Voice search is not supported in your browser. Please use Chrome, Edge, or Safari.', 'error');
        return false;
    }

    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = function() {
        isListening = true;
        micButton.classList.add('listening');
        micIcon.className = 'fas fa-microphone-slash';
        searchBar.placeholder = 'Listening... Speak now!';
        showStatusMessage('🎤 Listening... Speak your search query', 'listening');
    };

    recognition.onresult = function(event) {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
                finalTranscript += transcript;
            } else {
                interimTranscript += transcript;
            }
        }

        // Show interim results
        if (interimTranscript) {
            searchBar.value = finalTranscript + interimTranscript;
            searchBar.style.color = '#999';
        }

        // Process final results
        if (finalTranscript) {
            searchBar.value = finalTranscript.trim();
            searchBar.style.color = '#333';
            showStatusMessage(`✅ Voice input captured: "${finalTranscript.trim()}"`, 'success');
            
            // Trigger search after a brief delay
            setTimeout(() => {
                searchCars();
                hideStatusMessage();
            }, 1000);
        }
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
        stopVoiceSearch();
        
        let errorMessage = 'Voice search error. ';
        switch(event.error) {
            case 'network':
                errorMessage += 'Please check your internet connection.';
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
        
        showStatusMessage(errorMessage, 'error');
        setTimeout(hideStatusMessage, 3000);
    };

    recognition.onend = function() {
        stopVoiceSearch();
    };

    return true;
}

// Start Voice Search
function startVoiceSearch() {
    if (!recognition && !initializeSpeechRecognition()) {
        return;
    }

    if (isListening) {
        recognition.stop();
        return;
    }

    // Check microphone permissions
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function(stream) {
            // Permission granted, stop the stream and start recognition
            stream.getTracks().forEach(track => track.stop());
            recognition.start();
        })
        .catch(function(err) {
            console.error('Microphone access denied:', err);
            showStatusMessage('Please allow microphone access to use voice search.', 'error');
            setTimeout(hideStatusMessage, 3000);
        });
}

// Stop Voice Search
function stopVoiceSearch() {
    isListening = false;
    micButton.classList.remove('listening');
    micIcon.className = 'fas fa-microphone';
    searchBar.style.color = '#333';
    searchBar.placeholder = 'Search for cars by brand, model, or fuel type...';
}

// Show Status Message
function showStatusMessage(message, type = 'success') {
    if (statusMessage) {
        statusMessage.innerHTML = message;
        statusMessage.className = `status-message ${type}`;
        statusMessage.style.display = 'block';
    }
}

// Hide Status Message
function hideStatusMessage() {
    if (statusMessage) {
        statusMessage.style.display = 'none';
    }
}

// Search Cars Function - This is your main search logic
function searchCars() {
    const searchTerm = searchBar.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredCars = [...cars];
    } else {
        filteredCars = cars.filter(car => 
            car.brand.toLowerCase().includes(searchTerm) ||
            car.model.toLowerCase().includes(searchTerm) ||
            car.fuel.toLowerCase().includes(searchTerm) ||
            car.transmission.toLowerCase().includes(searchTerm)
        );
    }
    
    renderCars();
    updateCarsCount();
}

// Render Cars - This renders your car cards
function renderCars() {
    if (!carsGrid) return;
    
    carsGrid.innerHTML = '';
    
    if (filteredCars.length === 0) {
        carsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-car"></i>
                <h3>No cars found</h3>
                <p>Try searching with different keywords</p>
            </div>
        `;
        return;
    }
    
    filteredCars.forEach(car => {
        const carCard = createCarCard(car);
        carsGrid.appendChild(carCard);
    });
}

// Create Car Card - You can customize this to match your existing design
function createCarCard(car) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'car-card';
    cardDiv.innerHTML = `
        <div class="car-image">
            <i class="fas fa-car"></i>
        </div>
        <div class="car-details">
            <div class="car-header">
                <div>
                    <div class="car-brand">${car.brand}</div>
                    <div class="car-model">${car.model}</div>
                </div>
                <div class="car-price">₹${car.price}/day</div>
            </div>
            <div class="car-specs">
                <div class="spec-item">
                    <i class="fas fa-gas-pump"></i>
                    <span>${car.fuel}</span>
                </div>
                <div class="spec-item">
                    <i class="fas fa-cog"></i>
                    <span>${car.transmission}</span>
                </div>
                <div class="spec-item">
                    <i class="fas fa-users"></i>
                    <span>${car.seats} seats</span>
                </div>
            </div>
            <button class="book-btn" onclick="bookCar(${car.id})">
                <i class="fas fa-calendar-check"></i> Book Now
            </button>
        </div>
    `;
    return cardDiv;
}

// Update Cars Count
function updateCarsCount() {
    if (carsCount) {
        const count = filteredCars.length;
        carsCount.textContent = `${count} car${count !== 1 ? 's' : ''} found`;
    }
}

// Book Car Function - Replace with your existing booking logic
function bookCar(carId) {
    const car = cars.find(c => c.id === carId);
    if (car) {
        alert(`Booking ${car.brand} ${car.model} for ₹${car.price}/day`);
        // Add your booking logic here
    }
}

// Initialize Everything When DOM is Ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Car Rental App with Voice Search...');
    
    // Initialize speech recognition
    initializeSpeechRecognition();
    
    // Initial render
    renderCars();
    updateCarsCount();
    
    // Event Listeners
    if (searchBar) {
        // Search input event - triggers on every keystroke
        searchBar.addEventListener('input', searchCars);
        
        // Enter key press
        searchBar.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchCars();
            }
        });
    }
    
    // Search button click
    if (searchButton) {
        searchButton.addEventListener('click', searchCars);
    }
    
    // Microphone button click
    if (micButton) {
        micButton.addEventListener('click', startVoiceSearch);
    }
    
    console.log('Car rental app initialized successfully!');
    console.log(`Loaded ${cars.length} cars`);
});

// Export functions if you need to use them elsewhere
window.searchCars = searchCars;
window.renderCars = renderCars;
window.startVoiceSearch = startVoiceSearch;
window.bookCar = bookCar;