var removeDuplicates = function (nums) {
    let slow = 0
    let fast = 1
    while (fast < nums.length) {
        if (nums[slow] == nums[fast]) fast++
        else {
            if (fast > slow + 1) {
                let temp = nums[slow + 1]
                nums[slow + 1] = nums[fast]
                nums[fast] = temp
            }
            slow++
            fast++
        }
    }
    let k = slow + 1
    nums = nums.slice(0, k)
    console.log(nums)
    return k
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
let result = removeDuplicates(nums)
console.log(result) // 5