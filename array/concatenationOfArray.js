function concatenate_array(nums) {
    let ans = [];
    let j = 0;
    for (let i = 0; i < (nums.length) * 2; i++) {
        ans[i] = nums[j];
        j++;
        if (j === nums.length) {
            j = 0;
        }
    }
    return ans;
}



console.log(concatenate_array([1, 3, 2, 1, 4]));