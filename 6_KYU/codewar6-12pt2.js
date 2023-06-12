// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)


//  my answer:

function persistence(num) {
// //make a variable to hold the count of the array (THIS IS THE OUTPUT THEY WANT)
// let count = 0

// //  turn the int into a string and then into an array so we can loop over it
// let arr = String(num).split('')

// // creating a variable to hold each resulting reduction
// let result = 0

// // setting up a loop to loop over the array and reduce it
// for(let i = 0; i < arr.length; i++){
  
// // making a variable to store the arr.reduce
// let reduced = arr.reduce((a,b)=> a*b,1)

// //calling a conditional to check to see if arr.reduce is not equal to one
//   if(reduced != 1){
//       result += arr.reduce((a,b)=> a*b,1)
//       count += 1
//     }else if(count != result.length){
//       result += arr.reduce((a,b)=> a*b,1)
//     }
  
// }
 
//   console.log(result)
  
// second try: 
  let count = 0;
  let arr = String(num).split('');

  while (arr.length > 1) {
    arr = arr.reduce((a, b) => a * b, 1).toString().split('');
    count += 1;
  }

return count;
}