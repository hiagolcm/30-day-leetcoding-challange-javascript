/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function (n) {
  const numMap = new Map();
  let currentNum = n;
  while (!numMap.get(currentNum)) {
    numMap.set(currentNum, true);
    let acum = 0;
    while (currentNum > 0) {
      const digit = currentNum % 10;
      currentNum = Math.floor(currentNum / 10);

      acum += digit * digit;
    }

    if (acum === 1) return true;

    currentNum = acum;
  }

  return false;
};
