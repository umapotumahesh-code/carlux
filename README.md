# GOCARZ - Car Buying and Servicing Platform

A full-stack web application for buying, selling, and servicing cars with a Node.js/Express backend and modern frontend.

## Features

- 🚗 **Car Listing & Filtering**: Browse cars with advanced filters (brand, price, fuel type, etc.)
- 🔧 **Car Services**: Book various car services (AC repair, detailing, tire replacement, etc.)
- 👤 **User Authentication**: Login and registration system
- 📱 **Responsive Design**: Mobile-friendly Bootstrap-based UI
- 🌙 **Dark Mode**: Toggle between light and dark themes
- ⚡ **RESTful API**: Backend API with Express.js
- 🔍 **Search & Filter**: Advanced search functionality for cars

## Tech Stack

### Frontend
- HTML5, CSS3, JavaScript (ES6+)
- Bootstrap 5.3.3
- Font Awesome icons
- Animate.css for animations

### Backend
- Node.js
- Express.js
- CORS middleware
- RESTful API design

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone or navigate to the project directory**

2. **Install dependencies**
   ```bash
   npm install
   ```

### Running the Application

#### Development Mode (with auto-reload)
```bash
npm run dev
```

#### Production Mode
```bash
npm start
```

The server will start on **http://localhost:3000**

### Using the Application

1. Open your browser and navigate to `http://localhost:3000`
2. Browse the homepage, explore car listings, and services
3. Use the navigation menu to access different sections:
   - **Home**: Featured cars and company overview
   - **Categories**: Filter and search for cars
   - **Services**: View and book car services
   - **Contact Us**: Submit contact form
   - **Login**: User authentication

## API Endpoints

### Data Endpoints
- `GET /api/data` - Get all data (cars, services, testimonials)
- `GET /api/cars` - Get all cars
- `GET /api/cars/:id` - Get a specific car by ID
- `GET /api/cars/search/filter` - Search cars with filters
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get a specific service by ID
- `GET /api/testimonials` - Get all testimonials

### Form Submissions
- `POST /api/contact` - Submit contact form
- `POST /api/enquiry` - Submit car enquiry
- `POST /api/booking` - Book a car service
- `POST /api/register` - User registration
- `POST /api/login` - User login

### Query Parameters for Car Search
- `brand` - Filter by brand (array or single value)
- `fuel_type` - Filter by fuel type
- `body_type` - Filter by body type
- `min_price` - Minimum price
- `max_price` - Maximum price
- `min_year` - Minimum year
- `max_year` - Maximum year
- `max_km` - Maximum kilometers driven

**Example:**
```
GET /api/cars/search/filter?brand=Maruti&fuel_type=Petrol&max_price=1000000
```

## Project Structure

```
gocarz/
├── server.js              # Express server setup
├── package.json           # Dependencies and scripts
├── data.json              # Sample data (cars, services, testimonials)
├── index.html             # Homepage
├── categories.html        # Car listing page
├── services.html          # Services page
├── car-details.html       # Individual car details
├── service-*.html         # Individual service details
├── login.html             # Login page
├── register.html          # Registration page
├── contact.html           # Contact page
├── script.js              # Main frontend JavaScript
├── categories.js          # Categories page logic
├── login.js               # Login logic
├── register.js            # Registration logic
├── services-new.js        # Services logic
├── style.css              # Main stylesheet
├── categories.css         # Categories styles
├── services.css           # Services styles
├── services-new.css       # Additional services styles
├── login.css              # Login/register styles
├── services-details.css   # Service details styles
├── images/                # Image assets
└── TODO.md                # Project tasks
```

## Data Format

The application uses `data.json` as the data source. This file contains:
- **cars**: Array of car objects with details (brand, model, price, etc.)
- **services**: Array of service objects
- **testimonials**: Array of customer testimonials

## Features Overview

### Car Listings
- View all cars with detailed information
- Filter by brand, price range, fuel type, body type
- Filter by year and kilometers driven
- View individual car details with image gallery
- Submit car enquiry form

### Services
- Browse all available car services
- View detailed service information
- See pricing and process steps
- Read customer reviews
- Book services online

### User Features
- User registration and login
- Password reset functionality
- Remember me option
- Dark mode toggle
- Responsive navigation

## Development Notes

- The application includes fallback mechanisms to work without a backend server
- Login/registration currently uses localStorage for demo purposes
- Form submissions are logged to console and can be connected to a database
- All image paths use relative URLs

## Future Enhancements

- Database integration (MongoDB, PostgreSQL)
- User authentication with JWT tokens
- Email notifications
- Payment gateway integration
- Admin dashboard
- User profile management
- Advanced search and filtering
- Favorites/wishlist functionality
- Reviews and ratings system

## License

ISC

## Support

For issues or questions, please contact the development team.

