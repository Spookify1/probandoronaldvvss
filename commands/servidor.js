const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('servidor')
    .setDescription('Muestra información del servidor'),
  async execute(interaction) {
    const { guild } = interaction;
    const embed = new EmbedBuilder()
      .setTitle(guild.name)
      .setThumbnail(guild.iconURL() ?? null)
      .addFields(
        { name: 'Miembros', value: `${guild.memberCount}`, inline: true },
        { name: 'Propietario', value: `<@${guild.ownerId}>`, inline: true },
        { name: 'Creado el', value: `<t:${Math.floor(guild.createdTimestamp / 1000)}:D>`, inline: true },
        { name: 'Canales', value: `${guild.channels.cache.size}`, inline: true },
        { name: 'Roles', value: `${guild.roles.cache.size}`, inline: true },
      )
      .setColor(0x57f287);
    await interaction.reply({ embeds: [embed] });
  },
};
