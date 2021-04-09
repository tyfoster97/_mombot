import 'dotenv/config';
import { Client, Message } from 'discord.js';
/**
 * @file message.ts
 * @author Ty Foster
 * @version 2021.04.08
 * 
 * Handles Discord Client MessageEvent
 */

/**
 * Processes messages for the Bot
 * 
 * @param client the Client for the Bot
 * @param message the Message to process
 */
module.exports = (client: Client, message: Message) => {
  if (message.author.bot) return; // ignore bot messages

  if (message.content.startsWith(process.env.BOT_PREFIX)) { // if the message starts with the command PREFIX
    let args = message.content
      .substr(message.content.indexOf(process.env.BOT_PREFIX) + 1) // strip PREFIX from string
      .split(/[\s+\,+]/); // token ize input
    const cmd = args.shift().toLowerCase(); // pop front of stack to get command
    console.log(cmd, args);

    if (client['commands'].get(cmd)) {
      client['commands'].get(cmd).run(client, message, args);
    }
  }
}