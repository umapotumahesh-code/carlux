# Quick Start Guide - GOCARZ

## 🚀 Launch the Application in 3 Simple Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start the Server
```bash
npm start
```

### Step 3: Open in Browser
Open your web browser and navigate to:
```
http://localhost:3000
```

That's it! The GOCARZ application is now running on your local machine.

---

## 📋 What You'll See

- **Homepage**: Featured cars, statistics, and testimonials
- **Categories**: Browse and filter cars by brand, price, fuel type, etc.
- **Services**: View and book car services
- **Contact**: Submit contact forms
- **Login/Register**: User authentication (demo mode)

## 🔧 Available Commands

- `npm start` - Start the server in production mode
- `npm run dev` - Start the server with auto-reload (requires nodemon)
- Press `Ctrl+C` in the terminal to stop the server

## 📡 API Endpoints

The application exposes a RESTful API at `http://localhost:3000/api`:

### Data Endpoints
- `GET /api/data` - All data (cars, services, testimonials)
- `GET /api/cars` - All cars
- `GET /api/cars/:id` - Specific car details
- `GET /api/services` - All services
- `GET /api/services/:id` - Specific service details
- `GET /api/testimonials` - All testimonials

### Form Endpoints
- `POST /api/contact` - Submit contact form
- `POST /api/enquiry` - Submit car enquiry
- `POST /api/booking` - Book a service
- `POST /api/register` - User registration
- `POST /api/login` - User login

## 🎯 Testing the API

You can test the API using curl or any HTTP client:

```bash
# Get all cars
curl http://localhost:3000/api/cars

# Get a specific car
curl http://localhost:3000/api/cars/1

# Search cars with filters
curl "http://localhost:3000/api/cars/search/filter?brand=Maruti&fuel_type=Petrol"
```

## 🐛 Troubleshooting

### Port 3000 is already in use
If you get an error that port 3000 is in use, you can:
1. Change the port in `server.js` or
2. Set the PORT environment variable:
   ```bash
   PORT=8080 npm start
   ```

### Dependencies not installing
Make sure you have Node.js (v14+) installed:
```bash
node --version
npm --version
```

### Server won't start
Check the terminal for error messages and ensure all dependencies are installed:
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Next Steps

- Check out `README.md` for full documentation
- Explore the codebase in `server.js` for backend logic
- Modify `data.json` to add your own cars and services
- Connect to a database for production use

## 💡 Tips

- The application works offline with static files when the server is not running
- All form submissions are currently logged to the console
- For production deployment, add database integration and authentication
- Consider using environment variables for configuration

Happy coding! 🎉

