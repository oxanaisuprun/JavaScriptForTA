// Task 1
// let newWindow = window.open("http://127.0.0.1:5500/", "New Window", "width=300, height=300");
// function toResize(){
//     newWindow.resizeTo(500, 500);
// }
// function toMove(){
//     newWindow.moveTo(200, 200);
// }
// function toClose(){
//     newWindow.close();
// }
// (newWindow).setTimeout(toResize, 2000);
// (newWindow).setTimeout(toMove, 4000);
// (newWindow).setTimeout(toClose, 6000);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//Task 2
function changeCSS(){
    document.querySelector("#text").style.color = "orange";
    document.querySelector("#text").style.fontSize = "20px";
    document.querySelector("#text").style.fontFamily = "Comic Sans MS";
}


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//Task 3
function makeBlue(){
    document.body.style.backgroundColor = "blue";
}
function makePink(){
    document.body.style.backgroundColor = "pink";
}
function makeBrown(){
    document.body.style.backgroundColor = "brown";
}
function makeWhite(){
    document.body.style.backgroundColor = "white";
}
function makeYellow(){
    document.body.style.backgroundColor = "yellow";
}


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//Task 4
function deleteSelection(){
   let newValue = document.getElementById("names")
    newValue.remove(newValue.selectedIndex);
}


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//Task 5
function onPress(){
    document.querySelector("#button_event").innerHTML =  "I was pressed";
}
function mouseOn(){
    document.querySelector("#button_event").innerHTML =  "Mouse on me!";
}
function mouseOff(){
    document.querySelector("#button_event").innerHTML =  "Mouse is not on me!";
}


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//Task 6
function changeSize(){
    document.querySelector("#resize").innerHTML = `Width: ${window.innerWidth},  Height: ${window.innerHeight}`;
}
window.onresize = changeSize;



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//Task 7
let citiesByCountry = {
    usa: ["New York", "Washington", "Boston", "Chicago"],
    ger: ["Berlin", "Hamburg", "Munich ", "Koblenz"],
    ukr: ["Kharkiv", "Kyiv", "Odessa", "Khmelnitsky"]
  };
  
  function onCountryChanged() {
    document.getElementById("cities").innerHTML = "";
    let country = document.getElementById("country").value;
    let cities = citiesByCountry[country];
    for (let i = 0; i < cities.length; i++) {
        let option = document.createElement("option");
        option.innerText = cities[i];
        // option.attributes.setNamedItem("value", cities[i]);
        document.getElementById("cities").append(option);
        onCityChanged()
    }
  }
  onCountryChanged();
  
  function onCityChanged() {
        let countryEl = document.getElementById("country");
        let country = countryEl.options[countryEl.selectedIndex].text;
        let city = document.getElementById("cities").value;
        document.getElementById("selectedCity").innerText = country + ": " + city;
  };