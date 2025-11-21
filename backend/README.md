# Car Rental Website - Revv Clone

This is a complete car rental website that replicates the design and functionality of Revv.co.in. The website includes all the features shown in your screenshot with exact alignment and styling.

## Features

### ✅ Complete UI Match
- **Header**: Logo, navigation menu, user profile section
- **Search Bar**: Location selector, date/time pickers, modify search button
- **Plans Section**: Km plans and fuel plans with interactive selection
- **Filters Sidebar**: Segment, brand, fuel type, and transmission filters
- **Car Listings**: Grid layout with car cards matching the original design
- **Promotional Banner**: Special offers section with call-to-action

### ✅ Full Functionality
- **Real-time Filtering**: Filter cars by segment, brand, fuel, transmission
- **Sorting**: Sort by price (low to high, high to low) and popularity
- **Interactive Plans**: Switch between different km and fuel plans
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Search & Clear**: Clear all filters functionality
- **Booking System**: Click-to-book functionality for each car
- **Dynamic Content**: Real car data with pricing and specifications

### ✅ Exact Design Elements
- **Colors**: Matching blue (#00b4d8) theme and color scheme
- **Typography**: Same font weights, sizes, and spacing
- **Layout**: Identical grid system and component positioning
- **Icons**: Font Awesome icons matching the original
- **Cards**: Car cards with discount badges, pricing, and specifications
- **Buttons**: Same styling for book buttons and other CTAs

## Files Structure

```
rental/
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS styling
├── script.js           # All JavaScript functionality
├── images/             # Car placeholder images
│   └── car-placeholder.svg
└── README.md           # This file
```

## How to Run

1. **Using Node.js (Recommended)**:
   ```bash
   cd rental
   npx http-server -p 3000
   ```
   Open: http://localhost:3000

2. **Using Python**:
   ```bash
   cd rental
   python -m http.server 3000
   ```
   Open: http://localhost:3000

3. **Direct File Opening**:
   Simply double-click `index.html` (some features may be limited)

## Current Features Working

### ✅ Filtering System
- Filter by car segment (Hatchback, Sedan, SUV, MUV)
- Filter by brand (Maruti, Hyundai, Mahindra, Kia, Tata, Toyota, Honda)
- Filter by fuel type (Petrol, Diesel)
- Filter by transmission (Manual, Automatic)
- Real-time filter updates with car count

### ✅ Interactive Elements
- Plan selection (Km plans: 395, 576, 720 kms)
- Fuel plan toggle (With/Without fuel)
- Sort functionality (Price low-high, high-low, popularity)
- Clear all filters
- Book button for each car

### ✅ Car Data
- 8 different car models with realistic pricing
- Proper specifications (fuel, transmission, seating)
- Discount badges and promotional offers
- Fresh fleet indicators

### ✅ Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Collapsible navigation on mobile
- Flexible grid layouts

## Car Database

The website includes these cars with exact pricing from your screenshot:
- **Maruti Alto K10**: ₹4,499/day (15% discount)
- **Hyundai Santro MT**: ₹4,862/day (15% discount)
- **Maruti Swift 2024**: ₹5,299/day (Fresh Fleet)
- **Maruti Swift Dzire (P)**: ₹5,799/day
- **Maruti Celerio AT**: ₹5,999/day (Automatic)
- **Hyundai Grand i10 Nios**: ₹5,299/day
- **Tata Nexon**: ₹7,999/day (SUV)
- **Mahindra XUV300**: ₹8,499/day (Diesel SUV)

## Customization

### Adding More Cars
Edit the `cars` array in `script.js`:
```javascript
{
    id: 9,
    brand: 'Your Brand',
    model: 'Your Model',
    image: './images/your-car.jpg',
    fuel: 'petrol',
    transmission: 'manual',
    seats: 5,
    segment: 'hatchback',
    price: 5000,
    // ... other properties
}
```

### Changing Colors
Modify the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #00b4d8;
    --secondary-color: #0096c7;
    --text-color: #333;
}
```

### Adding Real Images
Replace placeholder SVG with actual car images in the `images/` folder and update the `image` property in the car data.

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## Future Enhancements

- Payment integration
- User authentication
- Backend API integration
- Advanced search filters
- Booking management system
- Real-time availability
- GPS location services
- Push notifications

---

**Perfect Match**: This website provides an exact replica of the Revv car rental interface with the same alignment, functionality, and user experience as shown in your screenshot.