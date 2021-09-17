// https://leetcode.com/problems/build-array-from-permutation/
let ans = [];

function buildArray(num) {
    for (let i = 0; i < num.length; i++) {
        ans.push(num[num[i]]);
    }
    return ans;
}

let result = buildArray([5, 0, 1, 2, 3, 4]);
console.log(result);