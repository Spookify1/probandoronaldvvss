const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('kick')
    .setDescription('Expulsa a un usuario del servidor')
    .addUserOption((option) => option.setName('usuario').setDescription('Usuario a expulsar').setRequired(true))
    .addStringOption((option) => option.setName('razon').setDescription('Razón de la expulsión').setRequired(false))
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
  async execute(interaction) {
    const usuario = interaction.options.getUser('usuario');
    const razon = interaction.options.getString('razon') ?? 'Sin razón especificada';
    const miembro = interaction.guild.members.cache.get(usuario.id);

    if (!miembro) {
      return interaction.reply({ content: 'Ese usuario no está en el servidor.', ephemeral: true });
    }
    if (!miembro.kickable) {
      return interaction.reply({ content: 'No puedo expulsar a este usuario.', ephemeral: true });
    }

    await miembro.kick(razon);
    await interaction.reply(`👢 ${usuario.username} fue expulsado. Razón: ${razon}`);
  },
};
