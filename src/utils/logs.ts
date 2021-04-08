import { TextChannel, Client, Message, MessageEmbed } from "discord.js";
/**
 * @file log.ts
 * @author Ty Foster
 * @version 2021.04.08
 * 
 * Contains utility functions for sending messages to the log
 */

const ERR='#cc0000';
const WARN='#cccc00';
const INFO='#ffffff';

/**
 * Determines the ID for the Bot log
 * @returns the Channel id for the Bot log
 */
const id = () => {
  let id = '';
  switch(process.env.NODE_ENV) {
    case 'prod':
      id = process.env.PROD_LOG
      break;
    default:
      id = process.env.DEV_LOG
      break;
  }
  return id;
}

/**
 * Sends an ERROR message to the Bot log
 * 
 * @param client the Bot Discord Client
 * @param error the Error thrown
 * @param message the Message prompting the Error (if available)
 */
export async function errLog(client: Client, error: Error, message?: Message) {
  const msg = new MessageEmbed()
    .setColor(ERR)
    .setTitle('ERROR')
    .addFields(
      { name: 'user', value: `${message.author.tag}` || 'No message' },
      { name: 'input', value: `${message.content}` || 'No message' },
      { name: 'error', value: error.message },
      { name: 'stack', value: error.stack.toString() }
    );
  const channel = client.channels.cache.get(id());
  (channel as TextChannel).send(msg);
}

/**
 * Sends an WARN message to the Bot log
 * 
 * @param client the Bot Discord Client
 * @param warning the warning message
 */
export async function warnLog(client: Client, warning: string) {
  const msg = new MessageEmbed()
    .setColor(WARN)
    .setTitle('WARN')
    .setDescription(warning);
  const channel = client.channels.cache.get(id());
  (channel as TextChannel).send(msg);
}

/**
 * Sends an INFO message to the Bot log
 * 
 * @param client the Bot Discord Client
 * @param info the info message
 */
export async function infoLog(client: Client, info: string) {
  const msg = new MessageEmbed()
    .setColor(INFO)
    .setTitle('INFO')
    .setDescription(info);
  const channel = client.channels.cache.get(id());
  (channel as TextChannel).send(msg);
}
