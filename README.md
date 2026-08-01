# Bot de Discord Básico

Bot hecho con [discord.js](https://discord.js.org/) con soporte de slash commands, comandos de diversión y moderación.

## Configuración

1. Instala las dependencias:
   ```
   npm install
   ```
2. Copia `.env.example` a `.env` y completa los valores:
   ```
   DISCORD_TOKEN=tu_token_aqui
   CLIENT_ID=id_de_la_aplicacion
   GUILD_ID=id_del_servidor (opcional, para pruebas rápidas)
   ```
3. Registra los comandos slash en Discord:
   ```
   npm run deploy
   ```
4. Ejecuta el bot:
   ```
   npm start
   ```

## Comandos slash

| Comando | Descripción |
| --- | --- |
| `/ping` | Muestra la latencia del bot |
| `/hola` | El bot te saluda |
| `/avatar [usuario]` | Muestra el avatar de un usuario |
| `/servidor` | Información del servidor |
| `/usuario [usuario]` | Información de un usuario |
| `/8ball <pregunta>` | Pregúntale algo a la bola 8 mágica |
| `/moneda` | Lanza una moneda |
| `/dado [caras]` | Lanza un dado |
| `/clear <cantidad>` | Elimina mensajes (requiere permiso de gestionar mensajes) |
| `/kick <usuario> [razon]` | Expulsa a un usuario (requiere permiso de expulsar) |
| `/ban <usuario> [razon]` | Banea a un usuario (requiere permiso de banear) |
| `/ayuda` | Muestra la lista de comandos |

## Comandos de texto (compatibilidad)

- `!ping` → responde "¡Pong!"
- `!hola` → saluda al usuario

## Estructura del proyecto

```
├── commands/          # Un archivo por cada comando slash
├── deploy-commands.js # Registra los comandos en la API de Discord
├── index.js           # Punto de entrada del bot
└── .env.example       # Plantilla de variables de entorno
```
