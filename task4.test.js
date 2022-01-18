const capitalize = require('./task4');

test('hello should equall HELLO', () => {
    expect(capitalize('hello')).toMatch(/HELLO/);
})

test('23 should throw', () => {
    expect(() => {
        capitalize(23)
    }).toThrow();
})