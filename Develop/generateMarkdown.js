const fs = require('fs')


function renderLicenseBadge(license) {

  if (license === "MIT") {
    return  '![License](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)'
  }
  if (license === "APACHE 2.0") {
    return'![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  else if (license === 'GPL 3.0') {
    return '![License](https://img.shields.io/badge/License-GNU%20GPL-blue)](https://opensource.org/licenses/gpl-license)'

  }
  else (license === 'None')
  return ""

}

function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#License)`
  } return ""


}


function renderLicenseSection(license) { 
  if (license !== "None") {
    return `\n# License:
  
    This project is licensed under:
    
    ${license}`
  } return ""
}


function generateMarkdown(response) {
  
  return `# ${response.title}        
  
  ${renderLicenseBadge(response.license)}
  
  ${response.description}
  
  ## Table of Contents:
  
  * [Installation](#Installation)

  * [Usage](#Usage)
  ${renderLicenseLink(response.license)}
  * [Contributing](#Contributing)

  * [Tests](#Tests)

  * [Questions](#Questions)
  
  ### Installation:
  
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
  ${response.github}
  
  or by email - ${response.email}`;

  };


module.exports = generateMarkdown;

