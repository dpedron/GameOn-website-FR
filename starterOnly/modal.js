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
let unvalidForm = "Veuillez corriger les erreurs signalées";

// inputs tests
let isOk = true;
let regexName = /^[a-z ,.'-]{2,}$/i;
let regexEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let regexDate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

// first validation
function firstValidation(){
  let firstError = document.getElementById('firstError');

  first.addEventListener('change', function(){
    firstError.textContent = noProblem;
    if(!first.value){
      firstError.textContent = emptyField;
      isOk = false;
      return false;
    }
    if(!regexName.test(first.value)){
      firstError.textContent = twoCaracters;
      isOk = false;
      return false;
    }    
    isOk = true;
    return true;
  })
};

// last validation
function lastValidation(){
  let lastError = document.getElementById('lastError');

  last.addEventListener('change', function(){
    lastError.textContent = noProblem;
    if(!last.value){
      lastError.textContent = emptyField;
      isOk = false;
      return false;
    }
    if(!regexName.test(last.value)){
      lastError.textContent = twoCaracters;
      isOk = false;
      return false;
    }
    isOk = true;
    return true;
  })};

// email validation
function emailValidation(){
  let emailError = document.getElementById('emailError');

  email.addEventListener('change', function(){
    emailError.textContent = noProblem;
    if(!email.value){
      emailError.textContent = emptyField;
      isOk = false;
      return false;
    }
    if(!regexEmail.test(email.value)){
      emailError.textContent = unvalidEmail;
      isOk = false;
      return false;
    }
    isOk = true;
    return true;
  })};

// birthdate validation
function birthdateValidation(){
  let birthdateError = document.getElementById('birthdateError');

  birthdate.addEventListener('change', function(){
    birthdateError.textContent = noProblem;
    if(!birthdate.value){
      birthdateError.textContent = emptyField;
      isOk = false;
      return false;
    }
    if(!regexDate.test(birthdate.value)){
      birthdateError.textContent = unvalidBrithdate;
      isOk = false;
      return false;
    }
    isOk = true;
    return true;
  })};

// quantity validation
function quantityValidation(){
  let quantityError = document.getElementById('quantityError');

  quantity.addEventListener('change', function(){
    quantityError.textContent = noProblem;
    if(!quantity.value){
      quantityError.textContent = emptyField;
      isOk = false;
      return false;
    }
    isOk = true;
    return true;
  })};

// location validation
  
// terms and conditions acceptation
function checkbox1Validation() {
  let checkbox1Error = document.getElementById('checkbox1Error');

  checkbox1.addEventListener('change', function(){
  if(checkbox1.checked){
    checkbox1Error.textContent = noProblem;
    isOk = false;
    return false;
  } 
  if(!checkbox1.checked){
    checkbox1Error.textContent = uncheckedTerms;
    isOk = false;
    return false;
  }
  isOk = true;
  return true;
})};

// form validation
function validate() {
  formulaire.addEventListener('submit', function(e){
    let formulaireError = document.getElementById('formulaireError');

    if(isOk == false){
      formulaireError.innerText = unvalidForm;
      e.preventDefault();
    }
    if(!first.value){
      formulaireError.innerText = unvalidForm;
      firstError.textContent = emptyField;
      e.preventDefault();
    }
    if(!last.value){
      formulaireError.innerText = unvalidForm;
      lastError.textContent = emptyField;
      e.preventDefault();
    }
    if(!email.value){
      formulaireError.innerText = unvalidForm;
      emailError.textContent = emptyField;
      e.preventDefault();
    }
    if(!birthdate.value){
      formulaireError.innerText = unvalidForm;
      birthdateError.textContent = emptyField;
      e.preventDefault();
    }
    if(!quantity.value){
      formulaireError.innerText = unvalidForm;
      quantityError.textContent = emptyField;
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