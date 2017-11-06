'use strict'

const expect = require('chai').expect;
const Triangle = require('../triangle').Triangle;

describe('triangle', function(){
  it('should create a triangle', function(){
    let side1 = 5;
    let side2 = 2;
    let side3 = 2;

    let triangle = new Triangle(side1, side2, side3);
    expect(triangle.side1).to.equal(side1);
  });
})
