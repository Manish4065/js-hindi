const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (item){
    // console.log(item);
} )  // callback function ka naam nhi hota hai

// js
// ruby
// java
// python
// cpp

coding.forEach( (value) => {
    // console.log(value);
})

// js
// ruby
// java
// python
// cpp


function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

// js
// ruby
// java
// python
// cpp


coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]


// accessing object inside array using foreach loop
const myCoding=[
    {
        languageName: "javascript",
        lannguageFileName: "js",
    },
    {
        languageName: "java",
        lannguageFileName: "java",
    },
    {
        languageName: "python",
        lannguageFileName: "py",
    },

]

myCoding.forEach( (item)=> {
   console.log(item.languageName);
})

// javascript
// java
// python