function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
document.querySelector(".close").addEventListener("click", function(){
  modalbg.style.display = "none";
});

// first validation
document.querySelector("#first").addEventListener('change', function(){
  if (!first.checkValidity()) {
    document.getElementById("firstError").innerHTML = '<p class="error">Veuillez saisir au moins 2 caractères (lettres uniquement)</p>';
  } else {
    document.getElementById("firstError").innerHTML = "";
  } 
});

// last validation
document.querySelector("#last").addEventListener('change', function(){
  if (first.checkValidity()) {
    document.getElementById("lastError").innerHTML = '<p class="error">Veuillez saisir au moins de 2 caractères (lettres uniquement)</p>';
  } else {
    document.getElementById("lastError").innerHTML = "";
  } 
});

// form validation
document.querySelector("form").addEventListener('submit', function(e){
  e.preventDefault();
});
