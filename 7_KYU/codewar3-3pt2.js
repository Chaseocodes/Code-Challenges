Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.



my answer:



var capitals = function (word) {
    const capitalizedWords = word.match(/[A-Z][a-z]*/g);
      const indices = capitalizedWords.map(words => word.indexOf(words));
      return indices
    };