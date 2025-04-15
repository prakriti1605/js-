const score = 400
//console.log(score);

const balance = new Number(100.3822)
//console.log(balance); //output: [number:100]

//console.log(balance.toString())
//console.log(balance.toString().length);

//FIXED (returns a string)
/*console.log(`balance amount: ${balance} 
using fixed function ${balance.toFixed(3)}
return type: ${typeof (balance.toFixed(3))}`) */
    
//ye batata hai ki . (decimal) ke baad kitne places tak value display hogi

let digit = 492.7528
// console.log(digit.toPrecision(5))
// console.log(digit.toPrecision(2))
// console.log(digit.toPrecision(6))

const hundreds = 100000000;
console.log(hundreds.toLocaleString()) //commas laga deta hai for readability


//------------------------------------------------------------------------------

console.log(Math.random()); //0 and 1 ke beech mein values aati hai
console.log((Math.random()*10) + 1);




console.log(Math.floor(2.709));
console.log(Math.min(1,6,44,2,77,55));
console.log(Math.max(1,6,44,2,77,55));
