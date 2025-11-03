// NavBar

let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "300px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

window.addEventListener("scroll", function() {
  let navBar = this.document.querySelector(".nav");

  navBar.classList.toggle("sticky", this.window.scrollY > 50);
})

// SECTION: INTRODUCION



// ABOUT

const fadeHeading = document.querySelectorAll(".HeadingAboutMe");

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("fadeIn");
      observer1.unobserve(entry.target);
    }
  });
}, {threshold: 1});

fadeHeading.forEach(element => {
  observer1.observe(element);
});


const fadeImage = document.querySelectorAll("#pfp");

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("fadeInImage");
      observer2.unobserve(entry.target);
    }
  });
}, {threshold: 1});

fadeImage.forEach(element => {
  observer2.observe(element);
});

const fadePara = document.querySelectorAll(".para");

const observer3 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("fadeInPara");
      observer3.unobserve(entry.target);
    }
  });
}, {threshold: 0.25});

fadePara.forEach(element => {
  observer3.observe(element);
});


// PASSION


const fadeElements = document.querySelectorAll(".elements");

const observer4 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("fadeInElements");
      observer4.unobserve(entry.target);
    }
  });
}, {threshold: 0.25});

fadeElements.forEach(element => {
  observer4.observe(element);
});

// SKILLS

const fadeSkills = document.querySelectorAll(".skillImg");

const observer5 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("fadeInImg");
      observer5.unobserve(entry.target);
    }
  });
}, {threshold: 0.25});

fadeSkills.forEach(element => {
  observer5.observe(element);
});

const fadeText = document.querySelectorAll(".text");

const observer6 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("fadeInText");
      observer6.unobserve(entry.target);
    }
  });
}, {threshold: 0.25});

fadeText.forEach(element => {
  observer6.observe(element);
});

// RESUME


// Projects

const fadeCards = document.querySelectorAll(".projectCards");

const observer8 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("fadeInCard");
      observer8.unobserve(entry.target);
    }
  });
}, {threshold: 0.25});

fadeCards.forEach(element => {
  observer8.observe(element);
});


// CONTACT

const slideDown = document.querySelectorAll("#paperPlane");

const observer7 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("slideDown");
      observer7.unobserve(entry.target);
    }
  });
}, {threshold: 0.25});

slideDown.forEach(element => {
  observer7.observe(element);
});