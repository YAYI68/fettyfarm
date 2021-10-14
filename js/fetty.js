"use strict"
let mobileBtn = document.querySelector(".mobile_btn")
let dropdown = document.querySelector(".mobile_list")
let backClick =  document.querySelector(".bg")
let mobileLink = document.querySelectorAll(".mobile_item")
console.log(mobileLink)

console.log(backClick)

mobileBtn.addEventListener("click", ()=>{
    dropdown.classList.toggle("downlist")
    mobileBtn.classList.toggle("icon_rotate")
    backClick.classList.toggle("show")   
})
backClick.addEventListener("click", ()=>{
    dropdown.classList.toggle("downlist")
    mobileBtn.classList.toggle("icon_rotate")
    backClick.classList.toggle("show")   
})

mobileLink.forEach(link=>{
    link.addEventListener("click", ()=>{
    dropdown.classList.toggle("downlist")
    mobileBtn.classList.toggle("icon_rotate")
    backClick.classList.toggle("show")   
    })
})