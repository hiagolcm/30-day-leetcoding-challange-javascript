/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let ans = Number.MIN_SAFE_INTEGER;
  let acum = 0;

  nums.forEach((num) => {
    acum += num;
    ans = Math.max(ans, acum);
    acum = Math.max(0, acum);
  });

  return ans;
};
