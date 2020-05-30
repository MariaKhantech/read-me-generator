const fs = requre("fs");
const inquirer = require('inquirer');
const generate= require("./utils/generate-mark-down");


//array of question objects for inquirer
const questions = [
    {
        type:'input',
        name:'username',
        message:'What is your GitHub username?'
    },
    {
        type:'input',
        name:'title',
        message:'What would you like for your title?'
    },
    {
        type:'input',
        name:'description',
        message:'Would you like a description?'
    },
    {
        type:'list',
        name:'table of contents',
        message:'What would you like in your table of contents?',
        choices: [
            "Yes",
            "No"
        ]
    },
    {
        type:'input',
        name:'installation',
        message:'What did you install?'
    },
  
    {
        type:'input',
        name:'License',
        message:'What did you use for a license?'

    },
    {
        type:'input',
        name:'Contributing',
        message:'Who contributed?'

    },
    {
        type:'input',
        name:'tests',
        message:'What would you like to put in the test section?'

    },
    {
        type:'checkbox',
        name:'questions1',
        message:'Would you like to include your GitHub email?',
        choices:["Yes", "No"]

    },
    {
        type:'checkbox',
        name:'questions2',
        message:'Would you like to add your GitHub picture?',
        choices:["Yes", "No"]
        
    },

];

 writeToFile = (fileName, data) => {
}

const init = () => {

    //start asking the questions to the users
    inquirer.prompt(questions)
    .then(async answers => {
        console.log(answers.username);
        let formatReadme = await generate.generateMarkDown(answers)
    })
    .catch(error => {
        throw error;    
    })

}

init();
