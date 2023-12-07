/**
 * Write a simple function that takes polar coordinates (an angle in degrees and a radius) and returns the equivalent cartesian coordinates (rounded to 10 places).

For example:

coordinates(90,1)
=> (0.0, 1.0)

coordinates(45, 1)
=> (0.7071067812, 0.7071067812)
 */

function coordinates(d, r) {
  var θ = (d * Math.PI) / 180;
  return [+(r * Math.cos(θ)).toFixed(10), +(r * Math.sin(θ)).toFixed(10)];
}
