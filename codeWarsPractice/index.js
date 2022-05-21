// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

const descendingOrder = (num) => {
  return num < 0
    ? undefined
    : Number(
        num
          .toString()
          .split("")
          .sort((a, b) => b - a)
          .join("")
      );
};

console.log(descendingOrder(0));

// !-------------------------------------------------------------------------

// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"

function spacify(str) {
  return str
    .split("")
    .map((ele) => ele + " ")
    .join("")
    .slice(0, -1);
}
//*2
// function spacify(str) {
//   return str.split("").join(" ");
// }
//*3
// const spacify = (str) => [...str].join(" ");
//*4
// const spacify = ($) => $.replace(/./g, (e) => e + " ").trim();
console.log(spacify("hello world"));

// !  -----------------------------------------------
// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

function dontGiveMeFive(start, end) {
  const array = [start, end];

  while (start < end - 1) {
    start++;

    array.push(start);
  }

  return array.filter((ele) => !ele.toString().includes("5")).length;
}
//*2
// function dontGiveMeFive(start, end) {
//   let count = 0;
//   for (let i = start; i <= end; i++) {
//     if (!/5/.test(i)) {
//       count++;
//     }
//   }
//   return count;
// }
//*3function dontGiveMeFive(start, end){
//   let res = [];
//   for (let i = start; i <= end; i++) {
//     if (!i.toString().includes('5')) res.push(i);
//   }
//   return res.length;
// }
console.log(dontGiveMeFive(1, 9));

// !--------------------------------
// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums) {
  return nums === null ? [] : nums.sort((a, b) => a - b);
}
function solution(nums) {
  return nums !== null ? nums.sort((a, b) => a - b) : [];
}
console.log(solution([1, 2, 10, 50, 5]));

// !--------------------------------------------
// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"

function unusedDigits(...arr) {
  const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  arr = arr.join("");

  return nums
    .map((num) => !arr.includes(num) && num)
    .filter((num) => true && num)
    .join("");
}
//*2
// const unusedDigits = (...arr) => {
//   var digits = arr.join();

//   return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//     .filter((x) => !digits.includes(x))
//     .join("");
// };

console.log(unusedDigits(2015, 8, 26));
// !------------------------------

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"