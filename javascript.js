

let user = new Object();


let name = prompt('Enter Your Name !');
let lastname = prompt('Enter your lastname !');
let age = +prompt('How old are you ?')
let isMerried = prompt('Are you merried ?')
let car = prompt("Qaysi mashinani yoqtirasan ?")


if (name.length > 5) {
    user.name = name;
    if (lastname.length > 5) {
        user.lastname = lastname;
        if (age >= 12) {
            user.age = age;
            if (isMerried.length >= 4) {
                console.log("qachon uylanding yigitcha ?");
                user.isMerried = isMerried;
                if (car = "BMW" || "MERS" || "GENTRA") {
                    console.log("ha bu mashina bor");
                    user.car = car;
                } else {
                    console.log('bunday mashinani men bilmayman');
                }
            } else {
                console.log("uylanmaysanmi ?");
            }
        }
        else {
            console.log("sen hali go'daksan tez orada katta bo'lasan !");
        }
    } else {
        console.log("Sizning familyangiz 5 ta harfdan ko'p bo'lishi kerak !");
    }
}
else {
    console.log("Ismingizni harfi 5 tadan ko'p bo'lishi kerak!");
}
console.log(user);