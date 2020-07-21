/* 
  Once you complete a problem, refresh ./closures.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
function outer() {
  var name = 'Tyler';
  return function() {
    return 'The original name was ' + name;
  };
}

// Do not edit the code above.
  
/* 
  Above you're given a function that returns another function which has a closure over the name variable.
  Invoke outer saving the return value into another variable called 'inner'.
*/
  
// Code Here
let inner = outer()


//Once you do that, invoke inner.

//Code Here
inner()


////////// PROBLEM 2 //////////

// Do not edit the code below.
function callFriend(name) {
  function dial(number) {
    return 'Calling ' + name + ' at ' + number
  }
  return dial;
}
// Do not edit the code above.

/*
  Above you're given a callFriend function that returns the dial function.
  Store the result of invoking callFriend in a variable named callJake.
  
  When callJake is invoked with '435-555-9248', it returns 'Calling Jake at 435-555-9248' 
  (HINT: You will need to pass in arguments to both function invocations)
*/

//Code Here


////////// PROBLEM 3 //////////
let callJake = callFriend('Jake')

callJake('435-555-9248')

/*
  Write a function called makeCounter that makes the following code work properly.
*/

//Code Here
function makeCounter(){
  let num = 0
  let inner = function(){
    num += 1
    return num
  }
  return inner
}


//Uncomment this once you make your function
  var count = makeCounter();
  count(); // 1
  count(); // 2
  count(); // 3
  count(); // 4



////////// PROBLEM 4 //////////

/*
  Inside the function called counterFactory return two functions that implement up/down counter.
  The first function is called inc, this function is responsible for incrementing the value once and returning the updated value.
  The second function is called dec, this function is responsible for decrementing the value by one and returning the updated value.
  You will need to use the module pattern to achieve this.
  Information on the module pattern available here: 
  http://stackoverflow.com/questions/17776940/javascript-module-pattern-with-example?answertab=votes#tab-top
*/

function counterFactory(value) {
  // Code here.
  let num = value
  return {
    inc: function() {
      return num += 1},
    dec: function() {
      return num -= 1},
  };
}

counter = counterFactory(10);
counter.inc() // 11
counter.inc() // 12
counter.inc() // 13
counter.dec() // 12



////////// PROBLEM 5 //////////

/*
  Inside the motivation function create another function called message that will return the welcome text with the firstname and lastname.
  The final message should say "You're doing awesome, keep it up firstname lastname." 
  (Hint: don't forget to have a space between the firstname and lastname and a period at the end of the sentence.)
*/

function motivation( firstname, lastname ) {
  var welcomeText = "You're doing awesome, keep it up";

  // code message function here.
  function message(){
    return `${welcomeText} ${firstname} ${lastname}.`
  }
  //Uncommment this to return the value of your message function
  return message;
}

var greeting = motivation('Billy', 'Bob'); // 'You're doing awesome keep it up Billy Bob.

console.log(greeting)



////////// PROBLEM 6 //////////

/*
  Inside the module's return object create a publicMethod function that invokes privateMethod (return the result).
  Invoke this by calling module.publicMethod(); outside the module scope
*/

var module = (function() {
  var person = {
    name: "phillip",
    age: 29,
    location: "Utah"
  };

  function privateMethod(){
    return "Hi, I'm " + person.name + ", age " + person.age + " from " + person.location;
  }

  // Anything that is being returned is made public and can be invoked from
  // outside our lexical scope
  return {
    // Code here.
  };
})();

////////// PROBLEM 7 //////////

/*
  Here we have a function named secretNumber that has a secret number.
  Inside the return object, create two methods called addToSecret and takeAwayFromSecret.
  addToSecret should have a parameter that is added to the secret number returning the updated secret number.
  takeAwayFromSecret should have a parameter that takes away from the secret number returning the updated secret number.
*/

function secretNumber() {
  var secret = 143;

  return {
    // Code here
    addToSecret: function(val){return secret += val},
    takeAwayFromSecret: function(val){return secret -= val},
  };
}



////////// PROBLEM 8 //////////
  
/*
  Here we have a for loop that will iterate as long as i is less than or equal to 5.
  What we need to do is console.log(i) so that it logs like so:
    0 second after call - log 0
    1 seconds after call - log 1
    2 seconds after call - log 2
    3 seconds after call - log 3
    4 seconds after call - log 4
    5 seconds after call - log 5

  However, because each call to console.log occurs after the loop has finished, the value of i has changed before the console.log executes.
  We'll need to use a closure to preserve a reference to i at the time of execution.
  
  Fix the code below to log the desired output.
*/

function timeOutCounter() {
  let nums = []
  function savedNums(){
    return nums.shift()
  }

  for (var i = 0; i <= 5; i++) {
    console.log(i);
    nums.push(i);
    setTimeout(function() {
      console.log(savedNums());
    }, i * 1000);
  }
}
timeOutCounter();
