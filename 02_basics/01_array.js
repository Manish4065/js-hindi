// array
// javascript arrays are resizable
// js create shallow copies ie; passing reference
//A SHALLOW COPY of an object is a copy whose properties share
// the same references (point to the same underlying values) 
//as those of the source object from which the copy was made. 
//As a result, when you change either the source or the copy, 
//you may also cause the other object to change too. 
//That behavior contrasts with the behavior of a deep copy, in which 
// the source and copy are completely independent.

const myArray=[ 0, 1 ,2 ,3 ,4, 5]
const myHeros= ["Shaktiman", " Naagraj"]
const myArray2= new Array(1,2,3,4)
// console.log(myArray[0]);  // 0

// console.log(myArray2.length);  // 4

// Array Methods
myArray.push(6);
myArray.push(7);
// console.log(myArray);
myArray.pop();
// console.log(myArray);

myArray.unshift(9)    // add element  on the 0th index and shift all element by one
// console.log(myArray);
myArray.shift();       // delete first element
// console.log(myArray);
// shift() and unshift() are similar to push and pop operation , but from starting index
 

// console.log(myArray.includes(9));    // false
// console.log(myArray.indexOf(9));     // -1

// const newArray= myArray.join();   // bind and converted into string
// console.log(myArray);      // [0, 1 ,2 ,3 ,4, 5, 6]
// console.log(newArray);   // 0,1,2,3,4,5,6
// console.log(typeof newArray);   // string


// slice() and splice()

console.log("A", myArray);

const myn1=myArray.slice(1,3)

console.log(myn1);              // [1,2]
console.log("B", myArray);     //[0,1,2,3,4,5]

const myn2=myArray.splice(1,3)    // [1,2,3] 
console.log("C", myArray);         // [0,4,5] => splice() modifies original array
console.log(myn2);   

