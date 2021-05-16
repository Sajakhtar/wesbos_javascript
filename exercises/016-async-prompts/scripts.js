// wait promise
function wait(ms = 0) {
        return new Promise((resolve) => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
        let myPopup = popup;
        popup.classList.remove('open');
        await wait(1000);

        // remove popup from DOM
        popup.remove();

        // we still have access to popup after it's removed, which is a potential memory leak so we want to destroy it entirely
        // console.log(myPopup);
        myPopup = null;
        // console.log(myPopup);
}

// Popup Prompt Promise
function ask(options) {
        return new Promise(async function (resolve) {
                // create a popup with all the fields
                // createElement immediately returns the DOM node so we can add eventlistener for submit
                const popup = document.createElement('form');
                popup.classList.add('popup');
                popup.insertAdjacentHTML(
                        'afterbegin',
                        `<fieldset>
                            <label>${options.title}</label>
                            <input type="text" name="input"/>
                            <button type="submit">Submit</button>
                        </fieldset>`
                );

                // check if they want a cancel button
                if (options.cancel) {
                        const skipButton = document.createElement('button');
                        skipButton.type = 'button'; // default is submit
                        skipButton.textContent = 'Cancel';
                        popup.firstElementChild.appendChild(skipButton);
                        // listen for click on the cancel button
                        skipButton.addEventListener(
                                'click',
                                function () {
                                        resolve(null);
                                        destroyPopup(popup);
                                },
                                { once: true }
                        );
                }

                // listen for submit event on inputs
                popup.addEventListener(
                        'submit',
                        function (e) {
                                e.preventDefault();
                                console.log('submitted');
                                // console.log(e.target.input.value);
                                resolve(e.target.input.value);

                                // remove it from DOM
                                destroyPopup(popup);
                        },
                        { once: true } // removes eventlistener after one submit
                );
                // on submission, resolve the data that was in the input box

                // insert popup into OM
                document.body.appendChild(popup);
                // add timeout before adding open class, to allow for trnsitions
                // setTimeout(function () {
                //         popup.classList.add('open');
                // }, 50);

                await wait(50);
                popup.classList.add('open');
        });
}

// question function
async function askQuestion(e) {
        // console.log(e);
        const button = e.currentTarget;
        const cancel = 'cancel' in button.dataset; // or use button.hasAttribute('data-cancel')
        const answer = await ask({ title: button.dataset.question, cancel });
        console.log(answer);
}

// select all buttons that have a question
const buttons = document.querySelectorAll('[data-question]');
// console.log(buttons);
buttons.forEach((button) => button.addEventListener('click', askQuestion));

// series of popup sequentially

const questions = [
        { title: 'What is your name?' },
        { title: 'What is your age?', cancel: true },
        { title: 'What is your dogs name?' },
];

// problem is that Promise.all fires all popups concurrently
// const answers = Promise.all([ask(questions[0]), ask(questions[1]), ask(questions[2])]).then((answers) => {
//         console.log(answers);
// });

// better way to do it concurrently
// const qPromises = questions.map(ask); // returns an array of promises
// console.log(qPromises);

// loop over questions, place in ask function then return a promsise, which results in an array of promises (one per question)
// Promise.all(questions.map(ask)).then((data) => console.log(data));

// we want to map over questions array, asynchronously using For Of loop

// async function askMany() {
//         for (const question of questions) {
//                 const answer = await ask(question);
//                 console.log(answer);
//         }
// }

// askMany(); // on page load

// via a generic utility function (top level function)
async function asyncMap(array, callback) {
        // array to store results
        const results = [];

        // loop over array
        for (const item of array) {
                const result = await callback(item);
                results.push(result);
        }

        // when loop is done, return results
        return results;
}

// run utility function for our questions array and ask() callback
async function go() {
        const answers = await asyncMap(questions, ask);
        console.log(answers);
}

go();
