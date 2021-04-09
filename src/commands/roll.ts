import { Client, Message } from "discord.js";
import { h_roll } from './help';
/**
 * @file roll.ts
 * @version 2021.04.09
 * @author Ty Foster
 * 
 * Handles the !roll command for the Bot
 */

/**
 * Passes arguments to handler
 * 
 * @param client the Discord Client
 * @param message a Discord Message sent by a User
 * @param args an array of string arguments from the Message
 */
module.exports.run = async (client: Client, message: Message, args: string[]) => {
  if (args.length != 1 || isNaN(Number(args[0]))) {
    message.channel.send(h_roll());
  } else {
    message.reply(` you rolled a ${roll(Number(args[0]))}`);
  }
};

export function roll (sides: number): number {
  if (sides <= 0) {
    sides = 0;
  } else if (sides > Number.MAX_SAFE_INTEGER) {
    sides = Number.MAX_SAFE_INTEGER;
  }

  return Math.ceil(Math.random() * sides);
}
