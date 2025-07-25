/*=============== CHANGE BACKGROUND HEADER ===============*/ function scrollHeader() {
    const header = document.getElementById("header");
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add("scroll__header");
    else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
/*=============== ENABLE LIGHT SWITCH SOUND ===============*/ function handleClickSound() {
    const mouseclick = new Audio();
    mouseclick.src = "https://uploads.sitepoint.com/wp-content/uploads/2023/06/1687569402mixkit-fast-double-click-on-mouse-275.wav";
    mouseclick.play();
}
/*=============== SERVICES MODAL ===============*/ const modalViews = document.querySelectorAll(".services__modal");
const modalButtons = document.querySelectorAll(".services__button");
const modalClose = document.querySelectorAll(".services__modal__close");
let modal = (modalClick)=>{
    modalViews[modalClick].classList.add("active__modal");
};
modalButtons.forEach((mb, i)=>{
    mb.addEventListener("click", ()=>{
        modal(i);
    });
});
modalClose.forEach((mc)=>{
    mc.addEventListener("click", ()=>{
        modalViews.forEach((mv)=>{
            mv.classList.remove("active__modal");
        });
    });
});
/*=============== MIXITUP FILTER PORTFOLIO ===============*/ var mixerPortfolio = mixitup(".work__conatiner", {
    selectors: {
        target: ".work__card"
    },
    animation: {
        duration: 300
    }
});
/* Link active work */ const linkWork = document.querySelectorAll(".work__item");
function activeWork() {
    linkWork.forEach((l)=>l.classList.remove("active__work"));
    this.classList.add("active__work");
}
linkWork.forEach((l)=>l.addEventListener("click", activeWork));
/*=============== SWIPER TESTIMONIAL ===============*/ var swiper = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48
        }
    }
});
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/ const sections = document.querySelectorAll("section[id]");
function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach((current)=>{
        const sectionHeight = current.offsetHeight, sectionTop = current.offsetTop - 58, sectionId = current.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active__link");
        else document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active__link");
    });
}
window.addEventListener("scroll", scrollActive);
/*=============== LIGHT DARK THEME ===============*/ const themeButton = document.getElementById("theme__button");
const lightTheme = "light__theme";
const iconTheme = "bx-sun";
// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");
// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = ()=>document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = ()=>themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";
// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](lightTheme);
    themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](iconTheme);
}
// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", ()=>{
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});
/*=============== SCROLL REVEAL ANIMATION ===============*/ const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400
});
sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, {
    delay: 700
});
sr.reveal(`.home__social, .home__scroll`, {
    delay: 900,
    origin: "bottom"
});
// SEND BUTTON 
const ids = [
    "form__name",
    "form__mail",
    "form__project"
];
document.getElementById("send__button").addEventListener("click", (e)=>{
    const invalids = [];
    ids.forEach((elm)=>{
        if (!document.forms["contact_form"][elm].value) {
            invalids.push(elm.split("__")[1]);
            document.forms["contact_form"][elm].classList.add("error__val");
        }
        if (elm === "form__mail" && document.forms["contact_form"][elm].value) {
            if (!document.forms["contact_form"][elm].value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                invalids.push(elm.split("__")[1]);
                document.forms["contact_form"][elm].classList.add("error__val");
            }
        }
    });
    if (invalids.length) {
        window.alert(`Please enter valid value for ${invalids.join(",")} field(s)`);
        document.getElementById("send__button").classList.add("disabled__button");
        return;
    }
    window.alert("Message sent");
    ids.forEach((elm)=>{
        const element = document.getElementById(elm);
        element.value = "";
    });
    e.preventDefault();
});
document.getElementById("form__name").addEventListener("input", (e)=>{
    e.target.value ? document.forms["contact_form"]["form__name"].classList.remove("error__val") : document.forms["contact_form"]["form__name"].classList.add("error__val");
    if (document.forms["contact_form"]["form__mail"].value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && document.forms["contact_form"]["form__project"].value) document.getElementById("send__button").classList.remove("disabled__button");
    if (!e.target.value) document.getElementById("send__button").classList.add("disabled__button");
});
document.getElementById("form__mail").addEventListener("input", (e)=>{
    if (!e.target.value) document.getElementById("send__button").classList.add("disabled__button");
    if (document.forms["contact_form"]["form__mail"].value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        document.forms["contact_form"]["form__mail"].classList.remove("error__val");
        if (document.forms["contact_form"]["form__name"].value && document.forms["contact_form"]["form__project"].value) document.getElementById("send__button").classList.remove("disabled__button");
    } else {
        document.forms["contact_form"]["form__mail"].classList.add("error__val");
        document.getElementById("send__button").classList.add("disabled__button");
    }
});
document.getElementById("form__project").addEventListener("input", (e)=>{
    e.target.value ? document.forms["contact_form"]["form__project"].classList.remove("error__val") : document.forms["contact_form"]["form__project"].classList.add("error__val");
    if (document.forms["contact_form"]["form__mail"].value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && document.forms["contact_form"]["form__name"].value) document.getElementById("send__button").classList.remove("disabled__button");
    if (!e.target.value) document.getElementById("send__button").classList.add("disabled__button");
});

//# sourceMappingURL=index.fc2f7771.js.map
