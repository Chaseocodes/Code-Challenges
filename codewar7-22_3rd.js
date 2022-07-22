// 8 kyu code war challenge

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// my answer:


function past(h, m, s){
    let hour = h*60 *60 * 1000
    let minute = m*60 * 1000
    let second = s * 1000
      return (second + minute + hour)
    }