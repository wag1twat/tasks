const arr = [false, 1, 0, 1, 2, 0, 1, 3, "a"];

function moveZeros(arr) {
  const defined = [];

  const zeros = [];

  arr.forEach((item) => {
    if (item === 0) {
      zeros.push(0);
    } else {
      defined.push(item);
    }
  });

  return defined.concat(zeros);
}

console.log(moveZeros(arr));
