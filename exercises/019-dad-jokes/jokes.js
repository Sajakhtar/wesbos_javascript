// console.log('it works');

const jokeButton = document.querySelector('.getJoke');
const jokeButtonSpan = jokeButton.querySelector('.jokeText');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');

const endpoint = 'https://icanhazdadjoke.com';

const buttonText = [
        'Ugh.',
        '🤦🏻‍♂️',
        'omg dad.',
        'you are the worst',
        'seriously',
        'stop it.',
        'please stop',
        'that was the worst one',
];

async function fetchJoke() {
        // turn on loader, hide joke paragraph,
        loader.classList.remove('hidden');
        jokeHolder.classList.add('hidden');
        jokeButtonSpan.classList.add('hidden');

        const response = await fetch(endpoint, {
                headers: {
                        Accept: 'application/json',
                        // Accept: 'text/plain',
                        // Accept: 'text/html',
                },
        });
        // console.log(response);
        const data = await response.json();
        // console.log(data);

        // turn off loader, show joke paragraph,
        loader.classList.add('hidden');
        jokeHolder.classList.remove('hidden');
        jokeButtonSpan.classList.remove('hidden');

        return data;
}

// fetchJoke();

function randomItemFromArray(arr, not) {
        const item = arr[Math.floor(Math.random() * arr.length)];
        // console.log(item);

        if (item === not) {
                console.log('that was used last time, look again');
                randomItemFromArray(arr, not); // recursion
        }

        // console.log(item);
        return item;
}

// randomItemFromArray(buttonText, 'please stop');

async function handleClick() {
        const { joke } = await fetchJoke();
        // console.log(joke);
        jokeHolder.textContent = joke;
        jokeButtonSpan.textContent = randomItemFromArray(buttonText, jokeButtonSpan.textContent);
}

jokeButton.addEventListener('click', handleClick);
