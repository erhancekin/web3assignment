// Method to deterine whether a number digits sum is even or odd. 

oddishOrEvenish(13);
oddishOrEvenish(12);


function oddishOrEvenish(n) {
 
  number = sumDigits(n);
      
  if (number % 2 == 0) 
  {  
     alert("even");
  } else {
     alert("odd");
  }
}

function sumDigits(n){
    let numArr = n.toString().split("");

    let sum = numArr.reduce(function(a, b){
        return parseInt(a) + parseInt(b);
    }, 0);
    
    return sum;
}
