const inquirer = require('inquirer');
const fs = req ("fs");

const Engineer = require("./main/lib/Engineer");
const Intern = require("./main/lib/Intern");
const Manger = require("./main/lib/Manager");
// inquirer.registerPrompt("loop",require("inquirer-loop")(inquirer))
// const questions = [    {
//     type: 'input',
//     message: 'What is your manager\'s name?', 
//     name: 'managerName',
//   },
//   {
//     type: 'input',
//     message: 'What is the manager\'s ID?',
//     name: 'managerId',
//   },
//   {
//     type: 'input',
//     message: 'What is the manager\'s E-mail address?',
//     name: 'managerEmail',
//   },
//   {
//     type: 'input',
//     message: 'What is the manager\'s office number?',
//     name: 'managerNumber',
//   },
//   {
//     type: 'list',
//     message: 'What type of employee would you like to add?',
//     choice: [
//         "Manger",
//         "Engineer",
//         "Intern"
//     ],
//     name:"employeeChoice"
//   },
//   {
//     type: 'input',
//     message: 'What is your employee\'s name?', 
//     name: 'employeeName',
//   },
//   {
//     type: 'input',
//     message: 'What is the employee\'s ID?',
//     name: 'employeeId',
//   },
//   {
//     type: 'input',
//     message: 'What is the employee\'s Github username?',
//     name: 'employeeGithubUsername',
//   },
//   ]

inquirer
      .prompt([
        {
          type: 'input',
          name: 'managerName',
          message: "What is the team manager's name?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
        
        {
          type: 'input',
          name: 'managerId',
          message: "What is the team manager's ID?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
        {
          type: 'input',
          name: 'managerName',
          message: "What is the team manager's name?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
      ])
      // ... add more input
      .then((answers) => {
        console.log('answers', answers);
      });



// class Employee {
//     constructor(engineer) {
//       this.engineer = engineer;
//       this.email = [];
//       this.github = [];
//       this.ID = [];
//     };
  


// // TODO: Create a function to write README file


// function writeToFile(fileName, data) {

// console.log(data);
//     fs.writeFile(fileName,data, (err) =>
//   err ? console.error(err) : console.log('Success!')
// );

// }


// function init() {
//     inquirer
//   .prompt(questions)
//   .then((response) => {
//     writeToFile('index.html',""({...response})
//     )}  );
// }

// init();

