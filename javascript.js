
// // let users = [ 
// //     { 
// //         id: Math.random(), 
// //         name: 'Timur', 
// //         info: { 
// //             school: '90', 
// //             faculity: 'SMM' 
// //         }, 
// //     }, 
// //     { 
// //         id: Math.random(), 
// //         name: 'Imran', 
// //         info: { 
// //             school: '50', 
// //             faculity: 'programming' 
// //         }, 
// //     }, 
// //     { 
// //         id: Math.random(), 
// //         name: 'Aminjon', 
// //         info: { 
// //             school: '100', 
// //             faculity: 'Dizayn' 
// //         }, 
// //     }, 
// //     { 
// //         id: Math.random(), 
// //         name: 'Maxmud', 
// //         info: { 
// //             school: '60', 
// //             faculity: '3dsmax' 
// //         }, 
// //     }, 
// //     { 
// //         id: Math.random(), 
// //         name: 'Muxammad', 
// //         info: { 
// //             school: '70', 
// //             faculity: 'Backend' 
// //         }, 
// //     }, 
// //     { 
// //         id: Math.random(), 
// //         name: 'Timur', 
// //         info: { 
// //             school: '80', 
// //             faculity: 'SMM' 
// //         }, 
// //     }, 
// //     { 
// //         id: Math.random(), 
// //         name: 'Ikrom', 
// //         info: { 
// //             school: '50', 
// //             faculity: 'programming' 
// //         }, 
// //     }, 
// //     { 
// //         id: Math.random(), 
// //         name: 'Azizjon', 
// //         info: { 
// //             school: '40', 
// //             faculity: 'Dizayn' 
// //         }, 
// //     }, 
// //     { 
// //         id: Math.random(), 
// //         name: 'Maxmud', 
// //         info: { 
// //             school: '30', 
// //             faculity: '3dsmax' 
// //         }, 
// //     }, 


// // users.sort((a,b) =>  a.name.localeCompare(b.name)) 
// // console.log(users);


// // 1) a ga true larni qushamiz 
// // 2) b ga false larni qushamiz 
// // 3) id ni Randomli bo'lsin 0-100 
// let arr = [
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "delectus aut au`tem",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 2,
//         "title": "quis ut nam facilis et officia qui",
//         "completed": true
//     },
//     {
//         "userId": 1,
//         "id": 3,
//         "title": "fugiat veniam minus",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 4,
//         "title": "et porro tempora",

//         "completed": true
//     },
//     {
//         "userId": 1,
//         "id": 5,
//         "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 6,
//         "title": "qui ullam ratione quibusdam voluptatem quia omnis",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 7,
//         "title": "illo expedita consequatur quia in",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 8,
//         "title": "quo adipisci enim quam ut ab",
//         "completed": true
//     },
//     {
//         "userId": 1,

//         "id": 9,
//         "title": "molestiae perspiciatis ipsa",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 10,
//         "title": "illo est ratione doloremque quia maiores aut",
//         "completed": true
//     },
// ]

// arr.forEach((item) => {

//     if (item.completed === true) {
//         a.arr.push(item)
//      }

//     else if (item.completed === false) {
//         b.arr.push(item)
//     }
// else{

// })


// })
// let a = { 
//     count: 0, 
//     arr: [] 
// } 

// let b = { 
//     count: 0, 
//     arr: [] 
// }
// console.log(a);
// console.log(b);

// let user1 = {
//     name: 'javoxir',
//     lastname: 'sobirov',
//     age: 15,
//     weight: 71,
//     height: 191,
//     location: "Oqmachit sila",
//     fullName: function () {
//         return user1.name + " " + user2.name
//     }
// }

// let user2 = {
//     name: 'jaxongir',
//     lastname: 'noseev',
//     age: 15,
//     weight: 59,
//     height: 171,
//     location: "Oqmachit sila"
// }
// let newObj = Object.assign(user1, user2)
// console.log(newObj);
// console.log(user1.fullName());
// name-5, lastname-5, fullName(), age, isMerred: boolen, car: {2} 

let user = new Object();


let name = prompt('Enter Your Name !');
let lastname = prompt('Enter your lastname !');
let age = +prompt('How old are you ?')
let isMerried = prompt('Are you merried ?')
let car = prompt("Qaysi mashinani yoqtirasan ?")
// let favcar = {
//        car:{BMW:'BMW',MERS:'MERS',}
// }

if (name.length > 5) {
    user.name = name;

} else {
    console.log("Ismingizni harfi 5 tadan ko'p bo'lishi kerak!");
}


if (lastname.length > 5) {
    user.lastname = lastname;
} else {
    console.log("Sizning familyangiz 5 ta harfdan ko'p bo'lishi kerak !");
}

if (age >= 12) {
    user.age = age;
}
else {
    console.log("sen hali go'daksan tez orada katta bo'lasan !");
}
if (isMerried.length >= 4) {
    console.log("qachon uylanding yigitcha ?");
    user.isMerried = isMerried;
} else {
    console.log("uylanmaysanmi ?");
}
if (car = "BMW" || "MERS" || "GENTRA") {
    console.log("ha bu mashina bor");
    user.car = car;
} else {
   console.log('bunday mashinani men bilmayman'); 
}



console.log(user);