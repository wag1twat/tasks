export function weightForWeight(str = '') {
    if (!str) return '';

    return str
        .split(' ')
        .sort((a, b) => {
            const weightA = doSummaryOfNumberString(a);
            const weightB = doSummaryOfNumberString(b);

            return weightA === weightB ? a.localeCompare(b) : weightA - weightB;
        })
        .join(' ');
}

function doSummaryOfNumberString(str = '') {
    if (!str) return 0;

    let index = -1;

    let result = 0;

    while (index++ < str.length - 1) {
        result += +str[index];
    }

    return result;
}
