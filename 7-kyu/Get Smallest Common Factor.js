/**
 * Given an array of integers, return the smallest common factors of all integers in the array.

When i say Smallest Common Factor i mean the smallest number above 1 that can divide all numbers in the array without a remainder.

scf([200, 30, 18, 8, 64, 34]) //=> 2
scf([21, 45, 51, 27, 33]) //=> 3
scf([133, 147, 427, 266]) //=> 7
If there are no common factors above 1, return 1 (technically 1 is always a common factor).
 */

function isDivisible(array, number) {
  for (let i = 0; i < array.length; i++)
    if (array[i] % number != 0) return false;

  return true;
}

function scf(array) {
  if (array.length == 0) return 1;

  let min = Math.min(...array);
  for (let number = 2; number <= min; number++) {
    if (isDivisible(array, number)) return number;
  }

  return 1;
}
