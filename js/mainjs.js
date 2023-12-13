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
function formFunction() {
    var input = document.getElementById("formSubButton");
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    input.value = "SUBMITTED";
    nameInput.value = "";
    emailInput.value = "";
}
function hoverImage(imageID, imageLocation) {
    document.getElementById(imageID).src = imageLocation;
    document.getElementById(imageID).style.webkitTransition = " all .3s ease-in-out";
    document.getElementById(imageID).style.transition = " all .3s ease-in-out";
}
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
function formFunction() {
    setTimeout(()=>{document.location = 'index.html'}, 5000);
}