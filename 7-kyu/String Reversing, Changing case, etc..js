/**Given 2 string parameters, show a concatenation of:

the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
a separator in between both strings: @@@
the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER 
** Keep in mind that this kata was initially designed for Shell, I'm aware it may be easier in other languages.** */

function reverseAndMirror(s1, s2) {
  function changeCase(c) {
    if (c == c.toUpperCase()) {
      return c.toLowerCase();
    }
    return c.toUpperCase();
  }
  function reverse(s) {
    let result = '';
    for (let index = s.length - 1; index >= 0; index--) {
      result += s[index];
    }
    return result;
  }

  s1 = [...s1].map(changeCase).join('');
  s2 = [...s2].map(changeCase).join('');
  return reverse(s2) + '@@@' + reverse(s1) + s1;
}
