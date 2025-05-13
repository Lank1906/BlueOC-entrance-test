function sumOfTopTwoIntegers(numbers) {
    if (!Array.isArray(numbers) || numbers.length < 2) return null;

    let first = -Infinity;
    let second = -Infinity;

    for (const num of numbers) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second) {
            second = num;
        }
    }

    return first + second;
}

window.sumOfTopTwoIntegers = sumOfTopTwoIntegers;