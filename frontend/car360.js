/**
 * Car360Viewer Class
 * Manages the interactive 360-degree car view.
 */
class Car360Viewer {
    /**
     * @param {HTMLElement} containerElement - The main container for the 360 viewer.
     * @param {string} imagePath - The base path to the car images (e.g., 'assets/cars/audi/').
     * @param {number} frameCount - The total number of frames (images) for the rotation.
     * @param {string} fallbackImage - The path to a static image to use as a fallback.
     */
    constructor(containerElement, imagePath, frameCount = 36, fallbackImage = '') {
        this.container = containerElement;
        this.imagePath = imagePath.endsWith('/') ? imagePath : imagePath + '/';
        this.frameCount = frameCount;
        this.fallbackImage = fallbackImage;
        this.currentFrame = 1;
        this.isDragging = false;
        this.startX = 0;
        this.images = [];
        this.imageElement = null;
        this.isLoaded = false;
        this.rotationSpeed = 10; // Lower number means faster rotation on drag

        this.init();
    }

    init() {
        this.container.classList.add('car-360-viewer');

        // Create the image element
        this.imageElement = document.createElement('img');
        this.imageElement.classList.add('car-360-image');
        this.imageElement.alt = '360-degree car view';
        this.container.appendChild(this.imageElement);

        // Create navigation arrows
        const prevArrow = document.createElement('div');
        prevArrow.classList.add('car-360-arrow', 'prev');
        prevArrow.innerHTML = '<';
        prevArrow.addEventListener('click', () => this.prevFrame());
        this.container.appendChild(prevArrow);

        const nextArrow = document.createElement('div');
        nextArrow.classList.add('car-360-arrow', 'next');
        nextArrow.innerHTML = '>';
        nextArrow.addEventListener('click', () => this.nextFrame());
        this.container.appendChild(nextArrow);

        // Preload images
        this.preloadImages().then((loadedCount) => {
            if (loadedCount > 0) {
                this.isLoaded = true;
                this.updateImage();
                this.setupEventListeners();
            } else {
                console.warn('No 360 images loaded, showing fallback');
                this.showFallback();
            }
        }).catch(error => {
            console.error('Failed to load 360 images:', error);
            this.showFallback();
        });
    }

    /**
     * Generates the image file name for a given frame number.
     * Assumes file names are zero-padded, e.g., '001.jpg', '036.jpg'.
     * @param {number} frame - The frame number (1 to frameCount).
     * @returns {string} The full path to the image.
     */
    getFrameFileName(frame) {
        const paddedFrame = String(frame).padStart(3, '0');
        // Assuming image files are named '001.jpg', '002.jpg', etc.
        return `${this.imagePath}${paddedFrame}.jpg`;
    }

    /**
     * Preloads all images for a smooth experience.
     * @returns {Promise<number>} A promise that resolves with the number of successfully loaded images.
     */
    async preloadImages() {
        const promises = [];
        for (let i = 1; i <= this.frameCount; i++) {
            promises.push(this.loadImage(i));
        }
        const results = await Promise.all(promises);
        const loadedCount = results.filter(result => result).length;
        console.log(`Total images loaded: ${loadedCount} out of ${this.frameCount}`);
        // Adjust frameCount to the number of loaded images
        this.frameCount = loadedCount;
        return loadedCount;
    }

    loadImage(frame) {
        return new Promise((resolve) => {
            const img = new Image();
            const paddedFrame = String(frame).padStart(3, '0');
            const srcJpg = `${this.imagePath}${paddedFrame}.jpg`;
            img.src = srcJpg;
            img.onload = () => {
                console.log(`Loaded image: ${img.src}`);
                this.images.push(img);
                resolve(true);
            };
            img.onerror = () => {
                const srcPng = `${this.imagePath}${paddedFrame}.png`;
                img.src = srcPng;
                img.onload = () => {
                    console.log(`Loaded image: ${img.src}`);
                    this.images.push(img);
                    resolve(true);
                };
                img.onerror = () => {
                    console.error(`Failed to load image: ${srcJpg} and ${srcPng}`);
                    resolve(false);
                };
            };
        });
    }

    /**
     * Updates the displayed image to the current frame.
     */
    updateImage() {
        if (this.isLoaded) {
            this.imageElement.src = this.images[this.currentFrame - 1].src;
        }
    }

    /**
     * Moves to the next frame in the rotation.
     */
    nextFrame() {
        this.currentFrame = (this.currentFrame % this.frameCount) + 1;
        this.updateImage();
    }

    /**
     * Moves to the previous frame in the rotation.
     */
    prevFrame() {
        this.currentFrame = (this.currentFrame - 2 + this.frameCount) % this.frameCount + 1;
        this.updateImage();
    }

    /**
     * Displays the fallback static image.
     */
    showFallback() {
        if (this.fallbackImage) {
            this.imageElement.src = this.fallbackImage;
            this.imageElement.classList.add('fallback');
            this.container.querySelector('.prev')?.remove();
            this.container.querySelector('.next')?.remove();
        } else {
            this.imageElement.src = ''; // Clear image if no fallback
            this.imageElement.alt = '360-degree view not available';
        }
    }

    /**
     * Sets up mouse and touch event listeners for dragging.
     */
    setupEventListeners() {
        // Mouse events
        this.container.addEventListener('mousedown', this.startDrag.bind(this));
        document.addEventListener('mousemove', this.drag.bind(this));
        document.addEventListener('mouseup', this.stopDrag.bind(this));

        // Touch events
        this.container.addEventListener('touchstart', this.startDrag.bind(this));
        document.addEventListener('touchmove', this.drag.bind(this));
        document.addEventListener('touchend', this.stopDrag.bind(this));

        // Prevent image dragging default behavior
        this.imageElement.addEventListener('dragstart', (e) => e.preventDefault());
    }

    /**
     * Handles the start of a drag or touch event.
     * @param {MouseEvent|TouchEvent} e - The event object.
     */
    startDrag(e) {
        if (!this.isLoaded) return;
        e.preventDefault();
        this.isDragging = true;
        this.startX = e.clientX || e.touches.clientX;
        this.container.style.cursor = 'grabbing';
    }

    /**
     * Handles the dragging or touch move event.
     * @param {MouseEvent|TouchEvent} e - The event object.
     */
    drag(e) {
        if (!this.isDragging || !this.isLoaded) return;

        const clientX = e.clientX || (e.touches ? e.touches.clientX : null);
        if (clientX === null) return;

        const deltaX = clientX - this.startX;
        const frameChange = Math.floor(deltaX / this.rotationSpeed);

        if (frameChange !== 0) {
            // Calculate new frame, ensuring it wraps around
            let newFrame = this.currentFrame - frameChange;
            while (newFrame < 1) {
                newFrame += this.frameCount;
            }
            while (newFrame > this.frameCount) {
                newFrame -= this.frameCount;
            }

            this.currentFrame = newFrame;
            this.updateImage();
            this.startX = clientX; // Reset startX to the current position for continuous dragging
        }
    }

    /**
     * Handles the end of a drag or touch event.
     */
    stopDrag() {
        this.isDragging = false;
        this.container.style.cursor = 'grab';
    }
}

// Export the class for use in other scripts
window.Car360Viewer = Car360Viewer;