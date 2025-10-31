const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the root directory
app.use(express.static(__dirname));

// Read data.json file
const getData = () => {
    try {
        const data = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading data.json:', error);
        return { cars: [], services: [], testimonials: [] };
    }
};

// Save data.json file
const saveData = (data) => {
    try {
        fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 4), 'utf8');
        return true;
    } catch (error) {
        console.error('Error saving data.json:', error);
        return false;
    }
};

// ============================================
// API ROUTES
// ============================================

// Get all data
app.get('/api/data', (req, res) => {
    const data = getData();
    res.json(data);
});

// Get all cars
app.get('/api/cars', (req, res) => {
    const data = getData();
    res.json(data.cars);
});

// Get a specific car by ID
app.get('/api/cars/:id', (req, res) => {
    const data = getData();
    const car = data.cars.find(c => c.id === parseInt(req.params.id));
    
    if (!car) {
        return res.status(404).json({ error: 'Car not found' });
    }
    
    res.json(car);
});

// Get all services
app.get('/api/services', (req, res) => {
    const data = getData();
    res.json(data.services);
});

// Get a specific service by ID
app.get('/api/services/:id', (req, res) => {
    const data = getData();
    const service = data.services.find(s => s.id === parseInt(req.params.id));
    
    if (!service) {
        return res.status(404).json({ error: 'Service not found' });
    }
    
    res.json(service);
});

// Get testimonials
app.get('/api/testimonials', (req, res) => {
    const data = getData();
    res.json(data.testimonials);
});

// Search cars with filters
app.get('/api/cars/search/filter', (req, res) => {
    const data = getData();
    let filteredCars = data.cars;
    
    // Apply filters
    if (req.query.brand) {
        const brands = Array.isArray(req.query.brand) ? req.query.brand : [req.query.brand];
        filteredCars = filteredCars.filter(car => brands.includes(car.brand));
    }
    
    if (req.query.fuel_type) {
        const fuelTypes = Array.isArray(req.query.fuel_type) ? req.query.fuel_type : [req.query.fuel_type];
        filteredCars = filteredCars.filter(car => fuelTypes.includes(car.fuel_type));
    }
    
    if (req.query.body_type) {
        const bodyTypes = Array.isArray(req.query.body_type) ? req.query.body_type : [req.query.body_type];
        filteredCars = filteredCars.filter(car => bodyTypes.includes(car.body_type));
    }
    
    if (req.query.min_price) {
        filteredCars = filteredCars.filter(car => car.price_in_inr >= parseInt(req.query.min_price));
    }
    
    if (req.query.max_price) {
        filteredCars = filteredCars.filter(car => car.price_in_inr <= parseInt(req.query.max_price));
    }
    
    if (req.query.min_year) {
        filteredCars = filteredCars.filter(car => car.year >= parseInt(req.query.min_year));
    }
    
    if (req.query.max_year) {
        filteredCars = filteredCars.filter(car => car.year <= parseInt(req.query.max_year));
    }
    
    if (req.query.max_km) {
        filteredCars = filteredCars.filter(car => car.km_driven <= parseInt(req.query.max_km));
    }
    
    res.json(filteredCars);
});

// Contact form submission
app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required' });
    }
    
    // In a real application, you would save this to a database or send an email
    console.log('Contact form submission:', { name, email, subject, message });
    
    res.json({ success: true, message: 'Thank you for your message. We will get back to you soon.' });
});

// Car enquiry form submission
app.post('/api/enquiry', (req, res) => {
    const { name, email, phone, message, carId } = req.body;
    
    // Basic validation
    if (!name || !email || !message || !carId) {
        return res.status(400).json({ error: 'Name, email, message, and car ID are required' });
    }
    
    // In a real application, you would save this to a database
    console.log('Car enquiry form submission:', { name, email, phone, message, carId });
    
    res.json({ success: true, message: 'Thank you for your enquiry. We will contact you shortly.' });
});

// Service booking form submission
app.post('/api/booking', (req, res) => {
    const { name, email, phone, serviceDate, serviceTime, serviceId, message } = req.body;
    
    // Basic validation
    if (!name || !email || !phone || !serviceDate || !serviceTime || !serviceId) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    
    // In a real application, you would save this to a database
    console.log('Service booking form submission:', { name, email, phone, serviceDate, serviceTime, serviceId, message });
    
    res.json({ success: true, message: 'Service booking confirmed. We will send you a confirmation email shortly.' });
});

// User registration
app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;
    
    // Basic validation
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Name, email, and password are required' });
    }
    
    if (password.length < 6) {
        return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }
    
    // In a real application, you would hash the password and save to a database
    console.log('User registration:', { name, email });
    
    res.json({ success: true, message: 'Account created successfully. Please login to continue.' });
});

// User login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    
    // Basic validation
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }
    
    // In a real application, you would verify credentials from a database
    console.log('User login attempt:', { username });
    
    // For demo purposes, accept any valid credentials
    res.json({ 
        success: true, 
        message: 'Login successful',
        user: {
            id: 1,
            name: 'Demo User',
            email: username
        }
    });
});

// Default route - serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle 404 for API routes
app.use('/api/*', (req, res) => {
    res.status(404).json({ error: 'API endpoint not found' });
});

// Handle 404 for all other routes
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`\n🚀 GOCARZ server is running on http://localhost:${PORT}`);
    console.log(`📂 Serving static files from: ${__dirname}`);
    console.log(`🔗 API endpoints available at: http://localhost:${PORT}/api`);
    console.log(`\nPress Ctrl+C to stop the server\n`);
});

