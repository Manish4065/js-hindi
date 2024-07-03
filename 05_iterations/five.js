const myObject={
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}
// forin loop
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for ruby
// swift shortcut is for swift by apple


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);
}

// keys/indexes of arrays
// 0  
// 1
// 2
// 3
// 4

for (const key in programming) {
    // console.log(programming[key]);
}

// js
// rb
// py
// java
// cpp


const map= new Map()
map.set('IN',"INDIA")
map.set('USA', "united state of america")
map.set('Fr', "france")
map.set('IN',"INDIA")

for (const key in map) {
    console.log(key);  // kuchh bhi print nhi ho rha, because map is not iteratible so we can't run in loop
}
