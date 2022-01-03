// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.

//  my answer:

function sumEvenNumbers(input) {
  
    let check = input.filter((number) => Number.isInteger(number) && number % 2 === 0)
    
    console.log(check)
    
    return check.reduce((acc,curr) => acc + curr, 0)
  }