const inquirer = require('inquirer')
const Manager = require('./Manager')
const Engineer = require('./Engineer')
const Intern = require('./Intern')
const template = require('./src/index')
const fs = require('fs')
const employeeList = []

function userPrompt() {
    inquirer.prompt([{
        type: 'input',
        name: 'userName',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'userId',
        message: 'What is your ID?'
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'userOfficeNumber',
        message: 'What is your office number?'
    }
    ]).then(function (userResponse) {
        const newEmployee = new Manager(userResponse.userName, userResponse.userId, userResponse.userEmail, userResponse.userOfficeNumber)
        employeeList.push(newEmployee)
        console.log(newEmployee.getId())
        console.log(newEmployee)
    }).then(function () {
        inquirer.prompt([{
            type: 'input',
            name: 'userName',
            message: 'What is your Engineer name?'
        },
        {
            type: 'input',
            name: 'userId',
            message: 'What is your Engineer ID?'
        },
        {
            type: 'input',
            name: 'userEmail',
            message: 'What is your Engineer email?'
        },
        {
            type: 'input',
            name: 'userGithub',
            message: 'What is the Github of the Engineer?'
        }]).then(function (userResponse) {
            const newEmployee = new Engineer(userResponse.userName, userResponse.userId, userResponse.userEmail, userResponse.userGithub)
            employeeList.push(newEmployee)
            
        
            
           
        }).then(function () {
            inquirer.prompt([{
                type: 'input',
                name: 'userName',
                message: 'What is your Intern name?'
            },
            {
                type: 'input',
                name: 'userId',
                message: 'What is your Intern ID?'
            },
            {
                type: 'input',
                name: 'userEmail',
                message: 'What is your Intern email?'
            },
            {
                type: 'input',
                name: 'userSchool',
                message: 'What school are they from?'
            }]).then(function (userResponse) {
                const newEmployee = new Intern(userResponse.userName, userResponse.userId, userResponse.userEmail, userResponse.userSchool)
                employeeList.push(newEmployee)
                
                const renderedHTML = template(employeeList)
                console.log(renderedHTML);
                fs.writeFileSync('./dist/index.html', renderedHTML);
            })
           
        
        })
        
    })
}

userPrompt();

