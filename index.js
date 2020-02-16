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
      message: "What is the project name?",
      name: "title"
    },
    {
      type: "input",
      message: "Write a description of the project",
      name: "description"
    },
    {
      type: "input",
      message: "Describe what installations are needed to run the project",
      name: "installation"
    },
    {
      type: "input",
      message:
        "What are the step-by-step instructions a user needs to use the program?",
      name: "usage"
    },
    {
      type: "input",
      message: "Tell how the program is licensed",
      name: "license"
    },
    {
      type: "input",
      message:
        "State if you are open to contributions and what your requirements are for accepting them.",
      name: "contributions"
    },
    {
      type: "input",
      message:
        "Explain how to run the automated tests for the program. Tell the user what they test and why.",
      name: "tests"
    },
    {
        type: "input",
        message:"Write any common questions a user might have here and their answers",
        name: "FAQ"
      }
  ])

  .then(function(answer) {
    fs.writeFile(
      "ReadMe1.md",
      // need to write the callback here for the github username
        `# ${answer.title} \n ${answer.description} \n` +
        `## Installation \n ${answer.installation} \n` +
        `## Usage \n ${answer.usage} \n` +
        `## License \n ${answer.license} \n` +
        `## Contributing \n ${answer.contributions} \n` +
        `## Tests \n ${answer.tests} \n` +
        `## FAQ \n ${answer.FAQ}`,

      function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("Success!");
      }
    );
  });
