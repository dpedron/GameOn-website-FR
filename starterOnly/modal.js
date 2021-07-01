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
let first = document.getElementById('first');
let last = document.getElementById('last');
let email = document.getElementById('email');
let birthdate = document.getElementById('birthdate');
let quantity = document.getElementById('quantity');
let checkbox1 = document.getElementById('checkbox1');
let formulaire = document.getElementById('formulaire');

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


// inputs errors
let noProblem = '';
let emptyField = 'Veuillez remplir le champ ci-dessus.';
let twoCaracters = 'Veuillez saisir au moins deux caractères (lettres uniquement).';
let unvalidBrithdate = 'Veuillez saisir une date de naissance valide.';
let unvalidEmail = 'Veuillez saisir une adresse mail valide (dupont@citron.com).';
let uncheckedTerms = "L'acceptation des conditions d'utilisation est obligatoire.";

// first validation
function firstValidation(){
  let regex = /^[a-zA-Z]{2,}$/;
  let firstError = document.getElementById('firstError');

  first.addEventListener('change', function(){
    firstError.textContent = noProblem;
    if(!first.value){
      firstError.textContent = emptyField;
      return (false);
    }
    if(!regex.test(first.value)){
      firstError.textContent = twoCaracters;
      return (false);
    }    
  })
  return (true);
};

// last validation
function lastValidation(){
  let regex = /^[a-zA-Z]{2,}$/;
  let lastError = document.getElementById('lastError');

  last.addEventListener('change', function(){
    lastError.textContent = noProblem;
    if(!last.value){
      lastError.textContent = emptyField;
      return (false);
    }
    if(!regex.test(last.value)){
      lastError.textContent = twoCaracters;
      return (false);
    }
    return (true);
  })};

// email validation
function emailValidation(){
  let regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  let emailError = document.getElementById('emailError');

  email.addEventListener('change', function(){
    emailError.textContent = noProblem;
    if(!email.value){
      emailError.textContent = emptyField;
      return (false);
    }
    if(!regex.test(email.value)){
      emailError.textContent = unvalidEmail;
      return (false);
    }
    return (true);
  })};

// birthdate validation
function birthdateValidation(){
  let regex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
  let birthdateError = document.getElementById('birthdateError');

  birthdate.addEventListener('change', function(){
    birthdateError.textContent = noProblem;
    if(!birthdate.value){
      birthdateError.textContent = emptyField;
      return (false);
    }
    if(!regex.test(birthdate.value)){
      birthdateError.textContent = unvalidBrithdate;
      return (false);
    }
    return (true);
  })};

// quantity validation
function quantityValidation(){
  let quantityError = document.getElementById('quantityError');

  quantity.addEventListener('change', function(){
    quantityError.textContent = noProblem;
    if(!quantity.value){
      quantityError.textContent = emptyField;
      return (false);
    }
    return (true);
  })};
  
// terms and conditions acceptation
function checkbox1Validation() {
  let checkbox1Error = document.getElementById('checkbox1Error');

  checkbox1.addEventListener('change', function(){
  if(checkbox1.checked){
    checkbox1Error.textContent = noProblem;
    return (false);
  } else {
    checkbox1Error.textContent = uncheckedTerms;
    return (false);
  }
})};

// form validation
function validate() {
  formulaire.addEventListener('submit', function(e){
    if(!(first.value)){
      e.preventDefault();
    }
  });
};

firstValidation();
lastValidation();
emailValidation();
birthdateValidation();
quantityValidation();
checkbox1Validation();
validate();
