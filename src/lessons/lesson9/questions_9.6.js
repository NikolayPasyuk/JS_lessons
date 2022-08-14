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

/*
const a = 10;
const b = 20;
const c = 10;
console.log(a === b);
console.log(a === c);*/


// Objects
/*
console.log({a: 10} === {a: 10});
console.log({} === {});*/


// Equal objects

/*
const a = {a: 10};
const b = a;
console.log(a === b);*/


// Inheritance

/*
const a = {prop: 'Test'};
const b = Object.create(a);
const c = Object.create(b);
console.log(b);
console.log(b.prop);
console.log(c);
console.log(c.prop)*/

// Object with prototype

/*const e ={};
console.log(e.toString());*/

//Object without prototype

/*
const f = Object.create(null);
console.log(f.toString());*/


// NaN

/*
console.log(parseInt('test'));
console.log(Math.sqrt(-1));

console.log(NaN === NaN);
console.log(NaN == NaN);
console.log(isNaN(NaN));*/


// Object
const a = {a: 10};

//Reassign Error
// a = {a: 20};

/*
a.b = 20;
console.log(a)*/


// Array
// const c = [];

// Reassign Error
// c = {};

/*
c.push(5);
c.push(10);
console.log(c);*/


// START - temporal dead zone for 'b' and 'c'

// console.log(a);// undefined
// console.log(b);
// console.log(c);

// var a = 10;
// END - temporal dead zone for 'b'
// let b = 20;
// END - temporal dead zone for 'c'
// const c = 30;


// function to return indexes of uppercase letters of a string

/*function capitals(word) {
    let bigLetters = word.toUpperCase().split('');
    let smallLetters = word.split('');
    let res = [];
    for (let i = 0; i < word.length; i++) {
        if (smallLetters[i] === bigLetters[i]) {
            res.push(i)
        }
    }
    return res
}*/

/*function capitals(word) {
    let res = [];
    word.split('').forEach(function (letter, index) {
        if (letter === letter.toUpperCase()) {
            res.push(index)
        }
    })
    return res
}*/

/*
const capitals = (word) =>
    word.split('').reduce((result, letter, index) => {
        if (letter === letter.toUpperCase()) {
            result.push(index)
        }
        return result
    }, [])
*/
