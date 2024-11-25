const { performOperation } = require('./calculator');

// Test cases
const tests = [
    { input: [2, 3, 'add'], expected: 5 },
    { input: [5, 2, 'subtract'], expected: 3 },
    { input: [4, 5, 'multiply'], expected: 20 },
    { input: [10, 2, 'divide'], expected: 5 },
    { input: [10, 0, 'divide'], expectedError: true }, // Division by zero
    { input: ['a', 5, 'add'], expectedError: true }, // Invalid input
    { input: [3, 3, 'modulus'], expectedError: true } // Invalid operation
];

let allTestsPassed = true;

tests.forEach(({ input, expected, expectedError }, index) => {
    try {
        const result = performOperation(...input);
        if (expectedError) {
            console.error(`Test ${index + 1} failed. Expected an error but got ${result}`);
            allTestsPassed = false;
        } else if (result !== expected) {
            console.error(`Test ${index + 1} failed. Expected ${expected} but got ${result}`);
            allTestsPassed = false;
        } else {
            console.log(`Test ${index + 1} passed.`);
        }
    } catch (error) {
        if (expectedError) {
            console.log(`Test ${index + 1} passed (expected error).`);
        } else {
            console.error(`Test ${index + 1} failed. Unexpected error: ${error.message}`);
            allTestsPassed = false;
        }
    }
});

if (!allTestsPassed) {
    console.error('Some tests failed.');
    process.exit(1);
} else {
    console.log('All tests passed.');
}
