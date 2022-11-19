//  6 kyu code challenge

// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// Good luck and enjoy!

//  my answer:


function wave(str){
    // empty array to put the string
      let mexicanWave = []
    //   we loop over the string to grab each letter to capitalise
      for(let i = 0; i < str.length; i++){
    // this first variable gets you the first letter
       let capitalStr = str.charAt(i).toUpperCase()
       
    //   create a conditional to  make sure the next element is not an empty space
       if(capitalStr === " "){
           continue
       }
        // this gets the next part of the string by adding 1 to the increment
       let postWave =  str.slice(i + 1)
    //    this gets the first part of the string
      let  preWave = str.slice(0,i)
      
    //   pushing the strings to the array
       mexicanWave.push(preWave + capitalStr + postWave)
      
       console.log(i,capitalStr,preWave,postWave, preWave+postWave) 
      }
    return mexicanWave
    }
    
    
    // P: A string it will always be lowercase but it might be empty 
    // R: string in an array, if the string has any whtie space i want to skip over it
    // E: wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
    // P: for loop to itterate over the string with each 