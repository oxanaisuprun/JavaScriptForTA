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
// class MonthException {
//     constructor(message) {
//     this.message = message;
//     this.name = "MonthException";
//     }
// }
// function showMonthName(month) {
//     const monthes = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     try {
//         if(month>monthes.length || month<1 || isNaN(month)){
//      throw new MonthException('Incorrect month number');
// }
//         return monthes[month-1];
//     } catch (error) {
//         errorMessage = error.name + " " + error.message;
//         return errorMessage;
//     }
// }
// console.log(showMonthName(1)); 


// // Task 4
function showUser(id){
    try{
        if (id < 0) {
        throw `ID must not be negative: ${id}`;
    }
        let user = {
        id: id,
        }
        return user;
    }catch(error){
        return error;
    }
}
function showUsers(ids){
    const myArr = ids;
    let newArr = [];
    for (let i=0; i<myArr.length; i++){        
            newArr.push(showUser(myArr[i]));
        }
        console.log(newArr);
    }
    
showUsers([7, -12, 44, 22]);