const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('instagram')
    .setDescription('Link to my Instagram page!'),

  async execute(interaction) {
    await interaction.reply(`Cute pics of my dog on Instagram: https://www.instagram.com`);
  },
};
