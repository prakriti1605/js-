const users={
    username:"hitesh",
    price:9999,
    welcome:function(){
        // console.log(`${this.username}, welcome to my house`)
        // console.log(this) //refers to the object it is working on 
    }

}
// console.log(users.welcome())
// users.username = "tammy"
// console.log(users.welcome())
// console.log(this) //in global scope this refers to an empty object 
//BUT IF WE USE LINE NO. 13 IN BROWSER THE OUTPUT WOULD BE DIFFERENT. 'THIS' WILL REFER TO WINDOWS OBJECT




// function chai()
// {
//     // console.log(this)
// }
//chai()
//output
/*Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}
   */

// function chai()
// {
//     let username = "hitesh";
//     console.log(this.username) //undefined 
// }
// chai() this example shows that we cannot use this in functions to access varaiables 

// const chai = function ()
// {
//     let username = "hitesh";
//     console.log(this.username)
// } another declaration way 
// const chai = () =>{
//     let username = "hitesh";
//    console.log(this.username)
// }
// chai()


/* how to use arrow fucntions different ways 
 */
//basic arrow fucntion 
// const chai = (num1,num2) => {
//   return (num1+num2)
// }
// console.log(chai(5,7))

//implict way here it becoms smart to know that retrun is to be called 

const chai = (num1,num2) => (num1+num2) //will be used heavily in react 
console.log(chai(5,7)) 