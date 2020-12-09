var enterButton = document.getElementById("quiz-enter");
var introGraf = document.getElementById("introGraf")
let introActive = true;

var nextQuestion = (questionID) => {
    if (introActive == false){
        gsap.to(".current-question", {opacity: 0});
        gsap.to(".current-question", {display: "none"});
        document.querySelector(".current-question").classList.toggle("current-question")
        document.getElementById(questionID).classList.add("current-question");
        gsap.to(".current-question", {display: "block", delay: 1});
        gsap.to(".current-question", {opacity: 1, delay: 1})
        
    }
    else{
        introActive = false;
        document.getElementById(questionID).classList.add("current-question");
        gsap.to(".current-question", {display: "block"}, 1);
        gsap.to(".current-question", {opacity: 1}, 1.5)
    }
   

}
const buttonList = document.querySelectorAll(".quiz-button");
for(let button of buttonList){
    button.onclick = function(){
        nextQuestion(button.dataset.option);
    }
}
enterButton.onclick = function(){
    gsap.to(enterButton, {opacity: 0});
    gsap.to(introGraf, {opacity: 0});
    gsap.to(".article-hed", {opacity: 0})
    gsap.to(".article-byline", {opacity: 0})
    gsap.to(".article-credits", {opacity: 0})
    gsap.to(".article-dek", {opacity: 0})
    gsap.to(enterButton, {display: "none"}, 1);
    gsap.to(introGraf, {display: "none"}, 1);
    gsap.to(".article-hed", {display: "none"}, 1)
    gsap.to(".article-byline", {display: "none"}, 1)
    gsap.to(".article-dek", {display: "none"}, 1)
    gsap.to(".article-credits", {display: "none"}, 1)
    nextQuestion("Q1")
}

