class List {
  #list = [];
  constructor(...args) {
    this.#list = args;
  }

  #_push(target, ...args) {
    const prevl = target.length;

    const nextl = prevl + args.length;

    for (var i = 0; i < nextl; i++) {
      if (i < target.length) {
        target[i] = target[i];
      } else {
        target[i] = args[i - prevl];
      }
    }

    return target;
  }

  #_get(target, idx) {
    return idx >= 0 ? target[idx] : target[target.length - Math.abs(idx)];
  }

  at(idx) {
    return this.#_get(this.#list, idx);
  }

  push(...args) {
    this.#list = this.#_push(this.#list, ...args);
    return this.#list;
  }

  concat(array) {
    const target = structuredClone(this.#list);

    for (var i = 0; i < array.length; i++) {
      this.#_push(target, array[i]);
    }

    return target;
  }

  filter(comparator) {
    const target = [];

    for (var i = 0; i < this.#list.length; i++) {
      if (comparator(this.#list[i])) {
        this.#_push(target, this.#list[i]);
      } else {
        continue;
      }
    }

    return target;
  }

  shift() {
    const removed = this.#list[0];

    for (let i = 0; i < this.#list.length - 1; i++) {
      this.#list[i] = this.#list[i + 1];
    }

    delete this.#list[this.#list.length - 1];
    this.#list.length--;

    return removed;
  }

  unshift(...args) {
    const prev = structuredClone(this.#list);

    const length = this.#list.length + args.length;

    for (var i = 0; i < length; i++) {
      if (i < args.length) {
        this.#list[i] = args[i];
      } else {
        this.#list[i] = prev[i - args.length];
      }
    }

    return this.#list;
  }

  pop() {
    const removed = this.#list[this.#list.length - 1];

    delete this.#list[this.#list.length - 1];

    this.#list.length--;

    return removed;
  }

  map(transformer) {
    const target = structuredClone(this.#list);

    for (var i = 0; i < target.length; i++) {
      target[i] = transformer(target[i]);
    }

    return target;
  }

  find(comparator) {
    let result;

    for (var i = 0; i < this.#list.length; i++) {
      if (comparator(this.#list[i])) {
        result = this.#list[i];
        break;
      }
    }

    return result;
  }

  findIndex(comparator) {
    let index = -1;

    for (var i = 0; i < this.#list.length; i++) {
      if (comparator(this.#list[i])) {
        index = i;
        break;
      }
    }

    return index;
  }

  forEach(callack) {
    const target = structuredClone(this.#list);

    for (var i = 0; i < target.length; i++) {
      callack(target[i], i);
    }
  }

  includes(...args) {
    let result = 0;

    for (var i = 0; i < args.length; i++) {
      if (this.findIndex((item) => item === args[i]) !== -1) {
        result++;
      }
    }

    return Boolean(result === args.length);
  }

  fill(value, start = 0, end = this.#list.length - 1) {
    const l = end + 1;

    for (var i = start; i < l; i++) {
      this.#list[i] = value;
    }

    return this.#list;
  }

  flat() {
    const target = [];

    for (var i = 0; i < this.#list.length; i++) {
      if (Array.isArray(this.#list[i])) {
        let idx = -1;

        while (idx++ < this.#list[i].length - 1) {
          this.#_push(target, this.#list[i][idx]);
        }
      } else {
        this.#_push(target, this.#list[i]);
      }
    }

    return target;
  }

  join(separator = "") {
    let result = "";

    this.forEach((el, i) => {
      result += i > 0 && i < this.#list.length ? separator + el : el;
    });

    return result;
  }

  some(comparator) {
    let result = false;

    for (var i = 0; i < this.#list.length; i++) {
      if (comparator(this.#list[i])) {
        result = true;
        break;
      }
    }

    return result;
  }

  every(comparator) {
    let result = false;

    for (var i = 0; i < this.#list.length; i++) {
      if (comparator(this.#list[i])) {
        result = true;
      } else {
        result = false;
        break;
      }
    }

    return result;
  }

  getList() {
    return this.#list;
  }
}

const list = new List(1, 43, 6, 7, 90, 10);

// console.log(list.shift());
// console.log(list.shift());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.unshift(5, 8));
// console.log(list.push(4, 5, 6));
// console.log(list.filter((item) => item === 7));
// console.log(list.concat([1, 2, 4]));
// console.log(list.map(String));
// console.log(list.find((item) => item === 10));
// console.log(list.findIndex((item) => item === 7));
// console.log(
//   list.forEach((item) => {
//     console.log(item);
//   })
// );
// console.log(list.includes(1, 7));
// console.log(list.fill("x", 3, 4));
// console.log(list.flat());
// console.log(list.join("x"));
// console.log(list.at(-2));
// console.log(list.some((item) => item === 1));
// console.log(list.every((item) => typeof item === "number"));
