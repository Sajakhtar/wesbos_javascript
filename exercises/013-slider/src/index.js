// console.log('it works now');

function Slider(slider) {
        // check if slider arg is a html element
        if (!(slider instanceof Element)) {
                throw new Error('no slider passed in');
        }

        // variables for working with slider
        // closure variables, that child functions can access
        let prev;
        let current;
        let next;

        // select elements needed for the slider
        const slides = slider.querySelector('.slides');
        const prevButton = slider.querySelector('.goToPrev');
        const nextButton = slider.querySelector('.goToNext');

        /**
         * Functions
         */

        function startSlider() {
                current = slider.querySelector('.current') || slides.firstElementChild;

                prev = current.previousElementSibling || slides.lastElementChild;

                next = current.nextElementSibling || slides.firstElementChild;
                // console.log({ current, prev, next });
        }

        function applyClasses() {
                current.classList.add('current');
                prev.classList.add('prev');
                next.classList.add('next');
        }

        function move(direction) {
                // first remove all the classes off the current, prev, next slides
                const classesToRemove = ['prev', 'current', 'next'];
                prev.classList.remove(...classesToRemove);
                current.classList.remove(...classesToRemove);
                next.classList.remove(...classesToRemove);

                if (direction === 'back') {
                        // array of the new values and destructure them into prev, current, next variables
                        [prev, current, next] = [
                                // get the prev slide, if there is none, get the last slide for wrapping
                                prev.previousElementSibling || slides.lastElementChild,
                                prev,
                                current,
                        ];
                } else {
                        // direction is forward
                        [prev, current, next] = [
                                current,
                                next,
                                // get the next slide, if there is none, wrap around and get the first slide
                                next.nextElementSibling || slides.firstElementChild,
                        ];
                }

                // rerun apply classes function to add the classes to the elemetns in the prev, current, next variables
                applyClasses();
        }

        // when this slider is created, run start slider function - referred to a consructor, in classes
        startSlider();
        applyClasses();

        /**
         * Event Listeners
         */
        prevButton.addEventListener('click', () => move('back'));
        nextButton.addEventListener('click', move);
}

/**
 * Slider instances
 */

const mySlider = Slider(document.querySelector('.slider'));

const dogSlider = Slider(document.querySelector('.dog-slider'));
