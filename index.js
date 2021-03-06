const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

const promptUser = (readmeData) => {
  return inquirer.prompt([
    // first prompt for github username
    {
      type: 'input',
      name: 'github',
      message: 'What is your github username?(Required)',
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your github username');
          return false;
        }
      },
    },
    // second prompt for email account
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?(Required)',
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your email');
          return false;
        }
      },
    },
    // third prompt for project name
    {
      type: 'input',
      name: 'title',
      message: "What is your project's name?(Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your project's name");
          return false;
        }
      },
    },
    // fourth prompt for project description
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project?(Required)',
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter a description for your project');
          return false;
        }
      },
    },
    // fifth prompt for project table of contents
    {
      type: 'confirm',
      name: 'confirmTableOfContents',
      message: 'Would you like a table of contents?',
      default: true,
    },
    {
      type: 'checkbox',
      name: 'tableOfContents',
      message:
        'What sections would you like to include? (Check all that apply)',
      choices: [
        'Installation',
        'Usage',
        'License',
        'Contributing',
        'Questions',
      ],
      when: ({ confirmTableOfContents }) => {
        if (confirmTableOfContents) {
          return true;
        } else {
          return false;
        }
      },
    },
    // sixth prompt for installation instructions
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?(Required)',
      validate: (installationInput) => {
        if (installationInput) {
          return true;
        } else {
          console.log('Please enter the steps to install your project');
          return false;
        }
      },
    },
    // seventh prompt for usage instructions
    {
      type: 'input',
      name: 'usage',
      message:
        'Provide instructions and examples for use. Include screenshots as needed.(Required)',
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please provide instructions and examples for use');
          return false;
        }
      },
    },
    // eighth prompt for license options
    {
      type: 'list',
      name: 'license',
      message: 'What license would you like for your application?(Required)',
      choices: ['mit', 'apache', 'lgpl_2_1', 'gpl', 'bsd', 'compliant'],
      validate: (licenseInput) => {
        if (licenseInput) {
          return true;
        } else {
          console.log(
            'Please select the license you would like for your application.'
          );
          return false;
        }
      },
    },
    // ninth prompt for contributing instructions
    {
      type: 'input',
      name: 'contributions',
      message: 'What are your guidelines for contribution?(Required)',
      validate: (contributionInput) => {
        if (contributionInput) {
          return true;
        } else {
          console.log('Please enter your contribution guidelines');
          return false;
        }
      },
    },
    // tenth prompt for question submission
    {
      type: 'confirm',
      name: 'confirmQuestion',
      message: 'Would you like to add a questions section?',
      default: true,
    },
  ]);
};

promptUser().then((readmeData) => {
  const readme = generateMarkdown(readmeData);

  fs.writeFile('./README.md', readme, (err) => {
    if (err) throw err;
  });
});

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
