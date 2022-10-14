//  8 kyu code challenge

// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'



//  my answer:
function switcheroo(x){
    return x.replace(/[ab]/g, letter => letter == "a" ? "b" : "a" )
  }