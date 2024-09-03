const canvasField = document.getElementById('field');
const ctxField = canvasField.getContext('2d');

let noise3D;
let size;
let columns;
let rows;
let w;
let h;
let field;
let lineWidth; // New variable for line width

function setup() {
    size = 40;
    lineWidth = 2; // Initial line width
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
            ctxField.lineWidth = lineWidth; // Dynamic line width based on scroll
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

function handleScroll() {
    const scrollY = window.scrollY;
    size = 40 + scrollY / 10; // Increase the size based on scroll position
    lineWidth = 2 + scrollY / 10; // Increase the line width based on scroll position
    reset();
}

setup();
animate();

window.addEventListener('scroll', handleScroll);

$(document).ready(function () {
    var $video = $('#backgroundVideo');

    // Function to check scroll position and show/hide video
    function checkScrollPosition() {
        var scrollY = $(window).scrollTop();
        if (scrollY >= 100) {
            $('.text *').css({ 'background-color': 'transparent', 'color': 'white' })
            $('.line').css({ 'background-color': 'transparent' })
            $('.line span').css({ 'color': 'white' })
            $('.line div').css({ 'background-color': 'white' })
            $video.css('opacity', 1);  // Show video
            $('.text h1').show();
        } else {
            $video.css('opacity', 0);  // Hide video
            $('.text *').css({ 'background-color': 'white', 'color': 'var(--primary)' })
            $('.line').css({ 'background-color': 'white' })
            $('.line span').css({ 'color': 'var(--primary)' })
            $('.line div').css({ 'background-color': 'var(--primary)' })
        }
    }

    // Add the scroll event listener
    $(window).on('scroll', checkScrollPosition);

    // Optional: Set initial state
    checkScrollPosition();
});
