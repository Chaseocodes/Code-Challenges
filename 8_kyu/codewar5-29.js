// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).


function array(string) {
  // Split the string into an array using commas as the separator
  let split = string.split(",");

  // Check if the array has less than 3 elements
  if (split.length < 3) {
    return null;
  }

  // Remove the first and last elements from the array
  split = split.slice(1,-1)

  // Join the remaining elements with spaces as the separator
  let result = split.join(" ");

  return result;
}