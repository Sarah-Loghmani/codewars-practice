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