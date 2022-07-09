import inquirer from 'inquirer';

const inputQuestion = [
    {
        type: 'input',
        name: 'username',
        message: 'Enter an username'
    }
] 

const GetUsername = async () => {
    const input = await inquirer.prompt(inputQuestion);
    return input?.username;
}


export default GetUsername;