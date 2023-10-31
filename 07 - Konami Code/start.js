(() => {
  // เริ่มเขียนโค้ด
  const konamiCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a'
  ]
  index = 0;

  function onKeyDown(event){
    console.log(event.key);
    event.key == konamiCode[index] ? index ++ : index = 0;

    if(konamiCode.length == index){
      startSnowing();
    }
  }



  function run(){
    document.addEventListener('keydown', onKeyDown);
  }
  
  run();
})();
