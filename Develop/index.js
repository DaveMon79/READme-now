const generateMarkdown = require("./generateMarkdown")
const inquirer = require('inquirer');
const fs = require('fs')

const questions = [
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
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'None'],
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
];


inquirer
  .prompt(questions)
  .then((response) => {
    fs.writeFile('readme.md', generateMarkdown(response), (err) =>
      err ? console.log(err) : console.log('Successfully created readme.md!')

    );
  })




