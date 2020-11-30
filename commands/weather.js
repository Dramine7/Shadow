module.exports = {
    name: "weather",
    description: "shows weather",
    execute(message, args, Discord, channel, iduser, weather, bot){

        weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
            if (err) message.channel.send(err);

           if(!args.length){ //makes sure that if there is no input or the input is non existant give this output
        
                message.reply('**I think this location might not be on planet Earth. Probably in your Fantasy? Please give an existing location!**') 
                return; 
            }

            const current = result[0].current;  //define variable for current
            const location = result[0].location; //etc...

            const embed = new Discord.MessageEmbed()
                .setTitle(`🤖 **Weather for ${current.observationpoint}**`) //sets title so it refers to called location
                .setFooter(`Weather, Requested by ${message.author.username}`, `${message.author.avatarURL()}`) //author username + avatar
                .setColor("#00ffff") 

                //From here on should be self-explanatory
                .addField('\u200b','**Location Info**') 
                .addField('🗓 Date', `${current.date}, ${current.shortday}`, true) 
                .addField('🕐 Timezone',`UTC ${location.timezone}`, true)
                .addField('🌍 Latitude/Longitude',`Lat ${location.lat}° / Long ${location.long}°`, true)


                .addField('\u200b','**Weather Conditions**') //\u always calls upon a special character, 200b is a blank one, making a space not as big as blankfield
                .addField('☀ Sky Condition', `${current.skytext}`, true)
                .addField('🌡 Temperature',`${current.temperature} °C`, true)
                .addField('💩 Feels Like', `${current.feelslike} °C`, true)
                .addField('🌊 Humidity', `${current.humidity} %`, true)
                .addField('🌬 Winds',`${current.winddisplay}`, true)
                .addField('🚤 Windspeed', `${current.windspeed}`, true)
            
               // .addBlankField()

                channel.send(embed);
        });
    },
};