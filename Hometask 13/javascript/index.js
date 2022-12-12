//Task 1
// function getPromise (message, delay){
//    return new Promise((resolve) => {
//       setTimeout (function(){
//          resolve(message);
//       }, delay);
//    })
// }

// getPromise ("Test promise", 2000).then(function(data){
//    console.log(data);
// });

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



//Task 2

// function calcArrProduct(someArray){
//    return new Promise ((resolve, reject) => {
//       let res = 1;
//       for (let i = 0; i < someArray.length; i++){
//          if (typeof someArray[i] == "number"){
//             res *= someArray[i];
//          }else{
//             reject ("Error! Incorrect array!");
//         }
//       }
//       resolve(res);
//    });
// }

// calcArrProduct([3,4,5]).then(result => console.log(result)); // 60 

// calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result)); 

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



//Task 3
// const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time)); 

// function showNumbers() { 

// for (let  i =  0,  p = Promise.resolve(0); i<=10; i++){
//    const time = Math.floor(Math.random() * 3) * 1000; 
//    p = p.then(() =>
//    delay(i, time).then((result) => {
//       console.log(`result = ${result}, delay = ${time/1000} sec`);
//       })
//       );
//    }
// } 

// showNumbers(); 

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



//Task 4
const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

async function showNumbers(){
   for (let i = 0; i <= 10; i++){
      await delay (i, Math.random() * 2000);
      console.log(i);
   }
}
showNumbers();