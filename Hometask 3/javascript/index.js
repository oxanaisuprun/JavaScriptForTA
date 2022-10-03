// task 1
// const myArray = [2, 3, 4, 5];
// let n = 1;                                    // multiplier

// for (let i = 0; i < myArray.length; i++){    // solution with FOR loop
//     n*=myArray[i];
// }
// console.log(n);

// let i = 0;                                   // solution with WHILE loop
// while (i < myArray.length){
//     n*=myArray[i];
//     i++;
// }
// console.log(n);

// ...........................................................................



// task 2
// for (let i = 0; i <=15; i++){
//     if (i%2 == 0){
//         console.log(`${i} is even`);
//     } else {console.log(`${i} is odd`);}
// }

// ...........................................................................



// task 3
// function randArray(k) {
// const myArray = [];

//     for (let i = 0; i < k; i++){
//         myArray[i] = Math.floor((Math.random() * 499) + 1);
//     }
//     return myArray
// }
// console.log(randArray(100));

// ...........................................................................



// task 4

// function raiseToDegree(a, b){
//     let res;
//     return res = a**b;
// }
// let a = prompt("Enter a number to raise");
// let b = prompt("Enter an exponentiation");
// console.log(raiseToDegree(a,b));

// ...........................................................................



// task 5

// let myArray = [12, 14, 4, -4, 0.2];
// function findMin() {
//     let newArray  = myArray.sort(function(a, b){return a - b});
//     return newArray[0];
// }
// console.log(findMin());

// ...........................................................................



// task 6
// const arr = [3, 4, 10, -5, 5, 3];
// function findUnique(arr){
//         const distinctValues = arr.filter((x, i, a) => a.indexOf(x) == i);
//     if (arr.length == distinctValues.length){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(findUnique(arr));

// ...........................................................................



// task 7
// const arr = [3, 4, 10, -5]
// function lastElem(arr, lastIndex){
//     if (lastIndex == undefined){
//         lastIndex = 1;
//     }
//     if (lastIndex > arr.length){
//         lastIndex = arr.length;
//     }
//     for (let i = 1; i<=lastIndex; i++){
//         console.log(arr[arr.length - i]);
//     }
// }
// lastElem(arr, 8);

// ...........................................................................



// task 8
function toCapitalize(inputString){
    const arr = inputString.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0)
                        .toUpperCase() + arr[i].slice(1);
    }
    const outputString = arr.join(" ");
    return outputString;
}
console.log(toCapitalize("i love java script"));