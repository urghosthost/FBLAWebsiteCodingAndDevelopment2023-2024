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

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.backgroundColor = 'rgba(36,35,34, 0.75)';
    document.getElementById("mobilenav").style.backgroundColor = 'rgba(36,35,34, 0.75)';
    
  } else {
    
    document.getElementById("navbar").style.backgroundColor = 'rgba(36,35,34, 1)';
    document.getElementById("mobilenav").style.backgroundColor = 'rgba(36,35,34, 1)';
  }
}

// Function for text typing effect on index page
var i = 0;
var txt = "WANT TO JOIN THE AXCELMARK TEAM?";

if (document.URL.includes("listings.html")) {
  txt = "WHICH JOBS DO WE NEED FILLING?";
} else if (document.URL.includes("benefits.html")) {
  txt = "WHAT BENEFITS DO EMPLOYEES GET?";
} else if (document.URL.includes("application.html")) {
  txt = "FILL OUT THIS FORM TO APPLY!";
} else if (document.URL.includes("contact.html")) {
  txt = "WANT TO SPEAK TO US DIRECTLY?";
}
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

//Create Section Div classes dynamicallys
///Section to be added to
///Background-Color: Color
///fontColor: font color
///Image Location: Image link in folders (images/...)
///Orientation: Side of text (left, right)
///Header: Header text
///pText: Paragraph Text
///bText: Button Text
///bGoTo: Location button takes you to
///pOptional: Optional paragraph text (Creates a second paragraph)
function section(
  sectionName,
  backgroundcolor,
  fColor,
  animationName,
  imageLocation,
  imageAltText,
  orientation,
  header,
  pText,
  bText,
  bGoTo
) {
  //Creation of all the elements needed within the dynamic section creator
  var mainDiv = document.createElement("div");
  var tableRow = document.createElement("tr");
  var tableSection = document.createElement("table");
  var tableData1 = document.createElement("td");
  var image = document.createElement("img");
  var tableData2 = document.createElement("td");
  var h1 = document.createElement("h1");
  var h1Text = document.createTextNode(header);
  var paragraph = document.createElement("p");
  var paragraphText = document.createTextNode(pText);
  var button = document.createElement("button");
  var buttonText = document.createTextNode(bText);

  var mobileDiv = document.createElement("div");
  var tableRowM = document.createElement("tr");
  var tableSectionM = document.createElement("table");
  var tableData1M = document.createElement("td");
  var imageM = document.createElement("img");
  var tableData2M = document.createElement("td");
  var h1M = document.createElement("h1");
  var h1TextM = document.createTextNode(header);
  var paragraphM = document.createElement("p");
  var paragraphTextM = document.createTextNode(pText);
  var buttonM = document.createElement("button");
  var buttonTextM = document.createTextNode(bText);
  var fontColor = fColor;

  //Sets divs background colors
  mainDiv.style.backgroundColor = backgroundcolor;
  mobileDiv.style.backgroundColor = backgroundcolor;

  //Sets margin of table sections
  tableSection.style.marginLeft = "auto";
  tableSection.style.marginRight = "auto";

  tableSectionM.style.marginLeft = "auto";
  tableSectionM.style.marginRight = "auto";

  //Set ids, classes, and image file location for the image
  tableData1.id = "sectionimg";
  tableData1.classList.add("sectionbox");
  image.classList.add("sectionimg");
  image.id = "whoAreWeImg";
  image.src = imageLocation;
  image.alt = imageAltText;

  tableData1M.id = "sectionimg";
  tableData1M.className = "sectionbox";
  imageM.className = "sectionimg";
  imageM.id = "whoAreWeImg";
  imageM.src = imageLocation;
  imageM.alt = imageAltText;

  //Sets ids, classes, styling, and functions for paragraph and button
  tableData2.className = "sectionbox";
  tableData2.id = "card";
  tableData2.style.textAlign = "center";
  h1.className = "sectionheader";
  h1.style.color = fontColor;
  h1.appendChild(h1Text);
  paragraph.className = "sectiontext";
  paragraph.appendChild(paragraphText);
  button.style.display = "inline-block";
  switch (fontColor) {
    case 0:
      paragraph.style.color = "white";
      h1.style.color = "white";
      button.className = "dynamicButtonWhite";
      button.style.float = "left";
      break;
    case 1:
      paragraph.style.color = "black";
      h1.style.color = "black";
      button.className = "dynamicButtonBlack";
      button.style.float = "left";
      break;
  }
  button.onclick = function () {
    document.location = bGoTo;
  };
  button.appendChild(buttonText);

  tableData2M.className = "sectionbox";
  tableData2M.id = "card";
  tableData2M.style.textAlign = "center";
  h1M.className = "sectionheader";
  h1M.appendChild(h1TextM);
  paragraphM.className = "sectiontext";
  paragraphM.appendChild(paragraphTextM);
  buttonM.style.display = "inline-block";
  buttonM.style.float = "center";
  switch (fontColor) {
    case 0:
      paragraphM.style.color = "white";
      h1M.style.color = "white";
      buttonM.className = "dynamicButtonWhite";
      break;
    case 1:
      paragraphM.style.color = "black";
      h1M.style.color = "black";
      buttonM.className = "dynamicButtonBlack";
      break;
  }
  buttonM.onclick = function () {
    document.location = bGoTo;
  };
  buttonM.appendChild(buttonTextM);

  //Appends all the different sections into their respective areas, sets the main div class name and changes the append order for if the image is wanted on the left side of the section
  switch (orientation) {
    case "left":
      mainDiv.classList.add("aboutsection", "animate__animated");
      tableData2.style.paddingTop = "10px";
      tableData2.style.paddingBottom = "10px";
      if (screen.width > 700) {
        button.style.float = "left";
      }
      if (screen.width <= 700) {
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
      switch (animationName) {
        case "fadeIn":
          mainDiv.setAttribute("id", "fadeIn");
          break;
        case "fadeInLeft":
          mainDiv.setAttribute("id", "fadeInLeft");
          break;
        case "fadeInRight":
          mainDiv.setAttribute("id", "fadeInRight");
          break;
        case "slideInLeft":
          mainDiv.setAttribute("id", "slideInLeft");
          break;
        case "slideInRight":
          mainDiv.setAttribute("id", "slideInRight");
          break;
        case "slideInDown":
          mainDiv.setAttribute("id", "slideInDown");
          break;
      }

      mainSection = document.getElementById(sectionName);
      mainSection.appendChild(mainDiv);
      break;
    //Appends all the different sections into their respective areas, sets the main div class name and changes the append order for if the image is wanted on the right side of the section. Also appends the mobileDiv, basically making all the sections look the same on mobile (left aligned/image on top of paragraph)
    case "right":
      tableSection.setAttribute("id", "desktoplayoutsection", 'animate__animated');
      tableSectionM.setAttribute("id", "mobilelayoutsection", 'animate__animated');
      mainDiv.classList.add("howtosection");
      mobileDiv.classList.add("howtosection");

      tableData1.appendChild(image);
      tableData2.appendChild(h1);
      tableData2.appendChild(paragraph);
      tableData2.appendChild(button);

      tableData1M.appendChild(imageM);
      tableData2M.appendChild(h1M);
      tableData2M.appendChild(paragraphM);
      tableData2M.appendChild(buttonM);

      tableRow.appendChild(tableData2);
      tableRow.appendChild(tableData1);

      tableRowM.appendChild(tableData1M);
      tableRowM.appendChild(tableData2M);

      tableSection.appendChild(tableRow);

      tableSectionM.appendChild(tableRowM);

      mainDiv.appendChild(tableSection);

      mobileDiv.appendChild(tableSectionM);
      switch (animationName) {
        case "fadeIn":
          mainDiv.setAttribute("id", "fadeIn");
          mobileDiv.setAttribute("id", "fadeIn");
          break;
        case "fadeInLeft":
          mainDiv.setAttribute("id", "fadeInLeft");
          mobileDiv.setAttribute("id", "fadeInLeft");
          break;
        case "fadeInRight":
          mainDiv.setAttribute("id", "fadeInRight");
          mobileDiv.setAttribute("id", "fadeInRight");
          break;
        case "slideInLeft":
          mainDiv.setAttribute("id", "slideInLeft");
          mobileDiv.setAttribute("id", "slideInLeft");
          break;
        case "slideInRight":
          mainDiv.setAttribute("id", "slideInRight");
          mobileDiv.setAttribute("id", "slideInRight");
          break;
        case "slideInDown":
          mainDiv.setAttribute("id", "slideInDown");
          mobileDiv.setAttribute("id", "slideInDown");
          break;
      }

      mainSection = document.getElementById(sectionName);
      mainSection.appendChild(mobileDiv);
      mainSection.appendChild(mainDiv);
      break;
  }
}

// Function for hiding and unhiding text of accoridion
var acc = document.getElementsByClassName("acccontainer");
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("accactive");
  });
}

function checkForm() {
  var legalCharacters = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "/",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "J",
    "K",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
    "@",
  ];
  var submittable = "true";

  var fName = document.getElementById("fname").value;
  var lName = document.getElementById("lname").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var zip = document.getElementById("zip").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var refName1 = document.getElementById("refname1").value;
  var relation1 = document.getElementById("relation1").value;
  var number1 = document.getElementById("number1").value;
  var refName2 = document.getElementById("refname2").value;
  var relation2 = document.getElementById("relation2").value;
  var number2 = document.getElementById("number2").value;
  var reason = document.getElementById("reason").value;
  var sDate1 = document.getElementById("sdate1").value;
  var eDate1 = document.getElementById("edate1").value;
  var jobTitle1 = document.getElementById("jobtitle1").value;
  var company1 = document.getElementById("company1").value;
  var city1 = document.getElementById("city1").value;
  var state1 = document.getElementById("state1").value;
  var leaving1 = document.getElementById("leaving1").value;
  var jobDes1 = document.getElementById("jobdes1").value;
  var sDate2 = document.getElementById("sdate2").value;
  var eDate2 = document.getElementById("edate2").value;
  var jobTitle2 = document.getElementById("jobtitle2").value;
  var company2 = document.getElementById("company2").value;
  var city2 = document.getElementById("city2").value;
  var state2 = document.getElementById("state2").value;
  var leaving2 = document.getElementById("leaving2").value;
  var jobDes2 = document.getElementById("jobdes2").value;
  var other = document.getElementById("other").value;
  var upload = document.getElementById("upload").files.length;

  function checkFormInput(id, labelid, enterText, required) {
    if (typeof lName !== "undefined") {
      if (id == "" || id == 0) {
        document.getElementById(labelid).innerHTML = enterText;
        submittable = "false";
      }
    } else {
      for (let i = 0; i < id.length; i++) {
        if (
          !(
            legalCharacters.includes(id.charAt(i)) ||
            legalCharacters.includes(id.charAt(i).toUpperCase())
          )
        ) {
          document.getElementById(labelid).innerHTML =
            "The character" + " " + id.charAt(i) + " " + "is not allowed.";
          submittable = "false";
        } else {
          document.getElementById(labelid).innerHTML = "";
          submittable = "true";
        }
      }
    }
  }

  function checkOptionalFormInput(id, labelid) {
    for (let i = 0; i < id.length; i++) {
      if (
        !(
          legalCharacters.includes(id.charAt(i)) ||
          legalCharacters.includes(id.charAt(i).toUpperCase())
        )
      ) {
        document.getElementById(labelid).innerHTML =
          "The character" + " " + id.charAt(i) + " " + "is not allowed.";
        submittable = "false";
      } else {
        document.getElementById(labelid).innerHTML = "";
        submittable = "true";
      }
    }
  }

  checkFormInput(fName, "fnamelabel", "Please enter your first name.");

  checkFormInput(lName, "lnamelabel", "Please enter your last name.");

  checkFormInput(address, "addresslabel", "Please enter your address.");

  checkFormInput(city, "citylabel", "Please enter your city.");

  checkFormInput(state, "statelabel", "Please enter your state.");

  checkFormInput(zip, "ziplabel", "Please enter your zip code.");

  checkFormInput(phone, "phonelabel", "Please enter your phone number.");

  checkFormInput(email, "emaillabel", "Please enter your email.");

  checkFormInput(
    refName1,
    "refname1label",
    "Please enter your first reference's name."
  );

  checkFormInput(
    relation1,
    "relation1label",
    "Please enter your first reference's relation."
  );

  checkFormInput(
    number1,
    "number1label",
    "Please enter your first reference's phone number."
  );

  checkFormInput(
    refName2,
    "refname2label",
    "Please enter your second reference's name."
  );

  checkFormInput(
    relation2,
    "relation2label",
    "Please enter your second reference's relation."
  );

  checkFormInput(
    number2,
    "number2label",
    "Please enter your second reference's phone number."
  );

  checkFormInput(
    reason,
    "reasonlabel",
    "Please enter your reason for applying."
  );

  checkFormInput(
    sDate1,
    "sdate1label",
    "Please enter your most recent employment's start date."
  );

  checkFormInput(
    eDate1,
    "edate1label",
    "Please enter your most recent employment's end date."
  );

  checkFormInput(
    jobTitle1,
    "jobtitle1label",
    "Please enter your most recent employment's job title."
  );

  checkFormInput(
    company1,
    "company1label",
    "Please enter your most recent employment's company name."
  );

  checkFormInput(
    city1,
    "city1label",
    "Please enter the city of your most recent employment."
  );

  checkFormInput(
    state1,
    "state1label",
    "Please enter the state of your most recent employment."
  );

  checkFormInput(
    jobDes1,
    "jobdes1label",
    "Please enter the description of your most recent employment."
  );

  checkOptionalFormInput(sDate2, "sdate2label");

  checkOptionalFormInput(eDate2, "edate2label");

  checkOptionalFormInput(jobTitle2, "jobtitle2label");

  checkOptionalFormInput(company2, "company2label");

  checkOptionalFormInput(city2, "city2label");

  checkOptionalFormInput(state2, "state2label");

  checkOptionalFormInput(leaving2, "leaving2label");

  checkOptionalFormInput(jobDes2, "jobdes2label");

  checkOptionalFormInput(other, "otherlabel");

  checkFormInput(upload, "uploadlabel", "Please upload your resume.");

  if (submittable == "true") {
    return "true";
  } else {
    return "false";
  }
}

function SubForm() {
  checkForm();
  if (checkForm() == "true") {
    $.ajax({
      url: "https://api.apispreadsheets.com/data/z23jripocBBCj72R/",
      type: "post",
      data: $("#myForm").serializeArray(),
      success: function () {
        location.href = "applicationsubmitted.html";
      },
      error: function () {
        alert("There was an error :(");
      },
    });
  }
}
