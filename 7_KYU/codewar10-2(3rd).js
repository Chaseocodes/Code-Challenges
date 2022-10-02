// 8 kyu code challenge


// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.


// my answer:
function reverseWords(str) {
  let reverse = str.split("").reverse().join("")
  
  return reverse.split(" ").reverse().join(" ")
}