/**
 * Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
 */

function mergeArrays(a, b) {
  let result = [];
  let array = [...a, ...b];
  for (let i = 0; i < array.length; i++) {
    if (result.indexOf(array[i]) < 0) {
      result.push(array[i]);
    }
  }
  return result.sort((a, b) => a - b);
}
