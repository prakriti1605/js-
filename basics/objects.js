//object literals -> not singleton
//when made through constructors -> singleton  object.create

//object literals 
const mysym = Symbol("key1"); //primitve datatype
const jsuser={
    name:"hitesh",
    age:18, 
    'location of':"Jaipur",
    islooggedin: false, 
    'email_id':"hitesh12@gmail.com",
    [mysym]:'mykey1'

}
//accessing object values

// console.log(jsuser["email_id"])
// console.log(jsuser.email_id) 
// console.log(jsuser.'location of')
// console.log(jsuser['location of'])
// console.log(jsuser[mysym])
// console.log(jsuser)
jsuser.email_id = "hitesh22@sky.com"
//Object.freeze(jsuser); // doesn't allow changes
jsuser.email_id = "hitesh22@chatgpt.com"
//console.log(jsuser)

//we can define functions as values too in objects
jsuser.greeting = function(){console.log("hello JsUser")}
// console.log(jsuser.greeting) //output-> [Function (anonymous)]
// console.log(jsuser.greeting()) // output-> hello JsUser

jsuser.greeting2 = function(){
    console.log(`hello JsUser ${this.name}`) //this is used to access key value pairs of the same object
}//discussed later
console.log(jsuser.greeting2())
console.log(jsuser)