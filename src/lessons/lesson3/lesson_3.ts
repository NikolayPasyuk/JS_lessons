import {rejects} from 'assert';

console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

//https://learn.javascript.ru/xmlhttprequest
//https://learn.javascript.ru/fetch
//https://developer.mozilla.org/ru/docs/Web/HTTP/Status


/*console.log('Start')

let prom = new Promise((resolve, rejects) => {
    console.log('Promise Start')

    setTimeout(() => {
        console.log('setTimeout')
    }, 100)
    console.log('Promise End')
})
console.log('prom', prom)

console.log('End')*/


let prom = new Promise((resolve, rejects) => {

    setTimeout((response) => {

    }, 1000, {httpStatus: 200})
})


// just a plug
export default () => {
};