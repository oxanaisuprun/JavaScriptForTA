// // task 2

// const lastName = "Suprun";
// console.log(lastName);

// ..............................................



// // task 3
// let firstVar = 42;
// let secondVar = "The answer";
// console.log(firstVar, secondVar);

// firstVar = secondVar;
// console.log(firstVar, secondVar);

// ..............................................



// // task 4
// let fightDate;
// const fighter = {
//     nickname: "Rowdy",
//     weight: 62,
//     isDefited: true,
//     latestFight: fightDate,
//     win: null,
//     bySplit: "win"*3,
//     };
// console.log(fighter);

// ..............................................



// // task 5
// let isAdult = confirm("Are you older than 18?");
// console.log(isAdult);

// ..............................................



// // task 6
// const myName = "Oksana";
// const myLastName = "Suprun";
// const myGroup = "JS for TA";
// const myBirthYear = 1989;
// let  isMarried = true;

// console.log(typeof myBirthYear, typeof isMarried, typeof myName);
// let myCar = null;
// let numberOfKids;

// console.log(typeof numberOfKids, typeof myCar);

// ..............................................



// // task 7
// let userLogin = prompt("Please enter your user login");
// let userEmail = prompt("Please enter your e-mail");
// let userPassword = prompt("Please enter your password");
// console.log(`Dear ${userLogin}, your email is ${userEmail}, your password is ${userPassword}`);

// ..............................................



// // task 8
const secInMin = 60;
const minInHour = 60;
const hourInDay = 24;
let daysInMonth = prompt("Enter days in month");
let secInHour = secInMin * minInHour;
let secInDay = secInHour * hourInDay;
let secinMonth = secInDay * daysInMonth;
console.log(`Seconds in a minute is ${secInMin}, \nSeconds in an Hour is ${secInHour}, \nSeconds is a day is ${secInDay}, \nSeconds in a month is ${secinMonth}`); 