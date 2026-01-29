const board = [
    [1, 2, 1],
    [1, 1, 2],
    [2, 2, 0],
];

function isSolved(board) {
    const paths = [
        [
            [0, 0],
            [0, 1],
            [0, 2],
        ],
        [
            [1, 0],
            [1, 1],
            [1, 2],
        ],
        [
            [2, 0],
            [2, 1],
            [2, 2],
        ],
        [
            [0, 0],
            [1, 0],
            [2, 0],
        ],
        [
            [0, 1],
            [1, 1],
            [2, 1],
        ],
        [
            [0, 2],
            [1, 2],
            [2, 2],
        ],
        [
            [0, 0],
            [1, 1],
            [2, 2],
        ],
        [
            [2, 0],
            [1, 1],
            [0, 2],
        ],
    ];

    let solved = 0;

    for (var i = 0; i < paths.length; i++) {
        const values = paths[i].map(([m, idx]) => board[m][idx]);

        if (values.every((item) => item === 1)) {
            solved = 1;
            break;
        }

        if (values.every((item) => item === 2)) {
            solved = 2;
            break;
        }

        if (values.every((item) => item !== 0)) {
            solved = solved === -1 ? -1 : 0;
        } else {
            solved = -1;
        }
    }

    return solved;
}

// 1 = X, 2 = Y
// 0 ничья
// -1 результат не вычеслен так как не заполнены все поля
// 1 победа X
// 2 победа Y
console.log(isSolved(board));
