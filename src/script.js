let heropage = document.querySelector(".hero-page ")
let hero = document.querySelector(".container")
let togglerBtn = document.querySelector(".navbar-toggler")
togglerBtn.addEventListener("click", () => {
    if (heropage.style.opacity === "0.1") {
        heropage.style.opacity = "1";
        hero.style.opacity = "1"
    } else {
        heropage.style.opacity = "0.1";
        hero.style.opacity = "1"

    }
})

let service = document.querySelectorAll(".service")
service.forEach((element) => {
    element.addEventListener("mouseenter", function () {
        element.classList.add("service-content-yellow")
        element.classList.remove("service-content")
        element.style.cursor = "pointer"
    })
    element.addEventListener("mouseleave", function () {
        element.classList.add("service-content")
        element.classList.remove("service-content-yellow")
        element.style.cursor = "pointer"
      

    })
})

// document.addEventListener("DOMContentLoaded", function () {
//     let boxOne = document.getElementById("box-one");
//     let boxTwo = document.getElementById("box-two");
//     let progressBar = document.querySelector(".progress-bar");
//     let heroContainer = document.querySelector(".hero-container");

//     // Function to run animations when the page is focused
//     function runAnimations() {
//         progressBar.classList.add("progress-bar-animation");
//         heroContainer.classList.add("heropage-animation");
//         boxOne.classList.add("box-one");
//         boxTwo.classList.add("box-two");
//     }

//     // Run animations on focus
//     window.addEventListener("focus", runAnimations);
// });







let leftarrow = document.querySelector(".fa-circle-arrow-left")
let cardOne = document.querySelector(".card-one")
let cardTwo = document.querySelector(".card-two")
let testimonalImage = document.querySelectorAll(".testimony-image")
leftarrow.addEventListener("click", () => {
    cardOne.style.display = "none"
    cardTwo.style.display = "block"
})

const yellowBtn = document.querySelectorAll(".yellow-btn")
yellowBtn.forEach((element) => {
    element.addEventListener("mouseover",()=>{
        element.classList.add("yellow-btn-two")
    })
    element.addEventListener("mouseout",()=>{
        element.classList.remove("yellow-btn-two")
    })
})