/**
 * Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization

Even-odd disparity */

function capitalize(s) {
  let str = s.split('');
  let str2 = s.split('');

  for (let i = 0; i < str.length; i += 2) {
    str[i] = str[i].toUpperCase();
  }

  for (let i = 1; i < str2.length; i += 2) {
    str2[i] = str[i].toUpperCase();
  }
  return [str.join(''), str2.join('')];
}
