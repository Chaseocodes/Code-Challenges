// 7 kyu code challenge 


// need to return only the numbers from the argument that will be passed as a string




//  my answer:
var filterString = function (value) {
    let numberStr = "";
      for (let i = 0; i < value.length; ++i) {
      if (!isNaN(Number(value[i]))) {
          numberStr+= value[i];
      }
    }
    return Number(numberStr);
  };
  
  // Parameters: A string of numbers and letters mixed up 
  // Returns: Return all the numbers in a string in the order occur
  // Examples: "d,3,4,f" => "3,4", "g,h,5,2,j,7" => "5,2,7", "t,1,h,7,c,v" => "1,7"
  // Pseudocode: I need to take each string and remove each letter while keep every number in its order as a string
  // or i can find each letter and remove them and make a second string