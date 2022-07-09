import { io, Socket } from 'socket.io-client';


interface SocketConnection {
    response: {
        channel:string,
        userId:string
    },
    io:Socket
}

const connect = (host:string):Promise<SocketConnection> => {
    return new Promise((resolve) => {
        const socket: Socket = io(host, {
            reconnection: true
        });

        socket.on('session', (data) => {
            resolve({ response: data, io: socket });
        });

        socket.on('disconnect', (reason) => {
            if (reason === 'io server disconnect')
              socket.connect();
          });

    });
    
}

export type {
    SocketConnection
}

export {connect};



