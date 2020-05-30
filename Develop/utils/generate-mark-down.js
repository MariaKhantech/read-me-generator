function generateMarkDown(answers) {
   console.log("here"+answers.title)
  let format = `## ${answers.title}\n\n` +
  `# Description\n ${answers.description}\n\n` +
   `## Table of contents  ${answers.tableofcontents}\n\n` +
    `# Usage ${answers.usage}\n\n` +
    `# Installationn\n ${answers.installation}\n\n` +
    `# ${answers.License}\n\n` +
    `# ${answers.tests}\n\n` +
    `## ${answers.contributing}`

   
  ;

console.log(format);
  return format; 
  
}

  module.exports = {
    generateMarkDown: generateMarkDown,
  }
