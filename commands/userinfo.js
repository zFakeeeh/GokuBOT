const Discord = require("discord.js");
const moment = require("moment");
moment.locale("pt-BR");

module.exports.run = async (client, message, args) => {
var member = message.member;
    let bbUser = message.mentions.members.first();
    if(bbUser) {
        let guilda = await message.guild.fetchMembers();
        member = guilda.members.get(bbUser.id);
    } else {
        bbUser = message.member;
    }

    let status;
    if(bbUser.presence.status === "online") status = `<:online:569256858351566865>`
    if(bbUser.presence.status === "dnd") status = `<:dnd:569256806275088476>`
    if(bbUser.presence.status === "idle") status = `<:idle:569256302438514688>`
    if(bbUser.presence.status === "stream") status = `<:streaming:569620717411237933>`
    if(bbUser.presence.status === "offline") status = `<:offline:569256350526210049>`

    let embed = new Discord.RichEmbed()
    .setDescription(`:bookmark: Nome: **${bbUser.user.tag}**\n` +
    ` :computer: ID: **${bbUser.id}**\n` +
    ` :pencil: Apelido: ${bbUser.nickname ? `${bbUser.nickname}` : "**Nenhum**"} \n` +
    ` :video_game: Jogando: ${bbUser.presence.game ? `**${bbUser.presence.game.name}**` : "**Nada**"} **${status}**\n` +
    ` :date: Conta criada à: **\`${moment().diff(bbUser.user.createdAt, "days")} dias\`**\n` +
    ` :star2:  Está à: **\`${moment().diff(member.joinedAt, "days")} dias no servidor\`**\n` +
    ` :shield: Cargos: ${member.roles.map(r => r).join(", ").replace("@everyone, ", "")}`)
    .setThumbnail(bbUser.user.displayAvatarURL)
    .setColor(0xff6e00)

    message.channel.send(embed);
}
module.exports.config = {
    name: "userinfo",
    description: "Descubra tudo sobre um usuário!",
    usage: "-userinfo (@mention)",
    accessableby: "Members",
    aliases: ["ui"]
}