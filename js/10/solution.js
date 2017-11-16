const count = num => {
  let c = 0;
  while (num) {
    ++c;
    num &= num - 1;
  }
  return c;
}

const test = num => {
  console.log(`${num}, ${num.toString(2)}, ${count(num)}`);
};

test(0);
test(9);
test(255);
test(1024);
test(65545);

