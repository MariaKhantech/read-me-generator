const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generate-mark-down');

//array of question objects for inquirer
const questions = [
	{
		type: 'input',
		name: 'username',
		message: 'What is your GitHub username?'
	},
	{
		type: 'input',
		name: 'title',
		message: 'What would you like for your title?'
	},
	{
		type: 'input',
		name: 'description',
		message: 'Would you like a description?'
	},
	{
		type: 'list',
		name: 'tableofcontents',
		message: 'What would you like in your table of contents?',
		choices: [ 'Yes', 'No' ]
	},
	{
		type: 'input',
		name: 'installation',
		message: 'What did you install?'
	},

	{
		type: 'input',
		name: 'license',
		message: 'What did you use for a license?'
	},
	{
		type: 'input',
		name: 'contributing',
		message: 'Who contributed?'
	},
	{
		type: 'input',
		name: 'tests',
		message: 'What would you like to put in the test section?'
	},
	{
		type: 'input',
		name: 'usage',
		message: 'What would you like to put in the usage section?'
	},
	{
		type: 'input',
		name: 'question',
		message: 'Who does one contact?'
	},
	{
		type: 'list',
		name: 'question1',
		message: 'Would you like to include your GitHub email address?',
		choices: [ 'Yes', 'No' ]
	},
	{
		type: 'list',
		name: 'question2',
		message: 'Would you like to add your GitHub picture?',
		choices: [ 'Yes', 'No' ]
	}
];

writeToFile = (fileName, data) => {
	fs.writeFile(fileName, data, (err) => {
		if (err) {
			return console.log(err);
		} else {
			console.log('successful');
		}
	});
};

const init = () => {
	//start asking the questions to the users
	inquirer
		.prompt(questions)
		.then(async (answers) => {
			let formatReadme = await generate.generateMarkDown(answers);
			writeToFile('read-me.md', formatReadme);
		})
		.catch((error) => {
			throw error;
		});
};

init();
