/*object destructure and json api 
object destructure ka mtlb instead of using long names to get value, we rename the key of object and 
use it in our program */
const course ={
    name: "football",
    price: 1599,
    duration: 3,
    courseInstructor: "hitesh"
}
//instead of fetching value by writing course.courseInstructor 
const {courseInstructor : Instructor} = course
console.log(Instructor)
//destructuring in function 
const person = {name:'ALice',city: 'LA',age:18}
function greet({ name, city }) {
    console.log(`Hello ${name} from ${city}!`);
  }
  
  greet(person); // Hello Alice from New York!
  


  /*An API (Application Programming Interface) lets you communicate with a server to send or receive data — 
  often in JSON format.
So when you call an API from JavaScript, the data you get back often looks just like an object!

fetch('https://api.example.com/user/1')
  .then(response => response.json())
  .then(data => {
    console.log(data.name); // Like accessing a JS object
  });
*/
// {
//     name:'ALice',
//     city: 'LA',
//     age:18
// }                    <-- this is how data fetched by Api and converted into json format look like 




/*
fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(data => {
    const user = data.results[0];
    const fullName = `${user.name.first} ${user.name.last}`;
    const email = user.email;
    const city = user.location.city;
    const picture = user.picture.large;

    console.log("Name:", fullName);
    console.log("Email:", email);
    console.log("City:", city);
    console.log("Photo:", picture);
  });


  {
  "results": [
    {
      "name": {
        "title": "Ms",
        "first": "Emily",
        "last": "Brown"
      },
      "email": "emily.brown@example.com",
      "location": {
        "city": "Melbourne",
        "country": "Australia"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/75.jpg"
      }
    }
  ]
}

*/