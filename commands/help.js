module.exports = {
    name: "help",
    description: "Displays help embed",
    execute(message, args, Discord, weather, channel, iduser, bot){

        const embed = new Discord.MessageEmbed()
        .setThumbnail("https://i.imgur.com/SbFkbKa.png")
        .setTitle("`🎮 Shadowbot comes to serve peasants 🎮`")
        .setColor("#00ffff")
        //.addBlankField()//
        .addField("\u200b\n`,cleanse <number>`",`*Deletes the amount of messages the user wants to (between 2 and 50). Requires Specified Roles. (without the <>)*`)
        .addField("`,ethm`",`*Display a random ETH Meme, made at ETH. Check amount of stored Memes with: ,ethm length*`)
        .addField("`,id`",`*Get your ID*`)
        .addField("`,id <name>`",`*Tag someone to get their ID (without the <>)*`)
        .addField("`,lucky`",`*Write this and get a random lucky phrase thrown back at you.*`)
        .addField("`,roll`",`*Roll a dice :)*`)
        .addField("`,roll <number>`", `*Outputs a random numbere between 1 and the Input. Parameters: 2-1000 (without the <>)*`)
        .addField("`,creator`",`*Who is my creator? Find out.*`)
        .addField("`,weather <location>`",`*Get the weather of a specific location. (without the <>)*`)
        .addField("`,sourcecode`",`*Link to the Sourcecode of <@414814903946182686>*`)
        .addField("`,action`"," *Action command to fulfill actions. Currently available actions:*\u200b ```slap - hug - kiss - pat```\u200b*How to execute an action: ,exampleaction @exampleuser")
        .addField("`,invite`",`*Get the permanent Invite Link for the Oblivious Realm Server (Bot Testing Environment)*`)
        .addField("`,ping`",`*Get your and the Bot's Latency*`)
        .addField("`,emojis`", `*Get a list of all the Emojis available in within this Discord Server*`)
        .addField("`,info`", `*add "server" to find information about the Server. Tag a person to find information about them*`)
       /* .addField("`.roleassign`", `*Posts a message which allows the bot to assign/remove Roles on Em*`)*/
        //.addBlankField()
        .addField("\u200b\n`Word Replacements`", "*For now, the following words can by replaced with Pictures/Gifs:*\u200b```lol - butwhy - gay - rage - holy - boner - why - sadlife - party - boi - sneeze - moan - gross - overload - nohomo - hackerman - fuckyfucky - seppuku - yeahboi - what - invisible - stalked - clep - puzzled - ueli - lost - stop - noot - cry```\u200b*Place requested word as follows: ,exampleemote*\u200B")
        //.addBlankField()
        .setTimestamp()
        // message.author.sendMessage({embed});
        bot.users.cache.get(`${message.author.id}`).send(embed);
    },
};