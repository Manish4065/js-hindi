//  const tinderUser=new Object()   // singleton object

 //console.log(tinderUser)   // {}

 //const tinderUser1={}      // {}  => non singleton object


 const tinderUser2={}

 tinderUser2.id="123asd"
 tinderUser2.name="Sammy"
 tinderUser2.isLoggedIn= false

//  console.log(tinderUser2);   // { id: '123asd', name: 'Sammy', isLoggedIn: false }


const regularUser={
    email:"some@gmail.com",
    fullname:{
        userFullName:{
            fisrtName: "Manish",
            lastName: "Gupta"
        }
    }
}

// console.log(regularUser.fullname);  // { userFullName: { fisrtName: 'Manish', lastName: 'Gupta' } }
// console.log(regularUser.fullname.userFullName.fisrtName);   // Manish


const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a" , 4 : "b"}
const obj5 = {5 : "c" , 6 : "d"}

// const obj3 = {obj1, obj2}       // objects inside object

// concatination of multiple objects   : Object.assign(target, source)
// const obj4 = Object.assign(obj1, obj2)
// console.log(obj4);   // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// const obj6 = Object.assign({}, obj1, obj2, obj5)  // here target is {} and sources are obj1, obj2, obj5
// console.log(obj6);    // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'c', '6': 'd' }

// using spread operator
const obj7 = {...obj1, ...obj2, ...obj5};
// console.log(obj7);   //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'c', '6': 'd' }



const users = [
    {
        id : 1,
        email: "gsk@gmail.com"
    },
    {
        id : 2,
        email: "utyt@gmail.com"
    },
    {
        id : 3,
        email: "nbv@gmail.com"
    }
]

// console.log(users[1].email);    // utyt@gmail.com

// console.log(tinderUser2);  // { id: '123asd', name: 'Sammy', isLoggedIn: false }

// console.log(Object.keys(tinderUser2));  // [ 'id', 'name', 'isLoggedIn' ] => output values datatypes is array
// console.log(Object.values(tinderUser2));  // [ '123asd', 'Sammy', false ]
// console.log(Object.entries(tinderUser2));  // [ [ 'id', '123asd' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser2.hasOwnProperty("isLoggedIn"));



//++++++++++++++++ Object destructuring +++++++++++++++++++

const course={
    coursename: "js in hindi",
    price: "999",
    courceInstructor: "Hitesh"
}

// course.courseInstructor
const {courceInstructor} = course
// console.log(courceInstructor);   // Hitesh

//or
const {courceInstructor: instructor} = course     //change key value from courceInstructor to instructor
// console.log(instructor);   // Hitesh



//++++++++++++++++ API ++++++++++++++++
// jb bhi apna kaam kisi aur ke sar pe dalna ho ho usi ko api kahte hai
//JSON
// {
//     "name": "hitesh",
//     "userId": 422152152,
//     "courcename": "js in hindi",
//     "price": "free",
// }

// [
//     {},
//     {},
//     {},
// ]