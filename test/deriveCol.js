const assert = require("assert")

const Z = require("../zebras.js")

describe("deriveCol", function() {
  it("creates a new dataframe based on columns from existing dataframe.", function() {
    const temps = [
      { date: "1990-05-06", tempCelsius: 0 },
      { date: "1990-05-07", tempCelsius: 4 },
    ]
    const fahrenheit = r => r.tempCelsius * 1.8 + 32

    assert.deepStrictEqual(Z.deriveCol(fahrenheit, temps), [32, 39.2])
  })
})
