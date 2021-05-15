// console.log('it works now');

function Slider(slider) {
        // check if slider arg is a html element
        if (!(slider instanceof Element)) {
                throw new Error('no slider passed in');
        }

        // select elements needed for the slider
        this.slides = slider.querySelector('.slides');
        // bind this to slider
        this.slider = slider;

        // we don't need the buttons outside of the constructor, so we can keep them as regular button
        const prevButton = slider.querySelector('.goToPrev');
        const nextButton = slider.querySelector('.goToNext');

        // when this slider is created, run start slider function - referred to a consructor, in classes
        this.startSlider();
        this.applyClasses();

        /**
         * Event Listeners
         */
        // this.move = this.move.bind(this);
        prevButton.addEventListener('click', () => this.move('back'));
        // nextButton.addEventListener('click', this.move);
        // or
        nextButton.addEventListener('click', () => this.move());
}

/**
 * Functions - now protype methods
 */

Slider.prototype.startSlider = function () {
        this.current = this.slider.querySelector('.current') || this.slides.firstElementChild;

        this.prev = this.current.previousElementSibling || this.slides.lastElementChild;

        this.next = this.current.nextElementSibling || this.slides.firstElementChild;
};

Slider.prototype.applyClasses = function () {
        this.current.classList.add('current');
        this.prev.classList.add('prev');
        this.next.classList.add('next');
};

Slider.prototype.move = function (direction) {
        // first remove all the classes off the current, prev, next slides
        const classesToRemove = ['prev', 'current', 'next'];
        this.prev.classList.remove(...classesToRemove);
        this.current.classList.remove(...classesToRemove);
        this.next.classList.remove(...classesToRemove);

        if (direction === 'back') {
                // array of the new values and destructure them into prev, current, next variables
                [this.prev, this.current, this.next] = [
                        // get the prev slide, if there is none, get the last slide for wrapping
                        this.prev.previousElementSibling || this.slides.lastElementChild,
                        this.prev,
                        this.current,
                ];
        } else {
                // direction is forward
                [this.prev, this.current, this.next] = [
                        this.current,
                        this.next,
                        // get the next slide, if there is none, wrap around and get the first slide
                        this.next.nextElementSibling || this.slides.firstElementChild,
                ];
        }

        // rerun apply classes function to add the classes to the elemetns in the prev, current, next variables
        this.applyClasses();
};

/**
 * Slider instances
 */

// const mySlider = Slider(document.querySelector('.slider'));
// const dogSlider = Slider(document.querySelector('.dog-slider'));

// console.log(mySlider, dogSlider); // undefined, undefined

const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));

console.log(mySlider, dogSlider); // slider obj, slider obj

/**
 * We can now hookup the move function to the arrow buttons
 */

window.dogSlider = dogSlider;

window.addEventListener('keyup', function (e) {
        if (e.key === 'ArrowRight') {
                dogSlider.move();
        }

        if (e.key === 'ArrowLeft') {
                dogSlider.move('back');
        }
});
