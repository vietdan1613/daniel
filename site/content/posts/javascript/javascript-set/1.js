// leetcode 217
// Input: nums = [1,2,3,1]
// Output: true
// Input: nums = [1,2,3,4]
// Output: false

/*
    forloop([1,2,3,4])
        if(set.has(num))
            return true
        set.add([1,2,3,4])
    return false
*/
// O(n)
function containsDuplicate(nums) {
    const set = new Set();
    for (let num of nums) {
        if (set.has(num)) {
            return true;
        }
        set.add(num);
    }
    return false;
}

const nums1 = [1, 2, 3, 1];
const nums2 = [1, 2, 3, 4];
console.log(containsDuplicate(nums1)); // Output: true
console.log(containsDuplicate(nums2)); // Output: false

const set2 = new Set([1, 2, 3, 1]);
for (const num of set2) {
    console.log(num);
}