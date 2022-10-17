// Task 1
// document.getElementById("test").innerHTML = "Last"; 
// document.querySelector("div").innerHTML = "Last";

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




// Task 2
// alert(document.getElementsByClassName("image").src = "cat.jpg"); 

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




// Task 3
// const nodeList = document.querySelectorAll("div>p"); 
// for (let i = 0; i < nodeList.length; i++){
//     console.log(`Selector text ${i}: ${nodeList[i].innerHTML}`);
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>





// Task 4
// alert(document.getElementById("list").children[0].innerText); 
// alert(document.getElementById("list").children[4].innerText);
// alert(document.getElementById("list").children[1].innerText);
// alert(document.getElementById("list").children[3].innerText);
// alert(document.getElementById("list").children[2].innerText);

// alert(document.querySelector("#list").children[0].innerHTML);
// alert(document.querySelector("#list").children[4].innerHTML);
// alert(document.querySelector("#list").children[1].innerHTML);
// alert(document.querySelector("#list").children[3].innerHTML);
// alert(document.querySelector("#list").children[2].innerHTML);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




// Task 5

// document.querySelector("h1").style.backgroundColor = "#90EE90";
// document.querySelector("div>p").style.fontWeight = "bold";
// document.querySelector("div>p").nextElementSibling.style.color = "red";
// document.getElementById("myDiv").children[2].style.textDecoration = "underline";
// document.getElementById("myDiv").lastElementChild.style.fontStyle = "italic";
// document.querySelector("span").style.visibility = "hidden";

// let newValue = document.getElementById("myList").children[0].innerText + document.getElementById("myList").children[1].innerText + document.getElementById("myList").children[2].innerText;
// document.getElementById("myList").innerHTML = newValue;


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




// Task 6
// let myInput1 = prompt("Input 1");
// let myInput2 = prompt("Input 2");
// document.getElementById("input1").value = myInput1;
// document.getElementById("input2").value = myInput2;
// function shuffleValues() {
//     document.getElementById("input1").value = myInput2;
//     document.getElementById("input2").value = myInput1;
//   }

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  
  
  
  
  // Task 7
let newMain = document.createElement("main");
newMain.className = "mainClass check item";
let newDiv = document.createElement("div");
newDiv.id = "myDiv";
newMain.appendChild(newDiv);
newDiv.insertAdjacentHTML('afterend', '<p>First paragraph</p>');
console.log(newMain);