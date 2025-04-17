export const addString = (input: string) => {
    if (input === '') return 0; // Return 0 for empty string
    const numbers = input.split(',').map(Number); // Split the string by comma and convert to numbers
    const negativeNumbers = numbers.filter(num => num < 0); // Filter negative numbers
    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`); // Throw error if negative numbers are found
    }
    if (numbers.length === 1) return numbers[0]; // Return the number if only one number is present
    return numbers.reduce((acc, curr) => acc + curr, 0); // Sum the numbers
}