    const Discord = module.require('discord.js');
    const ms = require('ms');

    module.exports.run = async (bot, message, args) => {

      let Timer = args[0];

      if(!args[0]){
        return message.channel.send("| Por favor coloque um tempo");
      }

      if(args[0] <= 0){
        return message.channel.send( "| Por favor coloque um periodo de \"s,m ou h\"");
      }

      message.channel.send("| Timer iniciado!: " + `${ms(ms(Timer), {long: true})}`)

      setTimeout(function(){
        message.channel.send(message.author.toString() + ` Seu timer acabou !,: ${ms(ms(Timer), {long: true})}`)

      }, ms(Timer));
    }

    module.exports.config = {
        name: "timer",
        description: " a member in the discord!",
        usage: "*timer",
        accessableby: "Members",
        aliases: ["tmr"]
    }