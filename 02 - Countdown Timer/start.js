(() => {
  // เริ่มเขียนโค้ด

  const second = 1000;
  const minute = second *60;
  const hour = minute *60;
  const day = hour * 24;


  function setElementInnerText(id,text){
    const element = document.getElementById(id);
    element.innerText = text
  }

  function countDown(){
    const now = new Date().getTime();
    const newYear = new Date('December 31, 2023 23:59:59').getTime();
    const unixTimeleft = newYear - now;

    // const daysElement = document.getElementById('days');
    // daysElement.innerText = Math.floor(unixTimeleft / day)
    // const hoursElement = document.getElementById('hours');
    // hoursElement.innerText = Math.floor(unixTimeleft % day/ hour);
    // const minutesElement = document.getElementById('minutes');
    // minutesElement = document.getElementById(unixTimeleft %hour/ minute);
    // const secondsElement = document.getElementById('seconds');
    // secondsElement = document.getElementById(unixTimeleft %minute /seconds);
    //too long

    setElementInnerText('days',Math.floor(unixTimeleft / day));
    setElementInnerText('hours',Math.floor(unixTimeleft % day/ hour));
    setElementInnerText('minutes',Math.floor(unixTimeleft % hour/ minute));
    setElementInnerText('seconds',Math.floor(unixTimeleft % minute/second));
  
  }


  
  function run(){
    setInterval(countDown, second)
  }

  run()
})();
