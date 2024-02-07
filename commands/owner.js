/*

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   

*/
const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

module.exports = {
  name: "owner",
  description: "Get information about bot owner.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const RobloxLink = 'https://www.roblox.com/users/1334988531/profile';
      const CrypticLink = 'https://discord.gg/8jP8bD79th';
      const { EmbedBuilder } = require('discord.js')
        const embed = new EmbedBuilder()
            .setColor('#da2a41')
            .setAuthor({
          name: 'Owner',
          iconURL: 'https://cdn.discordapp.com/attachments/1105676788727816269/1204612492983275560/Neon-Discord-Pfp-Blue-Green.webp?ex=65d55dce&is=65c2e8ce&hm=f4fff756f6d09625fb33870081aff52b601f990c2c98e9e01c388c08888cc3ef&',
          url: 'https://discord.gg/Ku9T4chpHe'
        })
            .setDescription(`__**About me**__:\n\n ▶️ Myself Axel aka KJ. I am a discord bot developer and coding scripter. I love playing games, watching Movies and Hanging out with my boyfriend. You will get faster replies on discord. Feel free to contact me! ❤️ 
            .setTimestamp();
      interaction.reply({ embeds: [embed] }).catch(e => {});

    } catch (e) {
    console.error(e); 
  }
  },
};
/*

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          
