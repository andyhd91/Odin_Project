let admin, names;
names = "John";
admin = names ;

console.log(admin);


//javaScript operators console.log is working replacement for alert()

let x = 1;

x = -x;
console.log( x ); //-1, unary negation was applied

let x = 1, y = 3;
console.log(y-x); // 2 , binary monus subtracts values

//Maths
//remainder %
console.log( 5 % 2 ); // 1, a ramainder of 5 divided by 2
console.log( 8 % 3 ); // 2, a remainder of 8 divided by 3 

//exponentiation **
console.log( 2 ** 2 ); // 2² = 4
console.log( 2 ** 3 ); // 2³ = 8
console.log( 2 ** 4 ); // 2⁴ = 16

console.log( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
console.log( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

//string concatination with binary
let s = "my" + "string";
console.log(s); // mystring

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

alert(2 + 2 + '1' ); // "41" and not "221"