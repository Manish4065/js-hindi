// singleton     : constructor se bnega to singleton bnega, leteral se nhi
Object.create

// object literals

const mySym0 = Symbol("key0")
const mySym1= Symbol("Key1")

const JsUser={
    name: "manish",
    "full name": "Manish Gupta",    // we can't accesss through . operator
    age: 18,
    mySym0: "myKey0",              // wrong declaration of symbol
    [mySym1]: "myKey1",            // right declaration
    location : "gkp",
    email: "mg845264@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondey", "saturday"],
}

// console.log(JsUser.email);      // mg845264@gmail.com
// console.log(JsUser["email"]);   // mg845264@gmail.com

// console.log(JsUser.full name);   // error
// console.log(JsUser["full name"]);   // Manish Gupta

console.log(JsUser.mySym0);      // myKey0
console.log(typeof JsUser.mySym0);     // string
console.log(typeof mySym0);            // symbol

console.log(JsUser[mySym1]);    // myKey1
console.log(typeof JsUser[mySym1]);   // string
console.log(typeof mySym1);     // symbol

JsUser.email= "msg5655@gmail.com"
// Object.freeze(JsUser);     // now object Jsuser is freeze, we can't change value of any key
JsUser.email= "2021021043@mmmut.ac.in"
console.log(JsUser.email);       //msg5655@gmail.com

console.log(JsUser);
/*  output when Jsuser was freeze
{
    name: 'manish',
    'full name': 'Manish Gupta',
    age: 18,
    mySym0: 'myKey0',
    location: 'gkp',
    email: 'msg5655@gmail.com',
    isLoggedIn: false,
    lastLoginDays: [ 'Mondey', 'saturday' ],
    [Symbol(Key1)]: 'myKey1'
  }
    */

  // adding function to object
  JsUser.greeting= function(){
    console.log("hello js users");
  }

  JsUser.greetingTwo= function(){
    console.log(`hello js users, ${this.name}`);
  }


  console.log(JsUser.greeting);    //[Function (anonymous)]  => function execute nhi hua hai, sirf function ka reference aaya hai
  console.log(JsUser.greeting());  // hello js users
  console.log(JsUser.greetingTwo());   //hello js users, manish

