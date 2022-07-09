import dotenv from 'dotenv';
import mainManuController from './controller/mainMenuController';

dotenv.config();


const main = async () => {
    mainManuController();
}

main();

export default main
