// const userEmail= "mgkjmkjdhns"  // "" empty string=>false,   []=>true

// if(userEmail){
//     console.log("Got user email")  //   Got user email
// }
// else{
//     console.log("don't have user email")
// }

// falsy values:  false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy: "0", 'false', " ",[], {}, function(){}

const value=[]
// array check
if(value.length === 0){
console.log("array is empty")   //array is empty
}

const emptyObj={}
// object check
if(Object.keys(emptyObj).length === 0){
    console.log("empty object")    // empty object
}

// Nillish coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10   // 5
val1 =null ?? 10    // 10
val2 = undefined ?? 15  // 15
val3= null ?? 10 ?? 20   // 10 

console.log(val1);
console.log(val2);
console.log(val3)


// terniary operator

// condition ? true : false
