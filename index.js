function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = word.toLowerCase().split("").reverse().join("");
  if (reversedWord === word){
    return true;
  } else {
    return false;
  }
}
/* 
  Add your pseudocode here
  1- Reverse the word.
  2- Compare it to the inital word.
*/

/*
  Add written explanation of your solution here
  The function takes in a word, we first have to .toLowerCase it, just in case there's ever an upper case letter, it wouldn't give us an error, and will split it into an array, reverse the array and join it back into a reversedWord variable, we then test with an if statement if the reversedWord is equal to the initial word, if that's the case, we return true, else we will return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("TestCase"));
}

module.exports = isPalindrome;
