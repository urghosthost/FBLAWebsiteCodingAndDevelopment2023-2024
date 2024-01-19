// Function for Button hiding and unhiding on mobile navbar
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.visibility === "visible") {
        x.style.display = "none"
        x.style.visibility = "hidden";
        x.style.opacity = "0";
        x.style.transition = "block 0.5s visibility 0s, opacity 1s linear"
    } else {
        x.style.display = "block"
        x.style.visibility = "visible";
        x.style.opacity = "1";
        x.style.transition = "block 0.5s visibility 0s, opacity 0.5s linear"
    }
}

// Function for text typing effect on index page
var i = 0;
var txt = "Want to join the Axcelmark team?";
var speed = 50; /* The speed/duration of the effect in milliseconds */
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typeText").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Function for sending to contact page after submitting application
function formFunction() {
     setTimeout(()=>{document.location = 'contact.html'}, 5000);
}
// Set/Create Cookies
function setCookie(cookieName, cookieValue, expireDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expireDays*24*60*60*1000));
    const expirationDate = "expires="+date.toUTCString();
    document.cookie = cookieName +"=" + cookieValue +";" + expirationDate + "; path=/";
}

// Get Value of Cookie
function getCookie(cookieName) {
    const name = cookieName + "=";
    const cookieDecoded = decodeURIComponent(document.cookie); //to be careful
    const cookieArray = cookieDecoded.split('; ');
    let res;
    cookieArray .forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res;
}

function applyButton(option) {
    setCookie('option',option,30);
    window.location = 'application.html';
}
