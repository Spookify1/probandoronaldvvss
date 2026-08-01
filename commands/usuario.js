const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('usuario')
    .setDescription('Muestra información de un usuario')
    .addUserOption((option) =>
      option.setName('usuario').setDescription('Usuario a consultar').setRequired(false),
    ),
  async execute(interaction) {
    const usuario = interaction.options.getUser('usuario') ?? interaction.user;
    const miembro = interaction.guild.members.cache.get(usuario.id);
    const embed = new EmbedBuilder()
      .setTitle(usuario.username)
      .setThumbnail(usuario.displayAvatarURL())
      .addFields(
        { name: 'ID', value: usuario.id, inline: true },
        { name: 'Cuenta creada', value: `<t:${Math.floor(usuario.createdTimestamp / 1000)}:D>`, inline: true },
        {
          name: 'Se unió al servidor',
          value: miembro ? `<t:${Math.floor(miembro.joinedTimestamp / 1000)}:D>` : 'Desconocido',
          inline: true,
        },
      )
      .setColor(0xfee75c);
    await interaction.reply({ embeds: [embed] });
  },
};
