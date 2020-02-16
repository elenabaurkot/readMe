var fs = require("fs");
var inquirer = require("inquirer");


inquirer
  .prompt([
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username"
    //   think this needs to be an ajax call
    },
    {
      type: "input",
      message: "What is your project name?",
      name: "title"
    },
    {
      type: "input",
      message: "Write a description of your project",
      name: "description"
    },
    {
      type: "input",
      message: "Describe what installations are needed to run your project",
      name: "installation"
    },
  ])

.then(function(answer) {
    fs.writeFile("ReadMe1.md", 
    // need to write the callback here for the github username
    `# ${answer.title} \n ${answer.description} \n` +
    `## Installation \n ${answer.installation}`,

    function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    });
  });
  
