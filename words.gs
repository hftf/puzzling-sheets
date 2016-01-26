/**
 * Gets an extra letter from two words.
 *
 * @param {string} short The first string.
 * @param (string) long The longer string.
 * @return The input multiplied by 2.
 * @customfunction
 */
function extraLetter(a, b) {
  var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (var i = 0; i < 26; i++) {
    if (a.split(alpha[i]).length < b.split(alpha[i]).length) return alpha[i];
  }
  return '';
}

function oneLetterLess(l, word) {
  var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXZY';
  for (var j = 0; j < l.length; j++) {
    var tot = 0;
    for (var i = 0; i < 26; i++) {
      tot += Math.abs(word.toUpperCase().split(alpha[i]).length -  l[j][0].split(alpha[i]).length);
    }
    if (tot === 1) return l[j][0];
  }
  return '';
}
