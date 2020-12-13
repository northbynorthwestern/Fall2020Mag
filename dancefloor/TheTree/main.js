gsap.registerPlugin(ScrollTrigger);
gsap.to(".tree-illo", 
{scrollTrigger:{
    trigger: ".article-body"
}, opacity: .3, duration: 2}, 1);

gsap.to(".tree-illo-mobile", 
{scrollTrigger:{
    trigger: ".article-body"
}, opacity: .1, duration: 2}, 1);

