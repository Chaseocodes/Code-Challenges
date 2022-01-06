As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.


my answer:

function gimme(triplet) {
    // Find the minimum and maximum values in the triplet
    const min = Math.min(...triplet);
    const max = Math.max(...triplet);
  
    // Find the index of the element that is not the minimum or maximum
    for (let i = 0; i < triplet.length; i++) {
      const element = triplet[i];
      if (element !== min && element !== max) {
        return i;
      }
    }
  
    // Return -1 if the triplet does not contain exactly one middle element
    return -1;
  }