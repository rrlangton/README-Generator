// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
    {
      type: "input",
      message: "What's your project's title?",
      name: "title",
    },
    {
      type: "input",
      message: "Write a description of your project (what?, why?, how?)",
      name: "description",
    },
    {
        type: "input",
        message: "How can I use this application? (include video links and screen shots)",
        name: "usage",
      },
    {
        type: "input",
        message: "How do I install or run the project/application?",
        name: "installation",
      },
      {
        type: "input",
        message: "What sources did I use?",
        name: "sources",
      },
  ])

// TODO: Create a function to write README file
function fs.writeToFile('index.js', data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
