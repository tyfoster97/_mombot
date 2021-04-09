import { Client } from 'discord.js';
import { errLog } from '../utils/logs';
/**
 * @file error.ts
 * @author Ty Foster
 * @version 2021.04.08
 * 
 * Handles Discord Client MessageEvent
 */

/**
 * Processes error for the Bot
 * 
 * @param client the Client for the Bot
 * @param message the Error to process
 */
module.exports = (client: Client, error: Error) => {
  console.log(error);
  errLog(client, error, null);
};
