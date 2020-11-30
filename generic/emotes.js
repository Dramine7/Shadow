function emotes(message, args3, Discord, channel)  {
             //exports(message, args, Discord, channel, iduser, weather, bot) {
        var embed = new Discord.MessageEmbed()
        const { lol, butwhy, gay, rage, holy, boner, why, sadlife, party, boi, sneeze, moan, gross, overload, nohomo, hackerman, fuckyfucky, seppuku, yeahboi, what, invisible, stalked, clep, puzzled, ueli, lost, stop, noot, cry } = require("../generic/jsons/embedsmolPics.json");

        var picture = [];
        var thiscommand = true;

        switch (args3) {
            case "lol":
                picture = lol;
                break;
            case "butwhy":
                picture = butwhy;
                break;
            case "gay":
                picture = gay;
                break;
            case "rage":
                picture = rage;
                break;
            case "holy":
                picture = holy;
                break;
            case "boner":
                picture = boner;
                break;
            case "why":
                picture = why;
                break;
            case "sadlife":
                picture = sadlife;
                break;
            case "party":
                picture = party;
                break;
            case "boi":
                picture = boi;
                break;
            case "sneeze":
                picture = sneeze;
                break;
            case "moan":
                picture = moan;
                break;
            case "gross":
                picture = gross;
                break;
            case "overload":
                picture = overload;
                break;
            case "nohomo":
                picture = nohomo;
                break;
            case "hackerman":
                picture = hackerman;
                break;
            case "fuckyfucky":
                picture = fuckyfucky;
                break;
            case "seppuku":
                picture = seppuku;
                break;
            case "yeahboi":
                picture = yeahboi;
                break;
            case "what":
                picture = what;
                break;
            case "invisible":
                picture = invisible;
                break;
            case "stalked":
                picture = stalked;
                break;
            case "clep":
                picture = clep;
                break;
            case "puzzled":
                picture = puzzled;
                break;
            case "ueli":
                picture = ueli;
                break;
            case "lost":
                picture = lost;
                break;
            case "stop":
                picture = stop;
                break;
            case "noot":
                picture = noot;
                break;
            case "cry":
                picture = cry;
                break;
            default:
            thiscommand = false;
        }

        if(thiscommand == true){
        message.channel.bulkDelete(1);
        message.reply(`**exclaims ${args3}: **`); //always replies with
        embed.setImage(picture[Math.floor(Math.random() * picture.length)]); channel.send({ embed });//set the immage to the mentioned url under the mentioned name
        }
} 

module.exports = {
    emotes
}

       
    
