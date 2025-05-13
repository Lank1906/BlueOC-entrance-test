function runTask1Tests() {
    const cases = [
        { input: ['a', 'ab', 'abc', 'cd', 'def', 'gh'], expected: ['ab', 'cd', 'gh'] },
        { input: ['x', 'xx', 'y', 'zzz'], expected: ['x', 'y'] },
        { input: ['abc', 'def', 'ghi', 'jkl'], expected: ['abc', 'def', 'ghi', 'jkl'] },
        { input: [], expected: [] },
        { input: ['abc'], expected: ['abc'] }
    ];

    let output = '';

    cases.forEach(({ input, expected }, index) => {
        const result = mostFrequentLengthStrings(input);
        const passed = JSON.stringify(result) === JSON.stringify(expected);
        output += `Test Case ${index + 1}: ${passed ? '✅ PASSED' : '❌ FAILED'}\nInput: ${JSON.stringify(input)}\nExpected: ${JSON.stringify(expected)}\nGot: ${JSON.stringify(result)}\n\n`;
    });

    return output;
}

window.runTask1Tests = runTask1Tests;
