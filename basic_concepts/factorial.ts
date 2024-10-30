var num : number = 6 ;
var i : number;
var factorial : number = 1;


for(let i=num ; i>=1; i--){
    factorial *=i;
}

i = num;
while(i>=1){
    factorial *=i;    
    i--;
}

console.log(factorial);




/*
Uses of factorial of number : 
===========================	
Finding the probability of an event
Number theory
Approximations
Finding permutations
Analyzing algorithms
Factorial research design

---------------------------------

// how to claculate factorial of a number

// Factorial is the operation of multiplying any natural number
// with all the natural numbers that are smaller than it,
// giving us the mathematical definition 
// n! = n * (n - 1) * (n - 2) * (n - 3) .... 

// Its primary use is to count “n” possible distinct objects

var num : number = 6;
var i: number;
var factorial: number = 1;

for(i=num; i >= 1; i--){
    factorial *= i;
}
console.log(factorial);

//Different ways to find the factorial of a number 
====================================
Loops 
recurtion 
*/