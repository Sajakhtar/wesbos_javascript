// console.log('it works');

import { handleResult } from './handlers'; // no need to add '.js' since we are using Parcel bundler
import { colorsByLength, isDark } from './colors';

const colorsEl = document.querySelector('.colors');

function displayColors(colors) {
        return colors
                .map(
                        (color) =>
                                `<span class="color ${color} ${
                                        isDark(color) ? 'dark' : ''
                                }" style="background: ${color}">${color}</span>`
                )
                .join('');
}

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
        // see if browser sports window.webkitSpeechRecoginition
        if (!('SpeechRecognition' in window)) {
                console.log('Sorry your browser does not support speech recognition');
        }

        // it does work
        console.log('starting...');

        // make a new speech reco
        const recognition = new SpeechRecognition();

        // speech reco settings
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.onresult = handleResult;
        recognition.start();
}

start();
colorsEl.innerHTML = displayColors(colorsByLength);
