// Написать функцию проверки слова на палиндром
function isPalindrome(word) {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
}