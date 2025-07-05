const s = "ADOBECODEBANC",
  t = "ABC";

const emptyMap = (map) => {
  for (let key in map) {
    if (map[key] > 0) {
      return false;
    }
  }
  return true;
};

const minWindowSubstring = (s, t) => {
  if (t.length > s.length) {
    return "";
  }

  let map = {};
  t.forEach((element) => {
    map[element] = 1;
  });

  let resI = 0,
    resJ = s.length + 1;

  let i = 0,
    j = 0;

  while (i <= j && j <= s.length) {
    console.log(map, s[i], s[j], i, j, resI, resJ);

    if (emptyMap(map) && (map[s[i]] === 0 || map[s[i]] > 0 || map[s[i]] < 0)) {
      map[s[i]] += 1;
      i++;
    } else if (map[s[j]] === 0 || map[s[j]] < 0 || map[s[j]] > 0) {
      map[s[j]] -= 1;
    }
    if (emptyMap(map)) {
      if (j - i < resJ - resI) {
        resI = i;
        resJ = j;
      }
    } else if (j - i < t.length) {
      j++;
    } else {
      j++;
    }
  }
};

minWindowSubstring(s.split(""), t.split(""));
