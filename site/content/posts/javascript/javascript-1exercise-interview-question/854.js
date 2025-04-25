/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
    let fast = slow = peak = 0
    let result = 0
    while(fast < arr.length -1){
        while(arr[fast + 1] <= arr[fast]) fast++
        slow = fast
        while(arr[fast + 1] > arr[fast]) fast++
        peak = fast
        while(arr[fast + 1] < arr[fast]) fast++
        if(peak > slow && fast > peak)
            result = Math.max(result, fast - slow + 1)
        slow = fast
    }
    return result
};

const arr = [1,2,2,2]
console.log(longestMountain(arr))