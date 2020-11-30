module.exports = {
    name: "ethm",
    description: "eth memes",
    execute(message, args, Discord, channel, iduser, weather, bot, prefix){
        const {memes} = require("./jsons/ethmeme.json");
        const embed = new Discord.MessageEmbed();
        
        if(args[0] == "length"){
            message.channel.send("There are currently " + memes.length + " ETH Memes in my memory.")
        }else{
        embed.setImage(memes[Math.floor(Math.random() * memes.length)]); channel.send({ embed });
        }
    },
};