module.exports = {
    name: 'id',
    description: 'ID Command',
    execute(message, args, Discord, channel, iduser, weather, bot){

        //checks if a user is mentioned
        
        if(iduser){ //if yes gets id of mentioned user
        message.reply(`Default display of an ID is <@ExampleID>. The ID of <@${iduser.id}> is:`);
        channel.send(`${iduser.id}`);
        }else if(!args.length){
            message.reply(`Default display of an ID is: <@ExampleID>. Your ID is:`);
            channel.send(`${message.author.id}`);
        }
        
         
    },
};