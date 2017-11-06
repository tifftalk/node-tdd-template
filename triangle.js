'use strict';

class Triangle {
  constructor(side1, side2, side3){
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  isValid(){
    if(this.side1 > this.side2 + this.side3){
      return false;
    } else if( this.side2 > this.side1 + this.side3 ){
      return false;
    } else if (this.side3 > this.side1 + this.side2){
      return false;
    } else {
      return true;
    }
  }
}

module.exports.Triangle = Triangle;
