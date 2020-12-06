window.onload = (event) => {
   
    gsap.to(".loader",{opacity: 0, display: 'none'}, 2)
    gsap.to("body", {backgroundColor: "#Cfe9d7"}, 2)
    gsap.to(".page-content", {opacity: 1, display: 'block'}, 3);
  };

let masthead = document.querySelector(".masthead");
let lfe = document.querySelector(".LFE-container");
document.querySelector("#mast-link").onclick = function(){
    masthead.classList.toggle("mast-active");
    document.querySelector(".mast-clickout").classList.toggle("clickout-active");
}
document.querySelector("#lfe-link").onclick = function(){
    lfe.classList.toggle("lfe-active");
    document.querySelector(".LFE-clickout").classList.toggle("clickout-active");
}
var closeMasthead = () =>{
    masthead.classList.toggle("mast-active");
    document.querySelector(".mast-clickout").classList.toggle("clickout-active");
}
var closelfe = () =>{
   lfe.classList.toggle("lfe-active");
    document.querySelector(".LFE-clickout").classList.toggle("clickout-active");
}
document.querySelector(".masthead-exit").onclick = function(){closeMasthead()};
document.querySelector(".mast-clickout").onclick = function(){closeMasthead()};
document.querySelector(".lfe-exit").onclick = function(){closelfe()};
document.querySelector(".LFE-clickout").onclick = function(){closelfe()};

const staffLists = [{title: "PRINT STAFF", staffList: `<h2 class="staff-subtitle">EDITORIAL</h2>
<h3 class="staff-position">PRINT MANAGING EDITOR</h3>
<h3 class="staff-name">Michael Korsh</h3>
<h3 class="staff-position">ASSISTANT MANAGING EDITOR</h3>
<h3 class="staff-name">Elise Hannum</h3>
<h3 class="staff-position">SENIOR FEATURES EDITORS</h3>
<h3 class="staff-name">Sylvia Goodman, Gabby Rabon, Isaac Sultan</h3>
<h3 class="staff-position">SENIOR SECTION EDITORS</h3>
<h3 class="staff-name">Niki Amir, Emily Cerf, Rachel Schonberger</h3>
<h3 class="staff-position">ASSISTANT FEATURES EDITORS</h3>
<h3 class="staff-name">Maggie Galloway, Jenna Greenzaid</h3>
<h3 class="staff-position">ASSOCIATE EDITORS</h3>
<h3 class="staff-name">Ethan Shanfeld, Annie Cao, Teresa Nowakowski, Nathan Ansell</h3>
<h3 class="staff-position">ASSISTANT EDITORS</h3>
<h3 class="staff-name">Sarah Meadow, Eva Herscowitz, Emma Chiu, Grace Snelling</h3>
<h3 class="staff-position">DIRECTOR OF FACT-CHECKING</h3>
<h3 class="staff-name">Jennifer Zhan</h3>
<h2 class="staff-subtitle">MAG-TO-WEB</h2>
<h3 class="staff-position">MAG-TO-WEB EDITOR</h3>
<h3 class="staff-name">David Deloso</h3>
<h3 class="staff-position">MAG-TO-WEB DEVELOPERS</h3>
<h3 class="staff-name">Olivia Lloyd, Kimberly Cruz Mendez, Jenna Wang, Stephanie Zhu, Amy Chen, Amy Guo</h3>
<h2 class="staff-subtitle">CREATIVE</h2>
<h3 class="staff-position">CREATIVE DIRECTOR</h3>
<h3 class="staff-name">Maren Kranking</h3>
<h3 class="staff-position">ASSISTANT CREATIVE DIRECTOR</h3>
<h3 class="staff-name">Cynthia Zhang</h3>
<h3 class="staff-position">ART DIRECTOR</h3>
<h3 class="staff-name">Alisa Gao</h3>
<h3 class="staff-position">PHOTO DIRECTOR</h3>
<h3 class="staff-name">Carly Menker</h3>
<h3 class="staff-position">DESIGNERS</h3>
<h3 class="staff-name">Emma Estberg, Andrew Kwa, Juntang Qian, Sooim Kang, S. Kelsie Yu</h3>
<h2 class="staff-subtitle">Freelance</h2>
<h3 class="staff-position">WRITERS</h3>
<h3 class="staff-name">Rayna Song, Ilana Arougheti, Karen Reyes, Aliyah Armstrong, Olivia Alexander, Anna Margevich, Gabrielle Nadler, Tessa Paul, Allison Arguezo, Lydia Rivers, Allison Rhee, Pallas Gutierrez, Hannah Hall, Onyekaorise Chigbogwu, Olivia Evans, Trent Brown, Christine Potermin, Matt Weiss, Joseph Ramos, Julietta Thron, Frankie Lucco, Lalla-Aicha Adouim, Ellie Eimer</h3>
<h3 class="staff-position">FACT-CHECKERS</h3>
<h3 class="staff-name">Rayna Song, Sarah Aie, Brendan Le, Paul Kim, Audrey Hettleman, Joseph Ramos, Maddie Kerr, Julietta Thron, Russell Leung</h3>
<h3 class="staff-position">NABJ CONSULTING EDITOR</h3>
<h3 class="staff-name">Ellisya Lindsey</h3>`}, {title: "WEB STAFF", staffList: `  <h2 class="staff-subtitle">MANAGING</h2>
<h3 class="staff-position">EDITOR-IN-CHIEF</h3>
<h3 class="staff-name">Maya Mojica</h3>
<h3 class="staff-position">EXECUTIVE EDITOR</h3>
<h3 class="staff-name">Giovana Gelhoren</h3>
<h3 class="staff-position">MANAGING EDITORS</h3>
<h3 class="staff-name">EUGENIA CARDINALE, SOPHIA LO, AMY OUYANG</h3>
<h3 class="staff-position">ASSISTANT MANAGING EDITORS</h3>
<h3 class="staff-name">Olivia Lloyd, Madison Smith, Gia Yetikyel, Grace Deng</h3>
<h2 class="staff-subtitle">SECTION EDITORS</h2>
<h3 class="staff-position">POLITICS EDITOR</h3>
<h3 class="staff-name">Gabrielle Nadler</h3>
<h3 class="staff-position">NEWS EDITOR</h3>
<h3 class="staff-name">Shannon Coan</h3>
<h3 class="staff-position">CREATIVE WRITING EDITOR</h3>
<h3 class="staff-name">Ilana Arougheti</h3>
<h3 class="staff-position">FEATURES EDITORS</h3>
<h3 class="staff-name">Cadence Quaranta, Ryan Kim</h3>
<h3 class="staff-position">SPORTS EDITORS</h3>
<h3 class="staff-name">Coop Daley, Jordan Landsberg</h3>
<h3 class="staff-position">LIFE & STYLE EDITORS</h3>
<h3 class="staff-name">Melissa Santoyo, Teresa Nowakowski</h3>
<h3 class="staff-position">OPINION EDITORS</h3>
<h3 class="staff-name">Shruti Rathnavel, Melanie Lust</h3>
<h3 class="staff-position">ENTERTAINMENT EDITORS</h3>
<h3 class="staff-name">Bailey Richards, Linda Shi</h3>
<h3 class="staff-position">SCIENCE & TECH EDITORS</h3>
<h3 class="staff-name">Yahan Chen, Annie Cao</h3>
<h3 class="staff-position">AUDIO EDITORS</h3>
<h3 class="staff-name">Prabhav Jain, Mia Mamone</h3>
<h3 class="staff-position">PHOTO & VIDEO EDITORS</h3>
<h3 class="staff-name">Lami Zhang, Ika Qiao</h3>
<h3 class="staff-position">GRAPHICS EDITOR</h3>
<h3 class="staff-name">Kylie Lin</h3>
<h3 class="staff-position">INTERACTIVES EDITORS</h3>
<h3 class="staff-name">David Deloso, Stephanie Zhu</h3>
<h2 class="staff-subtitle">SOCIAL MEDIA</h2>
<h3 class="staff-position">SOCIAL MEDIA MANAGER</h3>
<h3 class="staff-name">Jordan Hickey</h3>
<h3 class="staff-position">GRAPHICS COORDINATOR</h3>
<h3 class="staff-name">Kylie Lin</h3>
<h3 class="staff-position">TIKTOK MANAGER</h3>
<h3 class="staff-name">Madison Smith</h3>`}, {title: "CORPORATE", staffList:`
<h3 class="staff-position">PUBLISHER</h3>
<h3 class="staff-name">Tina Huang</h3>
<h3 class="staff-position">DIRECTOR OF AD SALES</h3>
<h3 class="staff-name">Hannah Song</h3>
<h3 class="staff-position">DIRECTOR OF MARKETING</h3>
<h3 class="staff-name">Vivian Xia</h3>
<h3 class="staff-position">WEBMASTER</h3>
<h3 class="staff-name">Beck Dengler</h3>
<h3 class="staff-position">IDENTITIES EDITORS</h3>
<h3 class="staff-name">Laurisa Sastoque, Ika Qiao</h3>
<h3 class="staff-position">WELLNESS CHAIR</h3>
<h3 class="staff-name">Jayna Kurlender</h3>
<h3 class="staff-position">FUNDRAISING CHAIR</h3>
<h3 class="staff-name">A.V. Vo</h3>
<h3 class="staff-position">DIRECTOR OF RECRUITMENT AND DEVELOPMENT</h3>
<h3 class="staff-name">Clarissa Wong</h3>
<h3 class="staff-position">DIRECTOR OF TALENT</h3>
<h3 class="staff-name">David Deloso</h3>`}];
let currentStaff = 0;
document.querySelector(".arrow-left").onclick = function(){
    if(currentStaff == 0){
        currentStaff = (staffLists.length - 1)
    }
    else{
        currentStaff += -1
    }
    document.querySelector(".staff-title").innerHTML = staffLists[currentStaff].title;
    document.querySelector(".staff-list").innerHTML = staffLists[currentStaff].staffList;
}
document.querySelector(".arrow-right").onclick = function(){
    if(currentStaff == staffLists.length - 1){
        currentStaff = 0;
    }
    else{
        currentStaff += 1
    }
    document.querySelector(".staff-title").innerHTML = staffLists[currentStaff].title;
    document.querySelector(".staff-list").innerHTML = staffLists[currentStaff].staffList;
}