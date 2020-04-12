/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let acum = 0;
  nums.forEach((num) => {
    acum = acum ^ num;
  });
  return acum;
};
