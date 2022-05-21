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
  return str.split("").map(ele => ele +' ').join(' ');
}
console.log(spacify("hello world"));

