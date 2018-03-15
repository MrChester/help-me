module.exports = function count(s, pairs) {
    let bitMaskArr = s.split(''),
        pairsLen = pairs.length;

    // Search N
    let n = 1;
    for (let i = 0; i < pairsLen; i++) {
        for (let j = 0; j < 2; j++) {
            n *= Math.pow(pairs[i][j], pairs[i][1])
            break;
        }
    }

    // const result = answer % 1000000007;
    return /*result*/ { bitMaskArr, n };
}