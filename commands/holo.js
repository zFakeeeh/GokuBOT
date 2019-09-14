const discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'holo'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  } else {
    msg.channel.send("Esse não é um canal NSFW")
  }
};
module.exports.config = {
    name: "holo",
    description: " a member in the discord!",
    usage: "*holo",
    accessableby: "Members",
    aliases: ["ava"]
}
