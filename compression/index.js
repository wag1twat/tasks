function subsequence(array, index, prevcount = 1) {
    let count = prevcount;

    if (array[index] === array[index + 1]) {
        count++
        return subsequence(array, index + 1, count)
    } else {
        return count > 1 ? `${array[index]}|${count}` : array[index]
    }
}

function serialize(array) {
    const decoded = []

    let target = undefined

    for (var i = 0; i < array.length; i++) {
        if (target !== array[i]) {
            target = array[i]
            decoded.push(subsequence(array, i))
        } else { continue }
    }

    return decoded.join(',')
}

function deserialize(str) {
    const array = []

    const hash = str.split(',')

    for (var i = 0; i < hash.length; i++) {
        if (hash[i].includes('|')) {
            const [s, count] = hash[i].split('|')
            array.push(...Array.from({ length: count }, () => +s))
        } else {
            array.push(+hash[i])
        }
    }

    return array
}



function randomInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function before(array, l, repeatEach) {
    const s = array.join(',');

    const length = new TextEncoder().encode(s).length

    console.log(`размерность без сжатия (bytes) на длину ${array.length} с числами из ${l} знаков, дубликация=${repeatEach}`, length);

    return length
}

function after(array, b) {
    const after = new TextEncoder().encode(serialize(array)).length

    console.log(`размерность со сжатием (bytes)`, after);

    console.log('кэф сжатия', +(b / after).toFixed(2), '\n')
}

function of(length, l, repeatEach = 1) {
    function random() {
        switch (l) {
            case 1: return randomInt(0, 9)
            case 2: return randomInt(0, 99)
            case 3: return randomInt(0, 999)
            default: return randomInt(0, 9)
        }
    }

    let array;

    if (repeatEach > 1) {
        const base = Math.ceil(length / repeatEach);
        const values = Array.from({ length: base }, () => random());
        array = values.flatMap((v) => Array.from({ length: repeatEach }, () => v)).slice(0, length);
    } else {
        array = Array.from({ length }, (i) => random(i));
    }

    const b = before(array, l, repeatEach)

    after(array, b)
}

of(50, 1)
of(100, 1)
of(500, 1)
of(1000, 1)

of(50, 1)
of(100, 1)
of(500, 1)
of(1000, 1)

of(50, 3)
of(100, 3)
of(500, 3)
of(1000, 3)

of(50, 3, 3)
of(100, 3, 3)
of(500, 3, 3)
of(1000, 3, 3)