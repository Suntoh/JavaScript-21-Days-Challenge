(() => {
  // เริ่มเขียนโค้ด
  function displayError(elem,message){
    const display  = elem.parentElement.querySelector('small');
    display.innerText = message;
    elem.classList.add('invalid');
    form.classList.add('invalid');
  }

  function resetState(elem){
    const display = elem.parentElement.querySelector('small');
    display.innerText = "";
    elem.classList.remove('invalid');
    form.classList.remove('invalid');
  }

  function validateLength(text, min,max){
    const val = text.value;
    const name = text.getAttribute('name');
    if(val.length < min || val.length > max){
      displayError(text,`${name} length must be between ${min} and ${max}`);
    }
  }

  function validateEmail(elem){
    const regex = /\S+@\S+\.\S+/;
    if(!regex.test(elem.value)){
      displayError(elem,'Email must be valid')
    }
  }

  function displaySuccess(){
    document.body.innerHTML = ""
    const pElem = document.createElement('p');
    pElem.innerText = "You have been logged in."
    pElem.classList.add('success');
    document.body.appendChild(pElem);
  }

  function validateForm(event){
    event.preventDefault();

    const emailElem = document.getElementById('email');
    const passElem = document.getElementById('password');

    resetState(emailElem);
    resetState(passElem);


    validateLength(emailElem,10,22);
    validateLength(passElem,8,20);

    validateEmail(emailElem);

    const isValidForm = !form.classList.contains('invalid');
    if(isValidForm){
      displaySuccess();
    }
  }

  function run(){
    const formElem = document.querySelector('form');
    formElem.addEventListener('submit',validateForm);

  }
  run();
})();
