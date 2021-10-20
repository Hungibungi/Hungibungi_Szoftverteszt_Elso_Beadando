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

test('shouting two names', () => {
    const nevek = ["STELLA", "GEORGE"];
    expect(hello(nevek)).toBe('HELLO STELLA AND GEORGE!');
});

test('shouting more than 2 names', () => {
    const nevek = ["STELLA", "GEORGE", "LILLY", "JIN"];
    expect(hello(nevek)).toBe('HELLO STELLA, GEORGE, LILLY AND JIN!');
});

test('mixed two names', () => {
    const nevek = ["STELLA", "George"];
    expect(hello(nevek)).toBe('Hello, George. AND HELLO STELLA!');
});

test('mixed more than 2 names', () => {
    const nevek = ["STELLA", "George", "Iris", "LILLY", "Jin", "HARU"];
    expect(hello(nevek)).toBe('Hello, George, Iris and Jin. AND HELLO STELLA, LILLY AND HARU!');
});