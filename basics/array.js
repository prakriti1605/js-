//heterogeneous 
//resizable
//create shallow copy-share same reference point mtlb original array mein bhi change hoga 
let arr=[1,2,3,4,5,6]
arr[8] = 10
// console.log(arr)       // [ 1, 2, 3, 4, 5, 6, <2 empty items>, 10 ]



let arr1 = arr.slice(1,3)
// console.log('B ', arr1)     //B  [ 2, 3 ]
// console.log('A ',arr)      //returns original array



let arr2 = arr.splice(1,3) 
// console.log('C ',arr2) //will show the sliced part    C [2,3,4]
// console.log('A ',arr) // will show the original array with the sliced part removed from it  A [1,5,6,<2 empty items>,10]



 //spread fn is used in place of concat 
 const author = ["woolf","roy","sidney sheldon","alex"]
const publications = ["penguin","harpercollins"]
let newarr = [...author,...publications] /*spread fn- merge two arrays such that their elements become elements of new array  */
// console.log(newarr)




let arr3 = [1,2,[3,4,5],[4,6,3,[2,8,7,[3]]]] //even though such cases are rare, use flat function 
// console.log(arr3)
// console.log(arr3.flat(Infinity))


let arr4 = [1,3,8]; 
arr4.push(2,3,6,4); arr4.unshift(12,16)//add values at the beginning of array, not much usable because it shifts all the elements
console.log(arr4)


// console.log(Array.isArray("hitesh"))
// console.log(Array.from("HITesh"))        //we can create array from an iterable like string
// Array.push("chai")
 console.log(Array.from({name:"hitesh"})) //gives empty array because doesn't know ki array kiski banani hai key ki ya value ki

score1 = 100; score2 = 120; score3 = 103
console.log(Array.of(score1,score2,score3));