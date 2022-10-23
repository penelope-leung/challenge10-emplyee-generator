const inquirer = require('inquirer');
const fs = require ("fs");

const Engineer = require("./main/lib/Engineer");
const Intern = require("./main/lib/Intern");
const Manger = require("./main/lib/Manager");

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
          name: 'managerEmail',
          message: "What is the team manager's email address?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
        {
          type: 'input',
          name: 'managerOfficeNumber',
          message: "What is the team manager's office number?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
        {
          type: 'list',
          message: "Which employee would you like to add?",
          choices:[
            "Engineer",
            "Intern",
            "None"
          ],
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please choose one';
          },
        },
      ])
      .then((answers) => {
        console.log('answers', answers);
      });



