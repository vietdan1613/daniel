/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let map = new Map()
    map.set("]", "[")
    map.set("}", "{")
    map.set(")", "(")

    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "[" || s[i] == "{" || s[i] == "(") stack.push(s[i])
        else {
            if (stack.length == 0 || stack[stack.length - 1] != map.get(s[i]))
                return false
            else
                stack.pop()
        }
    }
    return stack.length == 0
};