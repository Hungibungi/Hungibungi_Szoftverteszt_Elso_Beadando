const hello = require('./beadando');

test('no imput', () => {
    const nevek = [];
    expect(hello(nevek)).toBe('Hello, my friend.');
});

test('one name', () => {
    const nevek = ["Stella"];
    expect(hello(nevek)).toBe('Hello, Stella.');
});