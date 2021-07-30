let admin, names;
names = "John";
admin = names ;

console.log(admin);


//javaScript operators console.log is working replacement for console.log()

let x = 1;

x = -x;
console.log( x ); //-1, unary negation was applied

let x = 1, y = 3;
console.log(y-x); // 2 , binary monus subtracts values

//Maths
console.log( 5 % 2 ); // 1, a ramainder of 5 divided by 2
console.log( 8 % 3 ); // 2, a remainder of 8 divided by 3 

console.log( 2 ** 2 ); // 2² = 4
console.log( 2 ** 3 ); // 2³ = 8
console.log( 2 ** 4 ); // 2⁴ = 16

console.log( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
console.log( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

let s = "my" + "string";
console.log(s); // mystring

//Data Types 
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

/*(1)Math is a built-in object that provides mathematical operations.
 We will learn it in the chapter Numbers. 
 Here, it serves just as an example of an object.*/
 
/* (2)The result of typeof null is "object". 
 That’s an officially recognized error in typeof behavior, 
 coming from the early days of JavaScript and kept for compatibility. 
 Definitely, null is not an object. 
 It is a special value with a separate type of its own.*/

/*The result of typeof alert is "function", because alert is a function. 
 We’ll study functions in the next chapters 
 where we’ll also see that there’s no special “function” type in JavaScript. 
 Functions belong to the object type. 
 But typeof treats them differently, returning "function". 
 That also comes from the early days of JavaScript. 
 Technically, such behavior isn’t correct, but can be convenient in practice. */

//String Length
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
txt.length //returns 26  