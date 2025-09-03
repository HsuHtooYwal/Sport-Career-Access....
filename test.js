let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function() {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    // Scrolling down → hide navbar
    navbar.classList.add("hide");
  } else {
    // Scrolling up → show navbar
    navbar.classList.remove("hide");
  }
  
  lastScrollTop = scrollTop;
});
