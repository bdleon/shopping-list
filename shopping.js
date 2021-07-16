// Open shopping.js and declare a variable whose value will 
// be an array filled with objects. Each object will represent an
//  item that you first think of when you go to the store.
// 
const groceryList =[
   
]

const eggs ={
    id:1,
    name:'eggs',
    price: 5
}

const milk = {
    id: 2,
    name:'milk',
    price: 4
}

const mustard = {
    id: 3,
    name:'mustard',
    price: 6
}


groceryList.push(eggs);
groceryList.push(milk);
groceryList.push(mustard);


const pickles = {
    name: 'pickles',
    price: 9
}

const addToShoppingList = (grocery)=>{
    const lastIndex = groceryList.length -1;
    const lastGroceryObject = groceryList[lastIndex]
    const maxId  = lastGroceryObject.id
    const idForNewGrocery = maxId +1
   
    grocery.id = idForNewGrocery
    groceryList.push(grocery)
}

addToShoppingList(pickles)
console.log(groceryList)