// console.log('it works');

// select elements webcam, video, face and create canvas context

const video = document.querySelector('.webcam');

const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');

const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext('2d');

// make FaceDetector

const faceDetector = new window.FaceDetector({ fastMode: true }); // use window.FaceDetector() since // use FaceDetector() does not exist in node.js

// const SIZE = 10;
// const SCALE = 1.35;

// get input controls
const optionsInputs = document.querySelectorAll('.controls input[type="range"]');

console.log(optionsInputs);

const options = {
        SIZE: 10,
        SCALE: 1.35,
};

// event listener for input controls
function handleOption(e) {
        console.log(e.currentTarget.value);
        console.log(e.currentTarget.name);
        const { value, name } = e.currentTarget;
        options[name] = parseFloat(value);
}

optionsInputs.forEach((input) => input.addEventListener('input', handleOption));

// console.log(video, canvas, faceCanvas, faceDetector);

// write a function that will populate the users video
async function populateVideo() {
        // get stream from webcam
        const stream = await navigator.mediaDevices.getUserMedia({
                video: { width: 1280, height: 720 },
                // video: true, // 640 x 480
        });
        // console.log(stream);

        // fetch the media stream and place in video, the stream will be visable on the page now
        video.srcObject = stream;
        await video.play();

        /**
         * size the canvas and face canvas to be the same size as the video
         * i.e. 1280 x 720 in this case,
         * but it will adapt to the webcam stream e.g. 4k
         * so it's better to dynamicall set canvas and face canvas W x H
         */
        // console.log(video.videoWidth, video.videoHeight);
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        faceCanvas.width = video.videoWidth;
        faceCanvas.height = video.videoHeight;
}

/**
 * this is a special kind of function that returns a promise,
 * in this case promise to get the video stream from the webcam.
 * In order for use to wait for the stream to come back from the webcam, we need to
 * mark the function as `async`
 * and `await` the navigator.mediaDevices.getUserMedia
 */
// console.log(populateVideo);

/**
 * running the function makes the browser to display an `Allow Video` prompt to the user
 * after turning on the camera, we'll see the media stream show up in the console
 * The media stream can then be put in the video
 */
// populateVideo();

// working with Face Dection API
async function detect() {
        // FaceDector take in either image, video or canvas
        // in our case it will be the video stream
        const faces = await faceDetector.detect(video);
        console.log(faces);

        // run drawFace function
        faces.forEach(drawFace);
        faces.forEach(censor);

        // ask the browser when the next animation frame is and tell it to run detect function for us through recursion i.e. function calls itself
        // NOTE: the Detected face boundingBox is available, but the landmarks array (eys, node, mouth) are only possible in MacOS
        requestAnimationFrame(detect);
}

// draw a box around the face detected using the boundingBox
function drawFace(face) {
        // console.log(face);

        const { width, height, top, left } = face.boundingBox;
        // console.log({ width, height, top, left });
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#ffc600';
        ctx.lineWidth = 2;
        ctx.strokeRect(left, top, width, height);
}

// pixelate face, destructure bounding box
function censor({ boundingBox: face }) {
        // console.log(face);

        faceCtx.imageSmoothingEnabled = false; // to stop default smoothing of pixels, cos we want it properly pixelated

        faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);

        // draw a small snapshot of the detected face
        faceCtx.drawImage(
                // 5 source args
                video, // where the source comes from
                face.x, // where to start the source snapshot pull
                face.y, // how wide and how the snapshot is
                face.width,
                face.height,
                // 4 draw args
                face.x, // where should we start drawing the x and y
                face.y,
                options.SIZE, // little face snapshot painted in left
                options.SIZE
        );

        // scaling width and height
        const width = face.width * options.SCALE;
        const height = face.height * options.SCALE;

        // draw small face snapshot back at normal size over the boundingBox, so it will lose quality and be pixelated
        faceCtx.drawImage(
                // 5 source args
                faceCanvas, // source
                face.x,
                face.y,
                options.SIZE,
                options.SIZE,
                // 4 draw args
                face.x - (width - face.width) / 2,
                face.y - (height - face.height) / 2,
                width,
                height
        );
}

/**
 * run detect() after populateVideo()
 * can't detect faces until video stream is running
 * detect is only run once, but we need to keep it runnning
 * using using recursion
 */
populateVideo().then(detect);
