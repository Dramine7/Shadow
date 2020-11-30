module.exports = {
    name: "cleanse",
    description: "purge command or whatever",
    execute(message, args, Discord, channel, iduser, weather, bot, prefix){

        message.delete();

        if(message.author.id == '252091777115226114') {  //checks if users name includes the roles listed
                message.channel.bulkDelete(args[0])
               // .catch(error => message.channel.send(`Error: ${error}`)); //catch zeee error

            }else{
                message.reply("Only my creator can use this command"); // you gotta have the role biatch.
                return; 
            }

        if (isNaN(args[0]) || parseInt(args[0]) < 2 || parseInt(args[0]) > 50) { //if there is no number, the number is smaller than 2 or the number is bigger than 50 it gives the following message
          
                message.channel.send('__**Would thy be honoured to please grant me an arabic numeral inbetween 2 and 50 to cleanse said amount of messages from thy sins**__ \n \n **Usage for Dummies:** ' + prefix + '*cleanse <amount>*'); 
   
                return;
            }

        bot.channels.cache.get('419204128527482880').send('**Successfully cleansed** ' + args + ` **messages, as requested by <@${message.author.id}>**`); //uses input from user to give out how many message have been cleansed
        

    },
};
