// 5. return palindrome in an array

// a). Anonymous function

let Palindromes = function (words) {
    return words.filter(function (word) {
       return word.split("").reverse().join("") === word;
     });
   };
   
   console.log(Palindromes("mom"));

// b). IIFE function 

((words) => {
       return words.filter(function (word) {
         return word.split("").reverse().join("") === word;
       });
   })("mom");

// c).Arrow function

let palindrome = (words) => {
    return words.filter(word => {
      return word.split("").reverse().join("") === word;
    });
  }
palindrome("mom");