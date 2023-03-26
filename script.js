// fetch("data/projects.json")
// .then(data => data.json)
// .then(getData)

// function getData(data) {
//     console.log(data.projectID)
// }

const myData = "data/projects.json"
const myObject = JSON.parse(myData)
console.log(myObject)
console.log(myObject.projectID)