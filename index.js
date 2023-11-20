const featureDiv = document.querySelector(".features")
const companyDiv = document.querySelector(".company")
const featureNav = document.querySelector(".nav_left>.nav_lists:nth-of-type(1)")
const companyNav = document.querySelector(".nav_left>.nav_lists:nth-of-type(2)")

featureNav.addEventListener("click", ()=>{
    featureDiv.classList.toggle("featuresHidden")
})

companyNav.addEventListener("click", ()=>{
    companyDiv.classList.toggle("companyHidden")
})

const menu_icon = document.querySelector(".nav_menu_icon")
const close_menu_icon = document.querySelector(".nav_close_menu")
const navs = document.querySelector(".navs")

menu_icon.addEventListener("click", ()=>{
    navs.classList.toggle("navsHidden")
})

close_menu_icon.addEventListener("click", ()=>{
    navs.classList.toggle("navsHidden")
})