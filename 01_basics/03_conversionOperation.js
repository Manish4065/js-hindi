// let score="33"
 // let score=null
let score="33abc"
// let score=undefined
// let score=true
// let score="manish"

console.log(typeof score);  // string
console.log(typeof(score));  // string

let valueInNumber=Number(score)
console.log(typeof valueInNumber);  //number
console.log(valueInNumber);   // NaN , if score="33" then ouput is 33
// if score=null then ouput is 0, 
// & in case of undefined output is NaN, 
// in case of boolean out is either 0 or 1
// when score="manish" then output is NaN
// so we have to take care while we using  conversion operation


// "33" => 33
//  "33abc" => NaN
//  true => 1 ; false => 0; 


let isLoggedIn=1            // true
// let isLoggedIn=2         // true
// let isLoggedIn=""        // false
// let isLoggedIn="manish"  //true

let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "manish" => true



let someNumber= 44

let stringNumber= String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


//  **************** Operations ************************

let value=3
let negValue= -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);  // power 
// console.log(1/2);   // 0.5
// console.log(3%2);

let str1="hi"
let str2=" manish"

let str3=str1+str2
//console.log(str3);

console.log("1" + 2);      //12
console.log(1 + "2");       //12
console.log("1" + "2");     // 12
console.log("1" + 2 + 2);  // 122 because string is first
console.log(1 + 2 + "2")   // 32  because number is first

console.log( (3 + 4) * 5 % 3);

console.log(true);    // true
console.log(+true);    // 1
console.log(+"");      // 0
console.log(+"sff")     // NaN

let num1, num2, num3

num1=num2=num3=2+2


let gameCounter=100
gameCounter++;
console.log(gameCounter); //101


