import { Client } from 'discord.js';
import { infoLog } from '../utils/logs';
/**
 * @file message.ts
 * @author Ty Foster
 * @version 2021.04.08
 * 
 * Handles Discord Client ReadyEvent
 */

/**
 * Processes ready event
 * 
 * @param client the Client for the Bot
 */
module.exports = (client: Client) => {
  const info = `Bot ${client.user.username} logged in.`
  console.info(info)
  infoLog(client, info);
};
