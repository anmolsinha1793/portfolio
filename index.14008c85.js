function scrollHeader(){const e=document.getElementById("header");this.scrollY>=50?e.classList.add("scroll__header"):e.classList.remove("scroll-header")}window.addEventListener("scroll",scrollHeader);const modalViews=document.querySelectorAll(".services__modal"),modalButtons=document.querySelectorAll(".services__button"),modalClose=document.querySelectorAll(".services__modal__close");let modal=e=>{modalViews[e].classList.add("active__modal")};modalButtons.forEach(((e,t)=>{e.addEventListener("click",(()=>{modal(t)}))})),modalClose.forEach((e=>{e.addEventListener("click",(()=>{modalViews.forEach((e=>{e.classList.remove("active__modal")}))}))}));var mixerPortfolio=mixitup(".work__conatiner",{selectors:{target:".work__card"},animation:{duration:300}});const linkWork=document.querySelectorAll(".work__item");function activeWork(){linkWork.forEach((e=>e.classList.remove("active__work"))),this.classList.add("active__work")}linkWork.forEach((e=>e.addEventListener("click",activeWork)));var swiper=new Swiper(".testimonial__container",{spaceBetween:24,loop:!0,grabCursor:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{576:{slidesPerView:2},768:{slidesPerView:2,spaceBetween:48}}});const sections=document.querySelectorAll("section[id]");function scrollActive(){const e=window.pageYOffset;sections.forEach((t=>{const o=t.offsetHeight,s=t.offsetTop-58,l=t.getAttribute("id");e>s&&e<=s+o?document.querySelector(".nav__menu a[href*="+l+"]").classList.add("active__link"):document.querySelector(".nav__menu a[href*="+l+"]").classList.remove("active__link")}))}window.addEventListener("scroll",scrollActive);const themeButton=document.getElementById("theme__button"),lightTheme="light__theme",iconTheme="bx-sun",selectedTheme=localStorage.getItem("selected-theme"),selectedIcon=localStorage.getItem("selected-icon"),getCurrentTheme=()=>document.body.classList.contains(lightTheme)?"dark":"light",getCurrentIcon=()=>themeButton.classList.contains("bx-sun")?"bx bx-moon":"bx bx-sun";selectedTheme&&(document.body.classList["dark"===selectedTheme?"add":"remove"](lightTheme),themeButton.classList["bx bx-moon"===selectedIcon?"add":"remove"]("bx-sun")),themeButton.addEventListener("click",(()=>{document.body.classList.toggle(lightTheme),themeButton.classList.toggle("bx-sun"),localStorage.setItem("selected-theme",document.body.classList.contains(lightTheme)?"dark":"light"),localStorage.setItem("selected-icon",themeButton.classList.contains("bx-sun")?"bx bx-moon":"bx bx-sun")}));const sr=ScrollReveal({origin:"top",distance:"60px",duration:2500,delay:400});sr.reveal(".home__data"),sr.reveal(".home__handle",{delay:700}),sr.reveal(".home__social, .home__scroll",{delay:900,origin:"bottom"});const ids=["form__name","form__mail","form__project"];document.getElementById("send__button").addEventListener("click",(e=>{window.alert("Message sent"),ids.forEach((e=>{document.getElementById(e).value=""})),e.preventDefault()}));
//# sourceMappingURL=index.14008c85.js.map