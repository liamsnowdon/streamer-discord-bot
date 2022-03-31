const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('twitch')
    .setDescription('Link to my Twitch page!'),

  async execute(interaction) {
    await interaction.reply(`Watch my streams on Twitch: https://www.twitch.tv`);
  },
};
