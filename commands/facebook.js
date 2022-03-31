const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('facebook')
    .setDescription('Link to my Facebook page!'),

  async execute(interaction) {
    await interaction.reply(`Follow me on Facebook: https://www.facebook.com`);
  },
};
