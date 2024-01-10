//soal no: 1
console.log("--------");
// soal no: 2
let s = "00-44 48 5555 8361";
let convert = "";
for (let i = 0; i < s.length; i++) {
  if (s[i] !== " " && s[i] !== "-") {
    convert += s[i];
  }
}
// console.log(convert);
let result = "";
let n = 3;
if (convert.length)
  for (let j = 0; j < convert.length; j++) {
    result += convert[j];
    if (result.length === n) {
      result += "-";
      n = n + 4;
    }
  }
if (result[result.length - 1] === "-") {
  let lastResult = result.slice(0, result.length - 1);
  console.log(lastResult);
} else {
  console.log(result);
}
console.log("--------");

// soal no: 3

// soal no: 4
let tanggal = "21-jan-2012";
let days = parseInt(tanggal);
let month = "";
let days2 = "";
let month2 = "";
for (let i = 7; i < tanggal.length; i++) {
  days2 += tanggal[i];
}
console.log(days2);
for (let i = 3; i <= 5; i++) {
  month += tanggal[i];
}
for(let i = )
// console.log(days);
// console.log(month);
const map = [
  "jan",
  "feb",
  "mar",
  "apr",
  "mei",
  "jun",
  "jul",
  "agu",
  "sep",
  "okt",
  "nov",
  "des",
];

if (map.includes(month) ||) {
  console.log("YA");
} else {
  console.log("TIDAK");
}
