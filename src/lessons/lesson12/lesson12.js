// Написать функцию проверки слова на палиндром
function isPalindrome(word) {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
}


// Написать функцию проверки на простое число (циклом и рекурсией)

// Проверка простого числа с помощью цикла
function isPrimeLoop(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Проверка простого числа с помощью рекурсии
function isPrimeRecursion(n, i = 2) {
    if (n <= 1) {
        return false;
    }
    if (i > Math.sqrt(n)) {
        return true;
    }
    if (n % i === 0) {
        return false;
    }
    return isPrimeRecursion(n, i + 1);
}