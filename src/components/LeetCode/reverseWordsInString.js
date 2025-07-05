const str = " This is a   wordx ";

var reverseWords = function (s) {
  let str = s;
  str = str.split("").reverse().join("");
  str = str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .filter((word) => !!word)
    .join(" ");

  console.log(str);
};

reverseWords(str);
