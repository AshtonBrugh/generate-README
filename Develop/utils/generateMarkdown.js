// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'Apache') {
    return "This is covered under the Apache license. ";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  # ${data.name}

## Description 
  ${data.description}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation
${data.installation}

## Usage 
${data.usage}


## License
${renderLicenseLink(license)};



## Contributing
${data.credits}


## Tests
${data.tests}

##Questions



`;
}

module.exports = generateMarkdown;
