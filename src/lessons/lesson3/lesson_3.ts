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


/*let prom = new Promise((resolve, rejects) => {
    setTimeout((response) => {
        const {httpStatus, data} = response
        if (httpStatus >= 200 && httpStatus < 400) {
            resolve(data)
        }
    }, 1000, {httpStatus: 200, data: {name: 'Hanna', age: 20, city: 'Minsk', id: 'sfj4fi3jf8'}})
})
console.log('prom', prom)

prom
    .then(res => {
        console.log('res ', res)
        return 10
    })
    .then(res2 => {
        console.log('res ', res2)
    })
    .then(res3 => {
        console.log('res ', res3)
    })*/


/*let prom = new Promise((resolve, reject) => {
    setTimeout((response) => {
        const {httpStatus, data} = response
        if (httpStatus >= 200 && httpStatus < 400) {
            resolve(data)
        }
    }, 1000, {httpStatus: 200, data: {name: 'Hanna', age: 20, city: 'Minsk', id: 'sfj4fi3jf8'}})
})
console.log('prom', prom)

prom
    .then(res => {
        return new Promise((resolve, reject) => {
            setTimeout((response) => {
                const {httpStatus, data2} = response
                if (httpStatus >= 200 && httpStatus < 400) {
                    resolve(data2)
                }
            }, 3000, {httpStatus: 200, data: {currency: 'EUR', amount: 500, accountNumber: 'BY15146367383'}})
        })
    })
    .then(res2 => {
        console.log('res ', res2)
    })
    .then(res3 => {
        console.log('res ', res3)
    })*/


let prom = new Promise((resolve, reject) => {
    setTimeout((response) => {
        const {httpStatus, data, error} = response
        if (httpStatus >= 200 && httpStatus < 400) {
            resolve(data)
        } else {
            reject(error)
        }
    }, 1000, {httpStatus: 404, data: {}, error: {message: 'Not found'}})
})
console.log('prom', prom)

prom
    .then(res => {
            console.log('res ', res)
        },
        err => {
            console.log('err ', err)
        }
    )


// just a plug
export default () => {
};