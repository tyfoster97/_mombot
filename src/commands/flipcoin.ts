import { Client, Message } from 'discord.js';
/**
 * @file flipcoin.ts
 * @version 2021.04.09
 * @author Ty Foster
 * 
 * Handles !flipcoin command
 */

/**
 * Handles command logic
 * 
 * @param client the Discord Client
 * @param message a Discord Message sent by a User
 * @param args an array of string arguments from the Message
 */
/* istanbul ignore next */ // code cannot be tested through jest
module.exports.run = async (client: Client, message: Message, args: string[]) => {
  message.reply(` the coin landed ${flip()} up`);
};

/**
 * Simulates flipping a coin
 * 
 * @returns the value of the coin flip
 */
export function flip(): string {
  const roll = Math.round(Math.random() * 6000);
  let flip: string;
  if (roll < 3000) {
    flip = 'tails';
  } else if (roll > 3000) {
    flip = 'heads';
  } else { // estimated 1 in 6000 chance a coin lands on its side (Murray & Teare 1993)
    flip = 'side';
  }
  return flip;
}
