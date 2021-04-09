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
/* istanbul ignore next */ // cannot test with jest
module.exports.run = async (client: Client, message: Message, args: string[]) => {
  if (args.length != 1 || isNaN(Number(args[0]))) { // screen for correct number of args and ability to convert
    message.channel.send(h_roll());
  } else { // handle happy day case
    message.reply(` you rolled a ${roll(Number(args[0]))}`);
  }
};

/**
 * Simulates rolling a die
 * 
 * @param sides the number of sides for the die
 * @returns the roll of the die
 */
export function roll (sides: number): number {
  if (sides <= 0) {
    sides = 0;
  } else if (sides > Number.MAX_SAFE_INTEGER) {
    sides = Number.MAX_SAFE_INTEGER;
  }

  return Math.ceil(Math.random() * sides);
}
