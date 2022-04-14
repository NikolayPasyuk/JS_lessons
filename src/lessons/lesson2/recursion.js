function pow(x, n) {
    let result = 1

    // умножаем result на x n раз в цикле
    for (let i = 0; i < n; i++) {
        result *= x
    }
    return result
}

console.log(pow(2, 3))


function pow2(x, n) {
    if (n === 1) {
        return x
    } else {
        return x * pow(x, n - 1)
    }
}

console.log(pow2(2, 3))


function sumTo(n) {
    let result = 0

    for (let i = 1; i <= n; i++) {
        result += i
    }
    return result
}

console.log(sumTo(100))


function sumTo2(n) {
    if (n === 1) return n
    return n + sumTo(n - 1)
}

console.log(sumTo2(100))


function sumTo3(n) {
    return n * (n + 1) / 2;
}

console.log(sumTo3(100))

function factorial(n) {
    return (n !== 1) ? n * factorial(n - 1) : 1
}

console.log(factorial(5))