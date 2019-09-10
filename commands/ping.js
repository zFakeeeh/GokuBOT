const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {

    message.channel.send("Ping?...").then(m => {
        let ping = m.createdTimestamp - message.createdTimestamp
        let choices = ["Is this really my ping", "Is it okay? I cant look", "I hope it isnt bad"]
        let response = choices[Math.floor(Math.random() * choices.length)]

        m.edit(`
        :ping_pong: **| ${message.author} Pong!**
        :satellite: **| A sua latencia é ** ${m.createdTimestamp - message.createdTimestamp}ms.
        :stopwatch: **| A Latencia do BOT é** ${Math.round(bot.ping)}ms\´`)
    })

}


module.exports.config = {
    name: "ping",
    description: "PONG! Displays the api & bot latency",
    usage: "!ping",
    accessableby: "Members",
    aliases: ["latency"]
}