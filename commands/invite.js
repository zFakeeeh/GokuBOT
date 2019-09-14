const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
    
 let inviteEmbed = new Discord.RichEmbed()
 .setDescription("[**Convite**](http://bit.ly/GokuBot)")
 .setColor("blue")
 .setThumbnail(bicon)
 .addField("Use esse link para adicionar o GokuBOT ao seu servidor ", "http://bit.ly/GokuBot")
 .addField("Use esse link para entrar no servidor de Suporte do Goku", "https://discord.gg/TA5rsqM" )

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