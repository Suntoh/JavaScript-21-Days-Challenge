(() => {
  // เริ่มเขียนโค้ด
  let draggingElem;


  function run(){
    const taskElems = Array.from(document.querySelectorAll(".task"));
    const dropZoneElems = Array.from(document.querySelectorAll(".drop-zone"));

    taskElems.forEach((taskElem) => {
      taskElem.addEventListener('dragstart',ondragstart);
    })
    dropZoneElems.forEach((dropZoneElem) =>{
      dropZoneElem.addEventListener('drop',ondrop);
      dropZoneElem.addEventListener('dragover',ondragover);
      dropZoneElem.addEventListener('drageter',ondragenter);

    })

  }

  function ondrop(event){
    this.append(draggingElem);
    draggingElem = null;
  }
  function ondragstart(){
    draggingElem =this;
  }
  function ondragenter(event){
    event.preventDefault();
  }
  function ondragover(event){
    event.preventDefault();
  }

  run()
})();
