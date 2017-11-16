/**
 * Find min element in array
 */
let minElem = (arr = []) => {
  if (!arr.length) {
    return null;
  }

  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] < arr[right]) {
      break;
    }
    if (right - left === 1) {
      return arr[left] < arr[right] ? arr[left] : arr[right];
    }
    let mid = Number.parseInt((left + right) / 2);
    if (arr[left] === arr[mid] && arr[mid] === arr[right]) {
      let i = left;
      let min = arr[i];
      while (++i <= right) {
        if (arr[i] < min) {
          min = arr[i];
        }
      }
      return min;
    } else {
      if (arr[mid] >= arr[left]) {
        left = mid;
      } else {
        right = mid;
      }
    }
  }
  return arr[left];
}

let test = arr => {
  console.log(`${arr}, min: ${minElem(arr)}`);
};

test([3, 4, 5, 0, 1, 2]);
test([0, 1, 2, 3, 4]);
test([1, 1, 1]);
test([1]);
test([]);
test();
test({});

