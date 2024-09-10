// GSAP Animation for the background image
gsap.fromTo(".background-image", 
{ x: 200 }, // Starting position off-screen to the right
    { 
      x: 40,   // Moves to the center
      duration: 1, // Duration of 1 second
      ease: "power1.inOut", // Smooth in-out animation
    }
);

// GSAP Animation for the hero title
gsap.fromTo(".hero-title",
    { x: -50,
        opacity: 0 
     }, // Starting position off-screen to the left
    { 
      x: 40,   // Moves to the center
      opacity: 1,
      duration: 1.2, // Slightly longer animation   
      ease: "power1.inOut", 
    }
);  

// GSAP Animation for the secondary section
gsap.fromTo(".secondary-section",
    { x: -50,
        opacity: 0  }, // Starting off-screen to the left
    { 
      x: 40,
      opacity: 1,   // Moves to the center
      duration: 0.9, // Slightly quicker animation
      ease: "power1.inOut", 
    }
);  

// GSAP Animation for the secondary section
gsap.fromTo(".only-citadel-title ",
    { x: -50,
        opacity: 0
     }, // Starting off-screen to the left
    { 
      x: 40,
      opacity: 1,   // Moves to the center
      duration: 0.9, // Slightly quicker animation
      ease: "power1.inOut", 
    }
);  

gsap.fromTo(".image-container ",
    { x: 40,
        opacity: 0
     }, // Starting off-screen to the left
    { 
      x: -50,
      opacity: 2,   // Moves to the center
      duration: 0.9, // Slightly quicker animation
      ease: "power1.inOut", 
    }
);  

gsap.fromTo(".weather-title",
    { x: -10,
        opacity: 0
     }, // Starting off-screen to the left
    { 
      x: 0,
      opacity: 1,   // Moves to the center
      duration: 2, // Slightly quicker animation
      ease: "power1.inOut", 
    }
);  

gsap.fromTo(".excellence-title",
    { x: -50,
        opacity: 0
     }, // Starting off-screen to the left
    { 
      x: 0,
      opacity: 1,   // Moves to the center
      duration: 0.9, // Slightly quicker animation
      ease: "power1.inOut", 
    }
);  

gsap.fromTo(".advantage-title",
    { x: -50,
        opacity: 0
     }, // Starting off-screen to the left
    { 
      x: 0,
      opacity: 1,   // Moves to the center
      duration: 0.9, // Slightly quicker animation
      ease: "power1.inOut", 
    }
);  

gsap.fromTo(".title",
    { x: -50,
        opacity: 0
     }, // Starting off-screen to the left
    { 
      x: 0,
      opacity: 1,   // Moves to the center
      duration: 0.9, // Slightly quicker animation
      ease: "power1.inOut", 
    }
);  

gsap.fromTo(".advantage-image",
    { x: 100,
        opacity: 0
     }, // Starting off-screen to the left
    { 
      x: 0,
      opacity: 1,   // Moves to the center
      duration: 0.9, // Slightly quicker animation
      ease: "power1.inOut", 
    }
);  
