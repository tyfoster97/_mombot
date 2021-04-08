import { Client } from 'discord.js';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
const readdir = promisify(fs.readdir);
const lstat = promisify(fs.lstat);
/**
 * @file setup.ts
 * @author Ty Foster
 * @version 2021.04.08
 * 
 * Utility functions for setting up the Bot
 */


export async function registerCommands(client: Client, dir: string = 'commands') {
  const dist = path.join(process.cwd(), 'dist');
  if (!client['commands']) {
    client['commands'] = new Map<string, any>();
  }
  try {
    const files = await readdir(path.join(dist, dir));
    for (const file of files) {
      const stat = await lstat(path.join(dist, dir, file));
      if (stat.isDirectory()) {
        registerCommands(client, path.join(dir, file));
      } else {
        if (file.endsWith('.js')) {
          const cmdName = file.substr(0, file.indexOf('.js'));
          const cmdModule = require(path.join(dist, dir, cmdName));
          client['commands'].set(cmdName, cmdModule);
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
}

export async function registerEvents(client: Client, dir: string = 'events') {
  const dist = path.join(process.cwd(), 'dist');
  try {
    const files = await readdir(path.join(dist, dir));
    for (const file of files) {
      const stat = await lstat(path.join(dist, dir, file));
      if (stat.isDirectory()) {
        registerEvents(client, path.join(dir, file));
      } else {
        if (file.endsWith('.js')) {
          const eventName = file.substr(0, file.indexOf('.js'));
          const eventModule = require(path.join(dist, dir, eventName));
          client.on(eventName, eventModule.bind(null, client));
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
}

