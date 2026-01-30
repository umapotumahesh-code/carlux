document.addEventListener("DOMContentLoaded", () => {
  // Preloader
  const preloader = document.getElementById("preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.style.display = "none";
    });
  }

  // Back to top button
  const backToTopButton = document.getElementById("back-to-top");
  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    });
    backToTopButton.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Dark mode toggle
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDarkMode = document.body.classList.contains("dark-mode");
      localStorage.setItem("darkMode", isDarkMode);
      darkModeToggle.className = isDarkMode
        ? "fas fa-sun"
        : "fas fa-moon";
    });

    if (localStorage.getItem("darkMode") === "true") {
      document.body.classList.add("dark-mode");
      darkModeToggle.className = "fas fa-sun";
    }
  }

  // Function to animate counters
  function animateCounters() {
    const counters = [
      { id: "cars-sold-count", target: 1200 },
      { id: "verified-sellers-count", target: 300 },
      { id: "happy-customers-count", target: 5000 },
    ];

    counters.forEach((counterInfo) => {
      const element = document.getElementById(counterInfo.id);
      if (element) {
        let current = 0;
        const target = counterInfo.target;
        const increment = target / 100;

        const updateCounter = () => {
          if (current < target) {
            current += increment;
            element.textContent = `${Math.ceil(current)}+`;
            requestAnimationFrame(updateCounter);
          } else {
            element.textContent = `${target}+`;
          }
        };
        updateCounter();
      }
    });
  }

  // Animate story card numbers
  function animateStoryStats() {
    const storyStats = document.querySelectorAll(".stat-number");
    storyStats.forEach((stat) => {
      const target = parseInt(stat.getAttribute("data-target"), 10);
      let current = 0;
      const increment = target / 50;

      const updateStat = () => {
        if (current < target) {
          current += increment;
          stat.textContent = Math.ceil(current);
          requestAnimationFrame(updateStat);
        } else {
          stat.textContent = target;
        }
      };
      updateStat();
    });
  }

  // Intersection Observer for animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "stats") {
            animateCounters();
          }
          if (entry.target.classList.contains("feature-story-card")) {
            animateStoryStats();
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  const statsSection = document.getElementById("stats");
  if (statsSection) {
    observer.observe(statsSection);
  }

  const storyCards = document.querySelectorAll(".feature-story-card");
  storyCards.forEach((card) => observer.observe(card));

  // Featured Cars Slider
  const featuredContainer = document.querySelector(".featured-cars-container");
  const prevArrow = document.querySelector("#featured-cars .prev-arrow");
  const nextArrow = document.querySelector("#featured-cars .next-arrow");

  if (featuredContainer && prevArrow && nextArrow) {
    const scrollAmount = 300;
    prevArrow.addEventListener("click", () => {
      featuredContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
    nextArrow.addEventListener("click", () => {
      featuredContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  }

  // Auto-scroll for featured cars: scrolls by one card at a time, pauses on hover/user interaction
  let _fcAutoInterval = null;
  function initFeaturedAutoScroll() {
    const container = document.querySelector('.featured-cars-container');
    if (!container) return;

    // compute one card width (including gap)
    const card = container.querySelector('.col');
    if (!card) return;

    const gap = parseFloat(getComputedStyle(container).gap) || 24;
    const cardWidth = card.getBoundingClientRect().width + gap;

    const scrollStep = Math.round(cardWidth);

    function stopAuto() {
      if (_fcAutoInterval) {
        clearInterval(_fcAutoInterval);
        _fcAutoInterval = null;
      }
    }

    function startAuto() {
      stopAuto();
      _fcAutoInterval = setInterval(() => {
        // if at or near the end, smoothly go back to start
        if (container.scrollWidth - container.clientWidth - container.scrollLeft < 2) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollStep, behavior: 'smooth' });
        }
      }, 3500);
    }

    // Pause while user hovers, resumes on leave
    container.addEventListener('mouseenter', stopAuto);
    container.addEventListener('focusin', stopAuto);
    container.addEventListener('mouseleave', () => {
      // small delay so a quick hover doesn't restart immediately
      setTimeout(startAuto, 400);
    });

    // Pause/resume on manual scroll (user interaction)
    let _restartTimeout = null;
    container.addEventListener('scroll', () => {
      stopAuto();
      clearTimeout(_restartTimeout);
      _restartTimeout = setTimeout(startAuto, 4500);
    }, { passive: true });

    // Stop and restart when arrows are used
    const prev = document.querySelector('#featured-cars .prev-arrow');
    const next = document.querySelector('#featured-cars .next-arrow');
    [prev, next].forEach(btn => {
      if (btn) btn.addEventListener('click', () => {
        stopAuto();
        clearTimeout(_restartTimeout);
        _restartTimeout = setTimeout(startAuto, 4500);
      });
    });

    // Start auto-scroll
    startAuto();
  }

  // Brands Scroller
  const brandsContainer = document.querySelector(".brands-scroll-container");
  const brandsPrevArrow = document.querySelector("#car-brands .prev-arrow");
  const brandsNextArrow = document.querySelector("#car-brands .next-arrow");

  if (brandsContainer && brandsPrevArrow && brandsNextArrow) {
    const scrollAmount = 200;
    brandsPrevArrow.addEventListener("click", () => {
      brandsContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
    brandsNextArrow.addEventListener("click", () => {
      brandsContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  }

  // Auto-scroll for Brands scroller: step by one brand, pause on hover/interaction
  function initBrandsAutoScroll() {
    const container = document.querySelector('.brands-scroll-container');
    if (!container) return;

    // pick a representative item (brand-item inside link)
    const item = container.querySelector('.brand-item') || container.firstElementChild;
    if (!item) return;

    const gap = parseFloat(getComputedStyle(container).gap) || 16;
    const itemWidth = item.getBoundingClientRect().width + gap;
    const step = Math.round(itemWidth);

    let _interval = null;
    let _restartTimeout = null;

    function stop() {
      if (_interval) { clearInterval(_interval); _interval = null; }
    }

    function start() {
      stop();
      _interval = setInterval(() => {
        // if near end, go back to start smoothly
        if (container.scrollWidth - container.clientWidth - container.scrollLeft < 2) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: step, behavior: 'smooth' });
        }
      }, 3200);
    }

    // Pause on hover/focus, resume on leave
    container.addEventListener('mouseenter', stop);
    container.addEventListener('focusin', stop);
    container.addEventListener('mouseleave', () => { clearTimeout(_restartTimeout); _restartTimeout = setTimeout(start, 600); });

    // Pause on manual scroll and resume after quiet period
    container.addEventListener('scroll', () => {
      stop();
      clearTimeout(_restartTimeout);
      _restartTimeout = setTimeout(start, 3000);
    }, { passive: true });

    // Pause when arrows are clicked, resume after short delay
    const prev = document.querySelector('#car-brands .prev-arrow');
    const next = document.querySelector('#car-brands .next-arrow');
    [prev, next].forEach(btn => {
      if (btn) btn.addEventListener('click', () => { stop(); clearTimeout(_restartTimeout); _restartTimeout = setTimeout(start, 2500); });
    });

    // Start
    start();
  }

  // initialize brands auto-scroll after DOM/content and any dynamic layout settle
  setTimeout(initBrandsAutoScroll, 120);

  // Testimonials
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "The best car buying experience I've ever had. The team was transparent, and the car was in perfect condition. Highly recommended!",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      location: "New Delhi",
      text: "CARLUX made selling my old car so easy. I got a fair price and the entire process was completed in just two days. Excellent service!",
      rating: 4.5,
    },
    {
      name: "Anjali Singh",
      location: "Bangalore",
      text: "I rented a car for a weekend trip and was impressed with the quality of the vehicle and the affordable rates. Will definitely use CARLUX again.",
      rating: 5,
    },
    {
      name: "Vikram Reddy",
      location: "Hyderabad",
      text: "Found the exact model I was looking for. The financing options were flexible and the paperwork was handled smoothly. Great job!",
      rating: 4,
    },
    {
      name: "Sneha Patel",
      location: "Ahmedabad",
      text: "The service center is top-notch. They diagnosed the issue with my car quickly and fixed it at a reasonable price. Very professional.",
      rating: 5,
    },
    {
      name: "Arjun Kumar",
      location: "Chennai",
      text: "A seamless and trustworthy platform for buying used cars. The detailed inspection report gave me complete peace of mind.",
      rating: 4.5,
    },
  ];

  const testimonialsContainer = document.getElementById("testimonials-container");
  if (testimonialsContainer) {
    const colors = ["#B8860B", "#DAA520", "#C8960A", "#A07409", "#E0A800", "#B08400"];
    
    const generateStars = (rating) => {
      let starsHTML = '';
      const fullStars = Math.floor(rating);
      const halfStar = rating % 1 !== 0;
      const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

      for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
      }
      if (halfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
      }
      for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
      }
      return starsHTML;
    };

    testimonialsContainer.innerHTML = ""; // Clear existing content
    for (let i = 0; i < testimonials.length; i++) {
      if (i % 3 === 0) { // Create a new carousel-item for every 3 testimonials
        const carouselItem = document.createElement("div");
        carouselItem.className = `carousel-item ${i === 0 ? "active" : ""}`;
        carouselItem.innerHTML = `<div class="row g-4 justify-content-center"></div>`;
        testimonialsContainer.appendChild(carouselItem);
      }
      const currentCarouselItem = testimonialsContainer.lastChild.querySelector('.row');
      const testimonial = testimonials[i];
      const initials = testimonial.name.split(' ').map(n => n[0]).join('');
      const color = colors[i % colors.length];

      const testimonialCol = document.createElement("div");
      testimonialCol.className = "col-lg-4 col-md-6"; // Responsive columns
      testimonialCol.innerHTML = `
          <div class="testimonial-card h-100 d-flex flex-column">
            <div class="testimonial-body d-flex flex-column flex-grow-1">
              <div class="testimonial-avatar" style="background-color: ${color};">
                ${initials}
              </div>
              <div class="testimonial-rating mt-3">
                ${generateStars(testimonial.rating)}
              </div>
              <p class="testimonial-text mt-3">"${testimonial.text}"</p>
              <div class="mt-auto">
                <h5 class="testimonial-name mb-0">${testimonial.name}</h5>
                <p class="testimonial-location">${testimonial.location}</p>
              </div>
            </div>
          </div>
        `;
      currentCarouselItem.appendChild(testimonialCol);
    }
  }

  // Fetch and display featured cars (assuming you have an API or a JSON file)
  async function loadFeaturedCars() {
    const container = document.getElementById("featured-cars-container");
    if (!container) return;

    try {
      // In a real app, you would fetch from an API: /api/cars?featured=true
      const response = await fetch("data.json"); // Using a local data.json for demo
      const data = await response.json();
      const cars = data.cars.slice(0, 8); // Get first 8 cars as featured

      container.innerHTML = ""; // Clear loader
      cars.forEach((car) => {
        const carCard = document.createElement("div");
        carCard.className = "col"; // Use 'col' for Bootstrap's grid system within the flex container
        carCard.innerHTML = `
          <div class="car-card h-100">
           <div class="car-image-zoom">
              <img src="${car.image_urls[0]}" class="card-img-top" alt="${car.brand} ${car.model}">
            </div>
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${car.brand} ${car.model}</h5>
              <p class="card-text small text-muted">${car.year} • ${car.fuel_type} • ${car.transmission}</p>
              <p class="card-text fw-bold price mt-auto">₹${car.price_in_inr.toLocaleString("en-IN")}</p>
              <a href="car-details.html?id=${car.id}" class="btn btn-primary w-100">View Details</a>
            </div>
          </div>
        `;
        container.appendChild(carCard);
      });
      // Initialize auto-scroll once cards are rendered
      // small timeout to allow images/layout to settle
      setTimeout(() => {
        initFeaturedAutoScroll();
      }, 120);
    } catch (error) {
      console.error("Failed to load featured cars:", error);
      container.innerHTML = "<p>Could not load featured cars.</p>";
    }
  }

  loadFeaturedCars();
});