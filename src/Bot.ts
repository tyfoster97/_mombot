import 'dotenv/config';
import { Client } from 'discord.js';
import { registerCommands, registerEvents } from './utils/setup';
/**
 * @file Bot.ts
 * @version 2021.03.24
 * @author Ty Foster
 * 
 * Entry point for _mombot
 */

const client = new Client();

let token;
switch(process.env.NODE_ENV) {
  case 'prod':
    token = process.env.BOT_TOKEN;
    break;
  default:
    token = process.env.DEV_TOKEN;
    break;
}
client.login(token);

(async function setup() {
    await registerCommands(client);
    await registerEvents(client);
})(); // run before everything