var assert = require("assert");
var WaterBottle = require("../water_bottle.js");

describe("Water Bottle", function(){

  it("should be empty at start", function(){

    var bottle = new WaterBottle();
    assert.strictEqual(0, bottle.volume);
  });
});