const Discord = module.require('discord.js');

var rules1 = new Discord.RichEmbed()
        .addField("Regras (1/2):", "---------------------------------------------------------------------------------------\n" +
                                  "__**1.**__ Não envie spam e não floode no chat, você pode ser mutado/banido; \n" +
                                  "__**2.**__ Menções de nomes excessivos (ex. @xxxxx #1234), assédio ou ameaças não serão toleradas; \n" +
                                  "__**3.**__ Respeite todos os membros desta comunidade, não importando sua etnia, raça, religião ou orientação sexual. Proibimos estritamente a instigação de argumentos provocantes, o uso de insultos raciais e/ou homofóbicos, incluindo suas variantes; \n" +
                                  "__**4.**__ Não publique qualquer conteúdo pornográfico, malware ou qualquer outro conteúdo que possa ser considerado ofensivo; /n" +
                                  "__**5.**__ Sejam respeitosos uns com os outros e mantenham as discussões construtivas; \n" +
                                  "__**6.**__ Sem links (aleatórios) nos chats, a menos que um moderador ou superior o deixe;\n" +
                                  "__**7.**__ É PROIBIDO qualquer tipo de divulgação, seja de discord, de canal, entre outros \n", true)

        .setColor("0xFF0000")

var rules2 = new Discord.RichEmbed()
        .addField("Regras (2/2):", "__**8.**__ Se o membro estiver gritando, assoprando, escutando musicas altas, ou fazendo qualquer tipo de coisa que atrapalhe a comunicação dentro das salas de bate papo, poderá ser mutado ou banido, independente de aviso prévio; \n" +
                                  "__**9.**__ Vendas ou trocas de contas são PROIBIDAS no servidor, sob pena de banimento imediato\n" +
                                  "__**10.**__NENHUMA DISCUSSÃO SOBRE POLÍTICA, RELIGIÃO E FUTEBOL! Esses assuntos causam brigas, então evitem comentar sobre. \n" +
                                  "__**11.**__É legal fornecer informações precisas aos novos membros, mas deixe a moderação para os membros da staff. Respeite quando eles estiverem fazendo seu trabalho. Não ordene os demais membros e não ria nem zombe daqueles que são repreendidos  \n" +
                                  "---------------------------------------------------------------------------------------\n", true)

        .setColor("0xFF0000")

module.exports.run = async (bot, message, args) => {

//console.log(args[0]);// user
//console.log(args[1]);// role
//console.log(args[2]);//time


            message.channel.send(rules1)
            message.channel.send(rules2)

              .then(function (message) {
                message.react("Bin2:362263530424107009")
              })

}
module.exports.config = {
    name: "regras",
    description: " a member in the discord!",
    usage: "*regras",
    accessableby: "Members",
    aliases: ["ava"]
}