//  7 kyu CODEWAR   

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.


// MY ANSWER:

function filter_list(l) {
    return l.filter(e => typeof e === "number")
    }