var fs = require("fs");
var inquirer = require("inquirer");
const axios = require("axios");

inquirer.prompt([
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username"
  },
  {
    type: "input",
    message: "What is your GitHub email?",
    name: "email"
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
    message:
      "Write any common questions a user might have here and their answers",
    name: "FAQ"
  }
])

  .then(function(answer) {

    // Call to get github avatar
    axios
    .get(`https://api.github.com/users/${answer.username}`)
    .then(function(res) {
      console.log(res.data);
    // link to github avatar
    let avatar = res.data.avatar_url; 
    console.log(avatar);

    // write to file Readme1.md
    fs.writeFile(
      "ReadMe1.md",
        `# ${answer.title} \n ${answer.description} \n` +
        `## Installation \n ${answer.installation} \n` +
        `## Usage \n ${answer.usage} \n` +
        `## License \n ${answer.license} \n` +
        `## Contributing \n ${answer.contributions} \n` +
        `## Tests \n ${answer.tests} \n` +
        `## FAQ \n ${answer.FAQ} \n` +
        `Github email: ${answer.email} \n \n` +
        // github avatar image
        `<img src="${avatar}" alt= "avatar pic" height="50px" width="50px">`,

      function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("Success!");
      }
    );
  })
})