# TODO: Fix "Failed to add car" error in seller dashboard

## Issues Identified:

- Car model schema doesn't match frontend fields (e.g., brand vs make, price_in_inr vs price, missing fields like km_driven, fuel_type, etc.)
- Required fields in model (description) not sent by frontend
- Frontend not sending authentication token in requests
- No GET /api/cars route for fetching all cars
- Frontend filters cars by sellerEmail, but backend uses sellerId

## Steps to Fix:

1. Update Car model to match frontend fields and make description optional
2. Update carController to handle new fields and generate description if needed
3. Add GET /api/cars route in carRoutes.js
4. Update frontend seller-dashboard.js to include Authorization header in requests
5. Update frontend to filter cars by sellerId instead of sellerEmail
6. Test the add car functionality

## Progress:

- [ ] Update Car model
- [ ] Update carController
- [ ] Add GET /api/cars route
- [ ] Update frontend seller-dashboard.js
- [ ] Test functionality
