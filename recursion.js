/** product: calculate the product of an array of numbers. */

function product(nums) {
  let result = 1;
  for (let n of nums) {
    if (Array.isArray(n)) {
      result *= product(n);
    } else {
      result *= n;
    }
  }
  return console.log(`product: ${result}`);
}

product([2, 3, 4]); // 24

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 1) {
    return words[0].length;
  }
  let firstLen = words[0].length;
  let longestLen = longest(words.slice(1));

  return firstLen > longestLen ? firstLen : longestLen;
}

console.log(longest(["hello", "hi", "hola"])); // 5

/** everyOther: return a string with every other letter. */

function everyOther(str, index = 0) {
  if (index >= str.length) {
    return "";
  }
  return str[index] + everyOther(str, index + 2);
}
console.log(everyOther("hello")); // Output: "hlo"

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, start = 0, end = str.length - 1) {
  if (start >= end) {
    return true;
  }
  if (str[start] !== str[end]) {
    return false;
  }
  return isPalindrome(str, start + 1, end - 1);
}

console.log(isPalindrome("tacocat"));
/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  if (index >= arr.length) {
    return -1;
  }
  if (arr[index] === val) {
    return index;
  }
  return findIndex(arr, val, index + 1);
}

console.log(findIndex(["duck", "cat", "pony"], "cat")); // 1
console.log(findIndex(["duck", "cat", "pony"], "porcupine")); // -1

/** revString: return a copy of a string, but in reverse. */

function revString(str, index = str.length - 1) {
  if (index < 0) {
    return "";
  }
  return str[index] + revString(str, index - 1);
}

console.log(revString("porcupine")); // 'enipucrop'

/** gatherStrings: given an object, return an array of all of the string values. */
let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz",
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!",
        },
      },
    },
    favoriteString: "nice!",
  },
};

function gatherStrings(obj) {
  let arr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      arr.push(obj[key]);
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      arr = arr.concat(gatherStrings(obj[key]));
    }
  }
  return arr;
}

console.log(gatherStrings(nestedObj));
//further study
/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {}

// module.exports = {
//   product,
//   longest,
//   everyOther,
//   isPalindrome,
//   findIndex,
//   revString,
//   gatherStrings,
//   binarySearch,
// };
