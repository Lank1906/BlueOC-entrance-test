function runTask2Tests() {
    const cases = [
        { input: [1, 4, 2, 3, 5], expected: 9 },
        { input: [10, 20, 30], expected: 50 },
        { input: [-1, -2, -3, -4], expected: -3 },
        { input: [100, 50], expected: 150 },
        { input: [5], expected: null },
        { input: [], expected: null }
    ];

    let output = '';

    cases.forEach(({ input, expected }, index) => {
        const result = sumOfTopTwoIntegers(input);
        const passed = result === expected;
        output += `Test Case ${index + 1}: ${passed ? '✅ PASSED' : '❌ FAILED'}\nInput: ${JSON.stringify(input)}\nExpected: ${expected}\nGot: ${result}\n\n`;
    });

    return output;
}

window.runTask2Tests = runTask2Tests;