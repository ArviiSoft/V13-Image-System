const { MessageEmbed, Discord } = require("discord.js") 

module.exports = {
name: "avatar",
async execute(client, message, args) {

var prefix = client.db.fetch(`prefix_${message.guild.id}`) || "!";
var dil = client.db.fetch(`locale_${message.guild.id}`) || "en";
const user = message.mentions.users.first() || message.author;

const arvis = new MessageEmbed()
.setColor("#2F3136")
.setAuthor(`${user.tag} (${user.id})`, user.displayAvatarURL({dynamic: true }))
.setImage(user.displayAvatarURL({dynamic: true, size: 2048}))
.setFooter("Made by ❤️ arviis.")

.setDescription(message.locale.avatar(user, {
  boyut1: user.displayAvatarURL({ format: 'jpg', size: 512 }),
  boyut2: user.displayAvatarURL({ format: 'jpg', size: 1024 }),
  boyut3: user.displayAvatarURL({ format: 'jpg', size: 2048 })
}, {
  boyut1: user.displayAvatarURL({ format: 'png', size: 512 }),
  boyut2: user.displayAvatarURL({ format: 'png', size: 1024 }),
  boyut3: user.displayAvatarURL({ format: 'png', size: 2048 })
}, {
  boyut1: user.displayAvatarURL({ format: 'gif', size: 512 }),
  boyut2: user.displayAvatarURL({ format: 'gif', size: 1024 }),
  boyut3: user.displayAvatarURL({ format: 'gif', size: 2048 })
}, {
  boyut1: user.displayAvatarURL({ format: 'webp', size: 512 }),
  boyut2: user.displayAvatarURL({ format: 'webp', size: 1024 }),
  boyut3: user.displayAvatarURL({ format: 'webp', size: 2048 })
}));

return message.reply( { embeds: [arvis] } )
}
}
// arviis.









//arviis.