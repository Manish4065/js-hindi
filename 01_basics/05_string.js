const name="manish"
const repocount=10

// console.log(name + repocount +" value"); // not recommended

// console.log(`Hello my name is ${name} and my repocount is ${repocount}`); // highly recommended

const gameName= new String("manish-mg-com");

console.log(gameName);

console.log(gameName[0]);     // 0 is key and value is m, => key:value pair
console.log(gameName.__proto__);    // {} => object


console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString= gameName.substring(0,4)   // mani  =>[0,4)
console.log(newString);

const anotherString= gameName.slice(0, 4)  // same as substrin, but we can provide negative value into this
console.log(anotherString);
 
const anotherString1= gameName.slice(-8, 4)
console.log(anotherString1);

const str= "    hello    "
console.log(str);
console.log(str.trim());

const url ="manish.com/manish%20gupta"
console.log(url.replace("%20", "-"));
console.log(url.includes("manish"));

console.log(gameName.split('-')); // array of strings





