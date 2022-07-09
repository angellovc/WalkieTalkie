import { connect } from "../utils/socket";
import session from "../controller/chatSessionController";
import GetUsername from "../view/GetUsernameScreen";
import GetChannel from "../view/GetChannelScreen";
import HelpScreen from "../view/HelpScreen";
import MainScreen from "../view/MainScreen"
import { settings } from "../congif/congif";

const mainManuController = async () => {
    if (process.env.HOST === undefined)
        throw new Error('Socket Server url should be passed as a HOST env variable');
    const {response, io} = await connect(settings.HOST);
    let username = '';
    let channel = response.channel;

    while (true) {
        const mainInput = await MainScreen();
        if (mainInput === '0') {
            await io.close();
            return;
        }

        if (mainInput === '1') {
            await HelpScreen();

        }

        if (mainInput === '2') {
            username = await GetUsername();
            channel = await GetChannel();
            break;
        }
        
        if (mainInput === '3') {
            username = await GetUsername();
            break;
        }
    }
    process.stdin.removeAllListeners();
    session(username, channel, response.userId, io);

}

export default mainManuController;