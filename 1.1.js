/*
1.1a
Implement an algorithm to determine if a string has all unique characters
O(n)
*/

const hasUniqueChars = (s) => {
  let chars = new Set()
  for (let i = 0; i < s.length; i++) {
    if (chars.has(s[i])) {
      return false
    }
    chars.add(s[i])
  }
  return true
}

// # 1.1b What if you cannot use additional data structures?
// # Increases complexity to O(n^2)
const hasUniqueCharsAlt = (s) => {
  for (let i = 0; i < s.length-1; i++) {
    for (let j = i+1; j < s.length; j++) {
      if (s[i] === s[j]) {
        return false
      }
    }
  }
  return true
}


console.log(hasUniqueChars('testing')) // false
console.log(hasUniqueChars('asdfqwerzxcv')) // true
console.log(hasUniqueChars('')) // true
console.log(hasUniqueChars('**')) // false
console.log(hasUniqueCharsAlt('testing')) // false
console.log(hasUniqueCharsAlt('asdfqwerzxcv')) // true
console.log(hasUniqueCharsAlt('')) // true
console.log(hasUniqueCharsAlt('**')) // false