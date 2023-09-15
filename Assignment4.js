/*//  Minimum num in array
let arr = [5, 2, 8, 9, 2, 65, 2, 2];
if (arr.length != 0) {
  let minimum = Number.POSITIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minimum) {
      minimum = arr[i];
    }
  }
  console.log("Minimum: " + minimum);
} else {
  console.log("Array is empty");
}

// Maximum num in array
let arr = [5, 2, 8, 9, 2, 65, 2, 2];
if (arr.length != 0) {
  let maximum = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maximum) {
      maximum = arr[i];
    }
  }
  console.log("Maximum: " + maximum);
} else {
  console.log("Array is empty");
}

  // Find index of element
let arr = [5, 2, 8, 9, 2, 65, 2, 2];
let key = -65;
let flag = false;
let index;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === key) {
    index = i;
    flag = true;
    break;
  }
}
if (flag) console.log(index);
else console.log(-1);

// Remove Duplicates from an Array

let arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];
let result = [];
let curr;
let flag = false;
for (let i = 0; i < arr.length; i++) {
  curr = arr[i];
  flag = false;
  for (let j = 0; j < result.length; j++) {
    if (result[j] == curr) {
      flag = true;
      break;
    }
  }
  if (flag == false) result.push(curr);
}

console.log(result);
*/
//common number in array
function findCommonElements(array1, array2) {
  // Initialize an empty array to store the common elements
  const commonElements = [];

  // Iterate through the first array
  for (const element of array1) {
    // Check if the element exists in the second array
    if (array2.includes(element)) {
      // If it does, push it to the commonElements array
      commonElements.push(element);
    }
  }

  return commonElements;
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const result = findCommonElements(array1, array2);
console.log(result); // Output will be [3, 4, 5]
