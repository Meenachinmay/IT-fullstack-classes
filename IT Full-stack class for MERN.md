# IT Full-stack class for MERN

> Time to say Hello World! In Javascript

Console / terminal 

To write a code -> code editor -> vs code

Process to write a Hello world program -> 
Create a file named index.js -> open the file in vs code -> write the program -> run the program

> in the case of javascript the file extension we use is <.js>

Why we need to use file extension? -> we have to tell the editor that what type of programming language we are using.
File extension is different for every single language ->
> .java, .js, .php, .c, .cpp, .py, .sql, .rs, .go


As of now we will be using console to create files and we will use vs code to write code in that file. 
```
touch index.js
```

Open the file using vs code and type this code -
```
console.log("hello world!");
```

```
node index.js
```

Hello world! (To run the code we have to use terminal) ✅

### JavaScript Code Structure
↓
```
console.log("hello world"); console.log("hello world 2");
```

### JavaScript Variables
```
console.log("Hello world");
output -> Hello world

let message = "Hello world"
console.log(message);
output -> Hello world

message = "world Hello"
console.log(message)
output -> world Hello
```

Variable -> to hold a state / data / value and the we can use it anywhere within the program.

Assign a value / Re-assigning a value


Variable -> Declare it  and you define / assign a value to it.

> There are some rules to name a variable

<type of variable> <name of varilable> = <value of variable>

Variable names can only contain alphabet letters, numbers, and underscores
Ex 
message_1, user_name, user_country, user_profile_name, user_working_place_name

-> never start with numbers 
> 1_message ❌

-> never user a reserved keyword for naming a variable
> console, if, for, while, switch ❌

-> variable names are case sensitive 
> message = “hello world”, Message = “world Hello”
MESSAGE, message, Message  ✅

> Naming conventions

Camel case -> let userName, let userProfile, let userProfilePicture
Snake case -> let user_name, user_profile_picture

### Constant Variable
When you need to store a value that never changes. 
Ex 
```
const MAX_SPEED = 300
const userAccNo = 121321312
const userName = iamrocket
```

```
pwd -> to check the current directoy path (location)
mkdir -> to create a new folder
cd -> to change the current directory to the next directory
clear -> to clear the console / terminal
ls -> to list all the files in folder
touch -> to create a new file in the current directory 
mv -> to rename a file, folder
```

### JavaScript Basic Data Types
2 -> number, 0.2 -> floating number,
Chinmay -> string (sequence of chars)
A -> char
% -> special char (char)

```
let message = "chinmay" -> string

```

Class 3, 03/06
STRING
Any Noun (name of anything -> alphabetical sequence of anything) made of chars sequence (A to Z, a to z) -> Strings
Or 
Anything between “ “ / ‘ ‘ is a string.
The way we have to tell to the machine that it is a string -> we have to pass the noun in either “ “
Or ‘ ‘
Ex 
“Chinmay” ✅
Chinmay ❌
“123” ✅

NUMBERS
Ex 
123, 0.03, 00.00023

BOOLEANS
true or false (1 or 0)

NULL
```
let user_name = null (user_name does not have any value)
```
It’s easy to check for null values when we are checking errors rather than assigning a temporary value to the variable.

UNDEFINED
When a variable has empty value, we say it or we get an undefined error.


### Strings in Javascript
A series of characters

```
let message = "good morning"
"good morning' ❌
'good morning' ✅ (but the good practice is to define it in double)
```


> you can join two or more strings as one with the plus ``` + ```  Don’t forget to add space before the next string

```
let message = "hello " + "good " + "morning"
console.log(message)
output -> hello good morning
```

We can pass variables and string together in console.log
```
let message = "hello"
console.log("This is a message " + message);
output -> This is a message hello
```

```
let name = "chinmay"
let topic = "japanese"
console.log(name + " is learning" + topic + " today");
output -> chinmay is learning japanese today
```

> Console.log can take anything and print it to the terminal / console


Class 4, （月)
We use variable to hold a data -> that data must be having a type 

String = name of any noun
Number (integer) - phone, acc_no, address_pincode
Boolean = hasUserJoined -> true or false
NUll = “”

### Type conversion 
> Why we need type conversion?
Type conversion we need to use to make User input -> type safe.

So even if the user tries to put wrong data in the app, our app should not break. 

Ex 
Phone no: onetwothree
Email address: 2322312223

You are supposed to put number (123) in phone_no and you are supposed to put string (abc, email type) in email_address

String -> number
Number -> string
Floating number -> number (whole number)

Number -> string

12345 -> “12345”

NOTE: every thing in “ “ is a string.

Ex 
```
let x: string = "7";
let y: number = 5;

NOTE: to get output 12 which is correct. we have to convert the x into a number
x = Number(x)

console.log(x+y) => 12
```

NOTE: assigning a value, re-assigning a value => into a variable

NOTE: to declare a variable
```
let / var / const <name of variable> = 5
```

Two methods we are having to do Type conversion.
Number() -> to convert to a number
String() -> to convert to a string

```
let speed = 0.55 m/sec
console.log(speed) -> 0.55

speed = Number(speed)
console.log(speed) ->

```


```
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
let a = 13
let b = 5

// number by 2 => 0, even else odd

if ((a % b) === 0) {
    console.log("even")
} else {
    console.log("odd")
}

```

```

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
```

---
### Conditional statements in Javascript
> If-elseif-else

To check whether something is true or false, we use this IF - ELSE conditions.
Ex -> to check if a user is logged in or not, to check if the payment has been Done or not

```
if (condition) {
// code you want to execute if the condition is matched
} else {
// code you want to execute if the condition is not matched
}

if (condition) {
//
} else if (condition){
//
} else {
//
}
```

Class 5, (火)
### Switch Case statement
> When we have many options to choose from and after selecting an option we want to do some task / action. It is similar to if-else condition but little more easier for so many options 

```
let age = 15;
switch (age) {
	case 10:
		console.log("age is 10");
		break;
	case 20:
		console.log("age is 20");
		break;
    default:
		console.log("age is neither 10 or 20);
}

let fruit = "apple";

switch (fruit) {
	case "apple":
		console.log("this is an apple");
		break;
	case "banana":
		console.log("this is an banana");
		break;
	default:
		console.log("unknown fruit");
}
```


### Control flow (Loops)
> when we need to write a piece of code that needs to be executed repeatedly.

console.log(“hello world”)
console.log(“hello world”)
console.log(“hello world”)
console.log(“hello world”)
console.log(“hello world”)
console.log(“hello world”)

> we have two types of loops
### for loop / while loop
```
for loop syntax -> for (let x = 1; x <= 10: x++) {
	// code you want to execute in this loop
	console.log("Hello world")
}

Note: here the value of x is auto incrementing at the end of the loop

for (initialize the loop with a variable; condition; increment the loop) {
	// code you want to execute
}

for ([initialization]; [condition]; [arithmetic expressions]) {
	// as long as condition is true
	// this block will be executed repeatedly 
}

x = 0 - first cycle
x = 1 - second cycle
x = 2 - third cycle
x = 3 - forth cycle
.
.
.

// reverse loop
for (let x = 10; x >= 1; x--){
	console.log("hello world");
}

```

> when to use a for loop
For loop is useful when you know how many times you need to execute a repetitive task.

### while loop
> When you don’t know how many times you need to run the loop. Then we use while loop.

While statement / loop is used to run a block of code as long as the condition evaluates to true.

```
while (condition) {
	statement;
}

let i = 0;
while (i < 6) {
console.log("The value of i is ", i);
i++;
}

while (true) { // infinte while loop (this will never ends unless we don't to it manually)
	// user select the item
	// place the order
	// make the payment
	// repeat the loop
}
```

Class 6 （木）
### Javascript Arrays and Object
> array -> It is like a box to hold more than one variable of same type

```
let x = 2;
console.log(x);

so maintain a list of same data type variables we can use array.
```

In order to use an array ->
1. Create the array
2. Fill the array (values)
3. Use the array

Create the array ->
In javascript to create an array we need to use the square brackets [] and separate the items using a comma.

```
let birds = ["owl", "eagle", "peacock", "parror"]

let sweets = ["gulab jamun", "jalebi", "laddu"]
```

[ ] [ ] [ ] [ ] [ ] [ ]

Array index is like locker no, if you know the locker no, you can directly access the things in that locker.
So we can access the value from an array directly if we know the index. And array index always starts from 0.
“Owl” = 0
“Eagle” = 1
“Peacock” = 3
“Parrot” = 4

NOTE: In javascript we assign multiple types in a single array, (but we don’t do this because its not a good practice)

NOTE: We can also declare an empty array without any value.
```
let birds = [];
```

> How to access the values in the array with index

```
let birds = ["owl", "eagle", "peacock", "parror"]
console.log(birds[2]) -> "peacock"
console.log(birds[1]) -> "eagle"
.
.
```

NOTE: to access all the values in the array we need to use loop. So we don’t have to do it manually one by one.

> How to access the values in array with loop

```
let birds = ["owl", "eagle", "peacock", "parror"]
for (let i = 0; i < 4; i ++) {
	console.log(birds[i]);
}
```

### Array methods
> length, push, pop

### Functions in Javascript
> function is simple a piece / section of code which we use to perform a specific task and then we can re-use it.

Ex -> To add two numbers, we need a code. 
```
let a = 5;
let b = 6;

let c = a + b;

console.log(c) -> 11

11, 12

let x = 11; 
let y = 12;

let z = x + y;

console.log(z) -> 23

```

> Create a function in Javascript (Task of this function is to take two values and add them then print them

```
function <name of the function> (let a, let b) {
	let c = a + b;
	console.log(c); -> a + b
}
```

> Using a function

```
<name of the function> (5, 6); 
```

> a real time function example

```
function sendMessage(let contactName, let message) {
	console.log("Message sent");
}
```

```
sendMessage("chinmay", "Hello");
```

In further lesson we will learn how to control calling a function. 
1. Define (to tell the function what to do)
2. Calling a function (to use the function)