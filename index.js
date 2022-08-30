const inquirer = require('inquirer');
const fs = require('fs')


// const questions = () =>

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please input a description of your project?',
      name: 'description',
    },

    {
      type: 'input',
      message: 'Please enter any installation instructions?',
      name: 'installation ',
    },
    {
      type: 'input',
      message: 'Please enter usage instructions?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Please enter details of any contributors?',
      name: 'contributing',
    },
    {
      type: 'list',
      message: 'What kind of license does your project have?',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      name: 'license',
    },
    {
      type: 'input',
      message: 'Please enter any instructions required to run tests?',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Please enter your github user name?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Please enter your email address?',
      name: 'email',
    },
  ])

  .then((response) => {
    console.log(response)

    const generateReadMe = (response) =>

`# ${response.title} 


${response.description}

## Table of Contents:

* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

### Installation:

${response.instalation}

# Usage:

${response.usage}

# License:

This project is licensed under:

${response.license}

# Contributing:

${response.contributing}

# Tests:

${response.tests}

# Questions:

For any additional Information. Please contact me on:
${response.github}

or by email - ${response.email}`;


    const readMePage = generateReadMe(response);
    fs.writeFile('readme.md', readMePage, (err) =>
      err ? console.log(err) : console.log('Successfully created readme.md!')

    );
  });


