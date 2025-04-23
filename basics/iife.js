/*
An IIFE (Immediately Invoked Function Expression) in JavaScript is a function that runs as soon as it 
is defined. 
It's a common pattern used to create a new scope and avoid polluting the global namespace.

Before ES6 introduced let, const, and modules, IIFEs were a popular way 
to create private variables and avoid conflicts in scripts loaded into the browser.

While ES6 modules and block-scoping with let and const have reduced the need for IIFEs, they’re still useful for:
Script snippets
Polyfills
UMD module pattern
Isolated test setups*/

(function chai(){
    console.log("DB connected")
})(); 
/*this is iife technique, wrapping the function inside parantheses and then second parantheses just 
//after function definiton to make it execuet immediately. 
whn asked what is iffe, making the function execute immediately while protecting it from global 
pollution  */

//implementing through arrow functions 
//()=>{}()
// (chai()=> {
//     console.log(`DB connected two`)
// }) ();                              <------arrow functions cant be named like this 

 (() => {
    console.log(`DB connected two`)
}) ();

/*++++++++++++++++++++++++++++++++++++++++++ NOTE +++++++++++++++++++++++++++++++++++++++++++++++++ 

when asked to write two or more iife back to back or normally, always remember to put semi colon at the end of 
every iife. why? because it will tell the executer that iife function is terminated hereafter 


*/