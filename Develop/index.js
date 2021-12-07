// // TODO: Include packages needed for this application
const inquirer = require('inquirer');

// // TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            
            }
        },
        {
            type: 'input',
            name: 'decription',
            message: 'Provide a description of your project. (Required)',
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide step by step instructions on how to get the development environemnt running (Required)',
            validate: projectInstallation => {
                if (projectInstallation) {
                    return true;
                } else {
                    console.log('Please enter installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. (Required)',
            validate: projectUsage => {
                if(projectUsage) {
                    return true;
                } else {
                    console.log('Please provide instructions and examples for use!');
                } return false;
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators, with links to their Github profiles',
            validate: projectCredits => {
                if(projectCredits) {
                    return true;
                } else {
                    console.log('Please provide your collaborators!');
                } return false;
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide test instructions and examples of how to run them',
            validate: projectTests => {
                if(projectTests) {
                    return true;
                } else {
                    console.log('Please provide test instructions & examples!')
                } return false;
            }
        }
    ]);
};

questions();

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

