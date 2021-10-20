const hello = require('./beadando');

test('no imput', () => {
    expect(hello("")).toBe('Hello, my friend.');
});