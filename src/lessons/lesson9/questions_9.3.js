//Task 38

/*
console.log('1' + 2)
console.log(2 + '1')
console.log(2 - '1')
console.log([1, 2, 3] + {})*/


//Task 39

Object.prototype.toString = function () {
    return 'custom string representation'
}

const a = Object.create(null, {})
console.log(a + '')