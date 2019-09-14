const Discord = require("discord.js");
var moment = require('moment');
moment.locale('pt-BR');
const fs = require("fs")
exports.run = (bot, message, args) => {
	let argsJunto = message.content.split(" ").slice(1).join(' ')
	if(message.author.id === '387700259171729419') {
    if(argsJunto.length < 1) {
    	message.channel.sendMessage(` | Diga um comando para ser resetado.`); 
    } else {
    	delete require.cache[require.resolve(`./${args[0]}.js`)];
    	message.channel.sendMessage('| O comando `' + argsJunto + '` foi resetado.'); 
    }
  // the path is relative to the *current folder*, so just ./filename.js
} else {
  	message.channel.sendMessage('| Você não tem permissão para executar este comando, apenas o dono pode usa-lo.')
  }
}
module.exports.config = {
    name: "reload",
    description: "aaa",
    usage: "*reload",
    accessableby: "Administrator",
    aliases: ["ava"]
}