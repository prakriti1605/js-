let name= "hitesh has "
let repocount = 2
//console.log(name+repocount+ " repocount");

// console.log(`my name is ${name} and my repo count is ${repocount}`);
const getname= new String ('gauri');
// console.log(`name : ${getname}`);
//console.log(getname[0]);
//console.log(`length of string:${getname.length}`); //here not that .length is not a function but rather a 
//numeric property     hence getname.length()--> NO 

// console.log(`To find the value at index 3: ${getname.charAt(3)}`);


const newString = getname.substring(0,3,2);//will ignore 2
// console.log(`finding sub-string: ${newString}`);


const anotherString = getname.slice(-4)
// console.log(`using slice fn: ${anotherString}`);
// g   a    u   r   i 
// -5  -4  -3  -2  -1


const newName = "     hitesh   "
// console.log(`original: ${newName}`);
// console.log(`\n length before: ${newName.length}`);
// console.log(`using trim fun ${newName.trim()}`);
// console.log(`length after: ${newName.length}`);

let url = "https://hitesh.com/hitesh%20chai%20aur%20code";
/*Use Case: when user enters a url and includes space but we don't want
those spaces. so instead of spaces browser puts %20 in place of it */
//console.log(url.replaceAll('%20','-'));

let str = 'As sly as a fox, as strong as an ox';
let pos = 0
let foundpos;
while(foundpos != -1)
{
    foundpos=str.indexOf('as',pos);
    console.log(`found string at pos:${foundpos}`);
    pos += foundpos + 1
   
}





