//function to create a set of duplicate characters of a string

/*
function accum(string) {
    let arr = string.toUpperCase().split('');
    let repeatArr = arr.map(function (el, i) {
        return el += el.repeat(i).toLowerCase()
    })
    let resString = repeatArr.join('-');
    return resString
}
*/

/*function accum(string) {
    return string.toUpperCase().split('').map(function (el, i) {
        return el += el.repeat(i).toLowerCase();
    }).join('-')
}*/

/*const accum = (string) =>
    string.toUpperCase().split('').map((el, i) => `${el}${el.repeat(i).toLowerCase()}`).join('-')*/


// Primitives

const a = 10;
const b = 20;
const c = 10;
console.log(a === b);
console.log(a === c);