var prevScrollpos = window.pageYOffset;

window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

const showSlide = (event) => {
  if (event.children[1].style.height == "0px") {
    event.children[1].style.height = "170px";
    event.children[1].style.padding = "8px";
  }
  else {
    event.children[1].style.height = "0px";
    event.children[1].style.padding = "0px";
  }
    
}

const showslide = () => {
  document.querySelector(".slide-menu ").style.width = "100vw";
  document.querySelector(".slide-menu ").style.left = "0px";
}
const hideslide = () => {
  document.querySelector(".slide-menu ").style.width = "0vw";
  document.querySelector(".slide-menu ").style.left = "-100px";
}

const introHeight = document.querySelector(".intro").scrollHeight;
const moveTo = () => {
  window.scrollTo(0, introHeight);
}
