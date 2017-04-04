var WaterBottle = function(){
  this.volume = 0
  this.fill = function(){
    this.volume = 100;
  }
  this.drink = function(){
    this.volume -= 10;
  }
  this.empty = function(){
    this.volume = 0
  }

};

module.exports = WaterBottle;