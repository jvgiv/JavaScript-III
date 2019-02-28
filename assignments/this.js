/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding.  
    This is basically everything that exists within JS.  When this is console logged, it gives you everything in the universe of javascript when it is called.  

* 2. Implicit Binding
    This is when a function is called by a preceeding dot.  So if there was a function inside of an object, you would call it by logging thisObject.function();

* 3. New Binding.
    this is just whenever a constructor function is used.  the term new is used when referencing the constructor function to make a new object 

* 4. Explicit Binding.
    whenever call or apply is used in javascript.  lets an object call or apply another object to reference their data
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// or

function myName(name) {
    console.log(this);
    return name;
}

myName(john);

// Principle 2

// code example for Implicit Binding

const johnsObj = {
    saying: 'Sup Chef',
    doTheSaying: function(name) {
        console.log(`Hey ${name},  ${this.saying}`)

    }
}

johnsObj.doTheSaying('john');

// Principle 3

// code example for New Binding

function JerkPerson(rude) {
    this.greeting = 'Go away';
    this.rude = rude;
    this.mean = function() {
        console.log(this.greeting + " " + this.rude);
        console.log(this);
    };
}

const john = new JerkPerson('Barry');
const barry = new JerkPerson('John');

john.mean();



// Principle 4

// code example for Explicit Binding

john.mean.call(barry);
barry.mean.apply(john);