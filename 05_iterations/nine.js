const myNums = [1, 2, 3]

let initialvalue=0
const newNums= myNums.reduce( (accumulator, myNums) => accumulator + myNums ,initialvalue )
// console.log(newNums);

const shoppingcart = [
    {
        itemName: "js course",
        price: 2999,
    },
    {
        itemName: "py course",
        price: 999,
    },
    {
        itemName: "mobile dev course",
        price: 5999,
    },
    {
        itemName: "data science course",
        price: 12999,
    },
]
    

// const cartTotal = shoppingcart.reduce( (sum, sc) =>{ return sum + sc.price },0  ) 
// or
const cartTotal = shoppingcart.reduce( (sum, item) => sum + item.price ,0 )
console.log(cartTotal);  // 22996