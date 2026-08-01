const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hola')
    .setDescription('El bot te saluda'),
  async execute(interaction) {
    await interaction.reply(`¡Hola, ${interaction.user.username}! 👋`);
  },
};
