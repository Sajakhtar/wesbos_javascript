import { hslToRgb } from './utils';

// Setup canvas
const WIDTH = 1500;
const HEIGHT = 1500;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = WIDTH;
canvas.height = HEIGHT;
let analyzer;
let bufferLength;

function handleError(err) {
        console.log('You must provide access to the microphone');
}

async function getAudio() {
        // create Audio Stream from mic
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true }).catch(handleError);

        // audio context
        const audioCtx = new AudioContext();

        // create analyzer
        analyzer = audioCtx.createAnalyser();

        // source to pipe into audio context
        const source = audioCtx.createMediaStreamSource(stream);
        source.connect(analyzer);

        // how much data to collect
        analyzer.fftSize = 2 ** 10; // 1024 bits, 64 bits minimum i.e. 2**6

        // how many pieces of data there are
        bufferLength = analyzer.frequencyBinCount;

        // pull data off the audio
        // Uint8Array used rarely, e..g with graphics, time data. The data we get from audio is 8 bits (1 byte). Each array item can only be 8 bits - type safe
        const timeData = new Uint8Array(bufferLength);
        // console.log(timeData);

        const frequencyData = new Uint8Array(bufferLength);
        // console.log(frequencyData);

        drawTimeData(timeData);
        drawFrequency(frequencyData);
}

function drawTimeData(timeData) {
        // console.log(timeData); // array with Zeroes

        // inject time data into timeData array
        // visual representation of words spoke into mic
        analyzer.getByteTimeDomainData(timeData);
        // console.log(timeData); // array values now 128 to 255

        // now that we have the data, turn it into somehting visual
        // 1. clear canvas
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        // 2. setup canvas drawing
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#ffc600';
        ctx.beginPath();
        const sliceWidth = WIDTH / bufferLength;
        // console.log(sliceWidth);
        let x = 0;
        timeData.forEach((data, i) => {
                const v = data / 128; // nomralize as silence = 128
                const y = (v * HEIGHT) / 2;

                // draw lines
                // if it's the first line
                if (i === 0) {
                        ctx.moveTo(x, y);
                } else {
                        ctx.lineTo(x, y);
                }
                x += sliceWidth;
        });

        ctx.stroke();

        // call itself as soon as possible
        requestAnimationFrame(() => drawTimeData(timeData));
}

function drawFrequency(frequencyData) {
        // get frequency data into frequency data array
        analyzer.getByteFrequencyData(frequencyData);
        // console.log(frequencyData);

        // figure out the freq bar width - multiplyy by 2.5 to only get lower end of Frequencies
        const barWidth = (WIDTH / bufferLength) * 2.5;
        // console.log(barWidth);

        let x = 0;

        frequencyData.forEach((data) => {
                // Freq data is 0 to 255
                const percent = data / 255;

                // Hue, Saturation, Lightness
                const [h, s, l] = [360 / (percent * 360) - 0.5, 0.8, 0.5];
                const barHeight = (HEIGHT * percent) / 2;

                // convert color to HSL
                const [r, g, b] = hslToRgb(h, s, l);
                // ctx.fillStyle = 'red';
                ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
                ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

                x += barWidth + 2;
        });

        // call itself as soon as possible
        requestAnimationFrame(() => drawFrequency(frequencyData));
}

getAudio();
