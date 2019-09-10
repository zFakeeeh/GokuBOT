const discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'anal'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  } else {
    msg.channel.send("**Erro: Para executar este comando crie um canal com o nome de: ```NSFW``` depois coloque ele como canal de: ```Conteúdo Adulto```**")
  }
};

module.exports.config = {
    name: "anal",
    description: " a member in the discord!",
    usage: "*anal",
    accessableby: "Members",
    aliases: ["ava"]
}