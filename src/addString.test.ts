import { addString } from "./addString";

describe('testaddstring', () => {
    test('returns 0 for empty string', () => {
        expect(addString('')).toBe(0);
      });
    
      test('returns the number for single number input', () => {
        expect(addString('1')).toBe(1);
      });
    
      test('adds two numbers', () => {
        expect(addString('1,5')).toBe(6);
      });
});