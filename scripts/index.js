let menu = document.getElementById("js-menu");
let navbarToggle = document.getElementById("js-navbar-toggle");
navbarToggle.addEventListener("click",function(){
    menu.classList.toggle("active");
})

/************************************************ */

let navbar = document.getElementById("js-navbar");
window.addEventListener('scroll',function(){
    if(window.pageYOffset>90){
        navbar.classList.add('navbar-strick');
    }else{
        navbar.classList.remove('navbar-strick');
    }
})

/************************************************** */

let newsletterForm = document.querySelector(".newsletter-form");
newsletterForm.addEventListener("submit", function(event) {
    event.preventDefault();
})

const emailInput = document.getElementById("emailInput");
const subscribeBtn = document.getElementById("subscribeBtn");

function toggleButtonColor() {
    if (emailInput.value.trim() !== "") {
        subscribeBtn.classList.add("filled");
    } else {
        subscribeBtn.classList.remove("filled");
    }
}

subscribeBtn.addEventListener("click", function(event) {
    if (emailInput.value.trim() === "") {
        event.preventDefault();
    } else {
        subscribeBtn.classList.add("filled");
    }
});

emailInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        if (emailInput.value.trim() !== "") {
            subscribeBtn.click();
        }
    }
});
/************************************************** */

let btnTop = document.getElementById("js-btn-top");
window.addEventListener("scroll",function(){
    if(document.body.scrollTop>150){
        btnTop.style.display="block"
    }else{
        btnTop.style.display="none"
    }

})

btnTop.addEventListener("click",function(){
    document.body.scrollTop=0;
})

