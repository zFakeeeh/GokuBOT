const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    message.delete()
    // mentioned or grabbed user
    let target = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!target) return message.channel.send("Por favor, forneça um usuário válido").then(m => m.delete(15000))

    // reasoning definition
    let reason = args.slice(1).join(" ")
    if(!reason) return message.channel.send(`Por favor, forneça um motivo para relatar **${target.user.tag}**`).then(m => m.delete(15000))

    // grab reports channel
    let sChannel = message.guild.channels.find(x => x.name === "reporte")

    // send to reports channel and add tick or cross

    message.channel.send("Seu relatório foi arquivado para a equipe Staff. Obrigado!").then(m => m.delete(15000))
    sChannel.send(`**${message.author.tag}** reportou **${target.user.tag}** motivo **${reason}**.`).then(async msg => {
        await msg.react("✅")
        await msg.react("❌")
    })

}

module.exports.config = {
    name: "report",
    description: "reports a user of the guild",
    usage: "*report <user> <reason>",
    accessableby: "Members",
    aliases: ["reportar"]
}