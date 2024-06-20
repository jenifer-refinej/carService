let heropage = document.querySelector(".hero-page .container")
let togglerBtn = document.querySelector(".navbar-toggler")
togglerBtn.addEventListener("click",()=>{
    if (heropage.style.opacity === "0.1") {
        heropage.style.opacity = "1";
    } else {
        heropage.style.opacity = "0.1";
    }
})

console.log(togglerBtn)