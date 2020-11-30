module.exports = {
    name: "lucky",
    description: "gives you a random sentence out of a json array",
    execute(message, args, Discord, channel, iduser, weather, bot){

        //we import our phrases from a json
        const {lucky} = require("./jsons/lucky.json"); //for lucky phrase if statement
        message.reply(lucky[Math.floor(Math.random() * lucky.length)]);
    },
};

