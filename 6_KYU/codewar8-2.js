// 6 kyu code challenge


// // Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// my answer:
function arrayDiff(a, b) {
    return a.filter(e=> !b.includes(e))
   }