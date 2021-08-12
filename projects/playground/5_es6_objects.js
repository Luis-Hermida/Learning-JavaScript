// Object property shorthand
const name = "Andrew";
const age = 27;

const user = {
  name,
  age,
  location: "Philadelphia",
};

console.log(user);

// Object destructuring
const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

// const { label: productLabel, stock, rating = 5 } = product;
// console.log(productLabel); // Change variable name
// console.log(stock);
// console.log(rating); // Use default value

const transaction = (type, { label: productLabel, stock, rating = 5 }) => {
  console.log(productLabel);
  console.log(stock);
  console.log(rating);
};

transaction("order", product);
