// let user_name = "chinmay"

// let phone_no = 9155555555

// let hasLoggedIn = false

// console.log(typeof(hasLoggedIn))

// typeof () -> is a function which we can use to print the type of anything to the console

// let message = "hello " + "good" + "morning"
// console.log(message)

// Take 3 variables of string type -> name, office_address, phone_no
// i __ work at __ and my contact no is __

// let name = "sulax"
// let office_address = "fukuoka"
// let phone_no = "11200001"

// console.log("i " + name + " work at " + office_address + " and my contact no is " + phone_no)

// let phone_no = true
// console.log(phone_no)

// what ever we pass to the console.log it will throw it out to the terminal

// let speed = "0.55"
// console.log("without conversion", speed + 12)
// console.log("type of speed before conversion", typeof(speed))

// speed = Number(speed)
// console.log("after conversion", speed + 1)
// console.log("type of speed after conversion", typeof(speed))

// -----------
// Operators in Javascript
// +, -, *, /

// a ** b => a raise to b
// a % y => it gives a remainder of left side, after dividing it by right side
// ++a => return the value of by adding 1 to it
// --a  => returns the value of a after subtracting 1 from it
// let a = 13
// let b = 5

// number by 2 => 0, even else odd

// if ((a % b) === 0) {
//     console.log("even")
// } else {
//     console.log("odd")
// }

// The assignment operator
// =
// we use to assign a data or value to a variable
// types of assignment operator
// x = y -> assigning the value of y to x
// x += y => x = x + y
// x -= y => x = x - y
// x *= y => x = x * y
// x /= y => x = x / y
// x %= y => x = x % y

// x == y => if the x and y are equals
// x != y => true, if x and y are not equal
// x === y => if the x and y are equal and both are having same type, then its true
// x !== y => if the x and y are not same or having different type
// x > y => true if x is greater than y
// x < y => true if the x is less than y
// x >= y => true if the x is greater than or equal to y
// x <= y => true if the x is less than or equal to y

//NOTE: we can also compare strings with this
// ex, "abd" == "abc"

// let userName = "chinmay"; // -> userName is coming from the database
// let userInput = "chinmay"; // -> input given by user from the login form.

// console.log(userName == userInput);

// Logical Operators
// Logical AND, Logical OR and Logical NOT
// Logical AND => true if x and y are true else its false = &&
// ex (7 > 2 && 5 > 1)
// so if both the sides are true, complete statement is true

// Logical OR => ||
// ex (7 > 4 || 4 > 10)]

// Logical NOT => !<value> -> it just reverse it.
// !x -> if x is not true means it false (you are checking for false)

// a real world example
// let isUserLoggedIn = false
// if (!isUserLoggedIn) -> true

// let isUserLoggedIn = true
// if (!isUserLoggedIn) -> false

// let hasLoggedIn = true; // false meaning user is not logged in

// if (!hasLoggedIn) { // here we are checking "kya user logged in nahi hai"
//     console.log("Send user a notificaiton to login.");
// } else {
//     console.log("Send user a offer.")
// }

// let server_response_code = 403;

// // to send a response to the user based on the code from server
// switch (server_response_code) {
//     case 400:
//         console.log("Bad request");
//         break;
//     case 404:
//         console.log("page not found");
//         break;
//     default:
//         console.log("unknown server error");
// }

// if-else is not the clearner way to write so many conditions, so we use switch case when we
// have too many options

// loop - for loop
// for (let i = 0; i < 10; i += 5) {
//     console.log(i);
// }

// printing star patterns - nested loop
//*
//**
//***
//****
//*****

//*****
//****
//***
//**
//*

// let numberOfLines = 6;

// for (let i = 1; i < numberOfLines; i++) {
//   let line = ""; // we are making a empty string
//   for (let j = 1; j <= i; j++) {
//     line = line + "*"; // here we are adding two string empty + "*"
//   }
//   console.log(line);
// }

// ARRAYS - IN JAVASCRIPT
// let birds = ["eagle", "peacock", "parrot"];

// for (let i = 0; i < 3; i ++) {
//   console.log(birds[i])
// }

// in case if we don't know the size, how we will print all the array values?
// in that case we will use array function -> length
// for (let i = 0; i < birds.length; i ++) {
//   console.log(birds[i])
// }

// if we want to insert a new value in the array
// we can use push function

// birds.push("owl")
// console.log("-------------before removing the owl----------------")
// for (let i = 0; i < birds.length; i ++) {
//   console.log(birds[i])
// }

// birds.pop("owl")

// console.log("------------after removing the owl------------------")
// for (let i = 0; i < birds.length; i ++) {
//   console.log(birds[i])
// }

// If we want to delete a value from the given index from an array, we can use
// splice function and we have to pass two things in the array -> (start index, 1)

// console.log("------------after removing two values from the index 0------------------")
// birds.splice(0, 2)
// for (let i = 0; i < birds.length; i ++) {
//   console.log(birds[i])
// }

// functions
// Let's the function without input / arguments
// function printMyName() { // defining the function here
//   console.log("function is being called...");
// }

// printMyName(); // calling the function here

// Let's the function with input / arguments
// function printMyName(myName) { // defining the function here
//   console.log(myName);
// }

// function login(userEmail, password) {
//   // logic to let user login in the system
//   if (userEmail === "chinmayanand896@icloud.com" && password === "chinmay") {
//     console.log("you can login...")
//   } else {
//     console.log("you are not allowed to login...")
//   }
// }

// // function with default values / input / arguments
// function login(userEmail = "chinmayanand896@icloud.com" , password = "chinmay") {
//   // logic to let user login in the system
//   if (userEmail === "chinmayanand896@icloud.com" && password === "chinmay") {
//     console.log("you can login...")
//   } else {
//     console.log("you are not allowed to login...")
//   }
// }

//  a function which returns some value
// function returnMyName () {
//   let myName = "japanese";
//   return myName;
// }

// //  a function which returns some value
// function add (num1, num2) {
//   let result = num1 + num2;
//   return result;
// }

// let additionResult = add(11, 5); // here we are saving the result in a variable so later we can use
// the variable to use the result returned by the function

// console.log(additionResult);

// OBJECTs Practice
// let person = { // this is a person object
//   name: "Chinmay",
//   address: "Japan, Kawasaki",
//   phoneNo: "070-1111111",
// }

// // add a new property / key-value pair / attribute
// person.age = 28

// // modify the values in a object
// person.age = 29

// delete person.age

// // check if a key is present in the obejct
// if ("age" in person) {
//   console.log("age is already present in object");
// } else {
//   person.age = 28;
//   console.log(person)
// }

// try to add an array to an object
// let job = {
//   title: "Software developer",
//   location: "Japan",
//   skills: ["java", "c++", "golang", "frontend"],
// }

// // let's try array functions
// let foods = ["osushi", "ramen", "takoyaki", "udon"]

// // to add a new value to foods array
// foods.push("tenpura")

// // to get a value from the last of the array
// let value = foods.pop()
// console.log(foods)
// console.log(value)

// define objects in the array

// let foods = [
//   {
//     title: "osushi",
//     ingredients: "rice and fish"
//   },
//   {
//     title: "ramen",
//     ingredients: "pork"
//   },
//   {
//     title: "tenpura",
//     ingredients: "vegies"
//   },
//   {
//     title: "okonomiyaki",
//     ingredients: "eggs, vegies, pork"
//   },
// ];

// MAP function for array (we use it to map over the array)
// foods.map((food) => console.log(food))\

let todos = [
  {
    title: "Grocery Shopping",
    description:
      "Buy milk, eggs, bread, and cheese from the local supermarket.",
    startTimings: "8AM"
  },
  {
    title: "Read Book",
    description: "Finish reading 'The Alchemist' by Paulo Coelho.",
    startTimings: "5AM"
  },
  {
    title: "Exercise",
    description: "Complete a 30-minute workout session at the gym.",
    startTimings: "10AM"
  },
  {
    title: "Call Mom",
    description: "Catch up with mom over a phone call in the evening.",
    startTimings: "11AM"
  },
  {
    title: "Work on Project",
    description:
      "Spend 2 hours developing the new feature for the web application.",
    startTimings: "9AM"
  }
];

todos.map((todo) => {
  if (todo.startTimings === "8AM") {
    console.log(todo.title)
  } else {
    console.log(todo.startTimings)
  }
})

// Write a program to extract all the timings for an todo where the title is "Exercise" and push
// it into an array and print the array after the loop ends (map function loop ends).

// 1. declare an empty array
// 2. loop over the todos array and put an if-else condtion to check if the title of an todo
// is equals to "Exercise", if it's true then push the timing of todo in the array
// 3. After the loops ends just print the array with console.log
