/**
 * @param {number[]} arr
 * @return {number}
 */
const countElements = (arr) => {
  const map = new Map();

  arr.forEach((element) => map.set(element, true));

  return arr.reduce(
    (total, current) => (map.get(current + 1) ? total + 1 : total),
    0
  );
};
