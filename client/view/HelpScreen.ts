import colors from 'colors';
import inquirer, {QuestionCollection} from 'inquirer';

const question:QuestionCollection = {
    type: 'input',
    name: 'pause',
    message: 'Press Enter To continue'
}

const HelpScreen = async () => {
    console.log('');
    console.log(colors.bold('Joining a Chat Session'));
    console.log(("To communicate with your peers you have to use the same frequency or channel"));
    console.log(("Tell the owner of the session to share with you the channel"));
    console.log(colors.italic('  > Instructions'));
    console.log(('  - Press the option 2. to join an existend channel'));
    console.log(("  - type in the channel and you're in\n"));
    
    console.log(colors.bold('Creating The Chat Channel'));
    console.log(("The chat channel is the frequency you use to communicate with your peers"));
    console.log(("You can only listen chats that are using your same frequency"));
    console.log(colors.italic('  > Instructions'));
    console.log(('  - you need to press the option 3. to create the channel'));
    console.log(('  - Once the chat is opened you will find a code between pipes. I.E: | r3-dsxmmc30 | '));
    console.log(('    You have to share that code with the people you want to comunicate with'));
    console.log(colors.red("Important: dont share the '|' characters, just the letters inside\n"));

    console.log(colors.bold(colors.yellow('Channel Important Info')));
    console.log(colors.yellow("Every Channel or frequency is unique auto generated and reusable"));
    console.log(colors.yellow("Once the channel is created, you and your peers can write it down"));
    console.log(colors.yellow("and simply use the 2. option to access it\n"));
    
    await inquirer.prompt(question);

}

export default HelpScreen;