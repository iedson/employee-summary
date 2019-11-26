//Global Variables 
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);


//pull team info from JS files 
function createTeam() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter Team Member Name:"
      },
      {
        type: "input",
        name: "email",
        message: "Enter Team Member Email:"
      },
      {
        type: "input",
        name: "id",
        message: "Enter Team Member ID Number:"
      },
      {
        type: "input",
        name: "role",
        message: "Team Member Role:",
        choices: [
            {value: "Intern"},
            {value: "Engineer"},
            {value: "Manager"},
        ]
      },

    ]);
  }

  function generateHTML(answers) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <script src="https://kit.fontawesome.com/be1dfb7ac6.js" crossorigin="anonymous"></script>
        <title>Meet Our Team</title>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4" style="text-align: center">Meet Our Team</h1>
                <p class="lead" style="text-align: center">The passionate and talented team behind Roar Digital</p>
            </div>
        </div>
    
    
        <div class="card" style="width: 18rem;">
            <div class="card-header fas fa-briefcase">${answers.role}</div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"></li>
                  <li class="list-group-item">${answers.name}</li>
                  <li class="list-group-item">${answers.email}</li>
                  <li class="list-group-item">${answers.id}</li>
                </ul>
        </div>
    
    
        
    </body>
    </html>`;
  }

createTeam()
.then(function(answers) {
    console.log(answers);
    // if (answers.role === "Manager"){
    //     let manager = new Manager (answers.name, answers.email, answers.id);

    // }
    // if (answers.role === "Engineer"){
    //     let engineer = new Engineer (answers.name, answers.email, answers.id);
    // }
    // if (answers.role === "Intern"){
    //     let intern = new Intern (answers.name, answers.email, answers.id);
    // }

// }).then(funtion(answers){
    const html = generateHTML(answers);

    return writeFileAsync("team.html", html);
})
.then(function() {
  console.log("Successfully wrote to index.html");
})
.catch(function(err) {
  console.log(err);
});


//write team profile HTML based on user inputs
    //Employee inputs 
        //Name
        //ID
        //Email
        // Role - Choices Intern, Engineer, Manager
        //then

        //if intern create new Intern

        //if engineer create new Engineer

        //if manager create new Manager

        //then push answers to object

    //new Intern Create Functions
        // Prompt ask what school they went to School
        //then push to object

    //new Engineer Create Function
        //Prompt ask what their github username is 
        //then push to oject
    //new Manager Create Function 
        //Prompt what is their office nubmer
        //then push to object

    //Create HTML 
        //populate HTML Cards with Employee Info
        //Jumbotron Team Roster
        //Manager Stats
        //Engineer Stats
        //Intern Stats
        //footer Stats




