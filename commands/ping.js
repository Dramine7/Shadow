module.exports = {
    name: 'ping',
    description: 'Ping Command',
    execute(message, args){
        message.delete();
        message.channel.send("Pong!");
    },
};