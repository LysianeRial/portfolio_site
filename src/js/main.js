import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

var burger = document.querySelector(".header-burger");
var menu = document.querySelector(".header-nav");

function toggleMenu() {
  menu.classList.toggle("is-active");
}

burger.addEventListener("click", toggleMenu);

function animations() {
  if (window.innerWidth > 768) {
    // #1 HEADER

    // Sélectionner les éléments nécessaires
    const portfolioTitle = document.querySelector("#portfolio-title");
    const lysianeTitle = document.querySelector("#lysiane-title");

    gsap.from(portfolioTitle, {
      opacity: 0,
      x: "-20%",
      duration: 1.5,
      delay: 0.5,
      ease: "power2.out",
    });

    gsap.from(lysianeTitle, {
      opacity: 0,
      x: "20%",
      duration: 2,
      delay: 1,
      ease: "power2.out",
    });

    // #2 ABOUT ME

    const aboutMe = document.querySelector("#aboutme");
    const aboutMeGroup = document.querySelector("#aboutme-group");
    const aboutMeH2 = document.querySelector("#aboutme-h2");
    const aboutMeSpan = document.querySelector("#aboutme-span");

    // gsap.from(aboutMeGroup, {
    //   opacity: 0,
    //   y: "25%",
    //   duration: 1.5,
    //   ease: "power2.out",
    //   scrollTrigger: {
    //     trigger: aboutMe,
    //     start: "top 25%",
    //     toggleActions: "play none none reverse",
    //     // end: "+=300px",
    //     // pin: true,
    //     // scrub: true,
    //     markers: true,
    //   },
    // });

    // gsap.from(aboutMeH2, {
    //   opacity: 0,
    //   x: "-20%",
    //   duration: 1.5,
    //   delay: 3,
    //   ease: "power2.out",
    //   toggleActions: "play none none reverse",
    // });

    // gsap.from(aboutMeSpan, {
    //   opacity: 0,
    //   x: "20%",
    //   duration: 2,
    //   delay: 3,
    //   ease: "power2.out",
    //   toggleActions: "play none none reverse",
    // });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutMe,
        start: "top 25%",
        toggleActions: "play none none reverse",
        markers: true,

        //  onLeaveBack: () => {
        //   gsap.to([aboutMeGroup, ".aboutme-h2", ".aboutme-h2 span"], {
        //     opacity: 0,
        //     y: "25%",
        //     duration: 1,
        //     ease: "power2.in",
        //   });
        // },
      },
    });

    // 1️⃣ animation du bloc
    tl.from(aboutMeGroup, {
      opacity: 0,
      y: "30%",
      duration: 1.5,
      ease: "power2.out",
    });

    // 2️⃣ animation du titre (après la première)
    tl.from(
      ".aboutme-h2",
      {
        opacity: 0,
        x: "-10%",
        duration: 1.3,
        ease: "power2.out",
      },
      "-=1",
    ); // petit délai après

    // 3️⃣ animation du span
    tl.from(
      ".aboutme-h2 span",
      {
        opacity: 0,
        x: "20%",
        duration: 1.8,
        ease: "power2.out",
      },
      "-=0.8",
    ); // démarre un peu avant la fin de la précédente

    // #3 INTERFACE

    const interFace = document.querySelector("#interface");
    const interfaceGroup = document.querySelector("#interface-group");
    const interfaceH2 = document.querySelector("#interface-h2");
    const interfaceSpan = document.querySelector("#interface-span");

    gsap.from(interfaceGroup, {
      opacity: 0,
      y: "25%",
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: interFace,
        start: "top 25%",
        toggleActions: "play none none reverse",
        // end: "+=300px",
        // pin: true,
        // scrub: true,
        markers: true,
      },
    });

    gsap.from(interfaceH2, {
      opacity: 0,
      x: "-7%",
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: interFace,
        start: "top 5%",
        toggleActions: "play none none reverse",
        // end: "+=300px",
        // pin: true,
        // scrub: true,
        markers: true,
      },
    });

    gsap.from(interfaceSpan, {
      opacity: 0,
      x: "-3%",
      duration: 2.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: interFace,
        start: "top 7%",
        toggleActions: "play none none reverse",
        // end: "+=300px",
        // pin: true,
        // scrub: true,
        markers: true,
      },
    });

    // #4 PHOTO

    const photo = document.querySelector("#photo");
    const photoH2 = document.querySelector("#photo-h2");

    gsap.from(photoH2, {
      opacity: 0,
      x: "5%",
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: photo,
        start: "top 55%",
        toggleActions: "play none none reverse",
        // end: "+=300px",
        // pin: true,
        // scrub: true,
        markers: true,
      },
    });

    // #5 VIDEO

    const viDeo = document.querySelector("#video");
    const videoGroup = document.querySelector("#video-group");
    const videoH2 = document.querySelector("#video-h2");
    const videoText = document.querySelector("#video-text");

    gsap.from(videoGroup, {
      opacity: 0,
      y: "25%",
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: viDeo,
        start: "top 25%",
        toggleActions: "play none none reverse",
        // end: "+=300px",
        // pin: true,
        // scrub: true,
        markers: true,
      },
    });

    gsap.from(videoH2, {
      opacity: 0,
      x: "-7%",
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: viDeo,
        start: "top 45%",
        toggleActions: "play none none reverse",
        // end: "+=300px",
        // pin: true,
        // scrub: true,
        markers: true,
      },
    });

    gsap.from(videoText, {
      opacity: 0,
      y: "35%",
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: viDeo,
        start: "top 5%",
        toggleActions: "play none none reverse",
        // end: "+=300px",
        // pin: true,
        // scrub: true,
        markers: true,
      },
    });

    // #6 IDENTITE

    const identitY = document.querySelector("#identity");
    const identityH2 = document.querySelector("#identity-h2");
    const identityH2span = document.querySelector("#identity-h2 span");
    const identityFirstGroup = document.querySelector("#identity-first-group");
    const identitySecondGroup = document.querySelector(
      "#identity-second-group",
    );
    const identityThirdGroup = document.querySelector("#identity-third-group");
    const identityFourGroup = document.querySelector("#identity-four-group");
    const identityFifthGroup = document.querySelector("#identity-fifth-group");
    const identitySixGroup = document.querySelector("#identity-six-group");

    gsap.from(identityH2, {
      opacity: 0,
      x: "-7%",
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: identitY,
        start: "top 45%",
        toggleActions: "play none none reverse",
        // end: "+=300px",
        // pin: true,
        // scrub: true,
        markers: true,
      },
    });

    gsap.from(identityH2span, {
      opacity: 0,
      duration: 2.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: identitY,
        start: "top 40%",
        toggleActions: "play none none reverse",
        // end: "+=300px",
        // pin: true,
        // scrub: true,
        markers: true,
      },
    });

    gsap.from(identityFirstGroup, {
      opacity: 0,
      y: "45%",
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: identitY,
        start: "top 25%",
        toggleActions: "play none none reverse",
        // end: "+=300px",
        // pin: true,
        // scrub: true,
        markers: true,
      },
    });

    gsap.from(identitySecondGroup, {
      opacity: 0,
      y: "25%",
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: identitY,
        start: "top 5%",
        toggleActions: "play none none reverse",
        // end: "+=300px",
        // pin: true,
        // scrub: true,
        markers: true,
      },
    });

    gsap.from(identityThirdGroup, {
      opacity: 0,
      y: "25%",
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: identitY,
        start: "top -70%",
        toggleActions: "play none none reverse",
        // end: "+=300px",
        // pin: true,
        // scrub: true,
        markers: true,
      },
    });

    gsap.from(identityFourGroup, {
      opacity: 0,
      y: "25%",
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: identitY,
        start: "top -110%",
        toggleActions: "play none none reverse",
        // end: "+=300px",
        // pin: true,
        // scrub: true,
        markers: true,
      },
    });

    gsap.from(identityFifthGroup, {
      opacity: 0,
      y: "25%",
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: identitY,
        start: "top -180%",
        toggleActions: "play none none reverse",
        // end: "+=300px",
        // pin: true,
        // scrub: true,
        markers: true,
      },
    });

    gsap.from(identitySixGroup, {
      opacity: 0,
      x: "15%",
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: identitY,
        start: "top -80%",
        toggleActions: "play none none reverse",
        // end: "+=300px",
        // pin: true,
        // scrub: true,
        markers: true,
      },
    });
  }
}
animations();

// window.addEventListener("resize", () => {
//   animations();
// });

// #ZOOM IMAGES

const images = document.querySelectorAll(".zoom-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// ouvrir image
images.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

// fermer au clic
lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
  lightbox.style.display = "none";
});

document.body.style.overflow = "hidden";
document.body.style.overflow = "auto";

// #MOUSE TRAIL

document.addEventListener("mousemove", (e) => {
  if (window.innerWidth <= 768) return; // désactive mobile

  const dot = document.createElement("div");
  dot.classList.add("cursor-trail");

  // détecter l’élément sous la souris
  const element = document.elementFromPoint(e.clientX, e.clientY);

  if (element) {
    const section = element.closest("section");

    if (section) {
      if (section.classList.contains("cursor-trail-white")) {
        dot.style.background = "white";

        // ⚫ SECTIONS NOIRES
      } else if (section.classList.contains("cursor-trail-black")) {
        dot.style.background = "black";
      }
    }
  }

  document.body.appendChild(dot);

  dot.style.left = e.pageX + "px";
  dot.style.top = e.pageY + "px";

  setTimeout(() => {
    dot.remove();
  }, 500);
});

// document.addEventListener("DOMContentLoaded", () => {
//   const canvas = document.getElementById("cursor-canvas");
//   const ctx = canvas.getContext("2d");

//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;

//   let points = [];
//   let lastMoveTime = Date.now();

//   document.addEventListener("mousemove", (e) => {
//     if (window.innerWidth <= 768) return;

//     points.push({ x: e.clientX, y: e.clientY });
//     lastMoveTime = Date.now();

//     if (points.length > 25) {
//       points.shift();
//     }
//   });

//   function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // ❌ disparaît si la souris ne bouge plus
//     if (Date.now() - lastMoveTime > 80) {
//       points = [];
//     }

//     if (points.length < 2) {
//       requestAnimationFrame(draw);
//       return;
//     }

//     ctx.shadowColor = "#00ffff";
//     ctx.shadowBlur = 20;
//     ctx.lineCap = "round";
//     ctx.lineJoin = "round";

//     for (let i = 1; i < points.length; i++) {
//       const p1 = points[i - 1];
//       const p2 = points[i];

//       const t = i / points.length;

//       const width = 2 + 10 * t;

//       ctx.beginPath();
//       ctx.moveTo(p1.x, p1.y);
//       ctx.lineTo(p2.x, p2.y);

//       ctx.strokeStyle = `rgba(0, 255, 255, ${1 - t})`;
//       ctx.lineWidth = width;

//       ctx.stroke();
//     }

//     requestAnimationFrame(draw);
//   }

//   draw();
// });
