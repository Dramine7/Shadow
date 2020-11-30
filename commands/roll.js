module.exports = {
    name: "roll",
    description: "you can roll a normal dice or just random numbers up to 9999",
    execute(message, args, Discord, channel, iduser, weather, bot){
        message.delete();

        if (isNaN(args[0])) { //if there is no number make a normal dice roll
            let random = Math.floor(Math.random()*6) + 1 ;
            message.channel.send(`Your dice fell of the table, but your random number is: ${random}`);
            return;
        
    }
    
    if (parseInt(args[0]) < 2 || parseInt(args[0]) > 9999){ //if number is below 2 and over 50 do dis, PARSING ANALYIZES OBJECT, THIS MEANS SOME OBJECTS NEED TO BE PARSED IN ORDER TO BE COMPILED = CONVERTED/UNDERSTOOD
            //a string of args get parsed and returned as a integer = needed here
            message.reply("Your number is not included in the parameters. Please input a number between 2 to 9999")
            return;
    }
    
    if (!isNaN(args[0])){ //if there is a number take that number and give random number between 1 and said number 
        
        let random = Math.floor(Math.random()*args) + 1 ;
        message.channel.send(`Your random number between 1 and ` + args + ` is: ${random}`);
        return;
    
    }
    },
};


               
