const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0
};

const fadeInCb = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated',"animate__fadeIn");
      
    }
  });
};

const fadeInLeftCb = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated',"animate__fadeInLeft");
    }
  });
};

const fadeInRightCb = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated',"animate__fadeInRight");
    }
  });
};

const slideInLeftCb = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated',"animate__slideInLeft");
      
    }
  });
};
const slideInRightCb = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated',"animate__slideInRight");
      
    }
  });
};
const slideInDownCb = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated',"animate__slideInDown");
      
    }
  });
};


var fadeIn = document.querySelectorAll("#fadeIn");
var fadeInRight = document.querySelectorAll("#fadeInRight");
var fadeInLeft = document.querySelectorAll("#fadeInLeft");
var slideInLeft = document.querySelectorAll('#slideInLeft');
var slideInRight = document.querySelectorAll('#slideInRight');
var slideInDown = document.querySelectorAll('#slideInDown');
let fadeInObserver = new IntersectionObserver(fadeInCb, options);
let fadeInRightObserver = new IntersectionObserver(fadeInRightCb, options);
let fadeInLeftObserver = new IntersectionObserver(fadeInLeftCb, options);
let slideInLeftObserver = new IntersectionObserver(slideInLeftCb, options);
let slideInRightObserver = new IntersectionObserver(slideInRightCb, options);
let slideInDownObserver = new IntersectionObserver(slideInDownCb, options);
for(i = 0; i < fadeIn.length; i++) {
  fadeInObserver.observe(fadeIn[i]);
}
for(i = 0; i < fadeInLeft.length; i++) {
  fadeInLeftObserver.observe(fadeInLeft[i]);
}
for(i = 0; i < fadeInRight.length; i++) {
  fadeInRightObserver.observe(fadeInRight[i]);
}
for(i = 0; i < slideInLeft.length; i++) {
  slideInLeftObserver.observe(slideInLeft[i]);
}
for(i = 0; i < slideInRight.length; i++) {
  slideInRightObserver.observe(slideInRight[i]);
}
for(i = 0; i < slideInDown.length; i++) {
  slideInDownObserver.observe(slideInDown[i]);
}
