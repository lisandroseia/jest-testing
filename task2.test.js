const reverse = require('./task2');

test('hello should equal olleh', () => {
    expect(reverse('hello')).toMatch(/olleh/)
})