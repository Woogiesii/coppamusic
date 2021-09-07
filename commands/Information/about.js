const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "about",
    category: "Information",
    aliases: [ "botinfo" ],
    description: "See description about this project",
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
    .setURL("https://github.com/woogiesii/coppamusic")
			);

      const mainPage = new MessageEmbed()
            .setAuthor('CoppaMusic', 'https://media.discordapp.net/attachments/708683759599484988/868750391783862342/logo-coppa.png')
      	    .setThumbnail('https://media.discordapp.net/attachments/708683759599484988/868750391783862342/logo-coppa.png')
            .setColor('#40B24A')
            .addField('Creator', '[Woogiesii#1140](https://github.com/woogiesii)', true)
            .addField('Repository', '[Here](https://github.com/woogiesii/coppamusic)', true)
            )
        return message.channel.send({embeds: [mainPage], components: [row]});
    }
}
