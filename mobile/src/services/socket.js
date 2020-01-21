import socketio from 'socket.io-client';

const socket = socketio('http://200.18.68.202:3333',{
    autoConnect: false,
});

function connect(latitude,longitude,techs){
    socket.io.opts.querty={
        latitude,
        longitude,
        techs,
    };
socket.connect();
}

function disconnect(){
    if(socket.connected){
        socket.disconnect();
    }
}

export{
    connect,
    disconnect,
};