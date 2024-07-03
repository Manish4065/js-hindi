// for of
// for (const iterator of object) {
    
// }

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greeting = "hello world!"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}
// Each char is h
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is  
// Each char is w
// Each char is o
// Each char is r
// Each char is l
// Each char is d
// Each char is !

// Maps
// The Map object holds key-value pairs and remembers the original
//  insertion order of the keys. Any value (both objects and primitive
//  values) may be used as either a key or a value.
// no duplicate key value value

const map= new Map()
map.set('IN',"INDIA")
map.set('USA', "united state of america")
map.set('Fr', "france")
map.set('IN',"INDIA")
map.set('IN',"Bharat")
map.set('in',"INDIA")

// console.log(map);
// output
// Map(4) {
//     'IN' => 'Bharat',
//     'USA' => 'united state of america',
//     'Fr' => 'france',
//     'in' => 'INDIA'
//   }

for (const key of map) {    
    // console.log(key);
}

// [ 'IN', 'Bharat' ]
// [ 'USA', 'united state of america' ]
// [ 'Fr', 'france' ]
// [ 'in', 'INDIA' ]

for (const [key, value] of map) {     //key and value are not syntax, we can use any thing ie, xyz etc
    // console.log(key, ':-', value)
}
// IN :- Bharat
// USA :- united state of america
// Fr :- france
// in :- INDIA

for (const [xyz, abc] of map) {
    // console.log(xyz, abc);
}
// IN Bharat
// USA united state of america
// Fr france
// in INDIA

const myObject={
    'game1':'NFS',
    'game2':'cricket'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value)  //Error:  myObject is not iterable
}