/*
JavaScript Date objects represent a single moment in time
 in a platform-independent format. Date objects encapsulate
  an integral number that represents milliseconds since the
   midnight at the beginning of January 1, 1970, UTC (the epoch).
*/

// Dates
let myDate = new Date()
// console.log(typeof myDate);     // object
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

let myCreatedDate = new Date(2024, 0, 25)   
console.log(myCreatedDate.toDateString());  // Thu Jan 25 2024

let myCreatedDate1 = new Date(2024, 0, 25, 5, 3, 1)
// console.log(myCreatedDate1.toLocaleString())  ;  

let myCreatedDate2= new Date("2024-01-29");
console.log(myCreatedDate2.toLocaleString());  

let myTimeStamp=Date.now()
// console.log(myTimeStamp);   // millisecond
// console.log(myCreatedDate.getTime());   // millisecond

console.log(Math.floor(Date.now()/1000))   // second


let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);   // starting from 0=> jan so we have to add 1 to get right month
console.log(newDate.getDay);

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: ""
})
