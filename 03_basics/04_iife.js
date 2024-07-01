// Immediately Invoked function Expressions (IIFE)

//normal function

// function chai(){
//     console.log('DB CONNECTED')
// }
// chai()

// IIFE
// ()()
(function chai(){
    // named iife
    console.log('DB CONNECTED')
})();    // ; is use to terminate the iife function

// Arrow Function in IIFE
( () => {
    console.log('DB CONNECTED TWO');
})();   

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("manish");   

