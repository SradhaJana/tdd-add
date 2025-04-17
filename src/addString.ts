export const addString = (input: string) => {
    if (input === '') return 0; // Return 0 for empty string
    const numbers = input.split(',').map(Number); // Split the string by comma and convert to numbers
    return numbers.reduce((acc, curr) => acc + curr, 0); // Sum the numbers
}