// 1. Do below programs in anonymous dunction and IIFE and also in arrow function

// a).Print the odd number in an array

// i). Anonymous function


let array1 = userInput;
let n = function(array){
    for(let i = 0;i<array1.length;i++){
        if(array1[i] % 2 !=0){
            console.log(array1[i]);
        }
    }
}
n([1,2,3,4]);

// ii). IIFE

((n) =>{
    for(let i = 0;i<n.length;i++){
        if(n[i] % 2 !=0){
            console.log(n[i]);
        }
    }
})([1,2,3,4]);

// iii).Arrow function

let array2 = (n) =>{
    for(let i = 0;i<array2.length;i++){
        if(array2[i] % 2 !=0){
            console.log(n[i]);
        }
    }
}
array2([1,2,3,4]);