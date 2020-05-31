const axios = require('axios');

// generates read me formatting
async function generateMarkDown(answers) {
	let format =
		`# ${answers.title}\n\n` +
		`## Description\n ${answers.description}\n\n` +
		`## Table of contents\n ${answers.tableofcontents}\n\n` +
		`## Usage \n ${answers.usage}\n\n` +
		`## Installation\n` +
		'```' +
		`${answers.installation}` +
		'```' +
		`\n\n` +
		`## License \n${answers.license}\n\n` +
		`## Tests \n${answers.tests}\n\n` +
		`### Contributors \n${answers.contributing}\n` +
		`### Questions \n${answers.question}\n`;

	//call the github api
	const apiResponse = await axios.get(`https://api.github.com/users/${answers.username}`);
	console.log(apiResponse);
	console.log(apiResponse.data.avatar_url);

	if (answers.question1 === 'Yes') {
		format = format + `Email: ${apiResponse.data.email}\n`;
	}

	if (answers.question1 === 'Yes') {
		format = format + `Photo: ${apiResponse.data.avatar_url}\n`;
	}

	console.log('I AM HERE');
	return format;
}

//pass in username to call github api to retrieve users email
const getEmail = async (username) => {
	await axios
		.get(`https://api.github.com/users/${username}`)
		.then((response) => {
			console.log('gettingemail:' + response.data.email);
			return response.data.email;
		})
		.catch((error) => {
			console.log(error);
		});
};

//retrieves the github photo api
const getPhoto = async (username) => {
	await axios
		.get(`https://api.github.com/users/${username}`)
		.then((response) => {
			console.log(response.data.avatar_url);
			return response.data.avatar_url;
		})
		.catch((error) => {
			console.log(error);
		});
};

module.exports = {
	generateMarkDown: generateMarkDown
};
