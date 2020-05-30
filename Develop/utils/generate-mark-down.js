// generates read me formatting
function generateMarkDown(answers) {

  let format = `# ${answers.title}\n\n *** \n` +
  `## Description\n ${answers.description}\n\n` +
  `## Table of contents\n ${answers.tableofcontents}\n\n` +
  `## Usage ${answers.usage}\n\n` +
  `## Installation\n ***\n` + "```" +  `${answers.installation}` + "```" + `\n\n` +
  `## License ${answers.license}\n\n` +
  `## Tests ${answers.tests}\n\n` +
  `### Contributors ${answers.contributing}`; 

  if (answers.question1 === "Yes") {
   let gitEmail =  getEmail(answers.username);
    
  };

  return format; 
}
//pass in username to call github api to retrieve users email
const getEmail = (username) => {

  axios.get(`https://api.github.com/users/${username}`)
  .then(response =>{
    console.log(response.email);
    return response.email;
  }) 
  .catch(error => {
    console.log(error);
  })
}

  //retrieves the github photo api
  const getPhoto= (username) => {

    axios.get(`https://api.github.com/users/${username}`)
    .then(response =>{
      console.log(response.avatar_url);
      return response.avatar_url;
    }) 
    .catch(error => {
      console.log(error);
    })
  
}
  module.exports = {
    generateMarkDown: generateMarkDown,
  }
