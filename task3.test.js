const Calculator = require('./task3');

describe('sum', () => {
   test('1 + 1 should equal 2', () => {
       expect(Calculator.add(1,1)).toBe(2)
   })

   test('sum negatives or 0 should throw', () => {
       expect(() => {
           Calculator.add(0, 1)
       }).toThrow()
   })

   test('only 1 value passed should throw', () => {
       expect(() => {
           Calculator.add(1)
       }).toThrow();
   })

})

describe('substract', () => {
   test('4-2 to equal 2', () => {
       expect(Calculator.sustract(4,2)).toBe(2)
   })

   test('2-4 to throw', () => {
       expect(() => {
           Calculator.sustract(2,4)
       }).toThrow();
   })
     
   test('not numbers as parameters should throw', () => {
       expect(() => {
           Calculator.sustract('hi',2)
       }).toThrow();
   })

})