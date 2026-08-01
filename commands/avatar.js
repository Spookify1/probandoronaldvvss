const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('avatar')
    .setDescription('Muestra el avatar de un usuario')
    .addUserOption((option) =>
      option.setName('usuario').setDescription('Usuario del que quieres ver el avatar').setRequired(false),
    ),
  async execute(interaction) {
    const usuario = interaction.options.getUser('usuario') ?? interaction.user;
    const embed = new EmbedBuilder()
      .setTitle(`Avatar de ${usuario.username}`)
      .setImage(usuario.displayAvatarURL({ size: 512, extension: 'png' }))
      .setColor(0x5865f2);
    await interaction.reply({ embeds: [embed] });
  },
};
