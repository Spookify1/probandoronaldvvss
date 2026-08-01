const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ayuda')
    .setDescription('Muestra la lista de comandos disponibles'),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle('📖 Lista de comandos')
      .setColor(0x5865f2)
      .addFields(
        { name: '/ping', value: 'Muestra la latencia del bot' },
        { name: '/hola', value: 'El bot te saluda' },
        { name: '/avatar', value: 'Muestra el avatar de un usuario' },
        { name: '/servidor', value: 'Información del servidor' },
        { name: '/usuario', value: 'Información de un usuario' },
        { name: '/8ball', value: 'Pregúntale algo a la bola 8 mágica' },
        { name: '/moneda', value: 'Lanza una moneda' },
        { name: '/dado', value: 'Lanza un dado' },
        { name: '/clear', value: 'Elimina mensajes (moderación)' },
        { name: '/kick', value: 'Expulsa a un usuario (moderación)' },
        { name: '/ban', value: 'Banea a un usuario (moderación)' },
      );
    await interaction.reply({ embeds: [embed] });
  },
};
