const user={
    username: "manish",
    price:999,

    welcomeMessage: function(){
        // console.log(`${this.username} , welcome to website`);  // this refers to current context
    //    console.log(this);
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);   // {}

// output 
/*
manish , welcome to website
{
  username: 'manish',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
sam , welcome to website
{
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
{}
*/

// function chai(){
//     console.log(this);
// }

// chai()
// output
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: value],
  navigator: [Getter],
  crypto: [Getter]
}
*/

// function chai(){
//     let username= "manish"
//     console.log(this.username);    // undefined
// }

// chai() 

// const chai = function (){
//     let username= "manish"
//     console.log(this.username);    // undefined
// }

// chai() 



//Arrow function 

// const chai = () => {
//     let username= "manish"
//     console.log(this);   // {} =>global object
//     console.log(this.username);   // undefined
// }

//  chai()  



// const addTwo = (num1 , num2) => {
//     return num1+num2
// }

// console.log(addTwo(3,4));



// const addTwo = (num1 , num2) =>  num1+num2     // implicit return
//0r
// const addTwo = (num1 , num2) =>  (num1+num2)  

// when we want to return object
const addTwo = (num1 , num2) =>  ({username: "manish"})  
console.log(addTwo(3,4));

