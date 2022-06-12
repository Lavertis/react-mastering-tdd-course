export const maxNumber = numbers => {
    if (numbers.length > 0)
        return Math.max(...numbers);
    return 0;
};