const Discord = require("discord.js")


module.exports = bot => {
     console.log(`${bot.user.username} está online`)


    let statuses = [
        `| Meu prefix é * <3`,`| Fui criado pelo vitor!`,`| Estou ainda em fase beta 0.`,`| Meu server de suporte está pronto ! *invite`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "STREAMING",url:"https://www.twitch.tv/zfakeeeh"});

    }, 10000)

}