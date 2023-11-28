(() => {
  // เริ่มเขียนโค้ด
  const carBrands = [
    'Audi','BMW','Marserati','Mercedes Banez',
    'Ferrari','Lamborghini','Volkswagwn',
    'Toyota','Honda','Hyundai','MG','BYD',
    'Ford','Isuzu','McLaren','Porsche',
    'Kia','Nissan','Volvo','Mazda','Mini',
    'Lexus','Tesla','Jaguar','Suzuki','Peugeot'
  ].sort();
  console.log(carBrands);

  const searchElem = document.querySelector('.search');
  
  function clearResult(){
    const display = document.querySelector('.results');
    if(display){
      document.body.removeChild(display)
    }
  }

  function selecCarBrand(event){
    console.log(event)
    searchElem.value = event.target.innerText;
    clearResult();
  }

  function oninput(event){
    clearResult();
    const inputText = event.target.value.toLowerCase();

    const matchedCarBrands = carBrands.filter(carBrand => carBrand.toLowerCase().startsWith(inputText));
    const display = document.createElement('ul');
    display.classList.add('results');

    matchedCarBrands.forEach(carBrand => {
      const liElem = document.createElement('li');
      liElem.innerText = carBrand;
      liElem.onclick = selecCarBrand;
      display.appendChild(liElem);
    })
    document.body.appendChild(display);
  }

  function run(){
    searchElem.addEventListener('input', oninput);
    document.addEventListener('click',clearResult);
  }
  run()

})();
