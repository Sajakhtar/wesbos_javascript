// console.log('it works');

// select the elemetns - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d'); // canvas context with drawing occurs
const shakebutton = document.querySelector('.shake');

const MOVE_AMOUNT = 10; // True constant, make all uppercase

// h-value for HSL colors https://mothereffinghsl.com/
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

// setup canvas for drawing

const { width, height } = canvas; // destructuring - if variable name is same as object property name
// console.log(width, height);

// create random x and y for starting point on canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

console.log(x, y);

ctx.lineJoin = 'round'; // for smooth darwing
ctx.lineCap = 'round'; // for smooth darwing
ctx.lineWidth = MOVE_AMOUNT; // default is 1px

ctx.beginPath(); // start drawing
ctx.moveTo(x, y); // start point - place the pointer to 200px in and 200px from top
ctx.lineTo(x, y); // finish point
ctx.stroke(); // draw lines between start and finish point

// draw function with options object for args
function draw({ key }) {
        // console.log(key);

        // increment hue and update stroke style
        hue += 2;
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

        // start path
        ctx.beginPath();
        ctx.moveTo(x, y);

        // move x and y values based key user pressed

        // swtich statements for up, down, left, right
        switch (key) {
                case 'ArrowUp':
                        y -= MOVE_AMOUNT;
                        break;
                case 'ArrowDown':
                        y += MOVE_AMOUNT;
                        break;
                case 'ArrowLeft':
                        x -= MOVE_AMOUNT;
                        break;
                case 'ArrowRight':
                        x += MOVE_AMOUNT;
                        break;
                default:
                        break;
        }

        ctx.lineTo(x, y);
        ctx.stroke();
}

// handler for keys
function handleKey(e) {
        if (e.key.includes('Arrow')) {
                e.preventDefault();
                draw({ key: e.key });
                // console.log(e.key);
        }
}
// clear for shake function
function clearCanvas() {
        canvas.classList.add('shake');

        ctx.clearRect(0, 0, width, height);

        canvas.addEventListener(
                'animationend',
                function () {
                        canvas.classList.remove('shake');
                },
                { once: true } // 3rd param, only want one event listener created
        );
}

// listen for arrow keys
window.addEventListener('keydown', handleKey); // listing site wide for keyboard key down

shakebutton.addEventListener('click', clearCanvas);
