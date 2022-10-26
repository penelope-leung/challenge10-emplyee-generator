inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the team manager's name?",
      validate: (answer) => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      },
    },

    {
      type: "input",
      name: "managerId",
      message: "What is the team manager's ID?",
      validate: (answer) => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      },
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the team manager's email address?",
      validate: (answer) => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      },
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is the team manager's office number?",
      validate: (answer) => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      },
    },
    {
      type: "loop",
      name: "addEngineer",
      message: "Would you like to add engineer or intern?",
      choices: ["Engineer", "Intern"],
      validate: (answer) => {
        if (answer !== "") {
          return true;
        }
        return "Please choose one";
      },
    },
    {
      type: "input",
      name: "engineerName",
      message: "What is the engineer's name?",
      validate: (answer) => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      },
    },
    {
      type: "input",
      name: "engineerId",
      message: "What is the engineer's ID?",
      validate: (answer) => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      },
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is the engineer's email address?",
      validate: (answer) => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      },
    },
    {
      type: "input",
      name: "engineerGithubUsername",
      message: "What is the engineer's Github username?",
      validate: (answer) => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      },
    },
    {
      type: "loop",
      name: "addIntern",
      message: "Would you like to add engineer or intern?",
      choices: ["Engineer", "Intern"],
      validate: (answer) => {
        if (answer !== "") {
          return true;
        }
        return "Please choose one";
      },
    },
    {
      type: "input",
      name: "internName",
      message: "What is the intern's name?",
      validate: (answer) => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      },
    },
    {
      type: "input",
      name: "internId",
      message: "What is the intern's ID?",
      validate: (answer) => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      },
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is the intern's email address?",
      validate: (answer) => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      },
    },
    {
      type: "input",
      name: "internSchool",
      message: "What is the intern's school name?",
      validate: (answer) => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      },
    },
  ])
  .then((answers) => {
    console.log("answers", answers);
  });

//function to initialize app
function init() {
  inquirer.prompt().then((response) => {
    writeToFile("team.html", ({ ...response }));
  });
}

init();
