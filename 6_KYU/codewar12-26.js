// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.


function order(words){
//  turned words into split up array
let split = words.split(" ")  

let reorder = []

for (let i = 1; i <= 9; i++) {
  for (let j = 0; j < split.length; j++) {
    if (split[j].includes(i.toString())) {
      reorder.push(split[j]);
    }
  }
}
  
return reorder.join(" ")
  
  

  
}


// p  Given a string
// r return the string in the order of numbers that are in each string word
// e "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// p split the words into an array