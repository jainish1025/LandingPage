var tl = gsap.timeline();

tl.from("#nav-bar ", {
  opacity: 0,
  // duration: 0.8,
  delay: 0.3,
});

tl.from("#nav-bar i ,  #nav-bar #nav-left, #nav-bar #nav-right", {
  y: -80,
  opacity: 0,
  duration: 0.8,
  stagger: 0.5,
});

tl.from(".hero-content", {
  opacity: 0,
  duration: 0.4,
});

tl.from(".hero-content .hero-right img", {
  scale: 0.7,
  opacity: 0,
  duration: 0.5,
});

tl.from(".hero-content .hero-left h1  , .lern-btn #lern ", {
  x: -500,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
});


// tl.from(".cart-section", {
//   opacity: 0,
//   duration: 1,
// });

gsap.from(".cart-section .cart", {
  x: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".cart-section .cart",
    scroller: "body",
    // markers: true,
    start: "top 70%",
  },
});

gsap.from(".info-section .info", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".info-section .info",
    scroller: "body",
    // markers: true,
    start: "top 70%",
  },
});

gsap.from(".footer-content .footer-left", {
  y: -200,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".footer-content .footer-left",
    scroller: "body",
    // markers: true,
    start: "top 60%",
  },
});
gsap.from(".footer-content .footer-right", {
  y: 200,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".footer-content .footer-right",
    scroller: "body",
    // markers: true,
    start: "top 90%",
  },
});

