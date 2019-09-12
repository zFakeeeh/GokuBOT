const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {

    if(args[0] == "help") return message.channel.send(`Just do ${prefix}help instead.`)

    if(args[0]) {
        let command = args[0];
        if(bot.commands.has(command)) {
            command = bot.commands.get(command);
            var SHembed = new Discord.RichEmbed()
            .setColor(colours.cyan)
            .setAuthor(`Poc Poc ajuda`, message.guild.iconURL)
            .setThumbnail(bot.user.displayAvatarURL)
            .setDescription(`O prefixo do bot é: ${prefix}\n\n**Comando:** ${command.config.name}\n**Description:** ${command.config.description || "No Description"}\n**Usage:** ${command.config.usage || "No Usage"}\n**Accessable by:** ${command.config.accessableby || "Members"}\n**Aliases:** ${command.config.noalias || command.config.aliases}`)
            message.channel.send(SHembed);
        }}

    if(!args[0]) {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setAuthor(`Comando de Ajuda!`, message.guild.iconURL)
        .setColor(colours.redlight)
        .setDescription(`${message.author.username} Veja seu privado!`)

        let Sembed = new Discord.RichEmbed()
        .setColor(colours.cyan)
        .setAuthor(`Bot Suporte `, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setDescription(`⚙ Estes são os comandos disponíveis do bot!\n 🎤 O prefixo do bot é: ${prefix}`)
        .addField(`⌨ Comandos :`, " `addrole,anal,ass,avatar,ban,botinfo,cat,help,hentai,invite,kick,limpar,ping,pussy,reload,removerole,report,roles,say,serverinfo,sorteio,suporte,userinfo,votacao,regras,timer,8ball,dick(manutenção)` ")
        .setFooter("Bot Suporte 2019", bot.user.displayAvatarURL)
        message.channel.send(embed).then(m => m.delete(10000));
        message.author.send(Sembed)
    }
}


module.exports.config = {
    name: "help",
    aliases: ["h", "halp", "commands", "ajuda", "socorro"],
    usage: "!usage",
    description: "",
    accessableby: "Members"
}