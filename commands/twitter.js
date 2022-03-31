const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('twitter')
    .setDescription('Link to my Twitter page!'),

  async execute(interaction) {
    await interaction.reply(`Read my ramblings on Twitter: https://www.twitter.com`);
  },
};
