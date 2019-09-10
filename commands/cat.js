exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const { get } = require('superagent')
        .get('https://nekos.life/api/v2/img/meow')
        .end((err, response) => {
            message.channel.send(response.body.url);
        });
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "cat",
    category: "Fun",
    description: "Post a random image of a cat",
    usage: "cat"
};
module.exports.config = {
    name: "cat",
    description: " a member in the discord!",
    usage: "*cat",
    accessableby: "Members",
    aliases: ["ava"]
}