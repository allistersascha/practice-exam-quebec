const purchases = [
  {
    product: "Ergofit Wired Earbuds",
    category: "Electronics",
    quantity: 2,
    price: 12.99,
    mostLikedReviews: [
      {
        rating: 5,
        text: "Great noise-cancelling feature."
      }
    ]
  },
  {
    product: "LG Bluray Player Replacement Remote Control",
    category: "Electronics",
    quantity: 1,
    price: 6.99,
    mostLikedReviews: [
      {
        rating: 1,
        text: "Product didn't come with batteries."
      },
      {
        rating: 2,
        text: "Package was damaged."
      }
    ]
  },
  {
    product: "McCormick Grill Mates Chipotle Pepper Marinade (12 pk)",
    category: "Grocery",
    quantity: 3,
    price: 15.50,
    mostLikedReviews: [
      {
        rating: 1,
        text: "The marinade packets were damaged."
      }
    ]
  },
  {
    product: "Luxardo Gourmet Cocktail Cherries",
    category: "Grocery",
    quantity: 1,
    price: 24.45,
    mostLikedReviews: [
      {
        rating: 5,
        text: "You can taste the difference between these and marachinos."
      },
      {
        rating: 5,
        text: "I use these all the time for parties."
      }
    ]
  },
  {
    product: "Blood Pressure Monitor",
    category: "Medical Supplies and Equipment",
    quantity: 1,
    price: 49.99,
    mostLikedReviews: [
      {
        rating: 5,
        text: "Matches my blood pressure at the doctor's office."
      }
    ]
  }
];
//FIN
// #1 // 
const getNumberEntries = (object) => {
  //make an empty array of arrays
  let entries = [];
  //get the keys and values in each object
  for (keys in object){
    //turn them into their own tiny arrays
    //push them into that array??
    if(typeof object[keys] === "number"){
    entries.push([keys, object[keys]]);
    }
  }
  //return the array of arrays
  return entries;
};

//FIN
// #2 // 
const addKeyValuePairs = (object, additions) => {
  //loop thru the array of additions
  for (let i=0; i<additions.length; i++){
    //add the key and the value
    object[additions[i][0]] = additions[i][1];
  }
  return object;
};

//FIN
// #3 //
//arr of purchase objects plus price
//return arr of only items priced GREATER than the input price
const filterByPrice = (array, price) => {
  //filter for prices larger than the given one
  //make an empty array to return expensive stuff
  //price is a key within each
  //use the filter method you dingus
  return array.filter(function(obj){
    if (obj.price > price){
      return obj.product;
    }
  });

}
  

//FIN
// #4 //
const mapPurchases = (array) => {
  return array.map(function(obj){
    let review = obj.mostLikedReviews[obj.mostLikedReviews.length-1];
    return `${obj.product.toUpperCase()} - Review: ${review.text}`;
  });
  
};

// #5 //
//iterate over the array 
//get value in product description based on quantity
//aka use quantity as the index for which word in the product desc to concat
//use reduce
const accumulateString = (array) => {
  return array.reduce ((acc, c) => {
    //abstract the product description variable and split it into an array?
    let description = c.product.split(" ");
    let number = c.quantity;
    //add to accumulator?
      acc += description[number];
  }, "");
};

// #6 //
//in: arr and product (aka description)
//out: if product found, arr of desc and category
//recursion
const findProduct = (array, product) => {
  //empty array to push found product into
  let found = [];
  //loop thru array
  for (let i=0; i<array.length; i++){
    //check to see if it contains the product searched for
    if (array[i][product] === product){
      //push the product description and category as their own array into a new array
      found.push(product, array[i].category);
      }else if (array.length > 0){
        return findProduct(array.slice(1, array.length-1), product);
      };
  };
  if (found === undefined){
    found = [null, null];
  };
  return found;
};

//FIN
// #7 //
//in: array of product objects
//out: new arr of purchases with reviews longer than 35
//use filter
//I PASSED ALL THE TESTS FOR THIS ONE AND THEN I STARTED WORKING ON 6 AGAIN AND
//NOW IT KEEPS COMING BACK UNDEFINED UGH
const filterByReviewLength = (array) => {
  return array.filter(function(obj){
    let review = obj.mostLikedReviews[obj.mostLikedReviews.length-1].text;
    //let splitReview = review.split("");
    return review.length > 35;
  })
};


