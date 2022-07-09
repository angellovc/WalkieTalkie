import color, { Color } from 'colors';
import ChatScreen from '../view/ChatScreen';
import { Socket } from 'socket.io-client';

interface Message {
    owner:string;
    content:string;
    userId:string;
}

const messageBuilder = (owner:string, content:string, color:Color) => {
    return color(`${color.bold(owner)+':'} ${content}`);
}
const session = async (username:string, channel:string, userId:string, io:Socket) => {
    const chatScreen = new ChatScreen(channel, (input) => {
        io.emit('chat', channel, {owner: username, userId, content: input});
        return messageBuilder(username, input, color.white);
    });

    io.on(channel, (data:Message) => {
        const {content, owner} = data;
        if (userId !== data.userId)
            chatScreen.newMessage(
                messageBuilder(owner, content, color.green)
            );
    });

}

export default session;