// Task 1
// function propsCount(currentObject){
//     console.log(Object.keys(currentObject).length);
// }
// let mentor = { 
//     course: "JS fundamental", 
//     duration: 3,
//     direction: "web-development" 
// };
// propsCount(mentor);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// Task 2
// let employee = {
//     firstName: "Peter",
//     lastName: "Peterson",
//     position: "developer",
//     experience : 4,
//     salary: 2000
// }
// function showProps(obj){
//     console.log(Object.keys(obj));
//     console.log(Object.values(obj));
// }
// showProps(employee);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// Task 3
// class Person {
//     constructor (name, surname){
//         this.name = name;
//         this.surname = surname;
//     }
//     showFullName(){
//         let fullName = this.name + " " + this.surname;
//         console.log(fullName);
//     }
// }
// class Student extends Person{
//     constructor(name, surname, year){
//         super(name, surname);
//         this.year = year;
//     }
//     showFullName(middlename){
//         this.middlename = middlename;
//         let fullName = this.name + " " + this.middlename + " " + this.surname;
//         return fullName;
//     }
//     showCourse(){
//         let currentYear = new Date().getFullYear();
//         let currentCourse = currentYear - this.year;
//         return `Current course: ${currentCourse}`;
//     }
// }
// const stud1 = new Student("Petro", "Petrenko", 2015);
// console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
// console.log(stud1.showCourse()); 

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// // Task 4
// class Worker{
//     _experience = 1.2;
//     value = 1.5;
//     set showExp(value){
//         this._experience = value;
//     }
//     get showExp(){
//         return this._experience;
//     }
//     constructor (fullName, dayRate, workingDays){
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//     }
//     showSalary(){
//         let salary = this.dayRate * this.workingDays;
//         console.log(this.fullName + " salary " + salary);
//     }
//     showSalaryWithExperience(){
//         let salaryWithExperience = this.dayRate * this.workingDays * this._experience;
//         console.log(this.fullName + " salary " + salaryWithExperience);
//     }
// }

// let worker1 = new Worker("John Johnson", 20, 23);

// let worker2 = new Worker("Tom Tomson", 48, 22);

// let worker3 = new Worker("Andy Ander", 29, 23);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// // Task 5
class GeometricFigure {
    constructor(type){
        this.type = type;
    }
    getArea(){
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
   }   
}

class Triangle extends GeometricFigure {
    getArea(a,b,c){
        let p = (a + b + c)/2;
        let triangleArea = Math.sqrt(p*(p - a)*(p-b)*(p-c));
        return triangleArea;
    }
}

class Square extends GeometricFigure{
    getArea(a,b){
        let squareArea = a*b;
        return squareArea;
    }
}

class Circle extends GeometricFigure{
    getArea(r){
        const pi = Math.PI;
        let circleArea = pi* Math.pow(r, 2);
        return circleArea;
    }
}
let figure1 = new Circle ();
console.log(figure1.getArea(6));
console.log(figure1.toString());
