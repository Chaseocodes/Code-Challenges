// 7 kyu code challenge

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)

// my answer:


function getSum(a, b) {
    if(a == b) {
        return a
    }
    else if (a < b) {
        return a + getSum(a+1, b)
    } else {
        return a + getSum(a-1, b)
    };
}
