//  8 kyu code challenge

// Palindrome strings
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

// Examples(Input ==> Output)
// "anna"   ==> true
// "walter" ==> false
// 12321    ==> true
// 123456   ==> false


//  my answer:
function isPalindrome(line) {

    let reverse = line.toString().split("").reverse().join("")
   
   let forward = line.toString()
   
   return reverse === forward
    
  }