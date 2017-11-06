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
  it('should verify a legal triangle is legal', function(){
    // setup a legal triangle
    let side1 = 3;
    let side2 = 2;
    let side3 = 2;

    let triangle = new Triangle(side1, side2, side3);
    // call a method to check that legality
    var actualResult = triangle.isValid();
    // validate that my expected result matches actual result
    expect(actualResult).to.equal(true);
  });
})
