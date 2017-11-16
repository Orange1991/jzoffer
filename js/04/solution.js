/**
 * Replace all spaces occur in str with '%20'
 * @param {String}
 * @return {String}
 */
let replace = function(str) {
  if (!str || typeof str !== 'string') {
    throw new Error('Invalid parameter');
  }
  // Well, we can use String.replaceAll directly
  // But this subject aims to test our memory manipulate ability
  let len = str.length;
  for (let c of str) {
    if (c === ' ') {
      len += 2;
    }
  }
  let arr = new Array(len);
  let p1 = str.length - 1;
  let p2 = len - 1;
  while (p1 > -1) {
    if (str[p1] === ' ') {
      arr[p2--] = '0';
      arr[p2--] = '2';
      arr[p2--] = '%';
    } else {
      arr[p2--] = str[p1];
    }
    --p1;
  }
  return arr.join('');
}

let test = str => {
  console.log(`${str} => ${replace(str)}`);
};

test('We are happy');
test(' We are happy');
test('We are happy ');
test(' We are  happy ');
test('  We are happy ');

