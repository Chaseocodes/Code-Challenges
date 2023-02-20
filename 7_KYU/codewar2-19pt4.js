// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]



//  myAnswer:

function minMax(arr){
    let twoNums = []
    let sorted = arr.sort((a,b) => a - b )
    let first = arr[0]
    let last =  arr[arr.length - 1]
    twoNums[0] = first
    twoNums[1] = last
    return twoNums
    
  }