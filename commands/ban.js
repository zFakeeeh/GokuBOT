const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent")


module.exports.run = async (bot, message, args) => {

   if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("| **Você não tem permissão para utilizar este comando!**")

   let banMember = message.mentions.members.first() || message.guild.members.get(args[0]) 
   if(!banMember) return message.channel.send(" | **Por favor, forneça um usuário para banir!**")

   let reason = args.slice(1).join(" ");
   if(!reason) reason = "Nenhuma razão foi dita!"

   if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("| **Eu não tenho permissão para poder banir este usuário**")

   banMember.send(`**🤖 Hey

   🚫 Você foi banido do server: ${message.guild.name}
   
   👮 Por: ${banMember.user.username}
   
   💭 Motivo:  ${reason}**`).then(() =>
   message.guild.ban(banMember, { days: 1, reason: reason})).catch(err => console.log(err))

   message.channel.send(`| **${banMember.user.tag} foi banido deste  servidor**`).then(m => m.delete(5000))

    let embed = new Discord.RichEmbed()
    .setColor(colours.redlight)
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderation:", "ban")
    .addField("Punido por:", banMember.user.username)
    .addField("Moderador:", message.author.username)
    .addField("Motivo:", reason)
    .addField("Data:", message.createdAt.toLocaleString())
    
        let sChannel = message.guild.channels.find(c => c.name === "modlogs")
        sChannel.send(embed)
   



}

module.exports.config = {
    name: "ban",
    description: "Bans a user from the guild!",
    usage: "-ban",
    accessableby: "Administrators",
    aliases: ["banir", "banish", "remove"]
}