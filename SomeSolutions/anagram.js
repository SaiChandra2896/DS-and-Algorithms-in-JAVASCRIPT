//check for anagrams
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let frequency1 = {};
  let frequency2 = {};
  for (let char in str1) {
    frequency1[str1[char]] = (frequency1[str1[char]] || 0) + 1;
  }
  for (let char in str2) {
    frequency2[str2[char]] = (frequency2[str2[char]] || 0) + 1;
  }
  for (let key in frequency1) {
    if (!(key in frequency2)) {
      return false;
    }
    if (frequency2[key] !== frequency1[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram('abcaa', 'acaba'));
