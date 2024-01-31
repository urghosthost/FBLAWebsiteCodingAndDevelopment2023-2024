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

function applyButton(option) {
    document.location = 'application.html?option=' + option;
}

//Create Section Div classes dynamicall
///Background-Color: Color
///Image: Image link in folders (images/...)
///Orientation: Side of text (left, right)
function section(backgroundcolor, imageLocation, orientation, header, pText, bText, bGoTo){
    var mainDiv = document.createElement('div');
    var tableRow = document.createElement('tr');
    var tableSection = document.createElement('table');
    var tableData1 = document.createElement('td');
    var image = document.createElement('img');
    var tableData2 = document.createElement('td');
    var h1 = document.createElement('h1');
    var h1Text = document.createTextNode(header);
    var paragraph = document.createElement('p');
    var paragraphText = document.createTextNode(text);
    var button = document.createElement('button');
    var buttonText = document.createTextNode(bText);

    mainDiv.style.backgroundColor = backgroundcolor;

    tableSection.style.marginLeft = 'auto';
    tableSection.style.marginRight = 'auto';

    tableData1.id = "sectionimg"
    tableData1.className = "sectionbox"
    image.className = 'sectionimg'
    image.id = 'whoAreWeImg';
    image.src = imageLocation;

    tableData2.className = 'sectionbox';
    tableData2.id = 'card';
    tableData2.style.textAlign = 'center';
    h1.className = "sectionheader";
    h1.appendChild(h1Text);
    paragraph.className = "sectiontext"
    paragraph.appendChild(pText);
    button.style.display= "inline-block";
    button.className = "callToActionButton";
    button.onclick = function() {document.location = bGoTo};
    button.appendChild(bText);
    
    if(orientation = "left") {
        mainDiv.className = "howtosection";
        tableData2.style.paddingTop = '10px';
        tableData2.style.paddingBottom = '10px';
        tableData1.appendChild(image);
        tableData2.appendChild(h1);
        tableData2.appendChild(paragraph);
        tableData2.appendChild(button)
        if(screen.width <= 700) {
            tableSection.id('mobilelayoutsection');
            tableRow.appendChild(tableData1);
            tableRow.appendChild(tableData2);
        }
        if(screen.width > 700) {
            tableSection.id('desktoplayoutsection')
            tableRow.appendChild(tableData2);
            tableRow.appendChild(tableData1);
        }
        
    }
    if(orientation = 'right')  {
        mainDiv.className = "aboutsection";
        tableData1.appendChild(image);
        tableData2.appendChild(h1);
        tableData2.appendChild(paragraph);
        tableData2.appendChild(button)
        tableRow.appendChild(tableData1);
        tableRow.appendChild(tableData2);
  
    }
    tableSection.appendChild(tableRow);
    mainDiv.appendChild(tableSection);
    listingsSection = document.getElementById('listings');
    listingsSection.appendChild(mainDiv);
}

// Function for hiding and unhiding text of accoridion
const accordion = document.getElementsByClassName('acccontainer');
for (i=0; i<accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('accactive');
    })
}
