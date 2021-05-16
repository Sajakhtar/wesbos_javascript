// wait promise
function wait(ms = 0) {
        return new Promise((resolve) => setTimeout(resolve, ms));
}

// Random number between min and max function
// 3rd are allows us to specificy the 'random' number for testing purposes
function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
        return Math.floor(randomNumber * (max - min) + min);
}

// Version 1: async for of loop
// async function draw(el) {
//         // console.log(el);
//         const text = el.textContent;
//         let soFar = '';

//         for (const letter of text) {
//                 // console.log(letter);
//                 soFar += letter;
//                 // console.log(soFar);
//                 el.textContent = soFar;

//                 // wait for some amount of time
//                 // console.log(el.dataset);
//                 const { typeMin, typeMax } = el.dataset;
//                 const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
//                 await wait(amountOfTimeToWait);
//         }
// }

// Version 2: recursion i.e. function calling itself until there is an exit condition
function draw(el) {
        let index = 1;
        const text = el.textContent;
        const { typeMin, typeMax } = el.dataset;

        async function drawLetter() {
                el.textContent = text.slice(0, index);
                index += 1;

                // wait for somethimg
                const amountOfTimeToWait = getRandomBetween(typeMin, typeMax); // every letter would have random time to wait
                await wait(amountOfTimeToWait);

                // recusion exit condition
                if (index <= text.length) {
                        drawLetter();
                }
        }

        // when this function draw() runs kick off drawLetter()
        drawLetter();
}

// select all data-type elements
// const els = document.querySelectorAll('[data-type]');
// els.forEach((el) => draw(el));
// els.forEach(draw);

document.querySelectorAll('[data-type]').forEach(draw);
