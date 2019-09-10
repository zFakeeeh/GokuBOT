const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) =>{
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Desculpa você não pode fazer.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Erro ao encontrar o usuário");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Especifique o cargo");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Erro ao encontrar o cargo");

  if(!rMember.roles.has(gRole.id)) return message.reply("Este usuário não possui este cargo");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`RIP, você perdeu seu cargo ${gRole.name} `)
  }catch(e){
    message.channel.send(`RIP to <@${rMember.id}>, We removed ${gRole.name} from them. We tried to DM them, but their DMs are locked.`)
  }
}
module.exports.config = {
    name: "removerole",
    description: " a member in the discord!",
    usage: "*removerole",
    accessableby: "Administrator",
    aliases: ["avaza"]
}