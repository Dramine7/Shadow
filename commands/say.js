module.exports = {
    name: "say",
    description: "some say command",
    execute(message, args, Discord, channel, iduser, weather, bot, prefix){

        if(message.author.id == "252091777115226114" && message.channel.type == "dm"){
            const channelid = args[0];
            args.shift();
            bot.channels.cache.get(channelid).send(args.join(" "));
        }else if(message.author.id == "252091777115226114"){
            message.delete();
            message.channel.send(args.join(" "));
        }else{
            bot.users.cache.get(`252091777115226114`).send(`<@${message.author.id}> tried to use your say command`);
        }

    },
};