// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Function to generate README content
function generateReadme(answers) {
    // Implement the logic to generate README content based on user answers
    // Example:
    return `
# ${answers.title}

## Description
${answers.description}

## Usage
${answers.usage}

## Installation
${answers.installation}

## Sources
${answers.sources}
`;
}

// Function to initialize app
function init() {
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
        .then((answers) => {
            const readmeContent = generateReadme(answers);

            fs.promises.writeFile('README.md', readmeContent)
                .then(() => console.log('Successfully created README.md!'))
                .catch((err) => console.error(err));
        })
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();

