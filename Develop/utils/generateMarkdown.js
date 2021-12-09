//Returning a license badge
function renderLicenseBadge(license) {
    if(license === 'Apache'){
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    }
    if (license === 'MIT') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    }
    if (license === 'GNU') {
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    }
    if (license === 'No license') {
      return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink() {
//   if(license === 'Apache') {
//     return "This is covered under the Apache license. ";
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//generates MARKDOWN for the readme
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  # ${data.name}

## Description 
  ${data.description}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation
${data.installation}

## Usage 
${data.usage}


## License


## Contributing
${data.credits}


## Tests
${data.tests}

## Questions
My github profile: www.github.com/${data.github} <br>
If you have any further questions about this project contact me at: <br>
 ${data.email}



`;
}

module.exports = generateMarkdown;
