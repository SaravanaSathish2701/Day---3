// 3. Sum of all numbers in an array

// a). Anonymous function

let array = function(a){
    let sum = 0;
    for(let i = 0;i<a.length;i++){
        sum = sum+a[i];
    }
    return a;
}
array([1,2,3]);

// b).IIFE funvtion

((array){
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return sum;
})([1,2,3,4])

// c). Arrow funvtion

sum = (array)=>{
    let  sum = 0;
         for(let  i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return sum;
}
sum([1,2,3]);