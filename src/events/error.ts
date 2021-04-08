import { Client } from 'discord.js';
import { errLog } from '../utils/logs';

module.exports = (client: Client, error: Error) => {
  console.log(error);
  errLog(client, error, null);
}