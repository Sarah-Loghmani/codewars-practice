// https://www.codewars.com/kata/571edea4b625edcb51000d8e
// misson 1: I've create three function, and defined some global variables, please select some variables that can make up the name of the function, and return them(Please note the uppercase and lowercase letters are different).
// When you have finished the work, click "Run Tests" to see if your code is working properly.

var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  return d1+a2+d2;
}
function Bee(){
    //select some variable to combine "Bee"
    return b1+e2+e2;
}
function banana(){
    //select some variable to combine "banana"
    return b2+a2+n2.concat(a2+n2+a2);
}
console.log(Dad(),Bee(), banana())


// https://www.codewars.com/kata/571edd157e8954bab500032d/train/javascript
// I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.

var v1=50,v2=100,v3=150,v4=200,v5=2,v6=250
function equal1(){
  var a=v1   
  var b=v1   
  return a+b;
}
//Please refer to the example above to complete the following functions
function equal2(){
  var a=  v4 //set number value to a
  var b= v2  //set number value to b
  return a-b;
}
function equal3(){
  var a=  v1 //set number value to a
  var b=  v5 //set number value to b
  return a*b;
}
function equal4(){
  var a= v4  //set number value to a
  var b= v5  //set number value to b
  return a/b;
}
function equal5(){
  var a= v6  //set number value to a
  var b= v3  //set number value to b
  return a%b;
}
console.log(equal1(),equal2(),equal3(),equal4(),equal5());


function helloWorld() {
  let str = "Hello World!";
  console.log(str);
}
console.log(helloWorld());



// second day
function getLength(arr){
  //return length of arr
  return arr.length;
}
function getFirst(arr){
  //return the first element of arr
  return arr[0]
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length-1]
}
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(el)
  return arr
}
console.log(pushElement([1,2,3]));

function popElement(arr){
  //pop an element from arr
  arr.pop()
  return arr
}


function animal(obj) {
  return `This ${obj.color} ${obj["name"]} has ${obj.legs} legs.`;
}

// ternary operator
function oddEven(n) {
  return n % 2 == 1 ? "odd number" : "even number";
}
function oldYoung(age) {
  return age < 16 ? "children" : age < 50 ? "young man" : "old man";
}

//switch
// switch is the keyword, n is the variable to switch, case 1 means when n===1, following the ":",you can add some executable statement, with keyword break as termination(if you forgot "break", code will running with case 2, case 3...until a "break" appear),default like else in the if..else statement.
// In some cases, use the switch statement to look more clearly than the if..else statement.
switch(n){
  case 1:  
    //code block
    break;
  case 2:
    //code block
    break;
  case 3:
    //code block
    break;

  default:       //default is optional, sometimes it can be omitted
    //code block
                 //The last one does not need break
}



// Complete function howManydays, function accept 1 parameters:month, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).

// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28      |  (Do not consider the leap year)
// +---------------+-------------+
// little tips: Use default for most of the cases can reduce your work.
let month =[1,2,3,4,5,6,7,8,9,10,11,12]
function howManydays(month){
  var days;
  switch (month) {
  
    case 2:
      days = 28;
      break;
    case 4:
      days = 30;
      break;
    case 6:
      days = 30;
      break;
    case 9:
      days = 30;
      break;
    case 11:
      days = 30;
      break;
    
      default:
        days = 31
  }
  return days;
}