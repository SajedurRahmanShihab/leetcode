// https://leetcode.com/problems/two-sum/
// O(n*n)
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 return [i, j];
//             }
//         }
//     }
// };

// O(n)
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + nums[i + 1] == target) {
            return [i, i + 1];
        }
    }
}



// let result = twoSum([2, 7, 11, 15], 9);
// let result = twoSum([3, 2, 4], 6);
// let result = twoSum([3, 3], 6);
// let result = twoSum([2, 5, 5, 11], 10);
let result = twoSum([3, 2, 3], 6);

console.log(result);