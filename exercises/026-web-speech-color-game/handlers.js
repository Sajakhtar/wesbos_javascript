// import { isValidColor } from './colors'; // for parcel
import { isValidColor } from './colors.js';

function logWords(results) {
        // console.log(results[results.length - 1][0].transcript);
}

export function handleResult({ results }) {
        // console.log(e);
        // logWords(e.results);
        // logWords(results);

        const words = results[results.length - 1][0].transcript;
        // console.log(words);

        // lowercase everything
        let color = words.toLowerCase();
        // strip out spaces - to replace all spaces, use regex replaceAll() method coming
        color = color.replace(/\s/g, '');
        // check if it is a valid color, then show UI
        if (!isValidColor(color)) return;
        // if it is, , then show UI
        // console.log('this is a valid color');
        console.log(color);
        const colorSpan = document.querySelector(`.${color}`);
        // console.log(colorSpan);
        colorSpan.classList.add('got'); // CSS to cross color name out
        // change background color
        document.body.style.backgroundColor = color;
}
