// Function for Button hiding and unhiding on mobile navbar
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.visibility === "visible") {
    x.style.display = "none";
    x.style.visibility = "hidden";
    x.style.opacity = "0";
    x.style.transition = "block 0.5s visibility 0s, opacity 1s linear";
  } else {
    x.style.display = "block";
    x.style.visibility = "visible";
    x.style.opacity = "1";
    x.style.transition = "block 0.5s visibility 0s, opacity 0.5s linear";
  }
  return false;
}

// Function for text typing effect on index page
var i = 0;
var txt = "Want to join the Axcelmark team?";
var speed = 50; /* The speed/duration of The effect in milliseconds */
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typeText").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Function for sending to contact page after submitting application
function formFunction() {
  setTimeout(() => {
    document.location = "contact.html";
  }, 5000);
}

  // var newOptions;
  // function setOptions(options,optionsText) {
  //   newOptions = "&newoptions=" + options + "&newoptionsText=" + optionsText;
  // }
  // function goTo(button, goto) {
  //   document.location = goto;
  // }

  
//Create Section Div classes dynamicallys
///Section to be added to
///Background-Color: Color
///fColor: font color
///Image Location: Image link in folders (images/...)
///Orientation: Side of text (left, right)
///Header: Header text
///pText: Paragraph Text
///bText: Button Text
///bGoTo: Location button takes you to
///pOptional: Optional paragraph text (Creates a second paragraph)
function section(sectionName, backgroundcolor, fColor, imageLocation, imageAltText, orientation, header, pText, bText, bGoTo){
  //Creation of all the elements needed within the dynamic section creator
  var mainDiv = document.createElement('div');
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

  var mobileDiv = document.createElement('div');
  var tableRowM = document.createElement('tr');
  var tableSectionM = document.createElement('table');
  var tableData1M = document.createElement('td');
  var imageM = document.createElement('img');
  var tableData2M = document.createElement('td');
  var h1M = document.createElement('h1');
  var h1TextM = document.createTextNode(header);
  var paragraphM = document.createElement('p');
  var paragraphTextM = document.createTextNode(pText);
  var buttonM = document.createElement('button');
  var buttonTextM = document.createTextNode(bText);
  

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
  image.alt = imageAltText;

  tableData1M.id = "sectionimg"
  tableData1M.className = "sectionbox"
  imageM.className = 'sectionimg'
  imageM.id = 'whoAreWeImg';
  imageM.src = imageLocation;
  imageM.alt = imageAltText;

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
  button.className = "callToActionButton";
  button.style.display= "inline-block";
  button.style.borderColor = fColor;
  button.style.color = fColor;
  button.style.float = "left";
  button.onmouseenter = function() {
    button.style.backgroundColor = fColor;
    if(fColor = "white") {
      button.style.color = 'black';
      button.style.backgroundColor = fColor;  
    }
    if(fColor = "black") {
      button.style.color = 'white';
      button.style.borderColor = fColor
    }
  }
  button.onmouseleave = function() {
    button.style.backgroundColor = "transparent";
    button.style.color = fColor;
  };
  button.onclick = function() {document.location = bGoTo};
  button.appendChild(buttonText);
  

  tableData2M.className = 'sectionbox';
  tableData2M.id = 'card';
  tableData2M.style.textAlign = 'center';
  h1M.className = "sectionheader";
  h1M.style.color = fColor;
  h1M.appendChild(h1TextM);
  paragraphM.className = "sectiontext"
  paragraphM.style.color = fColor;
  paragraphM.appendChild(paragraphTextM);
  buttonM.className = "callToActionButton";
  buttonM.style.display= "inline-block";
  buttonM.style.color = fColor;
  buttonM.style.float = "center";
  buttonM.onmouseenter = function() {
    buttonM.style.backgroundColor = fColor;
    if(fColor = "white") {
      buttonM.style.color = 'black';
      button.style.backgroundColor = fColor;
      buttonM.style.borderColor = fColor;
    }
    if(fColor = "black") {
      buttonM.style.color = 'white';
      button.style.backgroundColor = fColor;
      buttonM.style.borderColor = fColor
    }
  }
  buttonM.onmouseleave = function() {
    buttonM.style.backgroundColor = "transparent";
    buttonM.style.color = fColor;
  };
  buttonM.onclick = function() {document.location = bGoTo};
  buttonM.appendChild(buttonTextM);

  //Appends all the different sections into their respective areas, sets the main div class name and changes the append order for if the image is wanted on the left side of the section
  if(orientation == 'left') {
      mainDiv.className = "aboutsection";
      tableData2.style.paddingTop = '10px';
      tableData2.style.paddingBottom = '10px';
      if(screen.width > 700) {
          button.style.float = "left";
      }
      if(screen.width <= 700) {
          button.style.float = "center";
      }
      tableData1.appendChild(image);
      tableData2.appendChild(h1);
      tableData2.appendChild(paragraph);
      tableData2.appendChild(button);

      tableRow.appendChild(tableData1);
      tableRow.appendChild(tableData2);
      mainDiv.appendChild(tableSection);
      var contentSection = document.getElementById(sectionName);

      contentSection.appendChild(mainDiv);
      tableSection.appendChild(tableRow);
      mainDiv.appendChild(tableSection);

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

      tableData1M.appendChild(imageM);
      tableData2M.appendChild(h1M);
      tableData2M.appendChild(paragraphM);
      tableData2M.appendChild(buttonM)

      tableRow.appendChild(tableData2);
      tableRow.appendChild(tableData1);

      tableRowM.appendChild(tableData1M);
      tableRowM.appendChild(tableData2M);

      tableSection.appendChild(tableRow);

      tableSectionM.appendChild(tableRowM);

      mainDiv.appendChild(tableSection);

      mobileDiv.appendChild(tableSectionM);

      listingsSection = document.getElementById(sectionName);
      listingsSection.appendChild(mobileDiv);
      listingsSection.appendChild(mainDiv);
  }
}

// Function for hiding and unhiding text of accoridion
var acc = document.getElementsByClassName("acccontainer");
for (i = 0; i < acc.length;i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("accactive");
  });
}

function checkForm() {
  var legalCharacters = ['1','2','3','4','5','6','7','8','9','0','-','/','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','J','K','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' ','@']
  var submittable = 'true';
  
  var fName = document.getElementById('fname').value;
  var lName = document.getElementById('lname').value;
  var address = document.getElementById('address').value;
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;
  var zip = document.getElementById('zip').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var refName1 = document.getElementById('refname1').value;
  var relation1 = document.getElementById('relation1').value;
  var number1 = document.getElementById('number1').value;
  var refName2 = document.getElementById('refname2').value;
  var relation2 = document.getElementById('relation2').value;
  var number2 = document.getElementById('number2').value;
  var reason = document.getElementById('reason').value;
  var sDate1 = document.getElementById('sdate1').value;
  var eDate1 = document.getElementById('edate1').value;
  var jobTitle1 = document.getElementById('jobtitle1').value;
  var company1 = document.getElementById('company1').value;
  var city1 = document.getElementById('city1').value;
  var state1 = document.getElementById('state1').value;
  var leaving1 = document.getElementById('leaving1').value;
  var jobDes1 = document.getElementById('jobdes1').value;
  var sDate2 = document.getElementById('sdate2').value;
  var eDate2 = document.getElementById('edate2').value;
  var jobTitle2 = document.getElementById('jobtitle2').value;
  var company2 = document.getElementById('company2').value;
  var city2 = document.getElementById('city2').value;
  var state2 = document.getElementById('state2').value;
  var leaving2 = document.getElementById('leaving2').value;
  var jobDes2 = document.getElementById('jobdes2').value;
  var other = document.getElementById('other').value;


  if(typeof fName !=='undefined') {
    if(fName == "") {
      document.getElementById('fnamelabel').innerHTML = "Please enter your first name.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < fName.length ;i++) {
        if(!(legalCharacters.includes(fName.charAt(i)) || (legalCharacters.includes(fName.charAt(i).toUpperCase())))) {
          document.getElementById('fnamelabel').innerHTML = "The character" + " " + fName.charAt(i) + ' ' + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
        
      }
    }
  }
  if(typeof lName !=='undefined') {
    if(lName == "") {
      document.getElementById('lnamelabel').innerHTML = "Please enter your last name.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < lName.length ;i++) {
        if(!(legalCharacters.includes(lName.charAt(i)) || (legalCharacters.includes(lName.charAt(i).toUpperCase())))) {
          document.getElementById('lnamelabel').innerHTML = "The character" + " " + lName.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof address !=='undefined') {
    if(address == "") {
      document.getElementById('addresslabel').innerHTML = 'Please enter your address.';
      submittable = 'false';
    }
    else {
      for(let i = 0; i < address.length ;i++) {
        if(!(legalCharacters.includes(address.charAt(i)) || (legalCharacters.includes(address.charAt(i).toUpperCase())))) {
          document.getElementById('addresslabel').innerHTML = "The character" + " " + address.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof city !=='undefined') {
    if(city == "") {
      document.getElementById('citylabel').innerHTML = "Please enter your city.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < city.length ;i++) {
        if(!(legalCharacters.includes(city.charAt(i)) || (legalCharacters.includes(city.charAt(i).toUpperCase())))) {
          document.getElementById('citylabel').innerHTML = "The character" + " " + city.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof state !=='undefined') {
    if(state == "") {
      document.getElementById('statelabel').innerHTML = "Please enter your state.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < state.length ;i++) {
        if(!(legalCharacters.includes(state.charAt(i)) || (legalCharacters.includes(state.charAt(i).toUpperCase())))) {
          document.getElementById('statelabel').innerHTML = "The character" + " " + state.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof zip !=='undefined') {
    if(zip == "") {
      document.getElementById('ziplabel').innerHTML = "Please enter your zip code.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < zip.length ;i++) {
        if(!(legalCharacters.includes(zip.charAt(i)) || (legalCharacters.includes(zip.charAt(i).toUpperCase())))) {
          document.getElementById('ziplabel').innerHTML = "The character" + " " + zip.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof phone !=='undefined') {
    if(phone == "") {
      document.getElementById('phonelabel').innerHTML = "Please enter your phone number.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < phone.length ;i++) {
        if(!(legalCharacters.includes(phone.charAt(i)) || (legalCharacters.includes(phone.charAt(i).toUpperCase())))) {
          document.getElementById('phonelabel').innerHTML = "The character" + " " + phone.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof email !=='undefined') {
    if(email == "") {
      document.getElementById('emaillabel').innerHTML = "Please enter your email.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < email.length ;i++) {
        if(!(legalCharacters.includes(email.charAt(i)) || (legalCharacters.includes(email.charAt(i).toUpperCase())))) {
          document.getElementById('emaillabel').innerHTML = "The character" + " " + email.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof refName1 !=='undefined') {
    if(refName1 == "") {
      document.getElementById('refname1label').innerHTML = "Please enter their name.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < refName1.length ;i++) {
        if(!(legalCharacters.includes(refName1.charAt(i)) || (legalCharacters.includes(refName1.charAt(i).toUpperCase())))) {
          document.getElementById('refname1label').innerHTML = "The character" + " " + refName1.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof relation1 !=='undefined') {
    if(relation1 == "") {
      document.getElementById('relation1label').innerHTML = "Please enter their relation.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < relation1.length ;i++) {
        if(!(legalCharacters.includes(relation1.charAt(i)) || (legalCharacters.includes(relation1.charAt(i).toUpperCase())))) {
          document.getElementById('relation1label').innerHTML = "The character" + " " + relation1.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof number1 !=='undefined') {
    if(number1 == "") {
      document.getElementById('number1label').innerHTML = "Please enter their phone number.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < number1.length ;i++) {
        if(!(legalCharacters.includes(number1.charAt(i)) || (legalCharacters.includes(number1.charAt(i).toUpperCase())))) {
          document.getElementById('number1label').innerHTML = "The character" + " " + number1.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof refName2 !=='undefined') {
    if(refName2 == "") {
      document.getElementById('refname2label').innerHTML = "Please enter their name.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < refName2.length ;i++) {
        if(!(legalCharacters.includes(refName2.charAt(i)) || (legalCharacters.includes(refName2.charAt(i).toUpperCase())))) {
          document.getElementById('refname2label').innerHTML = "The character" + " " + refName2.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof relation2 !=='undefined') {
    if(relation2 == "") {
      document.getElementById('relation2label').innerHTML = "Please enter their relation.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < relation2.length ;i++) {
        if(!(legalCharacters.includes(relation2.charAt(i))) || !(legalCharacters.includes(relation2.charAt(i).toUpperCase()))) {
          document.getElementById('relation2label').innerHTML = "The character" + " " + relation2.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof number2 !=='undefined') {
    if(number2 == "") {
      document.getElementById('number2label').innerHTML = "Please enter their phone number.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < number2.length ;i++) {
        if(!(legalCharacters.includes(number2.charAt(i))) || !(legalCharacters.includes(number2.charAt(i).toUpperCase()))) {
          document.getElementById('number2label').innerHTML = "The character" + " " + number2.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof reason !=='undefined') {
    if(reason == "") {
      document.getElementById('reasonlabel').innerHTML = "Please enter your reason for applying.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < reason.length ;i++) {
        if(!(legalCharacters.includes(reason.charAt(i))) || !((legalCharacters.includes(reason.charAt(i).toUpperCase())))) {
          document.getElementById('reasonlabel').innerHTML = "The character" + " " + reason.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof sDate1 !=='undefined') {
    if(sDate1 == "") {
      document.getElementById('sdate1label').innerHTML = "Please enter your start date.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < sDate1.length ;i++) {
        if(!(legalCharacters.includes(sDate1.charAt(i))) || !((legalCharacters.includes(sDate1.charAt(i).toUpperCase())))) {
          document.getElementById('sdate1label').innerHTML = "The character" + " " + sDate1.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof eDate1 !=='undefined') {
    if(eDate1 == "") {
      document.getElementById('edate1label').innerHTML = "Please enter your end date.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < eDate1.length ;i++) {
        if(!(legalCharacters.includes(eDate1.charAt(i))) || !(legalCharacters.includes(eDate1.charAt(i).toUpperCase()))) {
          document.getElementById('edate1label').innerHTML = "The character" + " " + eDate1.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof jobTitle1 !=='undefined') {
    if(jobTitle1 == "") {
      document.getElementById('jobtitle1label').innerHTML = "Please enter your previous job title.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < jobTitle1.length ;i++) {
        if(!(legalCharacters.includes(jobTitle1.charAt(i))) || !((legalCharacters.includes(jobTitle1.charAt(i).toUpperCase())))) {
          document.getElementById('jobtitle1label').innerHTML = "The character" + " " + jobTitle1.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof company1 !=='undefined') {
    if(company1 == "") {
      document.getElementById('company1label').innerHTML = "Please enter your previous company.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < company1.length ;i++) {
        if(!(legalCharacters.includes(company1.charAt(i))) || !(legalCharacters.includes(company1.charAt(i).toUpperCase()))) {
          document.getElementById('company1label').innerHTML = "The character" + " " + company1.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof city1 !=='undefined') {
    if(city1 == "") {
      document.getElementById('city1label').innerHTML = "Please enter the city of your previous job.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < city1.length ;i++) {
        if(!(legalCharacters.includes(city1.charAt(i))) || !(legalCharacters.includes(city1.charAt(i).toUpperCase()))) {
          document.getElementById('city1label').innerHTML = "The character" + " " + city1.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof state1 !=='undefined') {
    if(state1 == "") {
      document.getElementById('state1label').innerHTML = "Please enter the state of your previous job.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < state1.length ;i++) {
        if(!(legalCharacters.includes(state1.charAt(i))) || (legalCharacters.includes(state1.charAt(i).toUpperCase()))) {
          document.getElementById('state1label').innerHTML = "The character" + " " + state1.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof leaving1 !=='undefined') {
    if(leaving1 == "") {
      document.getElementById('leaving1label').innerHTML = "Please enter your reason for leaving your previous job.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < leaving1.length ;i++) {
        if(!(legalCharacters.includes(leaving1.charAt(i))) || (legalCharacters.includes(leaving1.charAt(i).toUpperCase()))) {
          document.getElementById('leaving1label').innerHTML = "The character" + " " + leaving1.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof jobDes1 !=='undefined') {
    if(jobDes1 == "") {
      document.getElementById('jobdes1label').innerHTML = "Please enter your previous job description.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < jobDes1.length ;i++) {
        if(!(legalCharacters.includes(jobDes1.charAt(i))) || !(legalCharacters.includes(jobDes1.charAt(i).toUpperCase()))) {
          document.getElementById('jobdes1label').innerHTML = "The character" + " " + jobDes1.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof sDate2 !=='undefined') {
    if(sDate2 == "") {
      document.getElementById('sdate2label').innerHTML = "Please enter the start date of your second job.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < sDate2.length ;i++) {
        if(!(legalCharacters.includes(sDate2.charAt(i))) || !(legalCharacters.includes(sDate2.charAt(i).toUpperCase()))) {
          document.getElementById('sdate2label').innerHTML = "The character" + " " + sDate2.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof eDate2 !=='undefined') {
    if(eDate2 == "") {
      document.getElementById('edate2label').innerHTML = "Please enter the end date of your second job.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < eDate2.length ;i++) {
        if(!(legalCharacters.includes(eDate2.charAt(i))) || !(legalCharacters.includes(eDate2.charAt(i).toUpperCase()))) {
          document.getElementById('edate2label').innerHTML = "The character" + " " + eDate2.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof jobTitle2  !=='undefined') {
    if(jobTitle2 == "") {
      document.getElementById('jobtitle2label').innerHTML = "Please enter your job title of your second job.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < jobTitle2.length ;i++) {
        if(!(legalCharacters.includes(jobTitle2.charAt(i))) || (legalCharacters.includes(jobTitle2.charAt(i).toUpperCase()))) {
          document.getElementById('jobtitle2label').innerHTML = "The character" + " " + jobTitle2.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof company2  !=='undefined') {
    if(company2 == "") {
      document.getElementById('company2label').innerHTML = "Please enter the company name of your second job.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < company2.length ;i++) {
        if(!(legalCharacters.includes(company2.charAt(i))) || (legalCharacters.includes(company2.charAt(i).toUpperCase()))) {
          document.getElementById('company2label').innerHTML = "The character" + " " + company2.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof city2  !=='undefined') {
    if(city2 == "") {
      document.getElementById('city2label').innerHTML = "Please enter the city of your second job.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < city2.length ;i++) {
        if(!(legalCharacters.includes(city2.charAt(i))) || !(legalCharacters.includes(city2.charAt(i).toUpperCase()))) {
          document.getElementById('city2label').innerHTML = "The character" + " " + city2.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof state2  !=='undefined') {
    if(state2 == "") {
      document.getElementById('state2label').innerHTML = "Please enter the state of your second job.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < state2.length ;i++) {
        if(!(legalCharacters.includes(state2.charAt(i))) || !(legalCharacters.includes(state2.charAt(i).toUpperCase()))) {
          document.getElementById('state2label').innerHTML = "The character" + " " + state2.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof leaving2  !=='undefined') {
    if(leaving2 == "") {
      document.getElementById('leaving2label').innerHTML = "Please enter your reason for leaving your second job.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < leaving2.length ;i++) {
        if(!(legalCharacters.includes(leaving2.charAt(i))) || (legalCharacters.includes(leaving2.charAt(i).toUpperCase()))) {
          document.getElementById('leaving2label').innerHTML = "The character" + " " + leaving2.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof jobDes2  !=='undefined') {
    if(jobDes2 == "") {
      document.getElementById('jobdes2label').innerHTML = "Please enter the job description of your second job.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < jobDes2.length ;i++) {
        if(!(legalCharacters.includes(jobDes2.charAt(i))) || !(legalCharacters.includes(jobDes2.charAt(i).toUpperCase()))) {
          document.getElementById('jobdes2label').innerHTML = "The character" + " " + jobDes2.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(typeof other !=='undefined') {
    if(other == "") {
      document.getElementById('otherlabel').innerHTML = "Please enter the job description of your second job.";
      submittable = 'false';
    }
    else {
      for(let i = 0; i < other.length ;i++) {
        if(!(legalCharacters.includes(other.charAt(i))) || !(legalCharacters.includes(other.charAt(i).toUpperCase()))) {
          document.getElementById('otherlabel').innerHTML = "The character" + " " + other.charAt(i)+ " " + "is not allowed.";
          submittable = 'false';
        }
        else {
          document.getElementById('fnamelabel').innerHTML = "";
          submittable = 'true';
        }
      }
    }
  }
  if(submittable == 'true') {
    return 'true';
  }
  else {
    return 'false';
  }
}

function SubForm() {
  checkForm();
  if(checkForm() == 'true') {
      $.ajax({
      url: "https://api.apispreadsheets.com/data/z23jripocBBCj72R/",
      type: "post",
      data: $("#myForm").serializeArray(),
      success: function () {
          location.href = "applicationsubmitted.html";
      },
      error: function () {
          alert("There was an error :(")
      }
  });
  }
}