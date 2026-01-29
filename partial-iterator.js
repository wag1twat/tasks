const array = Array.from({ length: 11 }, (_, idx) => idx + 1);

const buffer = [];

const step = 2;

let after = 0;

class ChunkArray {
    #array = [];
    #length = 0;
    #timeout = null;

    constructor(array = []) {
        this.#array = array;
    }

    chunk(callback, resolve, reject) {
        this.#length = 0;

        if (this.#timeout) clearTimeout(this.#timeout);

        this.#timeout = setTimeout(() => {
            for (let i = 0; i < array.length; i++) {
                const absIdx = i + 1;

                const start = absIdx - step;
                const end = start + step;

                if (absIdx % step === 0) {
                    this.#buffered(callback, resolve, reject, start, end);
                } else if (i === array.length - 1) {
                    this.#buffered(callback, resolve, reject, start + 1, end);
                }
            }
        }, 0);
    }

    #buffered(callback, resolve, reject, start, end) {
        setTimeout(() => {
            // impl payload
            setTimeout(() => {
                try {
                    for (var i = start; i < end; i++) {
                        this.#array[i] = callback(this.#array[i]);
                        this.#length++;
                    }

                    if (resolve && this.#length === this.#array.length) {
                        resolve(this.#array);
                    }
                } catch (e) {
                    if (reject) {
                        reject(e);
                    } else {
                        throw e;
                    }
                }
            }, Math.random() * 1000);
        }, 0);
    }

    getArray() {
        return this.#array;
    }
}

const chunkArray = new ChunkArray(array);

chunkArray.chunk((item) => {
    return `${item}`;
});

chunkArray.chunk(
    (item) => {
        return `${item}X`;
    },
    (array) => {
        console.log(array);
    },
);

console.log(chunkArray.getArray());

console.log('stack is open');
