(() => {
  // เริ่มเขียนโค้ด

  const audioElem = document.querySelector('audio');
  const playBtnElem = document.querySelector('.play');
  const progressionBarElem = document.querySelector('.progress-bar');
  const startTimeElem = document.querySelector('.start-time');
  const endTimeElem = document.querySelector('.end-time');

  function onclick(){
    if(audioElem.paused){
      audioElem.play();
      playBtnElem.className = 'pause';
    }else{
      audioElem.pause();
      playBtnElem.className = 'play';
    }

  }

  function getDuration(time){
    const min = Math.floor(time/60 % 60);
    const sec = Math.floor(time % 60).toString().padStart(2,'0');
    
    return `${min}:${sec}`;
  }


  function ontimeupdate(){
    startTimeElem.innerHTML = getDuration(audioElem.currentTime);
    progressionBarElem.value = audioElem.currentTime;
  }

  function onloadeddata(){
    endTimeElem.innerHTML = getDuration(audioElem.duration);
    progressionBarElem.max  =audioElem.duration;
  }
  function onRefresh(audioElem){
    endTimeElem.innerHTML = getDuration(audioElem.duration);
    progressionBarElem.max  =audioElem.duration;
  }
  function onInput(){
    audioElem.currentTime = progressionBarElem.value;
  }
  function onended(){
    playBtnElem.className = 'play';
    audioElem.currentTime = 0;
  }
  function run(){
    playBtnElem.addEventListener('click', onclick);
    
    audioElem.addEventListener('timeupdate',ontimeupdate);
    audioElem.addEventListener('loadeddata',onloadeddata);
    if(endTimeElem.innerHTML === '0:00'){
      onRefresh(audioElem);
    }
    audioElem.addEventListener('ended',onended);
    progressionBarElem.addEventListener('input', onInput);
  }

  run()
})();
