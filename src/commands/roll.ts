
/**
 * 
 */

import { Client, Message } from "discord.js";

/**
 * 
 */

module.exports.run = async (client: Client, message: Message, args: string[]) => {
  //TODO
  if (args.length != 1 || isNaN(Number(args[0]))) { // error handling
    //TODO send user err message
  } else {
    roll(Number(args[0]));
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
