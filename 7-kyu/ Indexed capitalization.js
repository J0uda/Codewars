/**
 * Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.

Good luck!

Be sure to also try:

Alternate capitalization

String array revisal
 */

function capitalize(s, arr) {
  let str = s.split('');
  for (let i = 0; i < arr.length; i++) {
    if (str[arr[i]] != null && str[arr[i]] != undefined) {
      str[arr[i]] = str[arr[i]].toUpperCase();
    }
  }
  return str.join('');
}
