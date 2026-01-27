const SERVICES_DATA = {
  "mytvs": {
    "id": "mytvs",
    "title": "MyTVS MultiBrand Car Service",
    "address": "Block No 36 Auto Nagar, Hyderabad",
    "phone": "+918296967446",
    "whatsapp": "https://wa.me/918296967446",
    "rating": "4.5",
    "ratingsCount": "982 Ratings",
    "chips": ["DoorStep Service","Oil Change","Car Wash"],
    "images": ["images/honda1.png"],
    "description": "Multi-brand authorised service centre offering regular servicing, repairs and spare parts. We specialize in comprehensive car maintenance with certified technicians and genuine parts.",
    "operatingHours": "Mon-Sat: 9:00 AM - 7:00 PM, Sun: 10:00 AM - 4:00 PM",
    "services": [
      "Periodic Service",
      "Engine Repair",
      "Brake Service",
      "Transmission Service",
      "AC Repair",
      "Car Wash",
      "Denting & Painting",
      "Wheel Alignment"
    ],
    "reviews": [
      { "name": "Ravi Kumar", "rating": 5, "date": "2024-01-20", "comment": "Excellent doorstep service. They came on time and fixed my car's oil issue professionally." },
      { "name": "Anjali Sharma", "rating": 4, "date": "2024-01-15", "comment": "Good car wash service. The car looks clean and shiny. Will recommend to friends." },
      { "name": "Venkat Reddy", "rating": 5, "date": "2024-01-10", "comment": "Reliable service center. They have genuine parts and skilled technicians." }
    ],
    "priceList": [
      { "title": "Car Wash Service", "price": "250", "description": "Car Wash Service involves thorough cleaning, washing, and detailing of vehicles to maintain their appearance and hygiene. It may include exterior washing, interior vacuuming, tire cleaning,..." },
      { "title": "Car Denting and Painting Service", "price": "1000", "description": "Car denting and painting services specialize in restoring the aesthetic appeal and structural integrity of your vehicle. Whether it's a minor dent from a parking mishap or extensive bodywork..." },
      { "title": "Wheel Alignment Services", "price": "500", "description": "Wheel alignment services ensure your vehicle's wheels are set to the optimal position, promoting even tire wear and better handling." },
      { "title": "Periodic Service", "price": "2000", "description": "Comprehensive maintenance service including oil change, filter replacement, and general inspection." }
    ]
  },
  "sri-lakshmi-motors": {
    "id": "sri-lakshmi-motors",
    "title": "Sri Lakshmi Motors",
    "address": "A K Guda Function Hall Road Balkampet, Hyderabad",
    "phone": "+918197077057",
    "whatsapp": "https://wa.me/918197077057",
    "rating": "4.0",
    "ratingsCount": "118 Ratings",
    "chips": ["24x7 Customer Support","Towing Services"],
    "images": ["images/maruthi1.png","images/towing1.jpg","images/repair1.jpg"],
    "description": "Trusted local workshop specialising in mechanical repairs and towing. We provide 24/7 emergency towing services and expert mechanical repairs.",
    "operatingHours": "Mon-Sun: 8:00 AM - 10:00 PM",
    "services": [
      "Engine Repair",
      "Towing Services",
      "Brake Service",
      "Transmission Service",
      "Clutch Service",
      "Battery Replacement",
      "Radiator Service",
      "Fuel System Service"
    ],
    "reviews": [
      { "name": "Vikram Singh", "rating": 4, "date": "2024-01-12", "comment": "Reliable towing service. They arrived quickly and handled the situation professionally." },
      { "name": "Sneha Reddy", "rating": 4, "date": "2024-01-05", "comment": "Good mechanical repairs. Fixed my car's transmission issue. Service was satisfactory." },
      { "name": "Rajesh Gupta", "rating": 4, "date": "2024-01-01", "comment": "24/7 support is very helpful. They towed my car at midnight. Great service." }
    ],
    "priceList": [
      { "title": "Towing Service", "price": "800", "description": "Emergency towing service available 24/7 within city limits." },
      { "title": "Engine Repair", "price": "3000", "description": "Complete engine diagnostics and repair services." },
      { "title": "Brake Service", "price": "1200", "description": "Brake pad replacement and brake system inspection." }
    ]
  },
  
  "carnics-auto-repairs": {
    "id": "carnics-auto-repairs",
    "title": "Carnics Auto Repairs",
    "address": "Mahaveer Hareena National Park Vanasthalipuram, Hyderabad",
    "phone": "+918511424635",
    "whatsapp": "https://wa.me/918511424635",
    "rating": "5.0",
    "ratingsCount": "1 Ratings",
    "chips": ["Car Wash","Affordable Repairs"],
    "images": ["images/mahindra1.png","images/wash1.jpg","images/repair2.jpg"],
    "description": "Small independent garage providing affordable repairs and wash services. We focus on quality service at reasonable prices.",
    "operatingHours": "Mon-Sat: 8:00 AM - 6:00 PM, Sun: Closed",
    "services": [
      "Car Wash",
      "General Service",
      "Engine Repair",
      "Brake Service",
      "Battery Replacement",
      "Oil Change",
      "Tyre Repair"
    ],
    "reviews": [
      { "name": "Kiran Kumar", "rating": 5, "date": "2024-01-18", "comment": "Affordable and reliable. Fixed my car quickly and at a good price." }
    ],
    "priceList": [
      { "title": "Car Wash", "price": "200", "description": "Complete exterior and interior car wash service." },
      { "title": "Oil Change", "price": "400", "description": "Engine oil change with filter replacement." },
      { "title": "Battery Replacement", "price": "1500", "description": "Battery testing and replacement service." }
    ]
  },
  "gomechanic-koramangala": {
    "id": "gomechanic-koramangala",
    "title": "GoMechanic - Koramangala",
    "address": "8th Block, Koramangala, Bangalore",
    "phone": "+919876543211",
    "whatsapp": "https://wa.me/919876543211",
    "rating": "4.7",
    "ratingsCount": "1500+ Ratings",
    "chips": ["Periodic Service","Denting & Painting","AC Repair"],
    "images": ["images/tata1.png","images/ac1.jpg","images/paint1.jpg","images/periodic1.jpg"],
    "description": "Nationwide franchised chain providing pan-India warranties and quality parts. We offer doorstep services and certified mechanics.",
    "operatingHours": "Mon-Sun: 8:00 AM - 8:00 PM",
    "services": [
      "Periodic Service",
      "Denting & Painting",
      "AC Repair",
      "Engine Repair",
      "Transmission Service",
      "Brake Service",
      "Suspension Repair",
      "Electrical Service"
    ],
    "reviews": [
      { "name": "Arun Sharma", "rating": 5, "date": "2024-01-15", "comment": "Excellent service! They have genuine parts and skilled technicians. Very satisfied with the periodic service." },
      { "name": "Priya Patel", "rating": 4, "date": "2024-01-10", "comment": "Good AC repair service. Fixed the issue quickly. Would recommend for car maintenance." },
      { "name": "Karan Singh", "rating": 5, "date": "2024-01-05", "comment": "Professional denting and painting. The car looks brand new. Great warranty coverage." },
      { "name": "Meera Joshi", "rating": 5, "date": "2024-01-01", "comment": "Doorstep service is convenient. They came home and serviced my car perfectly." }
    ],
    "priceList": [
      { "title": "Periodic Service", "price": "3500", "description": "Comprehensive check-up and maintenance for your car." },
      { "title": "AC Gas Top-up", "price": "1200", "description": "Refrigerant top-up for optimal AC performance." },
      { "title": "Brake Pad Replacement", "price": "1500", "description": "Replacement of front or rear brake pads." },
      { "title": "Denting & Painting", "price": "2500", "description": "Complete dent removal and painting service." }
    ]
  },
  "carz-care-andheri": {
    "id": "carz-care-andheri",
    "title": "Carz Care - Andheri East",
    "address": "MIDC Road, Andheri East, Mumbai",
    "phone": "+919876543212",
    "whatsapp": "https://wa.me/919876543212",
    "rating": "4.3",
    "ratingsCount": "750+ Ratings",
    "chips": ["Wheel Alignment","Battery Replacement"],
    "images": ["images/hyundai4.png","images/alignment1.jpg","images/battery1.jpg"],
    "description": "Full service garage with alignment and battery replacement services. We specialize in wheel alignments and electrical services.",
    "operatingHours": "Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 5:00 PM",
    "services": [
      "Wheel Alignment",
      "Battery Replacement",
      "Brake Service",
      "Suspension Repair",
      "Electrical Service",
      "Car Wash",
      "Tyre Replacement"
    ],
    "reviews": [
      { "name": "Suresh Patel", "rating": 4, "date": "2024-01-14", "comment": "Good wheel alignment service. My car drives smoothly now." },
      { "name": "Neha Jain", "rating": 4, "date": "2024-01-08", "comment": "Battery replacement was done quickly. Professional service." },
      { "name": "Amit Shah", "rating": 5, "date": "2024-01-03", "comment": "Excellent garage. They handle all electrical issues perfectly." }
    ],
    "priceList": [
      { "title": "Wheel Alignment", "price": "600", "description": "Complete wheel alignment and balancing service." },
      { "title": "Battery Replacement", "price": "1800", "description": "Battery testing and replacement with warranty." },
      { "title": "Brake Service", "price": "1400", "description": "Brake inspection and pad replacement." }
    ]
  },
  "autoworks-karol-bagh": {
    "id": "autoworks-karol-bagh",
    "title": "AutoWorks - Karol Bagh",
    "address": "Pusa Road, Karol Bagh, New Delhi",
    "phone": "+919876543213",
    "whatsapp": "https://wa.me/919876543213",
    "rating": "4.6",
    "ratingsCount": "1200+ Ratings",
    "chips": ["Engine Repair","Brake Service","Car Wash"],
    "images": ["images/toyota1.png","images/engine1.jpg","images/brake1.jpg","images/wash2.jpg"],
    "description": "Experienced technicians for engine and brake overhauls. We provide comprehensive repair services with modern diagnostic tools.",
    "operatingHours": "Mon-Sun: 8:00 AM - 9:00 PM",
    "services": [
      "Engine Repair",
      "Brake Service",
      "Car Wash",
      "Transmission Service",
      "Clutch Service",
      "Suspension Repair",
      "Electrical Service",
      "Diagnostic Services"
    ],
    "reviews": [
      { "name": "Amit Kumar", "rating": 5, "date": "2024-01-13", "comment": "Excellent engine repair service. They diagnosed the issue accurately and fixed it perfectly." },
      { "name": "Pooja Singh", "rating": 4, "date": "2024-01-07", "comment": "Good brake service. The technicians were professional and explained the work done." },
      { "name": "Rajesh Verma", "rating": 5, "date": "2024-01-02", "comment": "Great car wash service. The car looks spotless. Will definitely come back." },
      { "name": "Sunita Gupta", "rating": 5, "date": "2023-12-28", "comment": "Diagnostic services are top-notch. They found issues I didn't know existed." }
    ],
    "priceList": [
      { "title": "Engine Repair", "price": "4000", "description": "Complete engine diagnostics and repair." },
      { "title": "Brake Service", "price": "1600", "description": "Full brake system inspection and service." },
      { "title": "Car Wash", "price": "300", "description": "Premium car wash with detailing." }
    ]
  },
  "speedy-motors-anna-nagar": {
    "id": "speedy-motors-anna-nagar",
    "title": "Speedy Motors - Anna Nagar",
    "address": "2nd Avenue, Anna Nagar, Chennai",
    "phone": "+919876543214",
    "whatsapp": "https://wa.me/919876543214",
    "rating": "4.4",
    "ratingsCount": "900+ Ratings",
    "chips": ["Tyre Replacement","Suspension Repair"],
    "images": ["images/honda2.1.png","images/tyre1.jpg","images/suspension1.jpg"],
    "description": "Quick turnaround tyre and suspension services. We specialize in fast and reliable tyre replacements and suspension repairs.",
    "operatingHours": "Mon-Sat: 8:00 AM - 7:00 PM, Sun: 9:00 AM - 4:00 PM",
    "services": [
      "Tyre Replacement",
      "Suspension Repair",
      "Wheel Alignment",
      "Brake Service",
      "Car Wash",
      "Battery Replacement"
    ],
    "reviews": [
      { "name": "Vijay Kumar", "rating": 4, "date": "2024-01-16", "comment": "Quick tyre replacement. Got my car back in 2 hours." },
      { "name": "Latha Ramesh", "rating": 5, "date": "2024-01-09", "comment": "Excellent suspension repair. Car rides smoothly now." },
      { "name": "Suresh Babu", "rating": 4, "date": "2024-01-04", "comment": "Good service overall. Professional and fast." }
    ],
    "priceList": [
      { "title": "Tyre Replacement", "price": "2500", "description": "Tyre replacement with balancing and alignment." },
      { "title": "Suspension Repair", "price": "2200", "description": "Suspension system inspection and repair." },
      { "title": "Wheel Alignment", "price": "500", "description": "Complete wheel alignment service." }
    ]
  },
  "city-car-service-park-street": {
    "id": "city-car-service-park-street",
    "title": "City Car Service - Park Street",
    "address": "Park Street Area, Kolkata",
    "phone": "+919876543215",
    "whatsapp": "https://wa.me/919876543215",
    "rating": "4.2",
    "ratingsCount": "600+ Ratings",
    "chips": ["General Service","Detailing"],
    "images": ["images/maruthi5.png","images/detailing1.jpg","images/general1.jpg"],
    "description": "Local service center offering detailing and general maintenance. We provide comprehensive car care services in the heart of Kolkata.",
    "operatingHours": "Mon-Sun: 8:00 AM - 7:00 PM",
    "services": [
      "General Service",
      "Detailing",
      "Car Wash",
      "Engine Repair",
      "Brake Service",
      "Transmission Service",
      "AC Repair",
      "Battery Replacement"
    ],
    "reviews": [
      { "name": "Bikash Das", "rating": 4, "date": "2024-01-11", "comment": "Good general service. They checked everything thoroughly and fixed minor issues." },
      { "name": "Rina Chatterjee", "rating": 4, "date": "2024-01-06", "comment": "Excellent detailing service. The car looks amazing. Worth the price." },
      { "name": "Somnath Roy", "rating": 4, "date": "2024-01-01", "comment": "Reliable service center. They have good technicians and reasonable prices." },
      { "name": "Priya Sen", "rating": 5, "date": "2023-12-27", "comment": "Best detailing in Kolkata. Highly recommended." }
    ],
    "priceList": [
      { "title": "General Service", "price": "1800", "description": "Complete general maintenance service." },
      { "title": "Detailing", "price": "1500", "description": "Full car detailing including interior and exterior." },
      { "title": "Car Wash", "price": "250", "description": "Premium car wash service." }
    ]
  }
};
