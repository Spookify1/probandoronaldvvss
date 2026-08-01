const { SlashCommandBuilder } = require('discord.js');

const respuestas = [
  'Sí, definitivamente.',
  'Es cierto.',
  'Sin duda alguna.',
  'Probablemente sí.',
  'Las señales apuntan a que sí.',
  'Respuesta confusa, intenta de nuevo.',
  'Pregunta de nuevo más tarde.',
  'Mejor no te lo digo ahora.',
  'No puedo predecirlo.',
  'No cuentes con ello.',
  'Mi respuesta es no.',
  'Mis fuentes dicen que no.',
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('8ball')
    .setDescription('Hazle una pregunta a la bola 8 mágica')
    .addStringOption((option) =>
      option.setName('pregunta').setDescription('Tu pregunta').setRequired(true),
    ),
  async execute(interaction) {
    const pregunta = interaction.options.getString('pregunta');
    const respuesta = respuestas[Math.floor(Math.random() * respuestas.length)];
    await interaction.reply(`🎱 **Pregunta:** ${pregunta}\n**Respuesta:** ${respuesta}`);
  },
};
