function actions(message, splitted, Discord, channel, iduser) {
        var embed = new Discord.MessageEmbed()
        const { hug, selfhug, pat, selfpat, kiss, selfkiss, slap, selfslap } = require("../generic/jsons/action.json");
        
        
        //declare arrays and strings we can later use 
        var action = [];
        var selfaction = [];
        var authoruser = "";
        var notauthoruser = "";

        var thiscommand = true;

        //depending on the action we set our predefined vars to the data
        if (splitted[0] == "hug") {
            action = hug;
            selfaction = selfhug;
            authoruser = "Why would you want to hug yourself? Are you that lonely :( Here let me hug you";
            notauthoruser = `***<@${message.author.id}> just hugged <@${iduser.id}> outta nowhere. What a world...***`;
        } else if (splitted[0] == "pat") {
            action = pat;
            selfaction = selfpat;
            authoruser = "Yes... That's definitely how this works";
            notauthoruser = `***<@${message.author.id}> just patted <@${iduser.id}>. So Soft :O ***`;
        } else if (splitted[0] == "kiss") {
            action = kiss;
            selfaction = selfkiss;
            authoruser = "Are you in love with yourself? I guess that's awesome but try to kiss someone else next time and make their day :D";
            notauthoruser = `***<@${message.author.id}> just kissed <@${iduser.id}>. Incredible!***`;
        } else if (splitted[0] == "slap") {
            action = slap;
            selfaction = selfslap;
            authoruser = "Who would wantingly slap themselves? Are you a maniac :O";
            notauthoruser = `***<@${message.author.id}> just slapped <@${iduser.id}>. So Stronk ***`;
        }else{
            thiscommand = false;
        }

        //execute command
        //if user @ himself
        if(thiscommand == true){
        if (iduser == message.author.id) {
            message.reply(authoruser);
            embed.setImage(selfaction[Math.floor(Math.random() * selfaction.length)]); channel.send({ embed });
        } else if (iduser != message.author.id) {
            //execute command, the random thingy chooses a random gif from the list
            channel.send(notauthoruser);
            embed.setImage(action[Math.floor(Math.random() * action.length)]); channel.send({ embed });
        } else {
            message.reply("**Please add an action you want to perform. E.g. ,action hug @exampleuser**")
        }
    }

        //let iduser = message.mentions.users.first(); //checks if a user is mentioned = var
        //const fuckyfucky = bot.emojis.get("430033873393680385");


}


module.exports = {
    actions
}
