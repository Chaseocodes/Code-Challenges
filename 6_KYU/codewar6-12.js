// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).


// my asnwer:

function isValidWalk(walk) {
// right off the bet check for ten steps, if it isnt then return false
if (walk.length !== 10) {
    return false;
  }
  
// declare variables for starting points x axis and y axis
  
let x = 0;
let y = 0;

// conditional to check if you need to add 1 direction to an axis

for(let step of walk){
  switch (step) {
      case 'n':
        y++;
        break;
      case 's':
        y--;
        break;
      case 'e':
        x++;
        break;
      case 'w':
        x--;
        break;
      default:
        // Handle unexpected directions, if needed
        break;
      }
}
// returns true only if the walk has both exactly 10 steps (walk.length === 10) and returns to the starting point (x === 0 and y === 0). If either of these conditions is not met, it will return false

  return x === 0 && y === 0
  
}