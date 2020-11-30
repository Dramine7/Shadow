// First Edit: 01.10.2020 - Synad

//require discord.js package
//npm install discord.js
//npm install -g nodemon
//npm install weather-js
const Discord = require("discord.js");
const weather = require('weather-js');
const bot = new Discord.Client();



//requiring commands out of the command folder
const fs = require("fs");
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

const emote = require("./generic/emotes.js");
const action = require("./generic/action.js");
const advents = require("./generic/advent.js");

//for all files in commmand folder require command files
//comamand sets to name
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}


//take the values inside the json and load them here.
const {prefix, token} = require("../config.json");

//bot say ready and set status
bot.once('ready', () => {
    bot.user.setActivity(",help for joy :)");
    console.log("ready");
});

//if theres a new member
bot.on("guildMemberAdd", member => {
    if (['414816627021053952'].includes(member.guild.id)){
    bot.channels.cache.get('420614571846533142').send(`**Welcome peasant ${member}, go to <#422882168029577226> first to see all Rules and Features then feel free to proceed to <#414816627021053954> to join the guild's conversations and feel free to write: .help in order to see all the commands I am capable of doing. Happy Hunting!**`);
    }
});

//messages delete logger
bot.on('messageDelete', message => {
    if(message.author.id == "252091777115226114" || message.author.bot) return;

    if (['747752542741725244'].includes(message.guild.id) || ['414816627021053952'].includes(message.guild.id)){
    if(!message.partial){
        if (message.author.bot) return;
        const channel = bot.channels.cache.get('518809818895613953');
        if(channel) {
            var iduser1 = message.author;
            if(message.mentions.has("252091777115226114")){ 
                channel.send("**Deleted Message: I WAS TAGGED HERE **" );
                channel.send(`**BY: **<@${iduser1.id}>`);
            }else{
            channel.send("**Deleted Message: **" + message.content);
            channel.send(`**Message Author: **<@${iduser1.id}>`)
            }
        }
    }}
//
});

//bot load token
bot.login(token);

bot.on("message", message =>{
    if (message.channel.type == "dm" && message.author.id != "252091777115226114") return; //ignores dms
    //ignore these channels (mainly study channels)
    if(message.channel.id == "755401302032515074") return;
    if(message.channel.id == "755401370596671520") return;
    if(message.channel.id == "755401537706000534") return;
    if(message.channel.id == "755401575790280826") return;
    if(message.channel.id == "755339832917491722" && message.content != ",ethm" && message.content != ",ethm length") return;
    if(message.channel.id == "766564808854077459") return;
 

    //Minor commands
    if (message.content.toLowerCase() == ".creator"){
        message.reply("My creator is the pussy ass bitch Dramine7");
    }else if(message.content.toLowerCase() == ".sourcecode"){
        message.reply('**Go to this link to see my brain... You are gross and perverted now :)**' + '\n https://github.com/Dramine7/ShadowBot/index.js');
    }else if(message.content.toLowerCase() == ".invite"){
        bot.users.cache.get(`${message.author.id}`).send("**Here is the permanent Invite Link:** https://discord.gg/WXskmcN");
    }
    //general consts needed
    const channel = message.channel;
    const iduser = message.mentions.users.first();
   
    //if message doesnt start with prefix or the author is bot -> return
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/);

    const args2 = message.content.slice(0,1); //only prefix i.e. very first character of a message

    const args3 = message.content.slice(1,message.content.length); //everything after the first character

    var splitted = args3.split(" "); //splits string after prefix into substrings

    //message.content = content of the message
    //slice() method returns the selected elements in an array. Starts at selected and ends at selected but does not include it
    //e.g. slice(1,3) takes element [1] and [2]
    //prefix.length property returns length of string in number of characters.
    //trim() method removes whitespace from both sides of a string - doesnt change original string
    //split() method splits string into array of substrings and returns new arraay
    //e.g.  var string = "test1 test2";
    //      var spliter = str.split(" "); -> outputs "test1,test2"
    
    
    const commandName = args.shift().toLowerCase();
    //shift() method removes the first item of an array
    //toLowerCase() method converts any text to lower case
  
    if(args2 == "." && !bot.commands.has(commandName)){
       emote.emotes(message, args3, Discord, channel);
       action.actions(message, splitted, Discord, channel, iduser);
       advents.advent(message, splitted, bot);
    }
    
    
    //console.log(message.content); //->> shows things that were messaged
    //if the command is not in the command folder return
    if (!bot.commands.has(commandName))return;
    const command = bot.commands.get(commandName);

 
    //otherwise do the command, catch the error if there is one and output it
    try {

        command.execute(message, args, Discord, channel, iduser, weather, bot, prefix);
    
    }catch(error){
        console.error(error);
        message.reply("There was an issue executing that command!");
    }
    
   

});
