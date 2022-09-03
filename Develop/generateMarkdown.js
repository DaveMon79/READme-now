const fs = require('fs')

function renderLicenseBadge(license) {

  if (license === "[MIT](https://opensource.org/licenses/MIT)") {
    return '![License](https://img.shields.io/badge/License-mit-orange.svg)'
  }
  else if (license === "[APACHE 2.0](https://opensource.org/licenses/MIT)") {
    return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  }
  else if (license === '[GPL 3.0](https://opensource.org/licenses/gpl-license)') {
    return '![License](https://img.shields.io/badge/License-GNU%20GPL-blue)'
  }
  else (license === 'None')
    return ""

}

function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#License)\n`
  } 
  else 
    return ""


}

function renderLicenseSection(license) { 
  if (license !== "None") {
    return `\n# License:
  
This project is licensed under:
    
${license}\n`
} 
  else
    return ""
}

function generateMarkdown(response) {
  
  return `${renderLicenseBadge(response.license)}
  
# ${response.title}     

# Description

${response.description}
  
## Table of Contents:
  
* [Installation](#Installation)

* [Usage](#Usage)
${renderLicenseLink(response.license)}
* [Contributing](#Contributing)

* [Tests](#Tests)

* [Questions](#Questions)
  
# Installation:
  
${response.installation}
  
# Usage:
  
${response.usage}
${renderLicenseSection(response.license)}
# Contributing:
  
${response.contributing}
  
# Tests:
  
${response.tests}
  
# Questions:
  
For any additional Information. Please contact me on:

* ${response.github}
  
* ${response.email}`; 

};


module.exports = generateMarkdown;

