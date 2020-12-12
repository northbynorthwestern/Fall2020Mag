var tl = gsap.timeline();
tl.from(".article-hed", {opacity: 0, duration: 1}, 1)
tl.from(".article-dek", {opacity: 0, y: 50, duration: 2}, "<1")
tl.from(".article-enter", {display: "none"})
tl.to(".article-enter", {opacity: 1, duration: .5}, "<")

document.querySelector(".article-enter").onclick = function(){
    let clickTL = gsap.timeline();
    // clickTL.to("body", {overflowY: "scroll"});
    clickTL.to(".article-dek", {opacity: 0});
    clickTL.to(".article-enter", {opacity: 0});
    clickTL.to(".article-enter", {display: "none"});
    clickTL.to("#story1", {right: 0, duration: 2}, "<.5");
    clickTL.to("#story2", {left: 0, duration: 2}, "<.5");
    clickTL.to("#story3", {right: 0, duration: 2}, "<.5");
    clickTL.to("#story4", {left: 0, duration: 2}, "<.5");
    clickTL.to("#story5", {right: 0, duration: 2}, "<.5")}