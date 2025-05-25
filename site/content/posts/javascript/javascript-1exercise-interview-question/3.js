/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let set = new Set()
    let result = 0
    let slow = 0, fast = 0
    while (slow < s.length) {
        set.clear()
        fast = slow
        while (!set.has(s[fast]) && fast < s.length) {
            set.add(s[fast])
            fast++
        }
        result = Math.max(result, set.size)
        slow++
    }
    return result
};