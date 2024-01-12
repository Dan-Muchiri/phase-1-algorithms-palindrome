function isPalindrome(word) {
  // Write your algorithm here
  const name = word.toLowerCase();
  const array = name.split('')
  console.log(array)

  let newArray = [];
  array.forEach(element => {
      newArray.unshift(element);
   });
  console.log(newArray);

  if(array.join('')===newArray.join('')){
    return true;
  }else{
    return false;
  }
}

isPalindrome('munene')

/* 
  Add your pseudocode here
  1. Takes the word and converts it to lowercase
   2. Takes the characters as individual characters and pushes them to an array
   3. Creates a new array where i get the characters from my original array using a loop accessing characters and unshifting them to my new array
   4. check if the new array equals the old array
   5. if true return true if not, false
*/

/*
  Add written explanation of your solution here
  The solution involves the use of arrays to invert the charatcters in the string and an if statemnt to check whether the word matches.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("munene"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
