const dict = new Map([
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["VIII", 8],
  ["VII", 7],
  ["VI", 6],
  ["V", 5],
  ["IV", 4],
  ["III", 3],
  ["II", 2],
  ["I", 1],
]);

export function toRoman(n) {
  let summary = n;
  let result = "";

  dict.forEach((value, key) => {
    const remainder = summary / value;

    const subtrahend = Math.floor(remainder) * value;

    result += Array.from({ length: remainder }).fill(key).join("");

    summary -= subtrahend;
  });

  return result;
}

export function fromRoman(str) {
  let summary = 0;
  let result = str;

  Array.from(dict)
    .sort(([a], [b]) => b.length - a.length)
    .forEach(([key, value]) => {
      result = result.replaceAll(key, () => {
        summary += value;
        return "";
      });
    });

  return summary;
}
