var pageTurn = (currentPage, targetPage) => {
    
     gsap.to(currentPage, {opacity: 0});
     document.querySelector(currentPage).classList.add("article-inactive")
     document.querySelector(targetPage).classList.toggle("article-inactive");
     gsap.from(targetPage, {opacity: 0}, 2)
     
}
let textOne = gsap.timeline();
textOne.from("#text1A", {display: "none"}, 1);
textOne.from("#text1A", {opacity: 0, x: 50}, "<");
textOne.to("#text1B", {display: "flex"}, "<1");
textOne.from("#text1B", {opacity: 0, y: -10});
textOne.to("#text1B", {display: "none"}, "<1");
textOne.from("#text1C", {display: "none"}, "<.5");
textOne.from("#text1C", {opacity: 0, x: -50}, "<");
textOne.to("#text1-container", {borderBottom: "1px solid gray"}, "<")
textOne.from("#text2A", {display: "none"}, "<1");
textOne.from("#text2A", {opacity: 0, x: 50}, "<");
textOne.to("#text2B", {display: "flex"}, "<1");
textOne.from("#text2B", {opacity: 0, y: -10});
textOne.to("#text2B", {display: "none"}, "<1");
textOne.from("#text2C", {display: "none"}, "<.5");
textOne.from("#text2C", {opacity: 0, x: -50}, "<");
textOne.to("#text2-container", {borderBottom: "1px solid gray"}, "<")
textOne.from("#text3A", {display: "none"}, "<1");
textOne.from("#text3A", {opacity: 0, x: 50}, "<");
textOne.to("#text3B", {display: "flex"}, "<1");
textOne.from("#text3B", {opacity: 0, y: -10});
textOne.to("#text3B", {display: "none"}, "<1");
textOne.from("#text3C", {display: "none"}, "<.5");
textOne.from("#text3C", {opacity: 0, x: -50}, "<");
textOne.to("#text3-container", {borderBottom: "1px solid gray"}, "<");
textOne.from("#one-next", {opacity: 0}, "<");

let textTwo = gsap.timeline();
textTwo.from("#text4A", {display: "none"}, 1);
textTwo.from("#text4A", {opacity: 0, x: 50}, "<");
textTwo.to("#text4B", {display: "flex"}, "<1");
textTwo.from("#text4B", {opacity: 0, y: -10});
textTwo.to("#text4B", {display: "none"}, "<1");
textTwo.from("#text4C", {display: "none"}, "<.5");
textTwo.from("#text4C", {opacity: 0, x: -50}, "<");
textTwo.to("#text4-container", {borderBottom: "1px solid gray"}, "<");
textTwo.from("#text5A", {display: "none"}, "<1");
textTwo.from("#text5A", {opacity: 0, x: 50}, "<");
textTwo.to("#text5B", {display: "flex"}, "<1");
textTwo.from("#text5B", {opacity: 0, y: -10});
textTwo.to("#text5B", {display: "none"}, "<1");
textTwo.from("#text5C", {display: "none"}, "<.5");
textTwo.from("#text5C", {opacity: 0, x: -50}, "<");
textTwo.to("#text5-container", {borderBottom: "1px solid gray"}, "<")
textTwo.from("#text6A", {display: "none"}, "<1");
textTwo.from("#text6A", {opacity: 0, x: 50}, "<");
textTwo.to("#text6B", {display: "flex"}, "<1");
textTwo.from("#text6B", {opacity: 0, y: -10});
textTwo.to("#text6B", {display: "none"}, "<1");
textTwo.from("#text6C", {display: "none"}, "<.5");
textTwo.from("#text6C", {opacity: 0, x: -50}, "<");
textTwo.from("#text6D", {opacity: 0, x: 50}, "<1");
textTwo.from("#two-next", {opacity: 0}, "<");

let textThree = gsap.timeline();
textThree.from("#text7A", {display: "none"}, 1);
textThree.from("#text7A", {opacity: 0, x: 50}, "<");
textThree.to("#text7B", {display: "flex"}, "<1");
textThree.from("#text7B", {opacity: 0, y: -10});
textThree.to("#text7B", {display: "none"}, "<1");
textThree.from("#text7C", {display: "none"}, "<.5");
textThree.from("#text7C", {opacity: 0, x: -50}, "<");
textThree.from("#text7D", {opacity: 0, y: -10}, "<1");
textThree.to("#text7-container", {borderBottom: "1px solid gray"}, "<");
textThree.from("#text8A", {display: "none"}, "<1");
textThree.from("#text8A", {opacity: 0, x: 50}, "<");
textThree.to("#text8B", {display: "flex"}, "<1");
textThree.from("#text8B", {opacity: 0, y: -10});
textThree.to("#text8B", {display: "none"}, "<1");
textThree.from("#text8C", {display: "none"}, "<.5");
textThree.from("#text8C", {opacity: 0, x: -50}, "<");
textThree.to("#text8-container", {borderBottom: "1px solid gray"}, "<");
textThree.from("#text9A", {display: "none"}, "<1");
textThree.from("#text9A", {opacity: 0, x: 50}, "<");
textThree.to("#text9B", {display: "flex"}, "<1");
textThree.from("#text9B", {opacity: 0, y: -10});
textThree.to("#text9B", {display: "none"}, "<1");
textThree.from("#text9C", {display: "none"}, "<.5");
textThree.from("#text9C", {opacity: 0, x: -50}, "<");
textThree.to("#text9D", {display: "flex"}, "<1");
textThree.from("#text9D", {opacity: 0, y: -10});
textThree.to("#text9D", {display: "none"}, "<.5");
textThree.from("#text9E", {display: "none"}, "<.5");
textThree.from("#text9E", {opacity: 0, x: -50}, "<");
textThree.from("#three-next", {opacity: 0}, "<")

let textFour = gsap.timeline();
textFour.from("#text10A", {display: "none"}, 1);
textFour.from("#text10A", {opacity: 0, x: 50}, "<");
textFour.to("#text10B", {display: "flex"}, "<1");
textFour.from("#text10B", {opacity: 0, y: -10});
textFour.to("#text10B", {display: "none"}, "<1");
textFour.from("#text10C", {display: "none"}, "<.5");
textFour.from("#text10C", {opacity: 0, x: -50}, "<");
textFour.to("#text10-container", {borderBottom: "1px solid gray"}, "<")
textFour.from("#text11A", {display: "none"}, "<1");
textFour.from("#text11A", {opacity: 0, x: 50}, "<");
textFour.to("#text11B", {display: "flex"}, "<1");
textFour.from("#text11B", {opacity: 0, y: -10});
textFour.to("#text11B", {display: "none"}, "<1");
textFour.from("#text11C", {display: "none"}, "<.5");
textFour.from("#text11C", {opacity: 0, x: -50}, "<");
textFour.from("#restart-article", {opacity: 0}, "<")
document.querySelector("#one-next").onclick = function(){
    pageTurn("#page1", "#page2");
    textTwo.restart();
}
document.querySelector("#two-next").onclick = function(){
    pageTurn("#page2", "#page3");
    textThree.restart();
}
document.querySelector("#three-next").onclick = function(){
    pageTurn("#page3", "#page4");
    textFour.restart();
}
document.querySelector("#restart-article").onclick = function(){
    location.reload();
}
document.getElementById("article-enter").onclick = function(){
    gsap.to(".article-intro-content", {opacity: 0})
    document.querySelector(".article-intro-content").classList.toggle("article-inactive");
    document.querySelector("#page1").classList.toggle("article-inactive");
    gsap.from("#page1", {opacity: 0}, 2)
}