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
