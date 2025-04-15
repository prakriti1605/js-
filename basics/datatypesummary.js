/*primitive 
string, number, boolean ,null , undefined, symbol, BigInt

Reference (non primitive)
array,objects,functions
*/
const score = 100
const scoreval =100.4

const temp=null //this maybe gets a value from server and
//when server cannot return a value, it cannot store 0 as 0 is a temperature
 let useremail; //has undefined datatype


 //---------------------------------------------------------------------------------------------------------
 /*stack stores primtive datatypes---- returns a copy of the value
 heap- non primitive ----returns a refernce to the value(original mein changes honge) */
let userone = {
    email:"user@google.com",
    upi: "user@ybl"
} //this is a non primtive type and hence uses heap
let usertwo = userone;
usertwo.email="rehan@google.com"
console.log(usertwo.email)
console.log(userone.email)
