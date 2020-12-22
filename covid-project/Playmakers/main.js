var tl = gsap.timeline();
tl.from(".article-hed", {opacity: 0, duration: 2});
tl.from(".article-dek", {opacity: 0, duration: 2}, "<1");
tl.from(".article-byline", {opacity: 0, duration: 2}, "<1");
tl.from(".article-body", {opacity: 0, duration: 2}, "<1");
tl.from(".mag-navbar", {top: -300, duration: 2},"<" );
tl.from("body", {overflow: "hidden"}, "<");
tl.from(".article-credits", {opacity: 0, duration: 2}, "<1");

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    gsap.to(".mag-navbar", {top: 0, duration: .5})
  } else {
    gsap.to(".mag-navbar", {top: "-10vh", duration: .5})
  }
  prevScrollpos = currentScrollPos;
}