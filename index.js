function isPalindrome(word) {
    // reverse the input string
    const reversedWord = reverseString(word);
    // compare the reversed string to the input
    return word === reversedWord;
  
}
function reverseString(word) {
  return word.split("").reverse().join("");
}
/* 
  Add your pseudocode here

      reverse the input string
      if the reversed string is the same as the input
        return true
      else
        return false
*/
/*
  Add written explanation of your solution here
    Take the input string
    create an array from the input string
    reverse the array
    create a string from the reversed array
    return the reversed string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("=>", isPalindrome("eve"));
  console.log("=>", isPalindrome("mom"));
  console.log("=>", isPalindrome("dad"));
  console.log("=>", isPalindrome("kayak"));
  console.log("=>", isPalindrome("madam"));
  console.log("=>", isPalindrome("refer"));
  console.log("=>", isPalindrome("radar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("=>", isPalindrome("kenya"));
  console.log("=>", isPalindrome("red"));
  console.log("=>", isPalindrome("ever"));
  console.log("=>", isPalindrome("This is a palindrome"));
}

module.exports = isPalindrome;
