(() => {
  // เริ่มเขียนโค้ด

  const message = new SpeechSynthesisUtterance();

  function onVoiceChanged(){
    const voices = speechSynthesis.getVoices();
    const thVoice = voices.find(voice => voice.lang === 'th-T');
    message.voice  = thVoice;
  }

  function onclick(event){
    message.text = event.target.getAttribute('alt')
    speechSynthesis.speak(message);

  }


  function run(){
    speechSynthesis.addEventListener('voiceschanged',onVoiceChanged)

    const imageElems = Array.from(document.querySelectorAll('img'));
    imageElems.forEach(imageElem => imageElem.addEventListener('click',onclick));
  }

  run();


})();
