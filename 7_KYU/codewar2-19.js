// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.


// my answer:


function flattenAndSort(array) {
    const flattenedArray = array.flat();
    flattenedArray.sort((a, b) => a - b);
    return flattenedArray;
  }