//for loop
let array = [2,5,15,7,52,16,73,42]
for (let index = 0; index < array.length; index++) {
   // const element = array[index];
    
}
//for of loop
// for (const element of object) {
    
// }
// let greetings = "hello world"
// for (const greet of greetings)
// {
//     console.log(greet)
// }

//MAPS -contains unique values, ordered ,key value pairs 
const map1 = new Map()
map1.set('in',"india")
map1.set('us',"United states of America ")
map1.set('FR',"France")
map1.set('in',"india")

//console.log(map1)
// for (const [ele,value] of map1) //called destructuring
// {
//    console.log(value)
// }

const myobj = {
   game1: 'nts',
   game2:'pubg',
}
// for (const element of myobj) {
//    console.log(element)
// } --------this doesn't work 

//for accessing objects we use for in loop
// for (const key in object) {
//    if (Object.prototype.hasOwnProperty.call(object, key)) {
//       const element = object[key];
      
//    }
// } ----------------------------------------------------------- syntax

for (const key in myobj) { 
      // console.log(myobj[key]); //print value 
      // console.log(key) //print key 
   }

   const arr = ["java","cpp","ruby","python"]
   for (const key in arr) {
      // console.log(key) //output - 0,1,2,3
      // console.log(arr[key]) //array values will be output
   }

   //for each loop
   arr.forEach(function(val) {
      console.log(val);
   });
