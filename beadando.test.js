const hello = require('./beadando');

test('no imput', () => {
    const nevek = [];
    expect(hello(nevek)).toBe('Hello, my friend.');
});

test('one name', () => {
    const nevek = ["Stella"];
    expect(hello(nevek)).toBe('Hello, Stella.');
});

test('two names', () => {
    const nevek = ["Stella", "George"];
    expect(hello(nevek)).toBe('Hello, Stella and George.');
});

test('more than 2 names', () => {
    const nevek = ["Stella", "George", "Lilly", "Jin"];
    expect(hello(nevek)).toBe('Hello, Stella, George, Lilly and Jin.');
});

test('shouting one name', () => {
    const nevek = ["STELLA"];
    expect(hello(nevek)).toBe('HELLO STELLA!');
});