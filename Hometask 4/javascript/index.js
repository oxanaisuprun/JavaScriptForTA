//Task 1
// function calcRectangleArea(width, height){

//     try { 
//         if(width == "" || height == "")  throw "You did not enter one or both values";
//         if(isNaN(width) || isNaN(height)) throw "Entered value is not a number";
//         console.log("Rectangle area is: " + width * height);
//       }
//       catch(err) {
//        console.log(err)
//       }

// }
// let width = prompt("Enter width");
// let height = prompt("Enter height");
// calcRectangleArea(width,height);

// ..............................................................................................



//Task 2
// function checkAge(){
//     let age = prompt("How old are you?", "13");
//     try{
//         if (age == "") throw "The field is empty! Please enter your age";
//         if (isNaN(age)) throw "Age should be a number";
//         if (age < 14) throw "You are not allowed to watch this";
//         alert ("Enjoy your movie!");
//     } catch (err){
//         alert(err);
//     }
// }
// checkAge();

// ..............................................................................................



//Task 3
class MonthException {
    constructor(message) {
        this.message = message;
    }
    exceptionMessage() {
        console.log("Incorrect month number");
    }
}
function showMonthName(month) {
    try {
        if (month == "" || month > 12 || month < 1 || isNaN(month)) throw MonthException.exceptionMessage;
        switch (month) {
            case 1:
                return "January";
                break;
            case 2:
                return "Fabruary";
                break;
            case 3:
                return "March";
                break;
            case 4:
                return "April";
                break;
            case 5:
                return "May";
                break;
            case 6:
                return "June";
                break;
            case 7:
                return "July";
                break;
            case 8:
                return "August";
                break;
            case 9:
                return "September";
                break;
            case 10:
                return "October";
                break;
            case 11:
                return "November";
                break;

        }
    } catch (error) {
        return error;
    }
}
console.log(showMonthName(14)); 