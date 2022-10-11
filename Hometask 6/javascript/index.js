// document.getElementById("test").innerHTML = "Last"; //1

// alert(document.getElementsByClassName("image").src = "cat.jpg"); //2

// const nodeList = document.querySelectorAll("div>p"); //3
// for (let i = 0; i < nodeList.length; i++){
//     console.log(`Selector text ${i}: ${nodeList[i].innerHTML}`);
// }

// alert(document.getElementById("list").children[0].innerText); //4
// alert(document.getElementById("list").children[4].innerText);
// alert(document.getElementById("list").children[1].innerText);
// alert(document.getElementById("list").children[3].innerText);
// alert(document.getElementById("list").children[2].innerText);

document.querySelector("h1").style.backgroundColor = "#90EE90";
document.querySelector("div>p").style.fontWeight = "bold";
document.querySelector("div>p").nextElementSibling.style.color = "red";
document.getElementById("myDiv").children[2].style.textDecoration = "underline";
document.getElementById("myDiv").lastElementChild.style.fontStyle = "italic";
// const myList = document.querySelectorAll("myList");
// for (let i=0; i<myList.lenght; i++){
//     let newArray = [];
//     newArray.push(myList[i]);
//     return newArray;
// }
// document.getElementById("myList").innerHTML = newArray;
document.querySelector("span").style.visibility = "hidden";