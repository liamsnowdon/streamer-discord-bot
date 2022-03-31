const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('youtube')
    .setDescription('Link to my YouTube page!'),

  async execute(interaction) {
    await interaction.reply(`Stream highlights and extras on my YouTube https://www.instagram.com`);
  },
};
