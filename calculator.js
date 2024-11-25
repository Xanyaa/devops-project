function performOperation(num1, num2, operation) {
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Invalid input. Both inputs must be numbers.");
    }

    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 === 0) {
                throw new Error("Division by zero is not allowed.");
            }
            return num1 / num2;
        default:
            throw new Error("Invalid operation.");
    }
}

module.exports = { performOperation }; // For testing purposes
