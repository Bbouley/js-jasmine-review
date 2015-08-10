var code = require('../js/main.js');

// Problem 1
// Write a function that takes three random numbers from 0 to 100 and returns the largest one.

describe('Problem 1', function() {
  it('should return the largest number', function() {
    expect(code.largestNumber([10, 20, 30])).toBe(30);
    expect(code.largestNumber([1, 20, 3])).toBe(20);
    expect(code.largestNumber([-1, -20, -3])).not.toBe(-20);
  });
});

describe ('Problem 2', function(){
  it('should return from 40 to random number else return number', function(){
    expect(code.fortyOdd(50)).toEqual([41,43,45,47,49]);
    expect(code.fortyOdd(14)).toEqual(14);
  });
});

describe('Problem 3', function(){
  it('should return all even numbers to random number', function(){
    expect(code.evenTo(15)).toEqual([0,2,4,6,8,10,12,14]);
    expect(code.evenTo(8)).toEqual([0,2,4,6,8]);
  });
});

describe('Problem 4', function(){
  it('should return odd numbers from 40 to that number', function(){
    expect(code.fortyOdd2(50)).toEqual([41,43,45,47,49]);
    expect(code.fortyOdd2(29)).toEqual([39,37,35,33,31,29]);
  });
});

describe('Problem 5', function(){
  it('should return sum of it\'s digits', function(){
    expect(code.sumDigits(2012)).toEqual(5);
    expect(code.sumDigits(57912)).toEqual(24);
    expect(code.sumDigits(34)).toEqual(7);
  });
});

describe('Problem 6', function(){
  it('should return sum of it\'s digits as long as it\'s less than 10', function(){
    expect(code.digitsToTen(1056)).toEqual(6);
    expect(code.digitsToTen(14200)).toEqual(7);
    expect(code.digitsToTen(950)).toEqual(9);
  });
});

describe('Problem 7', function(){
  it('should return smallest divisible number of both', function(){
    expect(code.smallestDivisible(9,6)).toEqual(3);
    expect(code.smallestDivisible(50, 10)).toEqual(2);
    expect(code.smallestDivisible(24, 15)).toEqual(3);
    expect(code.smallestDivisible(10, 3)).toEqual('sorry');
  });
});

describe('Problem 8', function(){
  it('should return least common multiple of two nums', function(){
    expect(code.leastCommonMultiple(3,5)).toEqual(15);
    expect(code.leastCommonMultiple(10,15)).toEqual(30);
  });
});

describe('Problem 9', function(){
  it('should return mean average and standard deviation of 2 nums', function(){
    expect(code.average(2,4)).toEqual([3,1]);
    expect(code.average(5,10)).toEqual([7.5,2.5]);
  });
});
