const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');
const authMiddleware = require('../middleware/authMiddleware'); // Assuming auth middleware exists

// Retrieve all car listings
router.get('/cars', carController.getAllCars);

// Retrieve a specific car by ID
router.get('/cars/:carId', carController.getCarById);

// Create a new car listing
router.post('/cars', authMiddleware, carController.createCar);

// Retrieve all car listings for a specific seller
router.get('/cars/seller/:sellerId', carController.getCarsBySeller);

// Update a specific car listing
router.put('/cars/:carId', authMiddleware, carController.updateCar);

// Delete a specific car listing
router.delete('/cars/:carId', authMiddleware, carController.deleteCar);

module.exports = router;
