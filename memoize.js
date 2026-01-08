// примитивная генерация ключа без учета больших входных параметров
function key(args) {
  return JSON.stringify(args);
}

function memoize(fn) {
  var cache = new Map();

  return function (...args) {
    const k = key(args);

    const exist = cache.get(k);

    if (exist) {
      console.log("memo");
      return exist;
    }

    const result = fn(...args);

    cache.set(k, result);

    console.log("new");
    return result;
  };
}

const summary = memoize((a, b) => a.x + b.x);

console.log(summary({ x: 1 }, { x: 2 }));
console.log(summary({ x: 1 }, { x: 2 }));

console.log(summary({ x: 4 }, { x: 2 }));
console.log(summary({ x: 4 }, { x: 2 }));
