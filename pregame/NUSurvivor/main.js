gsap.registerPlugin(ScrollTrigger);
gsap.from(".plug-illo", 
{x: -100, duration: 1}, 1.5);

gsap.from(".laptop-illo", 
{scrollTrigger:{
    trigger: ".laptop-illo"
}, x: 600, duration: 2}, 1);

