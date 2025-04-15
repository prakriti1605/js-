let score = "33abc"
// console.log(typeof(score));
/* but we dont know if this score is actually a number.
 it might be possible that this score as come from a 'form' and there it was treated as a String. */

let value_score = Number(score)
// here N is cap because this number is a class and we are using its function by passing a value, explained later

// console.log(typeof(score));
// console.log( typeof value_score);
// console.log(value_score)    //not a number
score= null                 // output = 0
score= undefined            // output= nan
score = true                // output = 1

let isloggedin = 3
let boolislogged = Boolean(isloggedin)
console.log("boolislogged = ", boolislogged);

// 1 => true 
// "" => false " " => true
//grkusg => true

//------------------------------OPERATIONS----------------------------
let str1 = "hello"
let str2 = "-hi-"
let str3=str1+str2
// console.log("str3 = " ,str3);
// console.log("1"+2) //12
// console.log(1+2+"9") //39 mtlb pahle jo likha hai ussi ke according baaki sabko change change kardenge 

let a = 0;
// alert( Boolean(a) ); // false because 0 numeric value will be treated as false 

let b = "0";
// alert( Boolean(b) ); // true but here it is a string, and only empty strings are false

// alert(a == b); // true! equality will change both lhs and rhs in number and then compare 
console.log( 0 === false ); // false, because the types are different




