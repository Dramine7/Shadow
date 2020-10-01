// First Edit: 01.10.2020 - Synad

//require discord.js package
//npm install discord.js
//npm install -g nodemon
//npm install weather-js
const Discord = require("discord.js");
const bot = new Discord.Client();

//requiring commands out of the command folder
const fs = require("fs");
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

//for all files in commmand folder require command files
//comamand sets to name
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}


//take the values inside the json and load them here.
const {prefix, token} = require("../config.json");

//bot say ready
bot.once('ready', () => {
    console.log("ready");
});

//bot load token
bot.login(token);


bot.on("message", message =>{
    //if message doesnt start with prefix or the author is bot -> return
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    //message.content = content of the message
    //slice() method returns the selected elements in an array. Starts at selected and ends at selected but does not include it
    //e.g. slice(1,3) takes element [1] and [2]
    //prefix.length property returns length of string in number of characters.
    //trim() method removes whitespace from both sides of a string - doesnt change original string
    //split() method splits string into array of substrings and returns new arraay
    //e.g.  var string = "test1 test2";
    //      var spliter = str.split(" "); -> outputs "test1,test2"
  
    
    const command = args.shift().toLowerCase();
    //shift() method removes the first item of an array
    //toLowerCase() method converts any text to lower case
  
    
    //console.log(message.content); //->> shows things that were messaged
    //if the command is not in the command folder return
    if (!bot.commands.has(command))return;

    //otherwise do the command, catch the error if there is one and output it
    try {
        bot.commands.get(command).execute(message, args);
    }catch(error){
        console.error(error);
        message.reply("There was an issue executing that command!");
    }



});
