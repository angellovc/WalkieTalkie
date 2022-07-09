import colors from 'colors';
import inquirer from 'inquirer';

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'Select an Option\n',
        choices: [
            {
                value: '1',
                name: '1. Help',
            },
            {
                value: '2',
                name: '2. Join Chat Channel'
            },
            {
                value: '3',
                name: '3. Create Chat Channel'
            },
            {
                value: '0',
                name: '0. Exit'
            }
        ]
    }
]

const MainScreen = async () => {
    process.stdout.write('\u001b[3J\u001b[1J');
    console.clear()
    console.log(colors.green.bold('========================'));
    console.log(colors.green.bold('=   WALKIETALKIE APP   ='));
    console.log(colors.green.bold('========================\n'));
    
    const input = await inquirer.prompt(questions);
    return input?.option;
}   






export default MainScreen;