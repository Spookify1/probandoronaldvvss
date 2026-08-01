const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('clear')
    .setDescription('Elimina una cantidad de mensajes del canal')
    .addIntegerOption((option) =>
      option.setName('cantidad').setDescription('Cantidad de mensajes a borrar (1-100)').setRequired(true),
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
  async execute(interaction) {
    const cantidad = interaction.options.getInteger('cantidad');
    if (cantidad < 1 || cantidad > 100) {
      return interaction.reply({ content: 'La cantidad debe estar entre 1 y 100.', ephemeral: true });
    }
    const eliminados = await interaction.channel.bulkDelete(cantidad, true);
    await interaction.reply({ content: `🧹 Se eliminaron ${eliminados.size} mensajes.`, ephemeral: true });
  },
};
