/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const rn = target - nums[i];
    if (obj[rn] !== undefined) {
      return i < obj[rn] ? [i, obj[rn]] : [obj[rn], i];
    }
    obj[nums[i]] = i;
  }
};

module.exports = twoSum;
