
if(true)
{
    const a = 4
    let b = 5
    var c = 8 //global scope
}
//console.log(a) //error
//console.log(b) //error
//console.log(c)

function one()
{
    const username = "hitesh"

    function two()  //here this function is a child function (parent->one)
    {
        const website = "youtube"
        console.log(username) // child functions can access parent function varaiables because for them
        // fn one is global scope 
    }
    //console.log(website)
    two()
}
one()

//+++++++++++++++++++++++++++++++++++ hoisting/interesting ++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(7)) // here also we are calling function before declaring it but still this is working 
// this sis called hoisting 
function addone(num)
{
    return(num+1)
}
//console.log(addone(7))  this will run normally 

console.log(result(5)) // this will result in error because we are calling function before declaring it 
const result = function (num)
{
    return (num+2)
}
// console.log(result(5))
