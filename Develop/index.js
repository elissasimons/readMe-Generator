// array of questions for user
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your Project?',
}, 
{
    type: 'input',
    name: 'description',
    message: 'What is the description for your Project?',
}, 
{
    type: 'input',
    name: 'table of contents',
    message: 'What is in your table of contents?',
}, 
{
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
}, 
{
    type: 'input',
    name: 'usage',
    message: 'What is your project being used for?',
}, 
{
    type: 'list',
    name: 'license',
    message: 'What license would you like to add?',
    choices: ["Apache License 2.0", "MIT License", "BSD 3-Clause \"New\" or \"Revised\" License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 1.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"],
}, 
{
    type: 'input',
    name: 'contribute',
    message: 'Who are the contributors on this project?',
}, 
{
    type: 'input',
    name: 'test',
    message: 'What are the test instructions?',
}, 
{
    type: 'input',
    name: 'questions',
    message: 'What questions would you like to ask?',
}, 

];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {

}

// function call to initialize program
init();