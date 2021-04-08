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

if (process.env.NODE_ENV === 'prod') { // run production bot separately
  client.login(process.env.BOT_TOKEN);
} else { // run tests with separate bot
  client.login(process.env.DEV_TOKEN);
}

(async function setup() {
    await registerCommands(client);
    await registerEvents(client);
})(); // run before everything