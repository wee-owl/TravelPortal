// Burger-menu

const burgerButton = document.querySelector('.burger__button');
const burgerMenu = document.querySelector('.burger__menu');
const burgerLink = document.querySelector('.burger__link');
const accountLink = document.querySelector('.account');
const burgerClose = document.querySelector('.burger__close');
const burgerBlur = document.querySelector('.blur');
const stopChange = document.querySelector('.stop');

burgerButton.onclick = function() {
    burgerMenu.classList.add('burger__menu__active');
    burgerBlur.classList.add('blur__active');
    stopChange.classList.add('stop__active');
};

burgerClose.onclick = function() {
    burgerMenu.classList.remove('burger__menu__active');
    burgerBlur.classList.remove('blur__active');
    stopChange.classList.remove('stop__active');
};

document.addEventListener('mousedown', function(e) {
    if (e.target.closest('.blur') !== null  ||  
        e.target.closest('.burger__link') !== null) {
            burgerMenu.classList.remove('burger__menu__active');
            burgerBlur.classList.remove('blur__active');
            stopChange.classList.remove('stop__active');
            loginWindow.classList.remove('login');
            reginWindow.classList.remove('regin');
    }  
});


// Modal windows

const loginButton = document.querySelector('.login__button');
const loginWindow = document.querySelector('.login__window');
const reginWindow = document.querySelector('.regin__window');
const regIster = document.querySelector('.register');
const returnReg = document.querySelector('.return__register');

loginButton.onclick = function() {
    loginWindow.classList.add('login');
    burgerBlur.classList.add('blur__active');
    stopChange.classList.add('stop__active');
};

accountLink.onclick = function() {
    loginWindow.classList.add('login');
    burgerBlur.classList.add('blur__active');
    stopChange.classList.add('stop__active');
};

regIster.onclick = function() {
    loginWindow.classList.remove('login');
    reginWindow.classList.add('regin');
};

returnReg.onclick = function() {
    reginWindow.classList.remove('regin');
    loginWindow.classList.add('login');
};


// Alert

const buttonSign = document.querySelector('.bsign');
const buttonSigup = document.querySelector('.bsigup');
const eMailin = document.querySelector('.emailin');
const passWordin = document.querySelector('.passwordin');
const eMailup = document.querySelector('.emailup');
const passWordup = document.querySelector('.passwordup');
const forgotAlert = document.querySelector('.forgot');

buttonSign.addEventListener ('click', () => {
    alert('E-mail: ' + eMailin.value + '   Password: ' + passWordin.value);
});

buttonSigup.addEventListener ('click', () => {
    alert('E-mail: ' + eMailup.value + '   Password: ' + passWordup.value);
});

forgotAlert.addEventListener ('click', () => {
    alert('If you forgot your password? Please contact the administrator');
});


// Slider desktop

var slideIndex = 2;
showedSlides(slideIndex);

function right() {
    showedSlides(slideIndex += 1);
}

function left() {
    showedSlides(slideIndex -= 1);  
}

function curSlide(n) {
    showedSlides(slideIndex = n);
}

function showedSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var labels = document.getElementsByClassName("label__button");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.transform = "translateX(-540px)";
    }
    for (i = 0; i < labels.length; i++) {
        labels[i].className = labels[i].className.replace(" label__button__active", "");
    }
    slides[slideIndex - 1].style.transform = "translateX(-540px)";
    labels[slideIndex - 1].className += " label__button__active";
};

const slide1 = document.querySelector('#slide1');
const slide2 = document.querySelector('#slide2');
const slide3 = document.querySelector('#slide3');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

btn1.onclick = function() {
    slide1.style.transform = "translateX(320px)";
    slide2.style.transform = "translateX(320px)";
    slide3.style.transform = "translateX(-2260px)";
    btn1.classList.add('label__button__active');
    btn2.classList.remove('label__button__active');
    btn3.classList.remove('label__button__active');
};

btn2.onclick = function() {
    slide1.style.transform = "translateX(-540px)";
    slide2.style.transform = "translateX(-540px)";
    slide3.style.transform = "translateX(-540px)";
    btn1.classList.remove('label__button__active');
    btn2.classList.add('label__button__active');
    btn3.classList.remove('label__button__active');
};

btn3.onclick = function() {
    slide1.style.transform = "translateX(1180px)";
    slide2.style.transform = "translateX(-1400px)";
    slide3.style.transform = "translateX(-1400px)";
    btn1.classList.remove('label__button__active');
    btn2.classList.remove('label__button__active');
    btn3.classList.add('label__button__active');
};

slide1.onclick = function() {
    slide1.style.transform = "translateX(320px)";
    slide2.style.transform = "translateX(320px)";
    slide3.style.transform = "translateX(-2260px)";
    btn1.classList.add('label__button__active');
    btn2.classList.remove('label__button__active');
    btn3.classList.remove('label__button__active');
};

slide2.onclick = function() {
    slide1.style.transform = "translateX(-540px)";
    slide2.style.transform = "translateX(-540px)";
    slide3.style.transform = "translateX(-540px)";
    btn1.classList.remove('label__button__active');
    btn2.classList.add('label__button__active');
    btn3.classList.remove('label__button__active');
};

slide3.onclick = function() {
    slide1.style.transform = "translateX(1180px)";
    slide2.style.transform = "translateX(-1400px)";
    slide3.style.transform = "translateX(-1400px)";
    btn1.classList.remove('label__button__active');
    btn2.classList.remove('label__button__active');
    btn3.classList.add('label__button__active');
};


// Slidermini

var slideminiIndex = 1;
showSlides(slideminiIndex);

function nextSlide() {
    showSlides(slideminiIndex += 1);
}

function previousSlide() {
    showSlides(slideminiIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideminiIndex = n);
}

function showSlides(n) {
    var y;
    var slidesmini = document.getElementsByClassName("slidermini__item");
    var labelsmini = document.getElementsByClassName("labelmini__button");
    if (n > slidesmini.length) {
        slideminiIndex = 1
    }
    if (n < 1) {
        slideminiIndex = slidesmini.length
    }
    for (y = 0; y < slidesmini.length; y++) {
        slidesmini[y].style.display = "none";
    }
    for (y = 0; y < labelsmini.length; y++) {
        labelsmini[y].className = labelsmini[y].className.replace(" labelmini__button__active", "");
    }
    slidesmini[slideminiIndex - 1].style.display = "block";
    labelsmini[slideminiIndex - 1].className += " labelmini__button__active";
}


// Show password

function show() {
    var a = document.getElementById("pwdin");
    var b = document.getElementById("eyein");
    var c = document.getElementById("pwdup");
    var d = document.getElementById("eyeup");
    if ((a.type == "password") || (c.type == "password")) {
        a.type = "text";
        c.type = "text";
        b.src = "icon/eye_open.png";
        d.src = "icon/eye_open.png";
    } else {
        a.type = "password";
        c.type = "password";
        b.src = "icon/eye_close.png";
        d.src = "icon/eye_close.png";
    }
}

