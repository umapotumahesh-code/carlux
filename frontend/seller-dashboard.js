// seller-dashboard.js - Handle seller dashboard functionality

(function(){
    // Get logged in user
    const token = localStorage.getItem('carlux_token');
    const user = JSON.parse(localStorage.getItem('carlux_user') || 'null');
    if (!token || !user || user.accountType !== 'seller') {
        alert('Please login as a seller to access this page.');
        location.href = 'login.html';
        return;
    }

    // Get seller's cars from the server
    async function getSellerCars() {
        try {
            const response = await fetch('/api/cars/seller/' + user.id);
            const cars = await response.json();
            return cars;
        } catch (error) {
            console.error('Error fetching seller cars:', error);
            return [];
        }
    }

    // Generate unique ID for new car
    function generateCarId() {
        return Date.now() + Math.random().toString(36).substr(2, 9);
    }

    // Add car form submission
    const addCarForm = document.getElementById('add-car-form');
    addCarForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const carData = {
            brand: document.getElementById('brand').value.trim(),
            model: document.getElementById('model').value.trim(),
            year: parseInt(document.getElementById('year').value),
            price_in_inr: parseInt(document.getElementById('price').value),
            km_driven: parseInt(document.getElementById('km-driven').value),
            fuel_type: document.getElementById('fuel-type').value,
            transmission: document.getElementById('transmission').value,
            body_type: document.getElementById('body-type').value,
            color: document.getElementById('color').value.trim(),
            location: document.getElementById('location').value.trim(),
            seats: parseInt(document.getElementById('seats').value),
            engine_type: document.getElementById('engine-type').value.trim(),
            mileage: document.getElementById('mileage').value.trim(),
            owner_type: document.getElementById('owner-type').value,
            features: document.getElementById('features').value.split(',').map(f => f.trim()).filter(f => f),
            image_urls: document.getElementById('image-urls').value.split(',').map(url => url.trim()).filter(url => url),
            short_specs: `${document.getElementById('fuel-type').value} | ${document.getElementById('transmission').value} | ${document.getElementById('km-driven').value} KM`
        };

        // Validate required fields
        const requiredFields = ['brand', 'model', 'year', 'price_in_inr', 'km_driven', 'fuel_type', 'transmission', 'body_type', 'color', 'location', 'seats', 'engine_type', 'mileage', 'owner_type'];
        const isValid = requiredFields.every(field => carData[field] !== '' && carData[field] !== null && carData[field] !== undefined);

        if (!isValid) {
            alert('Please fill in all required fields.');
            return;
        }

        try {
            const response = await fetch('/api/cars', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(carData),
            });

            if (!response.ok) {
                throw new Error('Failed to add car');
            }

            // Reset form
            addCarForm.reset();

            // Refresh cars list
            renderCarsList();

            alert('Car added successfully!');
        } catch (error) {
            console.error('Error adding car:', error);
            alert('Failed to add car. Please try again.');
        }
    });

    // Render cars list
    async function renderCarsList() {
        const carsList = document.getElementById('cars-list');
        const sellerCars = await getSellerCars();

        if (sellerCars.length === 0) {
            carsList.innerHTML = '<div class="col-12"><p class="text-muted">No cars added yet.</p></div>';
            return;
        }

        carsList.innerHTML = sellerCars.map(car => `
            <div class="col-md-6 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${car.brand} ${car.model} (${car.year})</h5>
                        <p class="card-text">Price: ₹${car.price_in_inr.toLocaleString('en-IN')}</p>
                        <p class="card-text">Location: ${car.location}</p>
                        <button class="btn btn-sm btn-warning me-2" onclick="editCar('${car._id}')">Edit</button>
                        <button class="btn btn-sm btn-danger" onclick="deleteCar('${car._id}')">Delete</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Edit car function
    window.editCar = async function(carId) {
        const sellerCars = await getSellerCars();
        const car = sellerCars.find(c => c._id === carId);
        if (!car) return;

        // Populate form with car data
        document.getElementById('brand').value = car.brand;
        document.getElementById('model').value = car.model;
        document.getElementById('year').value = car.year;
        document.getElementById('price').value = car.price_in_inr;
        document.getElementById('km-driven').value = car.km_driven;
        document.getElementById('fuel-type').value = car.fuel_type;
        document.getElementById('transmission').value = car.transmission;
        document.getElementById('body-type').value = car.body_type;
        document.getElementById('color').value = car.color;
        document.getElementById('location').value = car.location;
        document.getElementById('seats').value = car.seats;
        document.getElementById('engine-type').value = car.engine_type;
        document.getElementById('mileage').value = car.mileage;
        document.getElementById('owner-type').value = car.owner_type;
        document.getElementById('features').value = car.features.join(', ');
        document.getElementById('image-urls').value = car.image_urls.join(', ');

        // Change submit button to update
        const submitBtn = addCarForm.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Update Car';
        submitBtn.onclick = function(e) {
            e.preventDefault();
            updateCar(carId);
        };
    };

    // Update car function
    async function updateCar(carId) {
        const updatedCar = {
            brand: document.getElementById('brand').value.trim(),
            model: document.getElementById('model').value.trim(),
            year: parseInt(document.getElementById('year').value),
            price_in_inr: parseInt(document.getElementById('price').value),
            km_driven: parseInt(document.getElementById('km-driven').value),
            fuel_type: document.getElementById('fuel-type').value,
            transmission: document.getElementById('transmission').value,
            body_type: document.getElementById('body-type').value,
            color: document.getElementById('color').value.trim(),
            location: document.getElementById('location').value.trim(),
            seats: parseInt(document.getElementById('seats').value),
            engine_type: document.getElementById('engine-type').value.trim(),
            mileage: document.getElementById('mileage').value.trim(),
            owner_type: document.getElementById('owner-type').value,
            features: document.getElementById('features').value.split(',').map(f => f.trim()).filter(f => f),
            image_urls: document.getElementById('image-urls').value.split(',').map(url => url.trim()).filter(url => url),
            short_specs: `${document.getElementById('fuel-type').value} | ${document.getElementById('transmission').value} | ${document.getElementById('km-driven').value} KM`
        };

        try {
            const response = await fetch(`/api/cars/${carId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(updatedCar),
            });

            if (!response.ok) {
                throw new Error('Failed to update car');
            }

            // Reset form
            addCarForm.reset();
            const submitBtn = addCarForm.querySelector('button[type="submit"]');
            submitBtn.textContent = 'Add Car';
            submitBtn.onclick = null;

            // Refresh cars list
            renderCarsList();

            alert('Car updated successfully!');
        } catch (error) {
            console.error('Error updating car:', error);
            alert('Failed to update car. Please try again.');
        }
    }

    // Delete car function
    window.deleteCar = async function(carId) {
        if (!confirm('Are you sure you want to delete this car?')) return;

        try {
            const response = await fetch(`/api/cars/${carId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to delete car');
            }

            // Refresh cars list
            renderCarsList();

            alert('Car deleted successfully!');
        } catch (error) {
            console.error('Error deleting car:', error);
            alert('Failed to delete car. Please try again.');
        }
    };

    // Logout functionality
    document.getElementById('logout-link').addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('carlux_token');
        localStorage.removeItem('carlux_user');
        location.href = 'login.html';
    });

    // Initial render
    renderCarsList();
})();
