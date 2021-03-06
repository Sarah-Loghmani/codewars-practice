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
  let counter = 1;
  do {
    counter % 2 !== 0 ? (str = "*" + str) : (str = str + "*");
    counter++;
  } while (counter <= n);
  return str;
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

// https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript
function pickIt(arr) {
  var odd = [],
    even = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);
  }

  return [odd, even];
}

// break
function findFirstOddNumber(arr) {
  var result;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      result = arr[i];
      break;
    }
  }
  return result;
}

// continue
function dontDisplayNegative(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) continue;
    console.log(arr[i]);
  }
}

console.log(dontDisplayNegative([5, 2, -6, 5, -8, -5, 6]));

// https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript
// Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.

// You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array, I've defined in the function); if it's other strings, we should use continue skip it.

// When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.

// Return the bag after for loop finished.

function grabDoll(dolls) {
  var bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll")
      bag.push(dolls[i]);
    else continue;
    if (bag.length === 3) break;
  }

  return bag;
}
console.log(
  grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Snow white"])
);

// https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript
function giveMeFive(obj) {
  let arr = [];

  for (let key in obj) {
    if (key.length === 5) {
      arr.push(key);
    }
    if (obj[key].length === 5) {
      arr.push(obj[key]);
    }
  }
  return arr;
}

console.log(
  giveMeFive({ Ihave: "enough", money: "to", buy: "a", car: "model" })
);

// number object
// var num = new Number(value);
//  five attributes (or called constant):

// MAX_VALUE: The maximum number that can be expressed in JS. Usage:Number.MAX_VALUE. Its approximate value is 1.7976931348623157e+308

// MIN_VALUE: The minimum number that can be expressed in JS(Close to 0, but not negative). Usage:Number.MIN_VALUE. Its approximate value is 5e-324

// NaN: Non numeric value. Abbreviations of "Not a Number". When some arithmetic operations (such as the square root of a negative number) or the result of the method are not numbers, return NaN. Usage:Number.NaN. It can be simplified and replaced with NaN.
// https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/train/javascript

function whatNumberIsIt(n) {
  let result;
  n == Number.MAX_VALUE
    ? (result = "Input number is Number.MAX_VALUE")
    : n == Number.MIN_VALUE
    ? (result = "Input number is Number.MIN_VALUE")
    : isNaN(n)
    ? (result = "Input number is Number.NaN")
    : n <= Number.NEGATIVE_INFINITY
    ? (result = "Input number is Number.NEGATIVE_INFINITY")
    : n >= Number.POSITIVE_INFINITY
    ? (result = "Input number is Number.POSITIVE_INFINITY")
    : (result = `Input number is ${n}`);
  return result;
}

function whatNumberIsIt(n) {
  return n === Number.MAX_VALUE
    ? "Input number is Number.MAX_VALUE"
    : n === Number.MIN_VALUE
    ? "Input number is Number.MIN_VALUE"
    : isNaN(n)
    ? "Input number is Number.NaN"
    : n <= Number.NEGATIVE_INFINITY
    ? "Input number is Number.NEGATIVE_INFINITY"
    : n >= Number.POSITIVE_INFINITY
    ? "Input number is Number.POSITIVE_INFINITY"
    : `Input number is ${n}`;
}
console.log(whatNumberIsIt(1 / 0));


function colorOf(r, g, b) {
  let r2 = r.toString(16);
  console.log(r2);
  let g2 = g.toString(16);
  console.log(g2);
  let b2 = b.toString(16);
  console.log(b2);
  return `#${r2}${g2}${b2}`;
}
console.log(colorOf(255,0,0));
