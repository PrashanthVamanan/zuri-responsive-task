//*Get references to the hamburger and navigation links elements
const hamburger = document.querySelector(".hamburger");
const navigationLinks = document.querySelector(".nav-links");

//Add a click listener to the hamburger icon
hamburger.addEventListener("click", () => {

  //If the display property of the nav links were flex change it to 
  //none or vice versa on click
  navigationLinks.style.display =
    navigationLinks.style.display === "flex"
      ? (navigationLinks.style.display = "none")
      : "flex";

  //If the display property of the nav links were flex change it to
  //absolute else keep it at default static position
  if (navigationLinks.style.display === 'flex') {
    navigationLinks.style.position = "absolute";
  }

  //If position property of the nav links were absolute give a right property of 24px
  if (navigationLinks.style.position === "absolute") {
    navigationLinks.style.right = "25px";
    navigationLinks.style.top = "60px";
  }
  
});
