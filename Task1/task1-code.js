function mostFrequentLengthStrings(strings) {
    if (!Array.isArray(strings) || strings.length === 0) return [];

    const lengthCount = new Map();
    let maxFreq = 0;

    for (const str of strings) {
        const len = str.length;
        const count = (lengthCount.get(len) || 0) + 1;
        lengthCount.set(len, count);

        if (count > maxFreq) {
            maxFreq = count;
        }
    }

    const mostCommonLengths = [];
    for (const [len, count] of lengthCount.entries()) {
        if (count === maxFreq) {
            mostCommonLengths.push(len);
        }
    }

    return strings.filter(str => mostCommonLengths.includes(str.length));
}

window.mostFrequentLengthStrings = mostFrequentLengthStrings;
