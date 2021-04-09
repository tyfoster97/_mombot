import 'dotenv/config';
import { Client, Message, MessageEmbed } from "discord.js";
const {
  COLOR,
  BOT_PREFIX
} = process.env;
/**
 * @file help.ts
 * @version 2021.04.09
 * @author Ty Foster
 * 
 * Handles !help command
 */

/**
 * Handles command logic
 * 
 * @param client the Discord Client
 * @param message a Discord Message sent by a User
 * @param args an array of string arguments from the Message
 */
export async function run(client: Client, message: Message, args: string[]) {
  switch(args[0]) {
    case 'roll':
      message.channel.send(h_roll());
      break;
    default:
      message.channel.send(help());
      break;
  }
}

export function help(): MessageEmbed {
  return new MessageEmbed()
    .setColor(COLOR)
    .setTitle('Commands')
    .setDescription(`Complete list of mombot commands\nuse ${BOT_PREFIX}help <command-name> for command specific information`)
    .addFields(
      { name: 'Example', value: `${BOT_PREFIX}help roll` },
      { name: 'roll', value: 'roll a many-sided die'}
    );
}

export function h_roll(): MessageEmbed {
  return new MessageEmbed()
    .setColor(COLOR)
    .setTitle(`${BOT_PREFIX}roll <num-sides>`)
    .setDescription('rolls a <num-sided> dice')
    .addFields(
      { name: 'Example', value: `${BOT_PREFIX}roll 20` },
      { name: 'INFO', value: '<num-sides> must be a number greater than 0' }
    );
}
