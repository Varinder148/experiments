const str = "PAYPALISHIRING";

const zigzagCoversion = (s, rows) => {
  if (rows === 1) {
    return s;
  }

  let arr = [];

  let i = 0,
    j = 0,
    k = 0;
  while (k < s.length) {
    while (i < rows) {
      if (!arr[i]) {
        arr[i] = [];
      }
      arr[i][j] = s.charAt(k);

      k++;
      i++;
    }
    i = rows - 2;
    j++;
    while (i > 0) {
      if (!arr[i]) {
        arr[i] = [];
      }
      arr[i][j] = s.charAt(k);
      k++;
      i--;
      j++;
    }
  }
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j]) {
        res = res + arr[i][j];
      }
    }
  }
  console.log(res);
};

zigzagCoversion(str, 3);
