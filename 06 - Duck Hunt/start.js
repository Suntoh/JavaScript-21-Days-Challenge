(() => {
  // เริ่มเขียนโค้ด
  function random(min,max){
    return Math.floor(Math.random() * (max-min +1))+min;
  }
  function createDucks(){
    return [...Array(5)].map(() =>{
      return {
        x:random(0,window.innerWidth),
        y:window.innerHeight,
        speedX: random (-50,50),
        speedY: random(5,15)
      }
    } );
  }

  function setupDuckElement(duck){
    const duckElement = document.createElement('div');
    duckElement.className = 'duck';
    duckElement.style.left = `${duck.x}px`;
    duckElement.style.top = `${duck.y}px`;
    if(duck.speedX> 0){
    duckElement.style.backgroundImage = 'url(./right-1.png)'
    }
    else{
      duckElement.style.backgroundImage = 'url(./left-1.png'
    }
    document.body.appendChild(duckElement);
    return {duck,duckElement};
  }

  function getBackgound(duck,duckElement){
    const direction = duck.speedX > 0? 'right':'left';
        // short form of if condition
    // if(duck.speedX > 0){}
    return duckElement.style.backgroundImage.indexOf('1') != -1?
      `url(./${direction}-2.png)` : `url(./${direction}-1.png)`
    //if the image doesm't has '1' in it, it will return -1
    //in this code we want to check if it has '1 ' in the name
  }
  function moveDuck(duckElement,duck){
    const { left,top} = duckElement.getBoundingClientRect();
    const outOfBoundX = duck.x < 0 || duck.x > window.innerWidth;
    const outOfBoundY = duck.y < 0 || duck.y > window.innerHeight;

    if(outOfBoundX){
      duck.speedX *= -1;
    }
    if(outOfBoundY){
      duck.speedY *= -1;
    }

    duck.x = left + duck.speedX;
    duck.y = top - duck.speedY;
    duckElement.style.top = `${duck.y}px`;
    duckElement.style.left = `${duck.x}px`;
  
    duckElement.style.backgroundImage = getBackgound(duck,duckElement);
  }

  function shootDuck(event){
    const duckElement = event.target;
    duckElement.style.transition = "top 2s";
    duckElement.style.top = `${window.innerHeight}px`
    //transition doesn't work

    clearInterval(duckElement.interval);
    setTimeout(() =>{
      document.body.removeChild(duckElement);

      const haveDuck = document.querySelector('.duck');

      if(!haveDuck){
        const win = document.querySelector('.winning');
        win.style.opacity = 1;
      }

  });
  }

  function run(){
    const ducks = createDucks();
    const duckElems = ducks.map(setupDuckElement);

    duckElems.forEach(({duck,duckElement}) => {
      duckElement.interval = setInterval(() => moveDuck(duckElement,duck),100);
      duckElement.addEventListener('click',shootDuck)
    });

  }
  run()
})();
