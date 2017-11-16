let findStartFromRightUp = function(arr = [], num) {
  if (!num && num !== 0) {
    return true;
  }
  let h = arr.length;
  let w = arr[0] && arr[0].length || 0;
  if (!(h > 0 && w > 0)) {
    return false;
  }
  let row = 0;
  let col = w - 1;
  while (row < h && col > -1) {
    let diff = arr[row][col] - num;
    if (diff === 0) {
      return true;
    } else if (diff > 0) {
      --col;
    } else {
      ++row;
    }
  }
  return false;
};

let findStartFromLeftDown = function(arr = [], num) {
  if (!num && num !== 0) {
    return true;
  }
  let h = arr.length;
  let w = arr[0] && arr[0].length || 0;
  if (!(w > 0 && h > 0)) {
    return false;
  }
  let row = h - 1;
  let col = 0;
  while (row > -1 && col < w) {
    let diff = arr[row][col] - num;
    if (diff === 0) {
      return true;
    } else if (diff > 0) {
      --row;
    } else {
      ++col;
    }
  }
  return false;
};

let test = function(arr) {
  console.log('array = [');
  arr.forEach(row => {
    console.log(`  [${row.join()}]`)
  });
  console.log(']');
  testWith(findStartFromRightUp, arr, 7);
  testWith(findStartFromLeftDown, arr, 7);
  testWith(findStartFromRightUp, arr, 5);
  testWith(findStartFromLeftDown, arr, 5);
  testWith(findStartFromRightUp, arr, 14);
  testWith(findStartFromLeftDown, arr, 14);
};

let testWith = function(func, arr, num) {
  let found = func(arr, num);
  console.log(`${found ? 'Found' : 'Can not find'} ${num} with use of solution ${func.name}`);
};

var arr = [
  [1, 2, 8, 9],
  [2, 4, 9, 12],
  [4, 7, 10, 13],
  [6, 8, 11, 15],
];

test(arr);

