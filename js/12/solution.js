const printNBitNums = bitNum => {
  const printWithPrefix = (prefix, len) => {
    if (len === 1) {
      for (let i = 0; i < 10; ++i) {
        console.log(`${prefix}${i}`);
      }
    } else {
      for (let i = 0; i < 10; ++i) {
        if (i === 0 && prefix === '') {
          printWithPrefix('', len - 1);
        } else {
          printWithPrefix(prefix + i, len - 1);
        }
      }
    }
  };
  if (!bitNum || isNaN(bitNum) || bitNum <= 0) {
    console.error('Invalid parameter: %O', bitNum);
  } else {
    printWithPrefix('', bitNum);
  }
};

const test = num => {
  console.log(`${num}`);
  printNBitNums(num);
};

test();
test(NaN);
test(null);
test(undefined);
test({});
test([]);
test(()=>{});
test(-1);
test(0);
test(1);
test(3);

