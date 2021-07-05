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
let content = document.querySelector('.content');
let validation = document.querySelector('.validation');
let firstError = document.getElementById('firstError');
let lastError = document.getElementById('lastError');
let emailError = document.getElementById('emailError');
let birthdateError = document.getElementById('birthdateError');
let quantityError = document.getElementById('quantityError');
let checkbox1Error = document.getElementById('checkbox1Error');
let formulaireError = document.getElementById('formulaireError');

// inputs errors
let noProblem = '';
let unvalidName = 'Veuillez remplir le champ ci-dessus avec deux caractères au moins';
let unvalidEmail = 'Veuillez saisir une adresse mail valide (dupont@citron.com)';
let unvalidBirthdate = 'Veuillez saisir une date de naissance valide';
let unvalidQuantity = "Veuillez sélectionner un nombre";
let uncheckedLocation = 'Veuillez sélectionner une ville';
let uncheckedTerms = "L'acceptation des conditions d'utilisation est obligatoire";
let unvalidForm = "Veuillez corriger les erreurs signalées";

// inputs tests
let regexName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,}$/u;
let regexEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let regexDate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

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
function firstValidation(){
    firstError.textContent = noProblem;
    if(!first.value || !regexName.test(first.value)){
      first.style.border = "2px solid #FF4E60";
      firstError.textContent = unvalidName;
      return false;
    }    
    return true;
};

// last validation
function lastValidation(){
    lastError.textContent = noProblem;
    if(!last.value || !regexName.test(last.value)){
      last.style.border = "2px solid #FF4E60";
      lastError.textContent = unvalidName;
      return false;
    }
    return true;
  };

// email validation
function emailValidation(){
    emailError.textContent = noProblem;
    if(!email.value || !regexEmail.test(email.value)){      
      email.style.border = "2px solid #FF4E60";
      emailError.textContent = unvalidEmail;
      return false;
    }
    return true;
  };

// birthdate validation
function birthdateValidation(){
    birthdateError.textContent = noProblem;
    if(!birthdate.value || !regexDate.test(birthdate.value)){      
      birthdate.style.border = "2px solid #FF4E60";
      birthdateError.textContent = unvalidBirthdate;
      return false;
    }
    return true;
  };

// quantity validation
function quantityValidation(){
    quantityError.textContent = noProblem;
    if(!quantity.value){
      quantity.style.border = "2px solid #FF4E60";
      quantityError.textContent = unvalidQuantity;
      return false;
    }
    return true;
  };

// location validation

/* function locationValidation(){
  let location = document.getElementsByName('location');
  let locationError = document.getElementsById('locationError');
    for(let i = 0; i<location.length; i++){
      if(location[i].checked){
        window.alert("echec");
        locationError.innerText = uncheckedLocation;
        return false;
      }
      return true;
    }
} */
  
// terms and conditions acceptation
function checkbox1Validation() {
  checkbox1Error.textContent = noProblem;
  if(!checkbox1.checked){
    checkbox1Error.textContent = uncheckedTerms;
    return false;
  }
  return true;
};

// form validation
function validate(){  
  formulaire.addEventListener('submit', function(e){
    let isOk = true;
    if(firstValidation()==false){
      isOk = false;
    }
    if(lastValidation()==false){
      isOk = false;
    }
    if(emailValidation()==false){
      isOk = false;
    }
    if(birthdateValidation()==false){
      isOk = false;
    }
    if(quantityValidation()==false){
      isOk = false;
    }
    if(checkbox1Validation()==false){
      isOk = false;
    }
    if(isOk == false){
      e.preventDefault();
      formulaireError.innerText = unvalidForm;
    } else {
      e.preventDefault(); 
      content.style.display = "none";
      validation.style.display = "block";
    }
  })
};

first.addEventListener('change', firstValidation);
last.addEventListener('change', lastValidation);
email.addEventListener('change', emailValidation);
birthdate.addEventListener('change', birthdateValidation);
quantity.addEventListener('change', quantityValidation);
checkbox1.addEventListener('change', checkbox1Validation);
validate();