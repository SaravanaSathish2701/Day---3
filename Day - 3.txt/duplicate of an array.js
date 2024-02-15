// 6. Remove the duplicate elements from the array

// a). Anonymous function                   

let a = function(array){
    let dup = [...new Set(array)];
    console.log(dup);
}
a([1,2,3,1,2]);

// b). IIFE function

(function(array){
    let dup = [...new Set(array)];
    console.log(dup);
   })([1,1,2,3,4]);