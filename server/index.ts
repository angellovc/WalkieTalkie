import {Server} from 'socket.io';
import shortid from 'shortid';
import dotenv from 'dotenv';
dotenv.config();

const server = require('http').createServer();
const io = new Server(server);

if (process.env.WALKIETALKIE_PORT === undefined )
    throw Error('WALKIETALKIE_PORT env variable should exists')

io.on('connection', socket => {
    const channel = `r${Math.floor(Math.random() * 10)}-${shortid.generate()}`;
    const userId = shortid.generate();
    console.log(`user ${userId} connection established`);
    socket.emit('session', {channel, userId});

    socket.on('chat', (channel, data) => {
        socket.broadcast.emit(channel, data);
    });


});

server.listen(process.env.WALKIETALKIE_PORT, () => {
    console.log('Listening at '+process.env.WALKIETALKIE_PORT);
});