gsap.to(".light", {
  // selector text, Array, or object
  duration: 4, // seconds
  opacity: 1,
});

gsap.to(".light2", {
  // selector text, Array, or object
  duration: 4, // seconds
  opacity: 1,
});

gsap.to(".right", {
  scrollTrigger: ".right", // selector or element
  x: -200,
  duration: 2,
});

gsap.to(".left", {
  scrollTrigger: ".left", // selector or element
  x: 200,
  duration: 2,
});

gsap.to(".right2", {
  scrollTrigger: ".right2", // selector or element
  x: -200,
  duration: 2,
});

gsap.to(".left2", {
  scrollTrigger: ".left2", // selector or element
  x: 200,
  duration: 2,
});
