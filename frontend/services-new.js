// Use all services from script.js if available, otherwise use local data
const additionalServices = window.allServices || [
    {
        id: 13,
        title: "Tyres & Wheel Care",
        price_in_inr: 3000,
        icon_class: "fas fa-circle-dot",
        short_description: "Professional tyre services and wheel alignment",
        file_name: "service-details.html?id=13",
        related_parts: [
            { name: "Alloy Wheels", price: 12000 },
            { name: "Premium Tyres", price: 8000 },
            { name: "Wheel Balancing Weights", price: 500 },
            { name: "Tyre Pressure Sensors", price: 1500 }
        ]
    },
    {
        id: 14,
        title: "Suspension & Fitments",
        price_in_inr: 5000,
        icon_class: "fas fa-wrench",
        short_description: "Complete suspension system service and parts fitting",
        file_name: "service-details.html?id=14",
        related_parts: [
            { name: "Shock Absorbers", price: 3500 },
            { name: "Coil Springs", price: 2500 },
            { name: "Strut Mounts", price: 1200 },
            { name: "Control Arms", price: 2000 }
        ]
    },
    {
        id: 15,
        title: "Car Services (General)",
        price_in_inr: 4000,
        icon_class: "fas fa-car",
        short_description: "Comprehensive general car maintenance and servicing",
        file_name: "service-details.html?id=15",
        related_parts: [
            { name: "Air Filter", price: 800 },
            { name: "Spark Plugs Set", price: 1500 },
            { name: "Wiper Blades", price: 1000 },
            { name: "Battery", price: 5000 }
        ]
    },
    {
        id: 16,
        title: "Car Spa & Cleaning",
        price_in_inr: 2500,
        icon_class: "fas fa-shower",
        short_description: "Premium car washing and detailing services",
        file_name: "service-details.html?id=16",
        related_parts: [
            { name: "Premium Car Wax", price: 1200 },
            { name: "Interior Cleaning Kit", price: 2000 },
            { name: "Paint Protection", price: 3500 },
            { name: "Car Perfume Set", price: 500 }
        ]
    },
    {
        id: 17,
        title: "Battery Replacement",
        price_in_inr: 3500,
        icon_class: "fas fa-battery-half",
        short_description: "Battery testing, replacement and maintenance services",
        file_name: "service-details.html?id=17",
        related_parts: [
            { name: "Car Battery", price: 5000 },
            { name: "Battery Cables", price: 800 },
            { name: "Battery Tester", price: 1200 },
            { name: "Battery Charger", price: 2000 }
        ]
    },
    {
        id: 18,
        title: "AC Service",
        price_in_inr: 2800,
        icon_class: "fas fa-snowflake",
        short_description: "Air conditioning repair and maintenance",
        file_name: "service-details.html?id=18",
        related_parts: [
            { name: "AC Compressor", price: 8000 },
            { name: "AC Filter", price: 600 },
            { name: "Refrigerant Gas", price: 1500 },
            { name: "AC Condenser", price: 4500 }
        ]
    },
    {
        id: 19,
        title: "Engine Oil Change",
        price_in_inr: 1200,
        icon_class: "fas fa-oil-can",
        short_description: "Complete engine oil change and filter replacement",
        file_name: "service-details.html?id=19",
        related_parts: [
            { name: "Engine Oil", price: 800 },
            { name: "Oil Filter", price: 400 },
            { name: "Drain Plug", price: 100 },
            { name: "Oil Pan Gasket", price: 300 }
        ]
    },
    {
        id: 20,
        title: "Brake Service",
        price_in_inr: 4500,
        icon_class: "fas fa-stop-circle",
        short_description: "Brake inspection, repair and replacement services",
        file_name: "service-details.html?id=20",
        related_parts: [
            { name: "Brake Pads", price: 2500 },
            { name: "Brake Discs", price: 4000 },
            { name: "Brake Calipers", price: 3500 },
            { name: "Brake Fluid", price: 600 }
        ]
    },
    {
        id: 21,
        title: "Transmission Service",
        price_in_inr: 6000,
        icon_class: "fas fa-cogs",
        short_description: "Transmission fluid change and maintenance",
        file_name: "service-details.html?id=21",
        related_parts: [
            { name: "Transmission Fluid", price: 2000 },
            { name: "Transmission Filter", price: 1500 },
            { name: "Transmission Pan Gasket", price: 800 },
            { name: "Transmission Cooler", price: 5000 }
        ]
    },
    {
        id: 22,
        title: "Exhaust System",
        price_in_inr: 5500,
        icon_class: "fas fa-exclamation-triangle",
        short_description: "Exhaust system repair and replacement",
        file_name: "service-details.html?id=22",
        related_parts: [
            { name: "Exhaust Pipe", price: 3000 },
            { name: "Muffler", price: 4000 },
            { name: "Catalytic Converter", price: 12000 },
            { name: "Exhaust Manifold", price: 6000 }
        ]
    },
    {
        id: 23,
        title: "Clutch Service",
        price_in_inr: 6500,
        icon_class: "fas fa-cog",
        short_description: "Clutch repair, replacement and adjustment services",
        file_name: "service-details.html?id=23",
        related_parts: [
            { name: "Clutch Kit", price: 8000 },
            { name: "Clutch Cable", price: 1200 },
            { name: "Flywheel", price: 4500 },
            { name: "Pressure Plate", price: 3500 }
        ]
    },
    {
        id: 24,
        title: "Timing Belt Replacement",
        price_in_inr: 4800,
        icon_class: "fas fa-clock",
        short_description: "Timing belt and tensioner replacement service",
        file_name: "service-details.html?id=24",
        related_parts: [
            { name: "Timing Belt", price: 2500 },
            { name: "Timing Tensioner", price: 1800 },
            { name: "Idler Pulley", price: 800 },
            { name: "Water Pump", price: 2200 }
        ]
    },
    {
        id: 25,
        title: "Radiator Service",
        price_in_inr: 3200,
        icon_class: "fas fa-thermometer-half",
        short_description: "Radiator repair, cleaning and coolant replacement",
        file_name: "service-details.html?id=25",
        related_parts: [
            { name: "Radiator", price: 6000 },
            { name: "Coolant", price: 800 },
            { name: "Radiator Cap", price: 300 },
            { name: "Thermostat", price: 1200 }
        ]
    },
    {
        id: 26,
        title: "Fuel System Service",
        price_in_inr: 3800,
        icon_class: "fas fa-gas-pump",
        short_description: "Fuel system cleaning and maintenance",
        file_name: "service-details.html?id=26",
        related_parts: [
            { name: "Fuel Filter", price: 600 },
            { name: "Fuel Pump", price: 4500 },
            { name: "Fuel Injectors", price: 3200 },
            { name: "Fuel Tank", price: 8000 }
        ]
    },
    {
        id: 27,
        title: "Electrical System Service",
        price_in_inr: 4200,
        icon_class: "fas fa-bolt",
        short_description: "Electrical system diagnosis and repair",
        file_name: "service-details.html?id=27",
        related_parts: [
            { name: "Alternator", price: 5500 },
            { name: "Starter Motor", price: 4800 },
            { name: "Battery Cables", price: 800 },
            { name: "Fuse Box", price: 1500 }
        ]
    },
    {
        id: 28,
        title: "Diagnostic Services",
        price_in_inr: 2500,
        icon_class: "fas fa-search",
        short_description: "Complete vehicle diagnostic and error code reading",
        file_name: "service-details.html?id=28",
        related_parts: [
            { name: "OBD-II Scanner", price: 3000 },
            { name: "Diagnostic Software", price: 5000 },
            { name: "Multimeter", price: 1200 },
            { name: "Test Light", price: 400 }
        ]
    },
    {
        id: 29,
        title: "Windshield Replacement",
        price_in_inr: 5200,
        icon_class: "fas fa-window-maximize",
        short_description: "Windshield repair and replacement services",
        file_name: "service-details.html?id=29",
        related_parts: [
            { name: "Windshield Glass", price: 8000 },
            { name: "Adhesive Sealant", price: 1200 },
            { name: "Molding Kit", price: 800 },
            { name: "Rain Sensor", price: 2500 }
        ]
    },
    {
        id: 30,
        title: "Headlight Restoration",
        price_in_inr: 1800,
        icon_class: "fas fa-lightbulb",
        short_description: "Headlight cleaning, restoration and replacement",
        file_name: "service-details.html?id=30",
        related_parts: [
            { name: "Headlight Assembly", price: 4500 },
            { name: "Restoration Kit", price: 1500 },
            { name: "Bulb Set", price: 800 },
            { name: "Lens Cover", price: 600 }
        ]
    },
    {
        id: 31,
        title: "Tire Rotation & Balancing",
        price_in_inr: 800,
        icon_class: "fas fa-sync-alt",
        short_description: "Tire rotation, balancing and alignment check",
        file_name: "service-details.html?id=31",
        related_parts: [
            { name: "Balance Weights", price: 200 },
            { name: "Valve Stem", price: 100 },
            { name: "TPMS Sensor", price: 1500 },
            { name: "Alignment Tool", price: 3000 }
        ]
    },
    {
        id: 32,
        title: "Spark Plug Replacement",
        price_in_inr: 1500,
        icon_class: "fas fa-fire",
        short_description: "Spark plug inspection and replacement service",
        file_name: "service-details.html?id=32",
        related_parts: [
            { name: "Spark Plugs", price: 1200 },
            { name: "Ignition Coils", price: 2500 },
            { name: "Spark Plug Wires", price: 800 },
            { name: "Gap Tool", price: 300 }
        ]
    },
    {
        id: 33,
        title: "Air Filter Replacement",
        price_in_inr: 600,
        icon_class: "fas fa-wind",
        short_description: "Engine air filter inspection and replacement",
        file_name: "service-details.html?id=33",
        related_parts: [
            { name: "Air Filter", price: 500 },
            { name: "Cabin Filter", price: 400 },
            { name: "Filter Housing", price: 800 },
            { name: "Cleaning Kit", price: 300 }
        ]
    },
    {
        id: 34,
        title: "Wheel Alignment",
        price_in_inr: 1200,
        icon_class: "fas fa-crosshairs",
        short_description: "Professional wheel alignment and geometry check",
        file_name: "service-details.html?id=34",
        related_parts: [
            { name: "Alignment Machine", price: 50000 },
            { name: "Toe Plates", price: 2000 },
            { name: "Camber Gauge", price: 1500 },
            { name: "Alignment Software", price: 10000 }
        ]
    }
];

// Function to show related services when a service is clicked
function showRelatedParts(serviceId) {
    const service = additionalServices.find(s => s.id === serviceId);
    if (!service) return;

    const partsContainer = document.getElementById('parts-container');
    const partsSection = document.getElementById('related-parts');

    // Show the section
    partsSection.style.display = 'block';

    // Clear previous services
    partsContainer.innerHTML = '';

    // Add service header
    const serviceHeader = document.createElement('div');
    serviceHeader.className = 'col-12 mb-4 text-center';
    serviceHeader.innerHTML = `
        <h3 class="service-title mb-3">${service.title} - Related Services</h3>
        <p class="text-muted">${service.short_description}</p>
        <div class="d-flex justify-content-center align-items-center gap-3 mb-4">
            <span class="badge bg-primary px-3 py-2">Service Price: ₹${service.price_in_inr.toLocaleString('en-IN')}</span>
            <span class="badge bg-secondary px-3 py-2">${additionalServices.length - 1} Related Services Available</span>
        </div>
    `;
    partsContainer.appendChild(serviceHeader);

    // Add related services cards (excluding the current service)
    const relatedServices = additionalServices.filter(s => s.id !== serviceId);
    relatedServices.forEach(relatedService => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'col animate__animated animate__fadeIn';
        serviceCard.innerHTML = `
            <div class="card h-100 border-0 shadow-sm service-card-new" data-service-id="${relatedService.id}">
                <div class="card-body text-center">
                    <i class="${relatedService.icon_class} service-icon mb-3 text-primary" style="font-size: 2.5rem;"></i>
                    <h5 class="card-title mb-2">${relatedService.title}</h5>
                    <p class="card-text text-muted small mb-3">${relatedService.short_description}</p>
                    <div class="mb-3">
                        <span class="badge bg-success mb-2">Available</span>
                        <p class="card-text text-primary fw-bold">From ₹${relatedService.price_in_inr.toLocaleString('en-IN')}</p>
                    </div>
                    <button class="btn btn-primary btn-sm w-100">
                        <i class="fas fa-info-circle me-1"></i> View Details
                    </button>
                </div>
            </div>
        `;
        partsContainer.appendChild(serviceCard);
    });

    // Add click handlers for related services
    partsContainer.addEventListener('click', (e) => {
        const relatedCard = e.target.closest('.service-card-new');
        if (relatedCard) {
            const relatedServiceId = parseInt(relatedCard.dataset.serviceId);
            showRelatedParts(relatedServiceId);
        }
    });

    // Scroll to parts section
    partsSection.scrollIntoView({ behavior: 'smooth' });
}

// Update service cards to include click handler
document.addEventListener('DOMContentLoaded', () => {
    const servicesContainer = document.getElementById('services-container');
    if (!servicesContainer) return;

    // Add click handlers to existing service cards (only on service details pages)
    servicesContainer.addEventListener('click', (e) => {
        if (document.body.id === 'services-page') return; // Skip on services page to allow navigation
        const serviceCard = e.target.closest('.service-card-new');
        if (serviceCard) {
            const serviceId = parseInt(serviceCard.dataset.serviceId);
            showRelatedParts(serviceId);
        }
    });

    // Add navigation buttons functionality
    const prevBtn = document.getElementById('related-prev-btn');
    const nextBtn = document.getElementById('related-next-btn');
    const partsContainer = document.getElementById('parts-container');

    if (prevBtn && nextBtn && partsContainer) {
        prevBtn.addEventListener('click', () => {
            partsContainer.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', () => {
            partsContainer.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });
    }

    // Add new services to the container
    additionalServices.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'col animate__animated animate__fadeIn';
        serviceCard.innerHTML = `
            <div class="card service-card-new" data-service-id="${service.id}">
                <i class="${service.icon_class} service-icon"></i>
                <h5 class="service-title">${service.title}</h5>
                <p class="service-price">From ₹${service.price_in_inr.toLocaleString('en-IN')}</p>
                <p class="service-description small text-muted">${service.short_description}</p>
            </div>
        `;
        servicesContainer.appendChild(serviceCard);
    });
});
