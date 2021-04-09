import 'dotenv/config';
import * as h from '../commands/help';
const BOT_PREFIX = process.env.BOT_PREFIX;
/**
 * @file help.test.ts
 * @version 2021.04.09
 * @author Ty Foster
 * 
 * Unit tests for help.ts
 */

test('help', () => {
  const msg = h.help();
  expect(msg.title).toEqual('Commands');
});

test('h_flip', () => {
  const msg = h.h_flip();
  expect(msg.title).toEqual(`${BOT_PREFIX}flipcoin`);
});

test('h_roll', () => {
  const msg = h.h_roll();
  expect(msg.title).toEqual(`${BOT_PREFIX}roll <num-sides>`);
})