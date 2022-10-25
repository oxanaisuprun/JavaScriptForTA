// Task 1
// function upperCase(value){
//     if (/^[A-Z]/.test(value)){
//       return 'String starts with upper case';
//     }
//     if (/^[a-z]/.test(value)){
//         return 'String starts with lower case';
//       }
//   }

//   console.log(upperCase("RegExp"));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//Task 2
// function checkEmail(value){
//     if(/[@]/.test(value)){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(checkEmail("Qmail2@gmail.com"));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//Task 3
// let value = "cdbBdbsbz";
// let result = value.match(/d[bB]+d/g);
// console.log(result);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//Task 4
// let newStr = "Java Script";
// let resStr = /(\b\w+\b)\s(\b\w+\b)/.exec(newStr);
// let result = `${resStr[2]}, ${resStr[1]}`;
// console.log(result);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//Task 5
// function checkCard (value) {
//     if (/^\d{4}-?\d{4}-?\d{4}-?\d{4}$/.test(value)){
//         return "Card number is valid";
//     }
// }
// console.log(checkCard("9999-9999-9999-9999"));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//Task 6
// function checkEmail (value) {
//     if (/^\w+([\.-_]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(value)) {                 
//         return "Email is correct!";
//     }else{ 
//         return "Email is not correct!";
//     }
// }
// console.log(checkEmail("#my_mail@gmail.com'"))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//Task 7
function checkLogin (value) {
    console.log(/^([a-z0-9]|[-._](?![-._])){2,10}$/g.test(value));
}
checkLogin("1ee1.1ret3");