// task 1

// let  x = 1;
// let y = 2;

// let res1 = String(x) + String(y);
// console.log(res1);
// console.log(typeof res1);

// let res2 = Boolean(x) + String(y);// Допишіть код, необхідно використовувати змінні x і y
// console.log(res2); // "true2"
// console.log(typeof res2); // "string"

// let res3 = Boolean(y-x);// Допишіть код, необхідно використовувати змінні x і y
// console.log(res3); // true
// console.log(typeof res3); // "boolean"

// let res4 = ((x-x)/(y-y));// Допишіть код, необхідно використовувати змінні x і y
// console.log(res4); // NaN
// console.log(typeof res4); // "number"

// ...............................................................................................



 // task 2

// let inputNumber = prompt("Enter a number");
// let isLogged = false;
// if (inputNumber%2 == 0 && inputNumber>0){
//     isLogged = true;
//     console.log(`${inputNumber} is positive even`);
// }
// if (inputNumber%7==0){
//     console.log(`${inputNumber} is a multiple of 7`);
//     isLogged = true;
// }
// if (isLogged==false){
//     console.log("Try harder!!!");
// }

// task 3
// let newArray = [];
// newArray[0] = 5;
// newArray[1] = "Allons-y!";
// newArray[2] = true;
// newArray[3] = null;
// console.log(newArray.length);

// newArray[4] = prompt("Enter any value");
// console.log(newArray[4]);


// newArray.shift(newArray);
// console.log(newArray);


// ...............................................................................................



// task 4
// let cities = ["Rome", "Lviv", "Warsaw"]; 
// res = cities.join("*");
// console.log(res);

// ...............................................................................................



// task 5
// let isAdult = prompt("Are you adult?", "y/n");
// if (isAdult=="y"){
//     console.log("You're are an adult");
// }
// if (isAdult=="n"){
//     console.log("You're to young")
// }

// ...............................................................................................



// task 6
// let sideA = prompt("Enter side A");
// let sideB = prompt("Enter side B");
// let sideC = prompt("Enter side C");
// let p = (sideA + sideB + sideC)/2;
// let triangleSquare = Math.sqrt(p*(p - sideA)*(p-sideB)*(p-sideC)); // calculate square
// if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)){
//    console.log("Incorrect data");
// }else{
//    console.log(Number(triangleSquare).toFixed(3));
//     if (sideA ** 2 == sideB**2 + sideC**2 || sideB ** 2 == sideA**2 + sideC**2  || sideC ** 2 == sideB**2 + sideA**2  ){
//     console.log("This is right triangle");
//    }else{
//    console.log("This is not right triangle");
//    }
// }

// ...............................................................................................


// task 7
let current = new Date ();

let timeNow = current.getHours();
console.log(timeNow);
// if (timeNow> 5 && timeNow <= 11){                 //method 1
//    console.log("Good morning!");
// }
// else if (timeNow > 11 && timeNow <= 17){
//    console.log("Good afternoon!");
// }
// else if (timeNow > 17 && timeNow <= 23){
//    console.log("Good evening!");
// }
// else {
//    console.log("Good night!");
// }

switch (timeNow){                                   // method 2
   case 6:
   case 7:
   case 8:
   case 9:
   case 10:
   case 11:
      console.log("Good morning!");
      break;
   case 12:
   case 13:
   case 14:
   case 15:
   case 16:
   case 17:
      console.log("Good afternoon!");
      break;
   case 18:
   case 19:
   case 20:
   case 21:
   case 22:
   case 23:
      console.log("Good evening!");
      break;
   default:
      console.log("Good night!")
}