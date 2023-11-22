(() => {
  // เริ่มเขียนโค้ด

  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new window.SpeechRecognition();
  const btnElem = document.querySelector('.control');


  function onclick(){
    const isPausing = btnElem.classList.contains('record');

    if(isPausing){
      recognition.start();
      btnElem.classList.remove('record');
      btnElem.classList.add('pause');
    }else{
      recognition.stop();
      btnElem.classList.remove('pause');
      btnElem.classList.add('record');
    }
  }

  function onResult(event){
    const textElem = document.querySelector('.text');
    console.log(event.results);
    const {transcript} = event.results[0][0];
    textElem.innerText += transcript;


  }
  function onended(){
    const isRecording = btnElem.classList.contains('pause');
    if(isRecording){
      recognition.start();
    }
  }

  function run(){
    recognition.lang = 'th-TH';


    recognition.addEventListener('result',onResult)
    recognition.addEventListener('end',onended);
    btnElem.addEventListener('click',onclick);

  }
  run()


})();
