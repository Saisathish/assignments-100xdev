/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryObj = {};
  for (let transaction of transactions){
    if(categoryObj.hasOwnProperty(transaction.category)){
      categoryObj[transaction.category] += transaction.price;
    } else {
      categoryObj[transaction.category] = transaction.price;;
    }
  }

  const categoryTotal = []

  for (const [key, value] of Object.entries(categoryObj)) {
    categoryTotal.push({ category: key, totalSpent: value });
  }
  return categoryTotal;
}

module.exports = calculateTotalSpentByCategory;

// const val = calculateTotalSpentByCategory([{
//   id: 1,
//   timestamp: 1656076800000,
//   price: 10,
//   category: 'Food',
//   itemName: 'Pizza',
// },{
//   id: 2,
//   timestamp: 1656076800000,
//   price: 1000,
//   category: 'Furniture',
//   itemName: 'Pizza',
// }]);

// console.log(val);
