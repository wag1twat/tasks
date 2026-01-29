const obj = {
    from: 1,
    to: 5,
    *[Symbol.iterator]() {
        for (let i = this.from; i <= this.to; i++) {
            yield i;
        }
    },
};

for (let num of obj) {
    console.log(num);
}
