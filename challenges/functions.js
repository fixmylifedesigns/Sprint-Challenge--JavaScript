// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
// function consume(param1, param2, callback){ 
//   var same = param1 + param2 +"this is a call back ";
//   callback.push(same);
// }

// consume(2, 3);

function consume(x, y, callback) {
  return callback(x, y);
}

 consume(20, 2, (x, y) =>
  console.log(`today is hard ${x} & ${y}`)
);


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function consume(param1, param2, callbackFunction) {
  return callbackFunction(param1,param2);
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function greeting(firstname,lastname) {
  return `Hello ${firstname} ${lastname}, nice to meet you!`;
}


/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

//Because the function has a console.log in it which is calling out an internal function.

// Explanation: 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();