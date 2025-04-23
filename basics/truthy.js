//falsy values
// 0, false, -0, null , undefined , NaN

//truthy values
// "0", "false", " ", [], fucntion(){}

//checking empty array
const useremail = "ritu@ai.com"
if(useremail.length === 0 )
{console.log("empty array")}

//checking empty object 
const newobj= {};
if(Object.keys(newobj).length == 0 )
{
    console.log("empty object")
}

//Nullish coalescing operator (??)
let val1 
//val1 = 5??10
 //val1 = null ?? 10
val1 = undefined ?? 74 
//mostly used for database operations. when we request from api and want to know if what value has been returned.


console.log(val1)