import * as rialir from '../../lib/rialir';
import TelegramBot from 'node-telegram-bot-api';

export default async function handler(req, res) {
  try {
    // Create our new bot handler with the token
    // that the Botfather gave us
    // Use an environment variable so we don't expose it in our code
    const bot = new TelegramBot(process.env.TELEGRAM_TOKEN);

    // Retrieve the POST request body that gets sent from Telegram
    const { body } = req;

    // Ensure that this is a message being sent
    if (body.message) {
      // Retrieve the ID for this chat
      // and the text that the user sent
      const {
        chat: { id },
        text,
      } = body.message;

      // Admin chatId
      if (id === process.env.CHAT_ID) {
        // Create a message to send back
        // We can use Markdown inside this
        const message = `✅ TRY: *"${text}"*`;

        // Update try rate
        res.status(200).json(await rialir.update(text));
        // Send our new message back in Markdown and
        // wait for the request to finish
        await bot.sendMessage(id, message, { parse_mode: 'Markdown' });
      }
    }
  } catch (error) {
    // If there was an error sending our message then we
    // can log it into the Vercel console
    console.error('Error sending message');
    console.log(error.toString());
  }

  // Acknowledge the message with Telegram
  // by sending a 200 HTTP status code
  // The message here doesn't matter.
  res.send('OK');
}
