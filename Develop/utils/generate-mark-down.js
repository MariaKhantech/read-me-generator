function generateMarkDown(answers) {
   console.log("here"+answers.title)
  let format = `# ${answers.title}\n\n *** \n` +
  `## Description\n ${answers.description}\n\n` +
   `## Table of contents\n ${answers.tableofcontents}\n\n` +
    `## Usage ${answers.usage}\n\n` +
    `## Installation\n ***\n` + "```" +  `${answers.installation}` + "```" + `\n\n` +
    `## License ${answers.license}\n\n` +
    `## Tests ${answers.tests}\n\n` +
    `### Contributors ${answers.contributing}`

   
  ;

console.log(format);
  return format; 
  
}

  module.exports = {
    generateMarkDown: generateMarkDown,
  }
