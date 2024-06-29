const marvelHeros=["thor", "ironman", "spiderman"]
const dcHeros=["superman", "flash", "batman"]

// marvelHeros.push(dcHeros)   // array inside array, not combined

// console.log(marvelHeros);  
// console.log(marvelHeros.length);   // 4
// console.log(marvelHeros[3][1]);     // flash

// const allHeroes= marvelHeros.concat(dcHeros)     // concat() returns new array
// console.log(allHeroes);      

const allNewHeros=[...marvelHeros, ...dcHeros];    // concatination using spread operator 
//and we can concatinate  many arrays easilly using spread operator
console.log(allNewHeros);

const anotherArray=[1,2,3,[4,5,6],7,[6,7, [4,5]]]

const realAnotherArray= anotherArray.flat(Infinity)  // flat array at infinite depth
// in this case depth is 3 => [4,5]: array inside array iside array
console.log(realAnotherArray);


console.log(Array.isArray("manish"));    // false
console.log(Array.from("manish"));       // creating an arary from string "manish"
// ['m', 'a', 'n', 'i', 's','h']

console.log(Array.from({name: "manish"}))   // [] => gives empty array because we have to provide , make array of keys or values


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));    // returns new array from set of elements  => [100, 200, 300]