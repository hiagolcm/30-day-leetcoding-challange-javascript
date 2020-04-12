/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let count = 0;

  nums.forEach((num, idx) => {
    if (num !== 0) {
      if (count !== idx) nums[count] = num;
      count++;
    }
  });

  const remain = nums.length - count;

  for (let i = count; i < nums.length; i++) {
    nums[i] = 0;
  }
};
