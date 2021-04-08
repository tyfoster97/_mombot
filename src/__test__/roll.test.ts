/**
 * 
 */

import { roll } from '../commands/roll';

describe('Invalid arguments', () => {
  test('Less than 0', () => {
    expect(roll(-1)).toBe(0);
  });

  test('Greater than MAX_SAFE_INT', () => {
    expect(roll(Number.MAX_SAFE_INTEGER + 1)).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER);
  });
});

describe('Valid arguments', () => {
  test('1', () => {
    expect(roll(1)).toBe(1);
  });
})