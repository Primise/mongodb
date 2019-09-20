function getRandomNum(min,max){
  let range = max -min;
  let rand = Math.random();
  return (min+Math.round(rand*range))
}
// console.log(getRandomNum(10000,99999))
function getRandomName(min,max){
  let temStringArray="123456789qwertyuioplkjhgfdsazxcvbnm".split("");
  let outPut="";
  for(let i=0;i<getRandomNum(min,max);i++){
    outPut=outPut+temStringArray[getRandomNum(0,temStringArray.length)]
  }
  return outPut

}
// console.log(getRandomName(7,16))


//200万数据.
var db = connect("company");
db.randomInfo.drop();
 var startTime = (new Date()).getTime();
 var  tempInfo = [];
 for (let index = 0; index <2000000; index++) {
  tempInfo.push({
    userName:getRandomName(7,16),
    regeditTime:startTime,
    rundNum1:getRandomNum(100000,999999),
    rundNum2:getRandomNum(100000,999999),
    rundNum3:getRandomNum(100000,999999),
    rundNum4:getRandomNum(100000,999999),
    rundNum5:getRandomNum(100000,999999),
    rundNum6:getRandomNum(100000,999999),
    rundNum7:getRandomNum(100000,999999),
    rundNum8:getRandomNum(100000,999999),
    rundNum9:getRandomNum(100000,999999),
    rundNum10:getRandomNum(100000,999999),

  })
 }
 db.randomInfo.insert(tempInfo);

 var endTime = (new Date()).getTime()-startTime;
 print(`asdasd${endTime}ms`)