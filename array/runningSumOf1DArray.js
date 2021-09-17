// https://leetcode.com/problems/running-sum-of-1d-array/

function sum(nums) {
    let addUp = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        let j = i;
        while (j >= 0) {
            sum = sum + nums[j];
            j--;
        }
        addUp.push(sum);
        sum = 0;
    }
    return addUp;
}

console.log(sum([1, 2, 3, 4]));