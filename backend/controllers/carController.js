const Car = require('../models/Car');

// Create a new car listing
exports.createCar = async (req, res) => {
    console.log('Creating car with body:', req.body);
    console.log('User from token:', req.user);
    try {
        const car = new Car({
            ...req.body,
            sellerId: req.user.userId, // Assuming req.user is populated by auth middleware
        });
        await car.save();
        res.status(201).json(car);
    } catch (error) {
        console.error('Error creating car:', error);
        res.status(400).json({ message: error.message });
    }
};

// Get all cars
exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific car by ID
exports.getCarById = async (req, res) => {
    try {
        const car = await Car.findById(req.params.carId);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.json(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Retrieve all car listings for a specific seller
exports.getCarsBySeller = async (req, res) => {
    try {
        const cars = await Car.find({ sellerId: req.params.sellerId });
        if (!cars) {
            return res.status(404).json({ message: 'No cars found for this seller' });
        }
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a specific car listing
exports.updateCar = async (req, res) => {
    try {
        const car = await Car.findById(req.params.carId);

        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }

        // Ensure the request is from the owner
        if (car.sellerId.toString() !== req.user.userId.toString()) {
            return res.status(403).json({ message: 'User not authorized to update this listing' });
        }

        Object.assign(car, req.body);
        await car.save();
        res.json(car);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a specific car listing
exports.deleteCar = async (req, res) => {
    try {
        const car = await Car.findById(req.params.carId);

        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }

        // Ensure the request is from the owner
        if (car.sellerId.toString() !== req.user.userId.toString()) {
            return res.status(403).json({ message: 'User not authorized to delete this listing' });
        }

        await Car.findByIdAndDelete(req.params.carId);
        res.json({ message: 'Car listing deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
