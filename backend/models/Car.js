const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
    },
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    price_in_inr: {
        type: Number,
        required: true,
    },
    km_driven: {
        type: Number,
        required: true,
    },
    fuel_type: {
        type: String,
        required: true,
    },
    transmission: {
        type: String,
        required: true,
    },
    body_type: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    seats: {
        type: Number,
        required: true,
    },
    engine_type: {
        type: String,
        required: true,
    },
    mileage: {
        type: String,
        required: true,
    },
    owner_type: {
        type: String,
        required: true,
    },
    features: [{
        type: String,
    }],
    image_urls: [{
        type: String,
    }],
    short_specs: {
        type: String,
    },
    status: {
        type: String,
        enum: ['available', 'sold', 'pending'],
        default: 'available',
    },
}, { timestamps: true });

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
