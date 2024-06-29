const score=400
// console.log(score);
// console.log(typeof score);  // number

const balance= new Number(100)
// console.log(balance); 
// console.log(typeof balance);  // object


// console.log(balance.toString().length);   // 3
// console.log(typeof balance);              // object
// console.log(balance.toFixed(2));          //100.00

// const otherNumber= 123.5689
// console.log(otherNumber.toPrecision(4));   // 123.6
// console.log(otherNumber.toPrecision(3));   // 124
// console.log(otherNumber.toPrecision(2));   // 1.2e+2

const hundreds= 10000000
// console.log(hundreds.toLocaleString());       // 10,000,000
// console.log(hundreds.toLocaleString('en-IN'));   //1,00,00,000


//++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.PI);           // 3.1415926534154593
// console.log(Math.abs(-4));     // 4
// console.log(Math.round(4.6));  // 5
// console.log(Math.ceil(4.6));   // 5
// console.log(Math.floor(4.6));  // 4
// console.log(Math.sqrt(50));    // 7.0710675421125455
// console.log(Math.pow(2,3));    // 8
// console.log(Math.min(1,2,3,0,5));  // 0

console.log(Math.random());         // value is in between 0 and 1
console.log((Math.random()*10) + 1);       // [1, 11)
console.log(Math.floor(Math.random()*10) + 1);      // [1, 10]

const min=10
const max=20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);   // [min, max]
