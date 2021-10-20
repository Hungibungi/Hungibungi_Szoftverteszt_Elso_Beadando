const hello = require('./beadando');

test('no imput', () => {
    expect(hello("")).toBe('Hello, my friend.');
});

test('one name', () => {
    expect(hello("Stella")).toBe('Hello, Stella.');
});