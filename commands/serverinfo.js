const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message, args) => {

    const moment = require("../node_modules/moment")
    moment.locale("pt-BR")
    let online = message.guild.members.filter(a => a.presence.status == "online").size;
    let ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
    let ausente = message.guild.members.filter(a => a.presence.status == "ausente").size;
    let offline = message.guild.members.filter(a => a.presence.status == 'offline').size;
    let bot = message.guild.members.filter(a => a.user.bot).size;
    let totalmembros = message.guild.memberCount;
    let canaistexto = message.guild.channels.filter(a => a.type === "text").size;
    let canaisvoz = message.guild.channels.filter(a => a.type === "voice").size;
    let cargos = message.guild.roles.map(a => a.name).join(", ")
        const embed = new Discord.RichEmbed()
        .setTitle(`Info **${message.guild.name}**`)
        .setColor("#00e0ff")
        .setThumbnail(message.guild.iconURL)
        .setTimestamp()
        .setDescription(" <:discord:569249964916473859> Server info:")
        .addField(':computer: Criador do servidor:', `<@${message.guild.owner.id}>`)
        .addField(':date: Criado em:', moment(message.guild.createdAt).format('LLLL'))
        .addField(":id: ID:", message.guild.id)
        .addField(`<:Membros:569258298080231443> Membros [${totalmembros}]`, `<:online:569256858351566865> Online: ${online}\n<:idle:569256302438514688> Ausente: ${ausente}\n <:dnd:569256806275088476> Ocupado: ${ocupado} \n <:offline:569256350526210049> Offline: ${offline}\n :robot: **Bots:** ${bot}`)
        .addField(`:thought_balloon:   Canais [${canaistexto+canaisvoz}]`, ` :pencil: Texto: ${canaistexto}\n :speaking_head: Voz: ${canaisvoz}`)
        //.addField(`:white_small_square:Cargos [${message.guild.roles.size}]`, cargos)
        .setFooter(`Comando solicitado por: ${message.author.tag}`, `${message.author.avatarURL}`)
        message.channel.send(embed)
}

exports.config = {
    name: "serverinfo",
    aliases: ["serverinfo", "server"]
}