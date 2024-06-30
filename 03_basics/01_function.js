// function addTwoNumber(number1, number2){
// console.log(number1+number2);
// }

// const result= addTwoNumber(3,4);      // 7
// addTwoNumber(3, "4");   // 34
// addTwoNumber(3, "a");   // 3a
// addTwoNumber(3, null);   // 3

// console.log("Result: ", result);    
// 7
// Result:  undefined

function addTwoNumber(number1, number2){
    let result=number1+number2
    return result;
    
    console.log("hi");   //not executed, when a function executed return statement then next lines will not execute

}

    const result= addTwoNumber(3,4);
    // console.log("Result: ", result);

    // function loginUserMessage(username){
    //     if(!undefined){
    //         console.log("please enter a username")
    //         return
    //     }
    //     return `${username} just logged in`
    // }

    // console.log(loginUserMessage("manish"));  //manish just logged in
    // console.log(loginUserMessage());    // undefined just logged in

    // function loginUserMessage(username="sam"){  // sam is a default value, ie, if block will not execute
    //     if(!undefined){
    //     console.log("please enter a username")
    //     return
    //     }
    //     return `${username} just logged in`
    // }

    // console.log(loginUserMessage());



    // function calculateCartPrice(...num1){     //rest operator
    // return num1
    // }

    // console.log(calculateCartPrice(200, 400, 500));   // [ 200, 400, 500 ]


    function calculateCartPrice(val1, val2, ...num1){     
        return num1
        }
    
        // console.log(calculateCartPrice(200, 400, 500, 2000));   // [ 500, 2000 ]  => val1 , val2 contains 200, 400 
        // and rest will contains rest operator ie, num1


        const user = {
            username : "manish",
            price: 199,
        }

        function handleObject(otherobject){
            return `Username is ${otherobject.username} and Price is ${otherobject.price} `
        }

        // console.log(handleObject(user));  // Username is manish and Price is 199 

        //0r we can pass directly object in the function
    //   console.log(handleObject({
    //     username : "manish",
    //     price: 399,
    // }))    // Username is manish and Price is 399


    const myNewArray=[200,400,100,600]

    function returnSecondvalue(getArray){
        return getArray[1]
    }

    // console.log(returnSecondvalue(myNewArray));   //400
// or directly pass array
console.log(returnSecondvalue([200,400,100,600]));   //400
 