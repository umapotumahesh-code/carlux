// Additional services data with parts
const additionalServices = [
    {
        id: 13,
        title: "Tyres & Wheel Care",
        price_in_inr: 3000,
        icon_class: "fas fa-circle-dot",
        short_description: "Professional tyre services and wheel alignment",
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
        related_parts: [
            { name: "Premium Car Wax", price: 1200 },
            { name: "Interior Cleaning Kit", price: 2000 },
            { name: "Paint Protection", price: 3500 },
            { name: "Car Perfume Set", price: 500 }
        ]
    }
];

// Function to show related parts when a service is clicked
function showRelatedParts(serviceId) {
    const service = additionalServices.find(s => s.id === serviceId);
    if (!service) return;

    const partsContainer = document.getElementById('parts-container');
    const partsSection = document.getElementById('related-parts');
    
    // Show the section
    partsSection.style.display = 'block';
    
    // Clear previous parts
    partsContainer.innerHTML = '';
    
    // Add service header
    const serviceHeader = document.createElement('div');
    serviceHeader.className = 'col-12 mb-4 text-center';
    serviceHeader.innerHTML = `
        <h3 class="service-title mb-3">${service.title} - Related Parts</h3>
        <p class="text-muted">${service.short_description}</p>
        <div class="d-flex justify-content-center align-items-center gap-3 mb-4">
            <span class="badge bg-primary px-3 py-2">Service Price: ₹${service.price_in_inr.toLocaleString('en-IN')}</span>
            <span class="badge bg-secondary px-3 py-2">${service.related_parts.length} Parts Available</span>
        </div>
    `;
    partsContainer.appendChild(serviceHeader);

    // Add parts cards with enhanced details
    service.related_parts.forEach(part => {
        const partCard = document.createElement('div');
        partCard.className = 'col animate__animated animate__fadeIn';
        partCard.innerHTML = `
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-body">
                    <div class="d-flex align-items-center mb-3">
                        <i class="fas fa-cog text-primary me-2"></i>
                        <h5 class="card-title mb-0">${part.name}</h5>
                    </div>
                    <div class="mb-3">
                        <span class="badge bg-success mb-2">In Stock</span>
                        <p class="card-text text-primary fw-bold">₹${part.price.toLocaleString('en-IN')}</p>
                    </div>
                    <div class="d-flex gap-2">
                        <button class="btn btn-primary btn-sm flex-grow-1">
                            <i class="fas fa-shopping-cart me-1"></i> Add to Cart
                        </button>
                        <button class="btn btn-outline-secondary btn-sm" data-bs-toggle="tooltip" title="Add to Wishlist">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        partsContainer.appendChild(partCard);
    });

    // Initialize tooltips
    const tooltips = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltips.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Scroll to parts section
    partsSection.scrollIntoView({ behavior: 'smooth' });
}

// Update service cards to include click handler
document.addEventListener('DOMContentLoaded', () => {
    const servicesContainer = document.getElementById('services-container');
    if (!servicesContainer) return;

    // Add click handlers to existing service cards
    servicesContainer.addEventListener('click', (e) => {
        const serviceCard = e.target.closest('.service-card-new');
        if (serviceCard) {
            const serviceId = parseInt(serviceCard.dataset.serviceId);
            showRelatedParts(serviceId);
        }
    });

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