var assert = require("assert");
var WaterBottle = require("../water_bottle.js");



describe("Water Bottle", function(){
var bottle;
beforeEach(function(){

   bottle = new WaterBottle();

   })
  it("should be empty at start", function(){

    // var bottle = new WaterBottle();
    assert.strictEqual(0, bottle.volume);
  });

  it("should go to 100 when filled", function(){

    // var bottle = new WaterBottle();
    bottle.fill();
    assert.strictEqual(100, bottle.volume);
  });
  it("should go down by 10 when drunk", function(){
    // var bottle = new WaterBottle();
    bottle.fill();
    bottle.drink();
    assert.strictEqual(90, bottle.volume);
  });
  it("should go to 0 when emptied", function(){
    bottle.fill();
    bottle.empty();
    assert.strictEqual(0, bottle.volume);

  });
  it("should not go below 0", function(){
    bottle.drink();
    assert.strictEqual(0, bottle.volume);
  });

  
});