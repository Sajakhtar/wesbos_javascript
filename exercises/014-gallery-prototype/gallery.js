// console.log('it works');

/**
 * first we need to create a closure
 * closure is a function that has scope
 * the function will have child functions contained within
 * these will be available even after the parent function has finished running
 * this will allow us to create scope for ecach gallery, so that they don't interfere with eachother but can use the same code
 */
function Gallery(gallery) {
        // console.log(gallery);
        if (!gallery) {
                throw new Error('No gallery found');
        }

        // save reference to the gallery div that was passed in so that `this` is the gallery div
        this.gallery = gallery;

        /**
         * Select Elements
         * surface variables on an instance is to say `this.var`
         * right click on var name, rename symbol to this.var and remove the const, this will change all references of the var in this file
         */

        // select the elements we need e.g gallery images
        this.images = Array.from(gallery.querySelectorAll('img'));
        this.modal = document.querySelector('.modal');
        this.prevButton = this.modal.querySelector('.prev');
        this.nextButton = this.modal.querySelector('.next');

        /**
         * Bind our methods to the instance when we need them
         * we're creating an instance property of the same prototype function but bound with 'this'
         * Bind allows us to explicity supply what 'this' will be equal to
         * since in our constructor 'this' is equal to our instance, we're creating a new function that has 'this' bound to it
         */
        this.showNextImage = this.showNextImage.bind(this);
        this.showPrevImage = this.showPrevImage.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);

        /**
         * Event Listeners
         */

        this.images.forEach((image) => image.addEventListener('click', (e) => this.showImage(e.currentTarget)));

        // loop over each image, attach keyup event listner and if it is Enter key then show image in modal
        this.images.forEach((image) =>
                image.addEventListener('keyup', (e) => {
                        if (e.key === 'Enter') {
                                this.showImage(e.currentTarget);
                        }
                })
        );

        this.modal.addEventListener('click', this.handleClickOutside);
}

/**
 * Smaller Functions
 * adding to the gallery as protoype methods
 * update any reference to these function as `this.func`
 */

Gallery.prototype.openModal = function () {
        // console.info('Opening Modal');

        // check if modal is already open
        if (this.modal.matches('.open')) {
                // console.info('Modal already open');
                return; // stop function from running
        }

        this.modal.classList.add('open');

        // Event listeners to be boung when we open the modal
        window.addEventListener('keyup', this.handleKeyUp);
        this.nextButton.addEventListener('click', this.showNextImage);
        this.prevButton.addEventListener('click', this.showPrevImage);
};

Gallery.prototype.closeModal = function () {
        this.modal.classList.remove('open');

        // cleanup: remove event listeners for clicks and keyboard
        window.removeEventListener('keyup', this.handleKeyUp);
        this.nextButton.removeEventListener('click', this.showNextImage);
        this.prevButton.removeEventListener('click', this.showPrevImage);
};

Gallery.prototype.handleClickOutside = function (e) {
        if (e.target === e.currentTarget) {
                this.closeModal();
        }
};

Gallery.prototype.handleKeyUp = function (e) {
        if (e.key === 'Escape') return this.closeModal();
        if (e.key === 'ArrowRight') return this.showNextImage();
        if (e.key === 'ArrowLeft') return this.showPrevImage();
};

Gallery.prototype.showNextImage = function () {
        this.showImage(this.currentImage.nextElementSibling || this.gallery.firstElementChild); // wraps around
};

Gallery.prototype.showPrevImage = function () {
        this.showImage(this.currentImage.previousElementSibling || this.gallery.lastElementChild); // wraps around
};

Gallery.prototype.showImage = function (el) {
        if (!el) {
                // console.info('no image to show');
                return; // stop function from running
        }
        // update the modal with this info
        // console.log(el);

        this.modal.querySelector('img').src = el.src;
        this.modal.querySelector('h2').textContent = el.title;
        this.modal.querySelector('figure p').textContent = el.dataset.description;

        // place ucrrent image on the instance.
        this.currentImage = el;

        this.openModal();
};

/**
 * Declare Gallery instances
 */

// use gallery on the page for both galleries
// const gallery1 = Gallery(document.querySelector('.gallery1'));
// const gallery2 = Gallery(document.querySelector('.gallery2'));

// console.log(gallery1, gallery2); // undefined, undefined

// declare galleries using new keyword
const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

console.log(gallery1, gallery2); // gallery obj, gallery obj where `this` is the gallery div which are instance properties as they're different in each gallery
// each instance has properties for images, modal, prevButton, nextButton
// all the functions are now shared under the prototype

/**
 * Broke
 * next prev button click
 * click outside
 * escape
 */
