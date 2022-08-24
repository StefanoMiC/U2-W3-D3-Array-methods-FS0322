const randArr = ["a", "b", "c", "d", "e", "f"];

// FOREACH
// cycles over an array and returns the individual elements as parameter of the callback function

randArr.forEach(elem => {
  console.log("letter: " + elem);
});

const forEach = callback => {
  for (let i = 0; i < randArr.length; i++) {
    const element = randArr[i];

    callback(element);
  }
};

forEach(elem => {
  console.log("letter: " + elem);
});

const arrOfPeople = [
  { name: "Nazami", age: 20, hwPoints: 50 },
  { name: "Miles", age: 22, hwPoints: 95 },
  { name: "Komilov", age: 18, hwPoints: 10 },
  { name: "Syed", age: 25, hwPoints: 200 },
  { name: "Tereza", age: 19, hwPoints: 1000 },
  { name: "Paul", age: 18, hwPoints: 998 },
  { name: "Ibrahim", age: 29, hwPoints: 5 },
];

const arrOfNum = [100, 3, 9, 59, 102];

// MAP
// is a non mutating method that tranforms the original elements of an array into something else and RETURNS a NEW ARRAY with those new elements inside
console.log(arrOfNum.map(num => num * 2));
const mappedElements = arrOfNum.map(num => num * 2);
const mappedElements2 = arrOfNum.map(num => {
  return { number: num * 2 };
});
const listItems = arrOfNum.map(num => `<li> number: ${num} </li>`).join("");

const ages = arrOfPeople.map(obj => obj.age);
ages;

arrOfPeople
  .map(obj => obj.age)
  .forEach(num => {
    console.log(num);
  });

const map = callback => {
  const mapped = [];

  for (let i = 0; i < arrOfNum.length; i++) {
    const num = arrOfNum[i];

    mapped.push(callback(num));
  }

  return mapped;
};

map(num => num * 2);

// FIND
// returns the first element that satisfies the provided condition, and returns undefined if not found

// console.log(arrOfPeople.filter(person => person.age === 20)[0]);

const higherThan20 = arrOfPeople.find(person => person.age === 20);
higherThan20.hwPoints = 1;
const copiedObj = { ...higherThan20 };
copiedObj.hwPoints = 100;

console.log(copiedObj);
console.log(arrOfPeople[0]);

const copiedNums = [...arrOfNum];
copiedNums.pop();
console.log(copiedNums);
console.log(arrOfNum);

// DEEP CLONING AN ARRAY OF REFERENCES (OBJs)
const strigified = JSON.stringify(arrOfPeople);
const parsed = JSON.parse(strigified);
// NOW THE INNER OBJECTS WILL BE REAL COPIES

const is25 = parsed.find(person => person.age === 25);
is25;
is25.hwPoints = 0;
is25;

console.log(arrOfPeople[3]); // ORIGINAL OBJECT IS STILL UNCHANGED

// INDEXOF
// Searches a particular element in a collection and gives back the index of the position of that element or -1 if not found
const veggies = ["potato", "tomato", "chillies", "green-pepper"];
veggies;
const foundVeggie = veggies.indexOf("chillies");
veggies.splice(foundVeggie, 1, "cucombers");
veggies;

//FINDINDEX
// allows you to use a callback function to look into a nested property for checking the value, it gives back the index of the position if found or -1 if not found

const foundHwPoints5Index = arrOfPeople.findIndex(person => person.hwPoints === 5);
console.log(arrOfPeople[foundHwPoints5Index]);

arrOfPeople.splice(foundHwPoints5Index, 1);
arrOfPeople;

//INCLUDES
// checks whether a particular collection contains a specific value, or string includes the provided set of characters
// WITH ARRAYS
veggies.includes("cucombers");

// WITH STRINGS
const sentence = "Epicode is epic!";
console.log(sentence.includes("it"));

// FILTER
// checks the elements against a predicate (testing) function, if the result is true, the element gets saved in a new array, otherwise is discarded

console.log(arrOfPeople.filter(person => person.age > 20));

const filter = callback => {
  const filteredElements = [];

  for (let i = 0; i < arrOfPeople.length; i++) {
    const element = arrOfPeople[i];

    if (callback(element)) {
      filteredElements.push(element);
    }
  }

  return filteredElements;
};

filter(p => p.age > 20);

console.log(arrOfPeople.every(person => person.age >= 18));
console.log(arrOfPeople.some(person => person.age > 24));

//REDUCE

const accumulatedNums = arrOfNum.reduce((accumulator, currentValue) => {
  console.log(accumulator);
  console.log(currentValue);
  return accumulator + currentValue;
}, 0);

console.log(accumulatedNums);

const shoppingCart = [
  { author: "John", title: "My book", price: 19 },
  { author: "John", title: "My book2", price: 20 },
  { author: "John", title: "My book3", price: 55 },
  { author: "John", title: "My book4", price: 61 },
];

const cartWorth = shoppingCart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);

console.log(cartWorth);

// console.log(shoppingCart.reduce((acc, curr) => acc.concat({title: curr.title}), []))
console.log(shoppingCart.reduce((acc, curr) => [...acc, { title: curr.title }], []).find(book => book.title === "My book"));
