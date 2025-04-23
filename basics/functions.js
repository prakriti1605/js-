function add (num1,num2) //---- here they are called parameters
{
    return (num1+num2)
}
const res = add(3,4) //----here they are called arguments
// console.log(res);
// console.log(add()) //NaN because we have not given any value to the parameters
function isLoggedIn (username){
    if(!username)       //or (username === undefined) will give same result (=== checks datatype and value both)
    {
        console.log("please enter a username ")
        return
    }
    return(`${username} just logged in `)
}
// console.log(isLoggedIn()) //undefined just logged in 

/********************************************************************************************************* */
//This type of situation comes in shopping cart when we dont know how many items we will pass in fucntion
function calculateCartPrice(...num1) //rest operator -> same as spread operator, name changes as per use 
{
    return (num1)
}
console.log(calculateCartPrice(100,200,539,487,317,2000))   //[ 100, 200, 539, 487, 317, 2000 ]
const user = {
    name: "archie",
    age:17
}
function fetchData(anyobject)
{
    console.log(`welcome ${anyobject.name} to Amazon shopping.You are ${anyobject.age} years old`)
}
fetchData(user)