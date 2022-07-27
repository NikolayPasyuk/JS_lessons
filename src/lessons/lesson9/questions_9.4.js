//В массиве найти минимальное число

/*const numbers = [150, 45, 66, 2, 4, 6, -2, -10, -100, 100]
let minValue = numbers[0]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minValue) {
        minValue = numbers[i]
    }
}
console.log(minValue)*/


//В массиве найти максимальное число

const numbers = [1, 34, 45, -123, 1234, 23]
let maxValue = [0]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
        maxValue = numbers[i]
    }
}
console.log(maxValue)