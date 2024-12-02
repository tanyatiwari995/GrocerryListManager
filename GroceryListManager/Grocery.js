

let groceryList=[];


let item1={
    name:"Allou",
    quality:40,
    purchased:false,
    costPerUnit:220
}
let item2={
    name:"Capsicums",
    quality:50,
    purchased:false,
    costPerUnit:440
}
let item3={
    name:"tamatar",
    quality:90,
    purchased:false,
    costPerUnit:551
}
// groceryList=[item1,item2,item3];
groceryList[0]=item1;
groceryList[1]=item2;
groceryList[2]=item3;
console.log(groceryList);

groceryList[2]= null;
console.log(groceryList);


groceryList[1].purchased=true;
console.log(groceryList[1]);


let item4={
    name:"chilli",
    quality:70,
    purchased:false,
    costPerUnit:551
}
console.log(item4);

 groceryList[4]=undefined;
 console.log(groceryList[4]);
  

 console.log(groceryList[0]);
 console.log(groceryList[1]);
 console.log(groceryList[2]);
 console.log(groceryList[3]);


 
console.log("Total NUmber Of Allou : ", groceryList[0].costPerUnit+groceryList[0].quality);
console.log("Total NUmber Of Capsicums : ", groceryList[1].costPerUnit+groceryList[1].quality);


// Grocery List Manager
// Problem Statement
// Objective
// You will create a simple grocery list manager using JavaScript to reinforce
// your understanding of objects, arrays, Boolean data types, null, and
// undefined. The goal is to build a program where each grocery item is
// represented as an object with properties for the item name, quantity, cost
// per unit, and its purchase status (a Boolean). This project will help you
// apply basic JavaScript concepts in a practical scenario, ensuring you grasp
// how to work with various data types and manage a simple data structure.
// Requirements
// 1. Initialize an empty array to hold grocery items.
// 2. Create objects representing grocery items. Each object should have the following
// properties:
// ○ name: The name of the grocery item (string).
// ○ quantity: The quantity of the item to be purchased (number).
// ○ purchased: The purchase status of the item (boolean).
// ○ costPerUnit: The cost per unit of the item (number).
// 3. Add items to the array by creating object instances and adding them to the array.
// 4. View the list: Print all items in the grocery list to the console.
// 5. Remove items from the list by setting them to null.
// 6. Update the purchase status of an item (changing the boolean value).
// 7. Add another item to the grocery list after initial additions.
// 8. Demonstrate the use of undefined by adding an undefined item to the list.
// 9. View the final grocery list to ensure all updates are correctly reflected.
// 10. Compute total costs of items in the grocery list.