const axios = require('axios');

//Creates and returns a table of contents
const generateTOC = () => {
	return `* [Usage](#usage)\n* [Installation](#installation)\n* [License](#license)\n* [Tests](#tests)\n* [Contributors](#contributors)\n* [Questions](#questions)`;
};

//Populate a badge and returns it
const createBadge = () => {
	return '[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](https://www.markdownguide.org/cheat-sheet/)';
};

// generates read me formatting
async function generateMarkDown(answers) {
	//call the github api
	const apiResponse = await axios.get(`https://api.github.com/users/${answers.username}`);

	//Populates email from api
	let questionsEmail = '';
	if (answers.question1 === 'Yes') {
		questionsEmail = apiResponse.data.email;
	}
	//Populates a photo from api
	let contributorPhoto = '';
	if (answers.question2 === 'Yes') {
		contributorPhoto = apiResponse.data.avatar_url + '.png';
	}

	//Formats the readme
	let format =
		`## ${answers.title} ${createBadge()}\n\n` +
		`### Description\n ${answers.description}\n\n` +
		`### Table of contents\n---\n` +
		`${generateTOC()}\n\n` +
		`### Usage<a name="usage"/> \n ${answers.usage}\n\n` +
		`### Installation<a name="installation"/>\n` +
		'```markdown\n' +
		`${answers.installation}\n` +
		'```' +
		`\n\n` +
		`### License<a name="license"/> \n${answers.license}\n\n` +
		`### Tests<a name="tests"/> \n${answers.tests}\n\n` +
		`### Contributors<a name="contributors"/>\n ![my-image](${contributorPhoto})\n\n${answers.contributing}\n` +
		`### Questions<a name="questions"/>\n${answers.question}\n Email: ${questionsEmail}\n`;

	//returns the full markdown read me
	return format;
}

module.exports = {
	generateMarkDown: generateMarkDown
};
