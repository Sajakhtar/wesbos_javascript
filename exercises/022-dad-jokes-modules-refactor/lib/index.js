const endpoint = 'https://icanhazdadjoke.com';

export async function fetchJoke(loader, jokeHolder, jokeButtonSpan) {
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
