const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send("**Erro: Para executar este comando crie um canal com o nome de: NSFW depois coloque ele como canal de: Conteúdo Adulto**")

    var subreddits = [
        'dickpic'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            request.get(url).then(r => {
                fs.writeFile(`dick.jpg`, r.body)
                message.channel.sendFile(r.body)
                fs.unlink(`./dick.jpg`)
            })
        })
}
module.exports.config = {
    name: "dick",
    description: " a member in the discord!",
    usage: "*dick",
    accessableby: "Members",
    aliases: ["ava"]
}