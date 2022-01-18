const countChars = require('./task1');

 test('lisandro should equal 8', () => {
  expect(countChars('lisandro')).toBe(8);
 });



test('error', () => {
    expect(() => {
        countChars('lisandroseia')
    }).toThrow();
})