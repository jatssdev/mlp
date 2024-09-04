/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#961043" // Changed to blue
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#961043", // Changed to blue
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onscroll": {
                "enable": true,
                "mode": "push"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});


$(document).ready(function () {
    var $video = $('#backgroundVideo');
    let lastScrollTop = 0

    function checkScrollPosition() {
        var scrollY = $(window).scrollTop();


        if (scrollY > lastScrollTop) {
            // Scrolling down
            $('#header').css('top', '-100px'); // Adjust this value based on your header height
        } else {
            // Scrolling up
            $('#header').css('top', '0');
        }

        lastScrollTop = scrollY;

        var scaleValue = 1 + scrollY / 200; // Adjust the divisor for desired scaling effect
        $('#particles-js').css('transform', 'scale(' + scaleValue + ')');
        if (scrollY >= 100) {
            $('.text *').css({ 'background-color': 'transparent', 'color': 'white' });
            $('.line').css({ 'background-color': 'transparent' });
            $('.line span').css({ 'color': 'white' });
            $('.line div').css({ 'background-color': 'white' });
            $video.css({ 'opacity': 1, 'z-index': 7 });  // Show video
            $('.text h1').show();
            $('#header').css({ 'background-color': 'rgba(255, 255, 255, 0.703)' });
        } else {
            $video.css({ 'opacity': 0, 'z-index': 1 });  // Show video
            $('#header').css({ 'background-color': 'white' });
            $('.text *').css({ 'background-color': 'white', 'color': 'var(--primary)' });
            $('.line').css({ 'background-color': 'white' });
            $('.line span').css({ 'color': 'var(--primary)' });
            $('.line div').css({ 'background-color': 'var(--primary)' });
        }
    }

    $(window).on('scroll', checkScrollPosition);
    checkScrollPosition();



});
