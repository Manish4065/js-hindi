// primitive  => call by value  : change occured in copy of data

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score=100
const scoraValue=100.3

const isloggedIn=false
const outsideTemp=null
let userEmail;


const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);   
 // false : we pass same value 123 in both, but return value of Symbol is not same

 const bignumber=4554485487445454545n     
 console.log(typeof bignumber);    //bigint
 console.log(typeof outsideTemp);  //object

//**************************************---------------
// Reference(Non-Primitive):
// Array, Objects, Functions

const heros=["shaktiman","naagraj","doga"];

let myObj={
    name:"manish",
    age:22,
}
const myFunction= function(){
    console.log("hello");
}

console.log(typeof(myFunction));   // function : function object
console.log(typeof anotherId);     // symbol



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive), Heap(Non-Primitive)

let myYoutubeName="ManishGupta"

let anothername=myYoutubeName
anothername="Chaiaurcode"

console.log(myYoutubeName);
console.log(anothername);

let userOne={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo=userOne;
userTwo.email="abc@google.com"

console.log(userOne.email);
console.log(userTwo.email);
