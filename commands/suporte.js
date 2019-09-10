const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .setTitle("Informações suporte")
    .addField("Para ver os comandos do bot digite", "`*help`")
    .addField("Para reportar um bug entre em contato com o v¡тσяᵈᶻⁿ#9625")
    .addField("Caso precise ajuda entre no nosso servidor ", "[Server Suporte](https://discord.gg/v7N6wxG/)")

    message.channel.send(embed)

            message.delete();
}

module.exports.config = {
    name: "suporte",
    description: " a member in the discord!",
    usage: "*suporte",
    accessableby: "Members",
    aliases: ["ava"]
}