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