const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('dado')
    .setDescription('Lanza un dado')
    .addIntegerOption((option) =>
      option.setName('caras').setDescription('Número de caras del dado (por defecto 6)').setRequired(false),
    ),
  async execute(interaction) {
    const caras = interaction.options.getInteger('caras') ?? 6;
    const resultado = Math.floor(Math.random() * caras) + 1;
    await interaction.reply(`🎲 Sacaste un **${resultado}** (dado de ${caras} caras)`);
  },
};
