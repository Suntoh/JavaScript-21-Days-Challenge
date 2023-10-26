(() => {
  // เริ่มเขียนโค้ด
  function run(){
    const bodyElement = document.querySelector("body");
    const eyeElement = document.querySelectorAll(".eye");
    
    function onMouseMove({pageX,pageY}){
      eyeElement.forEach((eyeElement) => {
        const{left,top} //เอาตำแหน่งจากซ้ายบน(ตำแหน่งตาขาว เป็นสี่เหลี่ยม)
        = eyeElement.getBoundingClientRect();
        const eyeCenterX = left + eyeElement.offsetWidth / 2;
        const eyeCenterY = top + eyeElement.offsetHeight / 2;
        const radian = Math.atan2(pageX - eyeCenterX, pageY - eyeCenterY);
        const angle = radian * 180/ Math.PI * -1 ;

        eyeElement.style.transform = `rotate(${angle}deg)`
      });
    }

    bodyElement.addEventListener('mousemove', onMouseMove);
  }
  run()
})();
