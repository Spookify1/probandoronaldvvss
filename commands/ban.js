const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Banea a un usuario del servidor')
    .addUserOption((option) => option.setName('usuario').setDescription('Usuario a banear').setRequired(true))
    .addStringOption((option) => option.setName('razon').setDescription('Razón del baneo').setRequired(false))
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
  async execute(interaction) {
    const usuario = interaction.options.getUser('usuario');
    const razon = interaction.options.getString('razon') ?? 'Sin razón especificada';
    const miembro = interaction.guild.members.cache.get(usuario.id);

    if (miembro && !miembro.bannable) {
      return interaction.reply({ content: 'No puedo banear a este usuario.', ephemeral: true });
    }

    await interaction.guild.members.ban(usuario.id, { reason: razon });
    await interaction.reply(`🔨 ${usuario.username} fue baneado. Razón: ${razon}`);
  },
};
