const Discord = require("discord.js");
const bot = new Discord.Client();
const snekfetch = require("snekfetch")
exports.run = async (client, message, args) => {
      if (message.mentions.users.size < 1) return message.channel.send("**Mencione alguem para abraçar**")
      let user = message.guild.member(message.mentions.users.first());
        snekfetch.get('https://nekos.life/api/hug')
            .set('Key', 'dnZ4fFJbjtch56pNbfrZeSRfgWqdPDgf')
            .then(r => message.channel.send(`${user} Você recebeu um abraço de  ${message.author.username} ❤`,{
                embed: {
                    image: {
                        url: r.body.url
                    }
                }
            }))
}

module.exports.config = {
    name: "hug",
    description: " a member in the discord!",
    usage: "*hug",
    accessableby: "Members",
    aliases: ["ava"]
}