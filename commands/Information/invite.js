const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "invite",
    category: "Information",
    aliases: [ "addme" ],
    description: "invite CoppaMusic",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {
         
         
    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`),
	new MessageButton()
    .setLabel("GitHub")
    .setStyle("LINK")
    .setURL("https://github.com/brblacky/lavamusic")
			);

          const mainPage = new MessageEmbed()
            .setAuthor('CoppaMusic', 'https://media.discordapp.net/attachments/708683759599484988/868750391783862342/logo-coppa.png')
            .setThumbnail('https://media.discordapp.net/attachments/708683759599484988/868750391783862342/logo-coppa.png')
             .setColor('#303236')
            .addField('invite lavamusic', `[Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot)`, true)
           message.channel.send({embeds: [mainPage], components: [row]})
    }
}
