(() => {
  // เริ่มเขียนโค้ด
  const KEY = 'xZZcSBRfTH_Lk0UE93JcdOw8FprxpGGNmjfzKB4Xar8';
  let page = Math.floor(Math.random() * 1000);
  console.log(page);
  const loaderElem = document.querySelector('.loader');

  function showLoader(){
    loaderElem.classList.add('visible');
  }
  function hideLoader(){
    loaderElem.classList.remove('visible');
  }
  
  async function displayImages(){
    showLoader();
    const result = await fetch(`https://api.unsplash.com/photos/?client_id=${KEY}&page=${page}`)
    const images = await result.json()

    const galleryElem = document.querySelector('.gallery');

    images.forEach(image => {
      const imageElem = document.createElement('img');
      imageElem.src = image.urls.small;
      galleryElem.appendChild(imageElem);      
    });
    hideLoader();
    page += Math.floor(Math.random() * 10);
  }
  function onscroll(){
    const {scrollTop,clientHeight,scrollHeight} = document.documentElement;
    // console.log(scrollTop,clientHeight,scrollHeight);

    if(scrollTop + clientHeight >= scrollHeight - 5){
      displayImages();
    }
  
  }
  
  function run(){
    document.addEventListener('scroll',onscroll);
    displayImages();
  }
  run();
})();
