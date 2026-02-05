require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const User = require('./models/User');
const carRoutes = require('./routes/carRoutes');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
const PORT = process.env.PORT || 4000;

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api', carRoutes);

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../frontend')));

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
app.post('/api/register', async (req, res) => {
    try {
        const { name, email, password, accountType } = req.body;

        // Basic validation
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Name, email, and password are required' });
        }

        if (password.length < 6) {
            return res.status(400).json({ error: 'Password must be at least 6 characters' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return res.status(400).json({ error: 'An account with this email already exists' });
        }

        // Create new user
        const user = new User({
            name: name.trim(),
            email: email.toLowerCase().trim(),
            password,
            accountType: accountType || 'customer'
        });

        await user.save();

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email, accountType: user.accountType },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '7d' }
        );

        res.status(201).json({
            success: true,
            message: 'Account created successfully',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                accountType: user.accountType
            }
        });

    } catch (error) {
        console.error('Registration error:', error);
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ error: messages.join(', ') });
        }
        res.status(500).json({ error: 'Server error during registration' });
    }
});

// User login
app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Basic validation
        if (!username || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        // Find user by email
        const user = await User.findOne({ email: username.toLowerCase() }).select('+password');
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Check password
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Update last login
        user.lastLogin = new Date();
        await user.save();

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email, accountType: user.accountType },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '7d' }
        );

        res.json({
            success: true,
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                accountType: user.accountType
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Server error during login' });
    }
});

// Get current user profile (protected route)
app.get('/api/profile', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                accountType: user.accountType,
                createdAt: user.createdAt,
                lastLogin: user.lastLogin
            }
        });
    } catch (error) {
        console.error('Profile fetch error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Default route - serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Handle 404 for API routes
app.use('/api/*', (req, res) => {
    res.status(404).json({ error: 'API endpoint not found' });
});

// Chatbot endpoint
app.post('/api/chatbot', async (req, res) => {
    const { message, source } = req.body || {};

    if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Message is required' });
    }

    const apiKey = process.env.CHATBOT_API_KEY;

    // Basic fallback response when no API key is configured
    if (!apiKey) {
        return res.json({
            reply: `Thanks for reaching out${source ? ` from ${source}` : ''}! I’m here to help with car services, bookings, and general questions. Please contact support if you need more details.`
        });
    }

    try {
        // Example placeholder call to an LLM provider. Replace with your provider endpoint.
        // This uses axios to demonstrate server-side proxying so the API key remains hidden from the frontend.
        const llmResponse = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: 'You are a helpful support bot for a car services platform called CARLUX. Keep answers concise and friendly.' },
                    { role: 'user', content: message }
                ]
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${apiKey}`
                },
                timeout: 15000
            }
        );

        const reply = llmResponse.data?.choices?.[0]?.message?.content?.trim();

        if (!reply) {
            return res.status(502).json({ error: 'Chatbot returned an empty response' });
        }

        res.json({ reply });
    } catch (error) {
        console.error('Chatbot error:', error.response?.data || error.message);
        res.status(500).json({ error: 'Unable to process chatbot request right now.' });
    }
});

// Chatbot endpoint
app.post('/api/chatbot', async (req, res) => {
    const { message, source } = req.body || {};

    if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Message is required' });
    }

    const apiKey = process.env.CHATBOT_API_KEY;

    // Basic fallback response when no API key is configured
    if (!apiKey) {
        return res.json({
            reply: `Thanks for reaching out${source ? ` from ${source}` : ''}! I’m here to help with car services, bookings, and general questions. Please contact support if you need more details.`
        });
    }

    try {
        // Example placeholder call to an LLM provider. Replace with your provider endpoint.
        // This uses axios to demonstrate server-side proxying so the API key remains hidden from the frontend.
        const llmResponse = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: 'You are a helpful support bot for a car services platform called CARLUX. Keep answers concise and friendly.' },
                    { role: 'user', content: message }
                ]
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${apiKey}`
                },
                timeout: 15000
            }
        );

        const reply = llmResponse.data?.choices?.[0]?.message?.content?.trim();

        if (!reply) {
            return res.status(502).json({ error: 'Chatbot returned an empty response' });
        }

        res.json({ reply });
    } catch (error) {
        console.error('Chatbot error:', error.response?.data || error.message);
        res.status(500).json({ error: 'Unable to process chatbot request right now.' });
    }
});

// Handle 404 for all other routes
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Connect to database and start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`\n🚀 CARLUX server is running on http://localhost:${PORT}`);
        console.log(`📂 Serving static files from: ${path.join(__dirname, '../frontend')}`);
        console.log(`🔗 API endpoints available at: http://localhost:${PORT}/api`);
        console.log(`🗄️  Database: MongoDB connected`);
        console.log(`\nPress Ctrl+C to stop the server\n`);
    });
}).catch(error => {
    console.error('Failed to start server:', error);
    process.exit(1);
});
