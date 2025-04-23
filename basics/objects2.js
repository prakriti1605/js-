/*two ways to craete objects 1. using literal which creates non singleton 2. using constructor ->singleton 
*/
// const tinderUser = new Object() //constructor method ->singleton 
const tinderUser = {} // literal-> singleton
tinderUser.id = 57777
tinderUser.name = {username: 
    {
        fullname :
        {firstname: 'hitesh',
         middlename:'raj', 
         lastname:'choudhary'}
    }
}
//console.log(tinderUser.name.username.fullname.middlename)
tinderUser.isLoggedIn = false

const obj1 = {1:'a',2:'b', 3:'c'}
const obj2 = {4:'g',5:'w', 6:'t'}
//const obj3 = {obj1, obj2}
const obj3 = Object.assign({},obj1,obj2) //good notation, will not be used as much
const obj4 = {...obj1,...obj2}  //spread function 
// console.log(obj3)

const users = [
    {
        id : 481070,
        email : 'hotapp@gamil.com'
    },
    {
        id : 4848370,
        email : 'hotng@gamil.com',
    },
    {
        id : 1641070,
        email : 'hottt@gamil.com'
    },
    {
        id : 4842490,
        email : 'hot12@gamil.com'
    }
]//usually when we will get data from database it will  be in the form of array of objects
// console.log(users[2].email)

// console.log(Object.keys(tinderUser)); // will return an array of keys
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)) //will return key value pairs in the form of array
//console.log(Object.hasOwnProperty(tinderUser.isLoggedIn)) // you know that keys are stored in the form of strings hence 
console.log(tinderUser.hasOwnProperty('isLoggedIn'))