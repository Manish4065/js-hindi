const accId=144553;
let accEmail="mg5512@gmail.com";
var accPassword="12345";
accCity="jaipur"

let accState;        // undefined

// accId=41554;  //  TypeError: Assignment to constant variable.

accEmail="mgnjsj";
accPassword="5464";
accCity="bangluru";  // not recomended
 
console.log(accId);
console.log(accEmail);
console.log(accPassword);
console.log(accCity);

console.table([accId, accEmail, accPassword, accCity, accState]);

/*
 prefer not to use var
 because of issue in block and functional scope
 */