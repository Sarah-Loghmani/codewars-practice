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
function maskify(cc) {
  const length = cc.length - 4;
  const lastFourCharacter = cc.slice(-4).split("");
  for (let i = 0; i <= length; i++) {
    lastFourCharacter.unshift("#");
  }
  return lastFourCharacter.join("");
}
//*2
// function maskify(cc) {
//   return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
// }
//*3
// function maskify(cc) {
//   cc = cc.split("");
//   for(var i = 0; i < cc.length - 4; i++){
//     cc[i] = "#";
// }

// cc = cc.join("");
// return cc
// }

console.log(maskify("4556364607935616"));

// !---------------------------

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {

//   return str.split("").filter((ele) => "aeiou".includes(ele)).length;
// }

// //*2
// function getCount(str) {
//   return (str.match(/[aeiou]/gi) || []).length;
// }
//*3
function getCount(str) {
  return str.replace(/[^aeiou]/gi, "").length;
}

console.log(getCount("abracadabra"));

// !------------------------------

// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum [1, 2, 3] 4 === (0, 2)

const twoSum = (numbers, target) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [numbers[i], numbers[j]];
      }
    }
  }
};

console.log(twoSum([1, 2, 3], 4));

// !------------------------------

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

// function solution(...numbers) {
//   return numbers
//     .filter((a) => (a > 0 && a % 3 === 0) || a % 5 === 0)
//     .reduce((a, b) => a + b, 0);
// }

const solution1 = (number)=>{
    let result =0
  for (let i = 1; i < number; i++) {
    if(i%5==0 || i%3==0){
       result += i

    }
  }
  return result
}

console.log(solution1(10));

// !------------------------------

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


function moveZeros(arr) {
  const result = arr.filter((a) => a !== 0);
  const firstLength = arr.length
  const secondLength = result.length;
  for(let i=1 ; i<=firstLength - secondLength; i++){
      result.push(0)
  }
  return result
}

//*2
// var moveZeros = function (arr) {
//   return arr
//     .filter(function (x) {
//       return x !== 0;
//     })
//     .concat(
//       arr.filter(function (x) {
//         return x === 0;
//       })
//     );
// };

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));