module.exports = {
    name: 'info',
    description: 'info about user',
    execute(message, args, Discord, channel, iduser, weather, bot){
        let user = message.mentions.users.first();
        let member = message.mentions.members.first();
        if(args == 'server'){
            const embed = new Discord.MessageEmbed()
        
            .setThumbnail(`${message.guild.iconURL()}`)
            .setColor("#8A2BE2")
            .addField('Server name:', `${message.guild.name}`)
            .addField('Server owner:', `${message.guild.owner}`)
            .addField('Creation Date', `${message.guild.createdAt}`)
            .addField('Server location:', `${message.guild.region}`)
            .addField('Server ID', `${message.guild.id}`)
            .addField('Member count:', `${message.guild.memberCount}`)
            .addField('Is server online?: ', `${message.guild.available}`)
            .addField('Server Icon', `${message.guild.iconURL()}`)
            .setTimestamp()
            channel.send(embed);
        }
        else if(args == user || member){
           
            const embed = new Discord.MessageEmbed()
        
            .setThumbnail(`${user.displayAvatarURL()}`)
            .setColor("#8A2BE2")
            .addField(`Joined discord at:`,`${user.createdAt}`)
            .addField(`Joined server at:`, `${member.joinedAt}`)
            .addField('Nickname: ', `${member.displayName}`)
            .addField('Role:', `${member.roles.highest}`)
            //.addField('Mute status:', `${member.serverMute}`)
            .addField('Status:',`${user.presence.status}`)
            .addField('Pic:', `${user.displayAvatarURL()}`)
            .setFooter(`ID: ${user.id}`)
            .setTimestamp()
            channel.send(embed);
        
        }else{message.reply("Please specify the info you'd like to know. Available specifications are: server, user.")}
    
         
    },
};
