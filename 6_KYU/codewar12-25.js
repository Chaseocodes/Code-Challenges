// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {

  const oddNumbers = array.filter(num => num % 2 !== 0);
  const oddIndices = array.map((num, index) => (num % 2 !== 0 ? index : -1)).filter(index => index !== -1);


  oddNumbers.sort((a, b) => a - b);

 
  oddIndices.forEach((index, sortedIndex) => {
    array[index] = oddNumbers[sortedIndex];
  });

  return array;
}