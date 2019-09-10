const Discord = require('discord.js')

const moment = require('moment')
moment.locale('pt-br')

module.exports = {
  /**
     * Primeiro o metodo run(client, message, args) será executado pelo nosso arquivo message.js
     * Que passará os argumentos atraves do middleware que programamos.
     */
  run: function (client, message, args) {
    let botAvatar = client.user.displayAvatarURL
    let date = client.user.createdAt
    let userName = client.user.username

    // Criando embed que sera enviado para o usuário
    let embed = new Discord.RichEmbed()
      .setDescription('**Informações sobre o Bot**')
      .setColor('#e7a2e4')
      .setThumbnail(botAvatar)
      .addField(':robot: Nome do bot', userName)
      .addField(':clock10: Estou online a', moment().to(client.startTime, true))
      .addField(':calendar: Criado em', formatDate('DD/MM/YYYY, às HH:mm:ss', date))

    message.channel.send(embed)
  },
  /**
     * Aqui podemos colocar mais algumas configurações do comando.
     */
  conf: {},

  /**
     * Aqui exportamos ajuda do comando como o seu nome categoria, descrição, etc...
     */
  get help () {
    return {
      name: 'botinfo',
      category: 'Members',
      description: 'Informação sobre o Bot',
      usage: `botinfo`
    }
  }
}

/**
 * Formata a data passada para o padrão do Brasil.
 * @param {string} template
 * @param {Date=} [date]
 * @return {string}
 */
function formatDate (template, date) {
  var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
    return template.split(specs[i]).join(item)
  }, template)
}

module.exports.config = {
    name: "botinfo",
    description: "bot a user from the guild!",
    usage: "-botinfo",
    accessableby: "Members",
    aliases: ["infobot", "botf"]
}