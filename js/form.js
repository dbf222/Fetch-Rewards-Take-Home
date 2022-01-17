const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const occupation = document.getElementById('occupation');
const state = document.getElementById('state');

form.addEventListener('submit', e => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //gets values
  const fullnameValue = fullname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const occupationValue = occupation.value;
  const stateValue = state.value;



  if (fullnameValue === '') {
    //show error
    //add error class
    setErrorFor(fullname, 'Please enter name');
  } else {
    //add success class
    setSuccessFor(fullname);
  }


  if (emailValue === '') {
    setErrorFor(email, 'Please enter email');
    //Valid email
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not Valid');
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Please enter passowrd');
  } else {
    setSuccessFor(password);
  }

  if (occupationValue === '') {
    setErrorFor(occupation, 'Please enter occupation');
  } else {
    setSuccessFor(occupation);
  }

  if (stateValue === '') {
    setErrorFor(state, 'Please enter your state');
  } else {
    setSuccessFor(state);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}


//Test to make sure valid email

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}