// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false



function generateHashtag (str) {
  
  let trimmed = str.trim()
  
   if(trimmed === "" ){
    return false
  }
  
  let capSplit = trimmed.split(' ').map(word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
})
  
  let join = capSplit.join("")
  
  let hash = "#" + join
  
  if(hash.length > 140 ){
    return false
  }
  
  
    console.log(hash)
  
    return hash
  

}