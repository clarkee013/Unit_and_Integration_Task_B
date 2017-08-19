var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('should be able to add 13 to 0 to get 13', function(){
    calculator.add(13);
    assert.equal(13, calculator.runningTotal);
  });

  it('should be able to add 7 to 13 to get 20', function(){
    calculator.previousTotal = 13;
    calculator.add(7);
    assert.equal(20, calculator.runningTotal);
  });

  it('should be able to add 130219811313 to 20 to get 130219811333', function(){
    calculator.previousTotal = 20;
    calculator.add(130219811313);
    assert.equal(130219811333, calculator.runningTotal);
  });

  it('should be able to add 20 to -33 to get -13', function(){
    calculator.previousTotal = -33;
    calculator.add(20);
    assert.equal(-13, calculator.runningTotal);
  });

  it('should be able to subtract 13 from 13 to get 0', function(){
    calculator.previousTotal = 13;
    calculator.subtract(13);
    assert.equal(0, calculator.runningTotal);
  });

  it('should be able to subtract 7 from 20 to get 13', function(){
    calculator.previousTotal = 20;
    calculator.subtract(7);
    assert.equal(13, calculator.runningTotal);
  });

  it('should be able to subtract 20 from 130219811333 to get 130219811313', function(){
    calculator.previousTotal = 130219811333;
    calculator.subtract(20);
    assert.equal(130219811313, calculator.runningTotal);
  });

  it('should be able to subtract 13 from 0 to get -13', function(){
    calculator.previousTotal = 0;
    calculator.subtract(13);
    assert.equal(-13, calculator.runningTotal);
  });

  it('should be able to multiply 0 by 2 to get 0', function(){
    calculator.previousTotal = 0;
    calculator.multiply(2);
    assert.equal(0, calculator.runningTotal);
  });

  it('should be able to multiply 2 by 2 to get 4', function(){
    calculator.previousTotal = 2;
    calculator.multiply(2);
    assert.equal(4, calculator.runningTotal);
  });

  it('should be able to multiply 1301281 by 130218 to get 1693332240961', function(){
    calculator.previousTotal = 1301281;
    calculator.multiply(1301281);
    assert.equal(1693332240961, calculator.runningTotal);
  });

  it('should be able to multiply -13 by 13 to get -169', function(){
    calculator.previousTotal = -13;
    calculator.multiply(13);
    assert.equal(-169, calculator.runningTotal);
  });

  it('should be able to divide 2 by 2 to get 1', function(){
    calculator.previousTotal = 2;
    calculator.divide(2);
    assert.equal(1, calculator.runningTotal);
  });

  it('should be able to divide 130281 by 13 to get 10021.615384615385', function(){
    calculator.previousTotal = 130281;
    calculator.divide(13);
    assert.equal(10021.615384615385, calculator.runningTotal);
  });

  it('should be able to divide -13 by -13 to get 1', function(){
    calculator.previousTotal = -13;
    calculator.divide(-13);
    assert.equal(1, calculator.runningTotal);
  });

  it('should be able to use the + button and = button to add 13 to 0 to get 13', function(){
    calculator.numberClick(0);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.equal(13, calculator.runningTotal);
  });

  it('should be to use the + button and = button to add 13 to 7 to get 20', function(){
    calculator.numberClick(1);
    calculator.numberClick(3);
    calculator.operatorClick('+')
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.equal(20, calculator.runningTotal);
  });

  it('should be able to use the - button and = button to subtract 7 from 20 to get 13', function(){
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick('-');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.equal(13, calculator.runningTotal);
  });

  it('should be able to use the * button and = button to multiply 130281 by 13 to get 1693653', function(){
    calculator.numberClick(1);
    calculator.numberClick(3);
    calculator.numberClick(0);
    calculator.numberClick(2);
    calculator.numberClick(8);
    calculator.numberClick(1);
    calculator.operatorClick('*');
    calculator.numberClick(1);
    calculator.numberClick(3);
    calculator.operatorClick('=')
    assert.equal(1693653, calculator.runningTotal);
  });

  it('should be able to use the / button and = button to divide 2 by 2 to get 1', function(){
    calculator.numberClick(2);
    calculator.operatorClick('/');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(1, calculator.runningTotal);
  });

  it('should be able to use + and - buttons with the = button to add 1 to 8 and then subtract 4 to get 5', function(){
    calculator.clearClick();
    calculator.numberClick(8);
    calculator.operatorClick('+')
    calculator.numberClick(1);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(5, calculator.runningTotal);
  });

  it('should be able to use the * and / buttons with the = button to multiply 4 by 5 and divde by 2 to get 10', function(){
    calculator.clearClick();
    calculator.numberClick(4);
    calculator.operatorClick('*')
    calculator.numberClick(5);
    calculator.operatorClick('/');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(10, calculator.runningTotal);
  });

  it('should be able to use the clr button to clear a number from previous total', function(){
    calculator.previousTotal = 9;
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  });

  it('should be able to use the * button and = button to multiply 130281 by 13 to get 1693653 and then the clr button to clear the result', function(){
    calculator.numberClick(1);
    calculator.numberClick(3);
    calculator.numberClick(0);
    calculator.numberClick(2);
    calculator.numberClick(8);
    calculator.numberClick(1);
    calculator.operatorClick('*');
    calculator.numberClick(1);
    calculator.numberClick(3);
    calculator.operatorClick('=');
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  });

  it('should be able divide 13 by 0 to get 0', function(){
    calculator.numberClick(1);
    calculator.numberClick(3);
    calculator.operatorClick('/');
    calculator.numberClick(0);
    assert.equal(0, calculator.runningTotal);
  })


});


