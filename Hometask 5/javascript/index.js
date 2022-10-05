function propsCount(currentObject){
    console.log(Object.keys(currentObject).length);
}
let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};
propsCount(mentor)