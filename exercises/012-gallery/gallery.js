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

        /**
         * Select Elements
         */

        // select the elements we need e.g gallery images
        const images = Array.from(gallery.querySelectorAll('img'));
        // console.log(images);

        const modal = document.querySelector('.modal');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        let currentImage;

        /**
         * Smaller Functions
         */

        function openModal() {
                // console.info('Opening Modal');

                // check if modal is already open
                if (modal.matches('.open')) {
                        // console.info('Modal already open');
                        return; // stop function from running
                }

                modal.classList.add('open');

                // Event listeners to be boung when we open the modal
                window.addEventListener('keyup', handleKeyUp);
                nextButton.addEventListener('click', showNextImage);
                prevButton.addEventListener('click', showPrevImage);
        }

        function closeModal() {
                modal.classList.remove('open');

                // cleanup: remove event listeners for clicks and keyboard
                window.removeEventListener('keyup', handleKeyUp);
                nextButton.removeEventListener('click', showNextImage);
                prevButton.removeEventListener('click', showPrevImage);
        }

        function handleClickOutside(e) {
                if (e.target === e.currentTarget) {
                        closeModal();
                }
        }

        function handleKeyUp(e) {
                if (e.key === 'Escape') return closeModal();
                if (e.key === 'ArrowRight') return showNextImage();
                if (e.key === 'ArrowLeft') return showPrevImage();
        }

        function showNextImage() {
                // console.log(currentImage.nextElementSibling);
                showImage(currentImage.nextElementSibling || gallery.firstElementChild); // wraps around
        }

        function showPrevImage() {
                // console.log(currentImage.nextElementSibling);
                showImage(currentImage.previousElementSibling || gallery.lastElementChild); // wraps around
        }

        function showImage(el) {
                if (!el) {
                        // console.info('no image to show');
                        return; // stop function from running
                }
                // update the modal with this info
                // console.log(el);

                modal.querySelector('img').src = el.src;
                modal.querySelector('h2').textContent = el.title;
                modal.querySelector('figure p').textContent = el.dataset.description;

                currentImage = el;

                openModal();
        }

        /**
         * Event Listeners
         */

        images.forEach((image) => image.addEventListener('click', (e) => showImage(e.currentTarget)));

        // loop over each image, attach keyup event listner and if it is Enter key then show image in modal
        images.forEach((image) =>
                image.addEventListener('keyup', (e) => {
                        if (e.key === 'Enter') {
                                showImage(e.currentTarget);
                        }
                })
        );

        modal.addEventListener('click', handleClickOutside);
}

// use gallery on the page for both galleries
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
