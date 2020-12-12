gsap.registerPlugin(ScrollTrigger);

gsap.to(".img1", {
  scrollTrigger: {
    trigger: ".img1",
    toggleActions: "restart pause restart pause",
  },
  duration: 2,
  opacity: 0.7,
});

gsap.to(".img2", {
  scrollTrigger: {
    trigger: ".img2",
    toggleActions: "restart pause restart pause",
  },
  duration: 2,
  opacity: 0.7,
});

gsap.to(".img3", {
  scrollTrigger: {
    trigger: ".img3",
    toggleActions: "restart pause restart pause",
  },
  duration: 2,
  opacity: 0.7,
});

gsap.to(".img4", {
  scrollTrigger: {
    trigger: ".img4",
    toggleActions: "restart pause restart pause",
  },
  duration: 2,
  opacity: 0.7,
});
