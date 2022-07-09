import inquirer from 'inquirer';

const inputQuestion = [
    {
        type: 'input',
        name: 'channel',
        message: 'Enter the channel you want to join'
    }
] 

const GetChannel = async () => {
    const input = await inquirer.prompt(inputQuestion);
    return input?.channel;
}


export default GetChannel;