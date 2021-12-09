//Returning a license badge
  renderLicenseBadge = license => {
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

//function that returns license link & a notice that the license was added
  renderLicenseLink = license => {
  if(license === 'Apache') {
    return "This is covered under the Apache license. The link to this license is https://www.apache.org/licenses/LICENSE-2.0.txt";
  }
  if(license === 'MIT') {
    return "This is covered under the MIT license. The link to this license is https://opensource.org/licenses/MIT"
  }
  if(license === 'GNU') {
    return "This is covered under the GNU license. The link to this license is https://www.gnu.org/licenses/gpl-3.0.html"
  } 
  if(license === 'No license') {
    return ""
  }
}


//generates MARKDOWN for the readme
generateMarkdown = data => {
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
${renderLicenseLink(data.license)}



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
