const ms = require("ms");

exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Este usuário não pode ser mutado por que ele tem um cargo superior ou igual ao seu !");
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Especifique o tempo s,m ou h");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> Mutou por ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> Foi desmutado !`);
  }, ms(mutetime));

}
module.exports.config = {
    name: "mute",
    description: " a member in the discord!",
    usage: "*mute",
    accessableby: "Administrators",
    aliases: ["ava"]
}