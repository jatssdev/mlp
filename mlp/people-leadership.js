const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const video = document.createElement('video');
video.src = 'your-video.mp4';  // Replace with your video file path
video.muted = true;
video.autoplay = true;
video.loop = true;

let particles = [];
const particleCount = 100; // Change this number to control particle density

// Define particle class
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
        if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 51, 204, 0.8)';  // Particle color
        ctx.fill();
    }
}

// Populate particles array
for (let i = 0; i < particleCount; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    particles.push(new Particle(x, y));
}

// Animate particles and draw video
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw video onto canvas
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Draw particle effects
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animate);
}

// Start video and particle animation
video.addEventListener('loadeddata', () => {
    animate();
});


// Function to open the popup
function openPopup(popupId) {
    document.getElementById(popupId).style.display = "block";
  }
  
  // Function to close the popup
  function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
  }
  
  // Add event listener to open popup on card click
  document.getElementById("card-1").addEventListener("click", function () {
    openPopup("popup-1");
  });