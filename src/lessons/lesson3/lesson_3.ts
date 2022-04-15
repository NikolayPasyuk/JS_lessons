import {rejects} from 'assert';

console.log('lesson 3');



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


/*let prom = new Promise((resolve, reject) => {
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
            throw new Error('some error')
        }
    )
    .then(res2 => {
            console.log('res2 ', res2)
        },

        err2 => {
            console.log('err ', err2)
        })*/


/*let prom = new Promise((resolve, reject) => {
    setTimeout((response) => {
        const {httpStatus, data, error} = response
        if (httpStatus >= 200 && httpStatus < 400) {
            resolve(data)
        } else {
            reject(error)
        }
    }, 1000, {httpStatus: 200, data: {}, error: {message: 'Not found'}})
})
console.log('prom', prom)

prom
    .then(res => {
            console.log('res ', res)
            throw new Error('some error')
        },
        err => {
            console.log('err ', err)
        }
    )
    .then(res2 => {
            console.log('res2 ', res2)
        },

        err2 => {
            console.log('err2 ', err2)
        })*/

/*let prom = new Promise((resolve, reject) => {
    setTimeout((response) => {
        const {httpStatus, data, error} = response
        if (httpStatus >= 200 && httpStatus < 400) {
            resolve(data)
        } else {
            reject(error)
        }
    }, 1000, {httpStatus: 200, data: {}, error: {message: 'Not found'}})
})
console.log('prom', prom)

prom
    .then(res => {
            console.log('res ', res)
            throw new Error('some error')
        }
    )
    .then(res2 => {
            console.log('res2 ', res2)
        }
    )
    .then(res3 => {
            console.log('res3 ', res3)
        }
    )
    /!*.then(res4 => {
            console.log('res4 ', res4)
        },
        err4 => {
            console.log('err4 ', err4)
        }
    )*!/
    .then(res4 => {
            console.log('res4 ', res4)
        }
    )
    .then(
        null,
        err5 => {
            console.log('err5 ', err5)
        }
    )*/


/*let prom = new Promise((resolve, reject) => {
    setTimeout((response) => {
        const {httpStatus, data, error} = response
        if (httpStatus >= 200 && httpStatus < 400) {
            resolve(data)
        } else {
            reject(error)
        }
    }, 1000, {httpStatus: 200, data: {}, error: {message: 'Not found'}})
})
console.log('prom', prom)

prom
    .catch(err0 => {
        console.log('err0 ', err0)
    })
    .then(res => {
            console.log('res ', res)
            throw new Error('some error')
        }
    )
    .catch(err2 => {
        console.log('err2 ', err2)
    })
    .then(res2 => {
            console.log('res2 ', res2)
        }
    )
    .catch(err3 => {
        console.log('err3 ', err3)
    })
    .then(res3 => {
            console.log('res3 ', res3)
        }
    )
    .catch(err4 => {
        console.log('err4 ', err4)
    })
    .then(res4 => {
            console.log('res4 ', res4)
        }
    )
    .catch(err5 => {
        console.log('err5 ', err5)
    })*/


/*let prom = new Promise((resolve, reject) => {
    setTimeout((response) => {
        const {httpStatus, data, error} = response
        if (httpStatus >= 200 && httpStatus < 400) {
            resolve(data)
        } else {
            reject(error)
        }
    }, 1000, {
        httpStatus: 200,
        data: {name: 'Hanna', age: 20, city: 'Minsk', id: 'sfj4fi3jf8'},
        error: {message: 'Not found'}
    })
})
console.log('prom', prom)

prom
    .finally(() => {
        console.log('finally 1')
        throw  new Error('Finally error')
    })
    .then(
        res => {
            console.log('res ', res)
            throw new Error('some error')
        }
    )
    .finally(() => {
        console.log('finally 2')
    })
    .catch(
        err2 => {
            console.log('err2 ', err2)
        }
    )
    .finally(() => {
        console.log('finally 3')
    })*/


console.log('Start')

let prom = new Promise((resolve, reject) => {
    console.log('Promise Start')
    setTimeout((response) => {
        const {httpStatus, data, error} = response
        if (httpStatus >= 200 && httpStatus < 400) {
            resolve(data)
        } else {
            reject(error)
        }
        console.log('setTimeout')
    }, 1000, {
        httpStatus: 200,
        data: {name: 'Hanna', age: 20, city: 'Minsk', id: 'sfj4fi3jf8'},
        error: {message: 'Not found'}
    })
    console.log('Promise End')
})

prom
    .then(
        res => {
            console.log('res ', res)
        }
    )
console.log('End')

// just a plug
export default () => {
};
