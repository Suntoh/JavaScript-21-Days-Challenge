(() => {
  // เริ่มเขียนโค้ด

  // 1. NaN(Not a Number)
  if(null == null){
    console.log('Equal');
  }
  if(NaN == NaN){
    console.log('NaN Equal');
  }
  if(NaN != NaN ){
    console.log("Nan");
  }

  const result = 1/'hello';
  console.log(result);
  if (Number.isNaN(result)){
    console.log("Number is NaN")
  }
  // 2. Type Coercion
  if (1<2<3){
    console.log("Hi");
  }
  if(3>2>1){
    console.log("Bye");
  }
  //เพราะแปลงค่า 3>2 = true ==>> true = 1 ==>> 1>1 fasle;

  console.log(2-'1');
  console.log(2 + '1');
  console.log(true + true);
  // 3 , '21' , 2;

  // 3. Interpreter & Compiler
  function getPerson(){
    return
    {
      name: "Me"
    };
  }
  //กด enter ไม่ return เพราะเติม ; ให้เอง
  console.log(getPerson());

  // 4. Checking Object Type

  const person ={};
  const person2 = null;
  if(typeof person === 'object'){
    console.log("yes");
  }
  if(typeof person2 === 'object'){
    console.log("Also yes");
  }
  if(typeof person2 === 'object' && person2!== null){
    console.log("Also again yes");
  }


})();
