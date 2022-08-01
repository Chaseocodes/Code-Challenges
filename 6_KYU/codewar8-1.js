// 6 kyu code challenge

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// my answer:
function solution(str){
    let newStr = "";
    if(str.length){
      if(str.length % 2 === 1){
       newStr = str + '_';
       return newStr.match(/.{2}/g)
     }else{
       return str.match(/.{2}/g)
     }
    }else{
      return [];
    }
  }