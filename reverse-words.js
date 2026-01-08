function reverse(str) {
  return str
    .split(" ")
    .map((str) => {
      const isEndsWith = str.endsWith("!");

      if (isEndsWith) {
        str = str.slice(0, -1);
      }

      return str.split("").reverse().join("") + (isEndsWith ? "!" : "");
    })
    .join(" ");
}

console.log(reverse("Куда идём мы с Пятачком - Большой-большой секрет!"));
console.log("адуК мёди ым с мокчатяП - йошьлоБ-йошьлоб теркес!");
