const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");


module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Você não tem permissão para poder executar este comando!")

    let kickMember = message.mentions.members.first() || message.guild.members.get(args[0]) 
    if(!kickMember) return message.channel.send("Marque um usuário para poder expulsar!")

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "No reason given!"

    if(!message.guild.me.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Eu não tenho permissão para poder expulsar este usuário!")

    kickMember.send(`Hey, você acaba de ser expulso ${message.guild.name} motivo: ${reason}`).then(() => 
    kickMember.kick()).catch(err => console.log(err))

    message.channel.send(`**${kickMember.user.tag}** foi expulso de nosso servidor por não cumprir as regras`).then(m => m.delete(5000))

    let embed = new Discord.RichEmbed()
    .setColor(colours.redlight)
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderation:", "kick")
    .addField("Usuário punido:", kickMember.user.username)
    .addField("Moderador:", message.author.username)
    .addField("Motivo:", reason)
    .addField("Data:", message.createdAt.toLocaleString())
    
        let sChannel = message.guild.channels.find(c => c.name === "modlogs")
        sChannel.send(embed)

}

module.exports.config = {
    name: "kick",
    description: "Kick a user from the guild!",
    usage: "!kick",
    accessableby: "Administrators",
    aliases: ["k", "expulsar", "expul"]

}