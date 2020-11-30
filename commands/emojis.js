module.exports = {
    name: "emojis",
    description: "shows emojis of server",
    execute(message, args, Discord, channel, iduser, weather, bot, prefix){
        message.delete();
        let Emojis="";
        let EmojisAnimated="";
        let EmojiCount= 0;
        let Animated= 0;
        let OverallEmojis=0;
        function Emoji(id){
            return bot.emojis.cache.get(id).toString()
        }
        message.guild.emojis.cache.forEach(emoji=>{
            OverallEmojis++;
            if(emoji.animated){
                Animated++
                EmojisAnimated+=Emoji(emoji.id)
            }else{
                EmojiCount++;
                Emojis+=Emoji(emoji.id)
            }
        })
        var embed = new Discord.MessageEmbed()
        .setTitle(`Emojis in ${message.guild.name}.`)
        .setDescription(`**Animated [${Animated}]**:\n${EmojisAnimated}\n\n**Standard [${EmojiCount}]**:\n${Emojis}\n\n**Overall emojis [${OverallEmojis}]**`)
        .setColor(`random`)
        channel.send(embed);

    },
};
