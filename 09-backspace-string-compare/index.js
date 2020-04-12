/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

const getString = (str) => {
  const pile = [];
  [...str].forEach((char) => {
    if (char === "#") {
      pile.pop();
    } else {
      pile.push(char);
    }
  });

  return pile.join();
};

var backspaceCompare = function (S, T) {
  const sResult = getString(S);
  const tResult = getString(T);

  return sResult === tResult;
};
