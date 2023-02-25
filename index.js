const inquirer = require('inquirer');
const SVG = require("./lib/SVG.js") 
const {Circle, Triangle, Square} = require("./lib/shape.js")
const fs = require("fs")

inquirer.prompt([
    {
        type: "input", 
        name: "text",
        message: "Answer the text for the logo (must not be longer than 3 characters)" 
    },
    {
        type: "input",
        name: "color",
        message: "Enter a text color" 
    },
    {
        type: "list",
        name: "shape",
        message: "Select a shape",
        choices: ["Circle", "Triangle", "Square"] 
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What is the shape color"
    }


])
.then((answers) => {
    console.log(answers)
    let shape;
    if (answers.shape === "Circle"){
    console.log("this worked")
    
    shape = new Circle()
    }
    else if (answers.shape === "Triangle"){
        console.log("this worked too")
         shape = new Triangle()
    }
    else if (answers.shape === "Square") {
        console.log("this worked too")
         shape = new Square()
    }
   shape.setColor(answers.shapeColor)
   console.log(shape)
   const svg = new SVG()
   svg.setText(answers.text , answers.color)
   svg.setShape(shape)
   fs.writeFileSync("logo.svg" , svg.render())
})
 