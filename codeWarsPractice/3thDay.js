// while loop
function sum1_100() {
  var sum = 0,
    num = 1; //Initialize two variables sum and num
  while (num <= 100) {
    //Determine the expression in brackets, while true,
    //run the code block one time, while false, break the loop
    sum = sum + num; //Each time num will be added to the current value of sum
    //It can be simplified as:  sum+=num
    num = num + 1; //Each time the value of num increases by 1
    //It can be simplified as:  num++
  }
  return sum; //return the final cumulative value
}

// do--while
function sum1_100() {
  var sum = 0,
    num = 1;
  do {
    sum += num;
    num++;
  } while (num <= 100);
  return sum;
}

// !  Do not forget to change the value of the variable (for conditional expressions), otherwise it will turn into an infinite loop.

// https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript

// Coding in function padIt, function accept 2 parameters:
// str, it's a string representing the string to pad, we need pad some "*" at leftside or rightside of str
// n, it's a number, how many times to pad the string.

function padIt(str, n) {
    let counter = 1
  do {
    counter%2 !== 0 ? str = "*"+str : str = str+"*"
    counter++
  } while (counter <= n);
  return str
}
console.log(padIt("a", 5));


// for loop 
function sum1_100() {
  for (var sum = 0, num = 1; num <= 100; num++) {
    sum += num;
  }
  return sum;
}


// Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even.

function pickIt(arr) {
  var odd = [],
    even = [];
  //coding here

  return [odd, even];
}