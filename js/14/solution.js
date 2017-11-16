/**
 * Reorder the arr with specific rule
 * After the reorder, the arr can be divided into left and right parts
 * All elements in the left part are fulfilled with the param func (means func(e) return true)
 * All elements in the right part are not fulfilled with the param func (means func(e) return false)
 * @param {Array} arr - the original array
 * @param {Function} func - a function with specific rule
 * @return {undefined} The arr will be modified
 */
const reorder = (arr = [], func = elem => true ) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    while (left < right && func(arr[left])) {
      ++ left;
    }
    while (left < right && !func(arr[right])) {
      --right;
    }
    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      ++left;
      --right;
    }
  }
};

const isOdd = n => n & 1 === 1;

const isPositive = n => n > 0;

const is3Divided = n => n % 3 === 0;

const test = arr => {
  console.log(`array = [${arr}]`);
  reorder(arr, isOdd);
  console.log(`Reorder as odd or even: ${arr}`);
  reorder(arr, isPositive);
  console.log(`Reorder as positive or negative: ${arr}`);
  reorder(arr, is3Divided);
  console.log(`Reorder as can be diveded by 3 or not: ${arr}`);
}

test([-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]);

