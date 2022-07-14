// 8 KYU CODEWARS:

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


// MY ANSWER: 

function abbrevName(name){
    // MY FIRST ATTEMPT:
    //  let firstLetter = name.charAt(0).toUpperCase()
    //  let secondLetter = name.charAt().toUpperCase()
    //  let joined = firstLetter.concat(".",secondLetter)
    //  return joined
       const intials = name.split(" ")
       return (intials[0][0] + "." + intials[1][0]).toUpperCase()
    }