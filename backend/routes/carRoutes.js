const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/cars', carController.getAllCars);
router.get('/cars/:carId', carController.getCarById);
router.post('/cars', authMiddleware, carController.createCar);
router.get('/cars/seller/:sellerId', carController.getCarsBySeller);
router.put('/cars/:carId', authMiddleware, carController.updateCar);
router.delete('/cars/:carId', authMiddleware, carController.deleteCar);

module.exports = router;
