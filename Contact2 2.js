let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("pn-error");
let emailError = document.getElementById("e-error");
let genderError = document.getElementById("g-error");
let messageError = document.getElementById("msg-error");
let submitError = document.getElementById("submit-error");

function validateName(){
    var name = document.getElementById("fName").value;
    if (name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s[A-Za-z]*\s[A-Za-z]*\s[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="bi bi-check2-square"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById("pNo").value;
    if (phone.length == 0){
        phoneError.innerHTML = "Phone Number is need to fill.";
        return false;
    }
    if(!phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML = "Phone number must be digit.";
        return false;
    }
    phoneError.innerHTML = '<i class="bi bi-check2-square"></i>';
    return true;
}
function validateEmail(){
    var email = document.getElementById("Email").value;
    if (email.length == 0){
        emailError.innerHTML = "Your email is need to fill.";
        return false;
    }
    if(!email.match(/^[A-Za-z0-9\._]*[@][gmail.com]{9}$/)){
        emailError.innerHTML = "Invalid Email address";
        return false;
    }
    emailError.innerHTML = '<i class="bi bi-check2-square"></i>';
    return true;
}
function validateMessage(){
    var message = document.getElementById("message").value;
    var require = 30;
    var left = require - message.length;
    if (left>0){
        messageError.innerHTML = left + "more characters are required";
        return false;
    }
    messageError.innerHTML = '<i class="bi bi-check2-square"></i>';
    return true;
}
function validateSubmit(){
    if(!validateName()){
        submitError.innerHTML = "Please write full name.";
        return false;
    }
    if(!validatePhone()){
        submitError.innerHTML = "Please type your phone no.";
        return false;
    }
    if(!validateEmail()){
        submitError.innerHTML = "Please write your email.";
        return false;
    }
    if(!validateMessage()){
        submitError.innerHTML = "Please write mroe words.";
        return false;
    }
    document.getElementById("fName").value = '';
    document.getElementById("pNo").value = '';
    document.getElementById("Email").value = '';
    document.getElementById("message").value = '';
    submitError.innerHTML = 'Your message have been sent successfully. Thank you. <i class="bi bi-check2-square"></i>';
    return true;
}
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