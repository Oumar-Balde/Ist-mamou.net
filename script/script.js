// home slider code 
let slideList = document.querySelector(".slide-list");
let boxe = document.querySelectorAll(".slide-list .colum");
let nextBtn = document.querySelector(".next")
let prevBtn = document.querySelector(".prev");
let pos = 0;
nextBtn.addEventListener("click", nextSlde)
function nextSlde() {
    pos -= 100;
    slideList.style.transform = `translateX(${pos}%)`
    if (pos == boxe.length * -100) {
        pos = 0;
        slideList.style.transform = `translateX(${pos}%)`
    }
}
setInterval(() => {
    nextSlde()
}, 5000);
prevBtn.addEventListener("click", () => {

    if (pos == 0) {
        prevBtn.style.display = 'none'
    }
    else {
        pos += 100;
        slideList.style.transform = `translateX(${pos}%)`
    }
})

let hamMenuIcon = document.querySelector("#ham-menu ion-icon");
let navBar = document.querySelector(".nav-links");
let navLinks = navBar.querySelectorAll(".nav-links a ");


/* SideMenu Toggle */
hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("visible");
  console.log(hamMenuIcon.name)
  hamMenuIcon.classList.toggle("");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("visible");
    hamMenuIcon.classList.toggle("fa-times");
  });
});




let scrollTopBtn = document.getElementById("scroll-top");
let header = document.querySelector("header");
window.onscroll = () => {
    /* Change Header */
    let pos = document.documentElement.scrollTop;
    if (pos > 0) {
        header.classList.add("header-change");
        hamMenuIcon.classList.add("change")
    } else {
        header.classList.remove("header-change");
        hamMenuIcon.classList.remove("change")

    }
    /* Scroll Top Button */
    if (pos > 300) {
        scrollTopBtn.style.display = "grid";
    } else {
        scrollTopBtn.style.display = "none";
    }

    scrollTopBtn.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
};
