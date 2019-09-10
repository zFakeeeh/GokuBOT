const Discord = require("discord.js");
const errors = require("../events/error.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  if(!args[0]) return message.channel.send("Diga quantas mensagens queira apagar");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Limpou ${args[0]} mensagens.`).then(msg => msg.delete(5000));
  });
}

module.exports.config = {
    name: "limpar",
    description: "limpe o chat!",
    usage: "-limpar",
    accessableby: "Administrators",
    aliases: ["clear"]
} 
