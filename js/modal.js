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
let city = formulaire.location;
let modalContent = document.getElementById('modalContent');
let validation = document.getElementById('validation');
let firstError = document.getElementById('firstError');
let lastError = document.getElementById('lastError');
let emailError = document.getElementById('emailError');
let birthdateError = document.getElementById('birthdateError');
let quantityError = document.getElementById('quantityError');
let cityError = document.getElementById('cityError');
let checkbox1Error = document.getElementById('checkbox1Error');
let formulaireError = document.getElementById('formulaireError');

// messages errors inputs
let noProblem = '';
let unvalidName = "Veuillez remplir le champ ci-dessus (deux caractères au moins)"; // First and last name input error message
let unvalidEmail = 'Veuillez saisir une adresse mail valide (dupont@citron.com)'; // Email input error message
let unvalidBirthdate = 'Veuillez saisir une date de naissance valide'; // Birthdate input error message
let unvalidQuantity = "Veuillez sélectionner un nombre valide"; // Tournament number input error message
let uncheckedCity = 'Veuillez sélectionner une ville'; // City input error message
let uncheckedTerms = "L'acceptation des conditions d'utilisation est obligatoire"; // Terms input error message
let unvalidForm = "Veuillez corriger les erreurs signalées"; // Form input error message

// inputs tests
let regexName = /^[A-ZÀÈÉÊa-zàäâéêèëçôîùû][A-ZÀÈÉÊa-zàäâéêèëçôîùû\-'\s]+$/; // First and last name input validation test
let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email input validation test
let regexDate = /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/; // Birthdate input validation test
let regexNumber = /^[0-9][0-9]?$/; // Quantity input validation test

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); // by clicking on the button "je m'inscris"

// close modal event
document.querySelector(".close").addEventListener("click", function(){
  modalbg.style.display = "";
}); // by clicking on the top right cross

// close modal validation
function closeValidation(){
  modalbg.style.display = "";  
  validation.style.display = "none"; 
  modalContent.style.display = "block";
  formulaire.reset();
}

document.getElementById("closeValidationByCross").addEventListener("click", closeValidation); // by clicking on the top right cross

document.getElementById("closeValidationByBtn").addEventListener("click", closeValidation); // by clicking on the button "fermer"

// first validation
function firstValidation(){
    firstError.textContent = noProblem;
    if(!regexName.test(first.value)){ // check if empty field or unvalid regex of first name
      first.style.border = "2px solid #FF4E60"; // error -> add borders to input field
      firstError.textContent = unvalidName; // error -> error message under input field
      return false;
    }    
    first.style.border = "none"; // no error -> do nothing
    return true;
}

// last validation
function lastValidation(){
    lastError.textContent = noProblem;
    if(!regexName.test(last.value)){ // check if empty field or unvalid regex of last name
      last.style.border = "2px solid #FF4E60"; // error -> add borders to input field
      lastError.textContent = unvalidName; // error -> error message under input field
      return false;
    }    
    last.style.border = "none"; // no error -> do nothing
    return true;
  }

// email validation
function emailValidation(){
    emailError.textContent = noProblem;
    if(!regexEmail.test(email.value)){ // check if empty field or unvalid regex of email
      email.style.border = "2px solid #FF4E60"; // error -> add borders to input field
      emailError.textContent = unvalidEmail; // error -> error message under input field
      return false;
    }        
    email.style.border = "none"; // no error -> do nothing
    return true;
  }

// birthdate validation
function birthdateValidation(){
    birthdateError.textContent = noProblem;
    if(!regexDate.test(birthdate.value)){ // check if empty field or unvalid regex of birthdate
      birthdate.style.border = "2px solid #FF4E60"; // error -> add borders to input field
      birthdateError.textContent = unvalidBirthdate; // error -> error message under input field
      return false;
    }     
    birthdate.style.border = "none"; // no error -> do nothing
    return true;
  }

// quantity validation
function quantityValidation(){
    quantityError.textContent = noProblem;
    if(!regexNumber.test(quantity.value)){ // check if empty field or unvalid regex number
      quantity.style.border = "2px solid #FF4E60"; // error -> add borders to input field
      quantityError.textContent = unvalidQuantity; // error -> error message under input field
      return false;
    }        
    quantity.style.border = "none"; // no error -> do nothing
    return true;
  }

// location validation
function locationValidation(){
    for(let i = 0; i < city.length; i++){ // check if one of the cities is checked   
      if(city[i].checked){
        cityError.textContent = noProblem;
        return true;
      }
  }
  cityError.textContent = uncheckedCity; // error -> error message under checkboxes
  return false;
}

// terms and conditions acceptation
function checkbox1Validation() {
  checkbox1Error.textContent = noProblem;
  if(!checkbox1.checked){ // check if terms ares checked
    checkbox1Error.textContent = uncheckedTerms; // error -> error message under checkbox
    return false;
  }
  return true; // no error -> do nothing
}

// form validation
function validate(){
  formulaireError.textContent = noProblem;
  let arrayValidation = [firstValidation(), lastValidation(), emailValidation(), birthdateValidation(), quantityValidation(), locationValidation(), checkbox1Validation()];   

  for(let i = 0; i < arrayValidation.length; i++){ // check inputs validity   
    if(arrayValidation[i]==false){
      formulaireError.textContent = unvalidForm; // error -> error message under submit button
      return false;
    } 
}
  validation.style.display = "block"; // no error -> close modal and open validation window
  modalContent.style.display = "none";
  return false;
}   

first.addEventListener('change', firstValidation);
last.addEventListener('change', lastValidation);
email.addEventListener('change', emailValidation);
birthdate.addEventListener('change', birthdateValidation);
quantity.addEventListener('change', quantityValidation);
city.forEach(element => {
  element.addEventListener('change', locationValidation);
});
checkbox1.addEventListener('change', checkbox1Validation);