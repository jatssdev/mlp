// let noiseZ;
// let size;
// let columns;
// let rows;
// let w;
// let h;
// let field;
// let canvasField = document.getElementById("field");
// let ctxField = canvasField.getContext("2d");
// let video = document.getElementById("backgroundVideo");
// let simplex = new SimplexNoise(); // Initialize SimplexNoise

// function setup(container) {
//     size = 20;
//     noiseZ = 0;
//     reset(container);
//     window.addEventListener("resize", () => reset(container));
// }

// function initField() {
//     field = new Array(columns);
//     for (let x = 0; x < columns; x++) {
//         field[x] = new Array(rows);
//         for (let y = 0; y < rows; y++) {
//             field[x][y] = [0, 0];
//         }
//     }
// }

// function calculateField() {
//     for (let x = 0; x < columns; x++) {
//         for (let y = 0; y < rows; y++) {
//             let angle = simplex.noise3D(x / 50, y / 50, noiseZ) * Math.PI * 2;
//             let length = simplex.noise3D(x / 100 + 40000, y / 100 + 40000, noiseZ);
//             field[x][y][0] = angle;
//             field[x][y][1] = length;
//         }
//     }
// }

// function reset(container) {
//     const pxRatio = window.devicePixelRatio;
//     w = canvasField.offsetWidth * pxRatio;
//     h = canvasField.offsetHeight * pxRatio;
//     canvasField.width = w;
//     canvasField.height = h;
//     columns = Math.floor(w / size) + 1;
//     rows = Math.floor(h / size) + 1;
//     initField();
// }

// function drawField(ctx) {
//     ctx.clearRect(0, 0, canvasField.width, canvasField.height);

//     // Draw the solid background color
//     ctx.fillStyle = 'black'; // Solid background color
//     ctx.fillRect(0, 0, canvasField.width, canvasField.height);

//     // Draw the video on the canvas
//     if (video.readyState >= video.HAVE_CURRENT_DATA) {
//         ctx.globalCompositeOperation = 'source-in'; // Apply the mask
//         ctx.drawImage(video, 0, 0, canvasField.width, canvasField.height);
//     }

//     // Reset the globalCompositeOperation
//     ctx.globalCompositeOperation = 'source-over';

//     // Draw particles on top
//     ctx.strokeStyle = 'blue'; // Particle color and opacity
//     ctx.lineWidth = 1;
//     for (let x = 0; x < columns; x++) {
//         for (let y = 0; y < rows; y++) {
//             let angle = field[x][y][0];
//             let length = field[x][y][1];
//             ctx.save();
//             ctx.translate(x * size, y * size);
//             ctx.rotate(angle);
//             ctx.beginPath();
//             ctx.moveTo(0, 0);
//             ctx.lineTo(0, size * length);
//             ctx.stroke();
//             ctx.restore();
//         }
//     }
// }

// tsParticles
//     .load("tsparticles", {
//         fpsLimit: 120,
//         particles: {
//             number: {
//                 value: 0,
//                 density: {
//                     enable: false
//                 }
//             },
//             color: {
//                 value: ["#000000"] // Optional: For particles' colors
//             },
//             shape: {
//                 type: "circle"
//             },
//             opacity: {
//                 value: 1,
//                 random: {
//                     enable: true,
//                     minimumValue: 0.1
//                 },
//                 animation: {
//                     enable: false
//                 }
//             },
//             size: {
//                 value: 7,
//                 random: {
//                     enable: true,
//                     minimumValue: 3
//                 },
//                 animation: {
//                     enable: false
//                 }
//             },
//             line_linked: {
//                 enable: false
//             },
//             move: {
//                 enable: true,
//                 speed: 5,
//                 direction: "none",
//                 random: false,
//                 straight: false,
//                 outMode: "out",
//                 bounce: false,
//                 warp: true
//             }
//         },
//         interactivity: {
//             detect_on: "canvas",
//             events: {
//                 resize: true
//             }
//         },
//         detectRetina: true,
//         pauseOnBlur: true
//     })
//     .then((container) => {
//         container.setNoise({
//             init: function () {
//                 setup(container);
//             },
//             update: function () {
//                 calculateField();
//                 noiseZ += 0.005;
//                 drawField(ctxField);
//             },
//             generate: function (p) {
//                 const pos = p.getPosition();

//                 const px = Math.max(Math.floor(pos.x / size), 0);
//                 const py = Math.max(Math.floor(pos.y / size), 0);

//                 if (!field || !field[px] || !field[px][py]) {
//                     return { angle: 0, length: 0 };
//                 }

//                 return {
//                     angle: field[px][py][0],
//                     length: field[px][py][1]
//                 };
//             }
//         });

//         container.refresh();
//     });

// script.js
const canvasField = document.getElementById('field');
const ctxField = canvasField.getContext('2d');

let noise3D;
let size;
let columns;
let rows;
let w;
let h;
let field;

function setup() {
    size = 40;
    noise3D = new SimplexNoise(); // Initialize SimplexNoise
    reset();
    window.addEventListener('resize', reset);
}

function initField() {
    field = new Array(columns);
    for (let x = 0; x < columns; x++) {
        field[x] = new Array(rows);
        for (let y = 0; y < rows; y++) {
            field[x][y] = [0, 0];
        }
    }
}

function calculateField() {
    for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
            let angle = noise3D.noise3D(x / 50, y / 50, performance.now() / 5000) * Math.PI * 2;
            let length = noise3D.noise3D(x / 100 + 40000, y / 100 + 40000, performance.now() / 5000);
            field[x][y][0] = angle;
            field[x][y][1] = length;
        }
    }
}

function reset() {
    const pxRatio = window.devicePixelRatio;
    w = canvasField.offsetWidth * pxRatio;
    h = canvasField.offsetHeight * pxRatio;
    canvasField.width = w;
    canvasField.height = h;
    columns = Math.floor(w / size) + 1;
    rows = Math.floor(h / size) + 1;
    initField();
}

function drawField() {
    ctxField.clearRect(0, 0, canvasField.width, canvasField.height);

    // Draw particles on top
    for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
            let angle = field[x][y][0];
            let length = field[x][y][1];
            ctxField.save();
            ctxField.translate(x * size, y * size);
            ctxField.rotate(angle);
            ctxField.strokeStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, 0.8)`; // Gradient colors
            ctxField.lineWidth = 2; // Increase the width of the particles
            ctxField.beginPath();
            ctxField.moveTo(0, 0);
            ctxField.lineTo(0, size * length);
            ctxField.stroke();
            ctxField.restore();
        }
    }
}

function animate() {
    calculateField();
    drawField();
    requestAnimationFrame(animate);
}

setup();
animate();
