// 6 kyu code challenge

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.




// my answer:

function spinWords(string){
    return string.replace(/\w{5,}/g, (w) => w.split("").reverse().join("")) 
   }