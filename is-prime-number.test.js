import { isPrimeNumber } from './is-prime-number';

test('should is prime number correctly work', () => {
    expect(isPrimeNumber(0)).toBe(false);
    expect(isPrimeNumber(1)).toBe(false);
    expect(isPrimeNumber(2)).toBe(true);
    expect(isPrimeNumber(73)).toBe(true);
    expect(isPrimeNumber(75)).toBe(false);
    expect(isPrimeNumber(-1)).toBe(false);
    expect(isPrimeNumber(1134177557)).toBe(true);
});
