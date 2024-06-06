// var bunnies = ['Lucy', 'Tom', 'Molly']

// console.log(bunnies[0]);


// function bunny(a,b) {
//   const total =  a+b;
//   return total;
// }


// console.log(bunny(6,7));

// let bunnyJSON = '{"name":"Lucy","age":3,"isHappy":true}';
// let bunny = JSON.parse(bunnyJSON);
// console.log(bunny);


// for(let i =0 ;
//     i<=20 ; i++) {
//         console.log(i);
//     }

//     let i = 0
//     while(i < 2000) {
//         console.log(i);
//         i++;
//     }

//     function evaluteGrade(grade) {
//        let message;
       
//        switch (grade) {
//     case "A":
//         message = "(Exellent)";
//         break;
//     case "B":
//         message = "(Good)";
//         break;
//     case "C":
//         message = "(average)";
//     break;
//     case "D":
//         message = "(Poor)";
//         break;
//     case "F":
//         message = "(Fail)";
//         break;
//     default:
//         message = "(Invalid Grade)";
//        }
//    return message;
//     }

//     console.log(evaluteGrade("A"));

// Template Literals

// const age = 15;
// const name = "tutor";

// console.log(`my name is ${name} and i am ${age} years old`);


// const age = "18"

// if (age === 18){
//     console.log("you can apply for your license");
// } else {
//     console.log("you cant apply for your license come back later when youre old enough");
// }

// const username = "ATBTech"
// const password = "passwor";

// if (username !== "ATBTech") {
//     console.log("check your username");
// }else if ( password !== "password"){
//     console.log("check your password");
// }else{
//     console.log("you are logged in");
// }


// const number = 23

// if (number % 2 == 0) {
//     console.log("it is an even number");
// } else {
//     console.log("it is a odd number");
// }

// console.log(__filename);


// function greet(){
//     console.log("run every 1 second");
// }

setInterval(greet, 3000)
var time = 0
function sayHello() {
    time = time + 1
    console.log( time + " seconds have elapsed");

    if(time > 10) {
        clearInterval(timer)
    }
 }
 
 // Call the sayHello function every 3 seconds
 timer = setInterval(sayHello, 1000);
 
