(() => {
  // เริ่มเขียนโค้ด



  function onScroll(event){
    const moonElem = document.querySelector('.moon');
    const wishElem = document.querySelector('.wish');

    moonElem.style.transform = `translate(${window.scrollY * 0.8}%,${window.scrollY * -0.7}%)`
    wishElem.style.transform = `translateY(${window.scrollY*-1.5}%)`

    console.log(window.scrollY);
  }

  function run(){
    document.addEventListener('scroll',onScroll);
  }

  run();
})();
