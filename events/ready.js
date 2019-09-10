const Discord = require("discord.js")


module.exports = bot => {
     console.log(`${bot.user.username} esta online`)


    let statuses = [
        `|*help Para ver minhas funções`,`|Fui criado pelo vitor!`,`|Estou ainda em fase beta 0.2`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "STREAMING",url:"https://www.twitch.tv/gideonhp"});

    }, 10000)

}