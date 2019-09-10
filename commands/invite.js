const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
    
 let inviteEmbed = new Discord.RichEmbed()
 .setDescription("[**Convite**](http://bit.ly/GokuBot)")
 .setColor("#00ff00")
 .setThumbnail(bicon)
 .addField("Use esse link para adicionar o GokuBOT ao seu servidor ", "http://bit.ly/GokuBot")

 message.channel.send(inviteEmbed);

        message.delete();

}

module.exports.config = {
    name: "invite",
    description: " a member in the discord!",
    usage: "*invite",
    accessableby: "Members",
    aliases: ["ava"]
}