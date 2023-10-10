(() => {
  // เริ่มเขียนโค้ด
  function setup() {
    const canvas = document.getElementById('falling-snow-canvas');
    canvas.width =window.innerWidth;
    canvas.height =window.innerHeight;
    return {
      canvas,
      canvasContext: canvas.getContext('2d'),
      numberOfSnowBalls: 450
    }
  }
  function random(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);

  }
  function snowBalls(canvas, numberOfSnowBalls) {
    return [...Array(numberOfSnowBalls)].map(() => {
      return{
        x:random(0, canvas.width),
        y: random(0, canvas.height),
        brightness:   random(0.2,1),
        radius: random(2,5),
        speedX : random(-5,5),
        speedY : random(1,4)
      }
    });
  }

  function drawSnowBall(canvasContext,snowBalls){
    canvasContext.beginPath ();
    canvasContext.arc(snowBalls.x,snowBalls.y,snowBalls.radius,0,Math.PI * 2);
    canvasContext.fillStyle = `rgba(255,255,255,${snowBalls.brightness})`;
    canvasContext.fill();
  }

  function moveSnowBall(canvas,snowBalls){
    snowBalls.x += snowBalls.speedX;
    snowBalls.y += snowBalls.speedY;

    if(snowBalls.x > canvas.width){
      snowBalls.x = 0;
    }
    else if(snowBalls.x < 0){
      snowBalls.x = canvas.width;
    }

    if (snowBalls.y > canvas.height){
      snowBalls.y = 0;
    }
}

  function run() {
    const { canvas,canvasContext,numberOfSnowBalls } = setup();
    const snowBallss = snowBalls( canvas, numberOfSnowBalls);
  
    setInterval( () =>{
      canvasContext.clearRect(0,0,canvas.width,canvas.height);
      snowBallss.forEach((snowBall) => drawSnowBall(canvasContext,snowBall));
      snowBallss.forEach((snowBall) => moveSnowBall(canvas,snowBall));
    },50)
    
  }

  run();

})();
