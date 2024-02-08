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

//Create Section Div classes dynamically
///Background-Color: Color
///fColor: font color
///Image Location: Image link in folders (images/...)
///Orientation: Side of text (left, right)
///Header: Header text
///pText: Paragraph Text
///bText: Button Text
///bGoTo: Location button takes you to
function section(backgroundcolor, fColor, imageLocation, orientation, header, pText, bText, bGoTo){
    //Creation of all the elements needed within the dynamic section creator
    var mainDiv = document.createElement('div');
    var mobileDiv = document.createElement('div');
    var tableSectionM = document.createElement('table');
    var tableRow = document.createElement('tr');
    var tableSection = document.createElement('table');
    var tableData1 = document.createElement('td');
    var image = document.createElement('img');
    var tableData2 = document.createElement('td');
    var h1 = document.createElement('h1');
    var h1Text = document.createTextNode(header);
    var paragraph = document.createElement('p');
    var paragraphText = document.createTextNode(pText);
    var button = document.createElement('button');
    var buttonText = document.createTextNode(bText);
    var tableRowM = tableRow.cloneNode(true);

    //Sets divs background colors
    mainDiv.style.backgroundColor = backgroundcolor;
    mobileDiv.style.backgroundColor = backgroundcolor;

    //Sets margin of table sections
    tableSection.style.marginLeft = 'auto';
    tableSection.style.marginRight = 'auto';
    tableSectionM.style.marginLeft = 'auto';
    tableSectionM.style.marginRight = 'auto';

    //Set ids, classes, and image file location for the image
    tableData1.id = "sectionimg"
    tableData1.className = "sectionbox"
    image.className = 'sectionimg'
    image.id = 'whoAreWeImg';
    image.src = imageLocation;

    //Sets ids, classes, styling, and functions for paragraph and button
    tableData2.className = 'sectionbox';
    tableData2.id = 'card';
    tableData2.style.textAlign = 'center';
    h1.className = "sectionheader";
    h1.style.color = fColor;
    h1.appendChild(h1Text);
    paragraph.className = "sectiontext"
    paragraph.style.color = fColor;
    paragraph.appendChild(paragraphText);
    button.style.display= "inline-block";
    button.className = "callToActionButton";
    button.onclick = function() {document.location = bGoTo};
    button.appendChild(buttonText);

    //Appends all the different sections into their respective areas, sets the main div class name and changes the append order for if the image is wanted on the left side of the section
    if(orientation == 'left') {
        mainDiv.className = "aboutsection";
        tableData2.style.paddingTop = '10px';
        tableData2.style.paddingBottom = '10px';
        tableData1.appendChild(image);
        tableData2.appendChild(h1);
        tableData2.appendChild(paragraph);
        tableData2.appendChild(button);

        tableRow.appendChild(tableData1);
        tableRow.appendChild(tableData2);
        mainDiv.appendChild(tableSection);
        listingsSection = document.getElementById('listings');
        listingsSection.appendChild(mainDiv);
        tableSection.appendChild(tableRow);
        mainDiv.appendChild(tableSection);
        mobileDiv.appendChild(tableSectionM);
        listingsSection = document.getElementById('listings');
        listingsSection.appendChild(mainDiv);
    }

    //Appends all the different sections into their respective areas, sets the main div class name and changes the append order for if the image is wanted on the right side of the section. Also appends the mobileDiv, basically making all the sections look the same on mobile (left aligned/image on top of paragraph)
    else if(orientation == 'right'){
        tableSection.setAttribute('id','desktoplayoutsection');
        tableSectionM.setAttribute('id','mobilelayoutsection');
        mainDiv.className = "howtosection";
        mobileDiv.className = "howtosection";
        tableData1.appendChild(image);
        tableData2.appendChild(h1);
        tableData2.appendChild(paragraph);
        tableData2.appendChild(button);
        tableData2M = tableData2.cloneNode(true);
        tableData1M = tableData1.cloneNode(true);
        tableRow.appendChild(tableData2);
        tableRow.appendChild(tableData1);
        tableRowM.appendChild(tableData1M);
        tableRowM.appendChild(tableData2M);
        tableSection.appendChild(tableRow);
        tableSectionM.appendChild(tableRowM);
        mainDiv.appendChild(tableSection);
        mobileDiv.appendChild(tableSectionM);
        listingsSection = document.getElementById('listings');
        listingsSection.appendChild(mobileDiv);
        listingsSection.appendChild(mainDiv);
    }
}

// Function for hiding and unhiding text of accoridion
const accordion = document.getElementsByClassName('acccontainer');
for (i=0; i<accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('accactive');
    })
}
