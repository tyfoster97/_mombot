import 'dotenv/config';
import { flip } from '../commands/flipcoin';
const BOT_PREFIX = process.env.BOT_PREFIX;
/**
 * @file help.test.ts
 * @version 2021.04.09
 * @author Ty Foster
 * 
 * Unit tests for flipcoin.ts
 */

describe('Outputs', () => {
  const mockMath = Object.create(global.Math);
  test('side', () => {
    mockMath.random = () => 0.5;
    global.Math = mockMath;
    expect(flip()).toEqual('side');
  });

  test('heads', () => {
    mockMath.random = () => 0.75;
    global.Math = mockMath;
    expect(flip()).toEqual('heads');
  });

  test('tails', () => {
    mockMath.random = () => 0.25;
    global.Math = mockMath;
    expect(flip()).toEqual('tails');
  });
});