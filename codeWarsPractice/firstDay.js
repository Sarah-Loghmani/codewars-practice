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