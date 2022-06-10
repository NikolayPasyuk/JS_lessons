//Task 38

/*
console.log('1' + 2)
console.log(2 + '1')
console.log(2 - '1')
console.log([1, 2, 3] + {})*/


//Task 39

/*
Object.prototype.toString = function () {
    return 'custom string representation'
}

const a = Object.create(null, {})
console.log(a + '')*/


//Task 40

/*
console.log(a)
{
    var a = 6
}
{
    let b = 6
}
console.log(b)*/


//Task 41

/*
test()
{
    function test() {
        console.log('test')
    }
}*/


//Task 42

/*
for (var i = 0; i < 10; i++) {
    (function (j) {
        setTimeout(() => console.log(j), 10)
    })(i)
}*/


//Task 43

/*
const test = {
    prefix: '_',
    tests: ['1', '2', '3'],
    addPrefixToTest() {
        this.tests = this.tests.map(function (testName) {
            return `${this.prefix}_${testName}`
        })
    }
}
test.addPrefixToTest()
console.log(test.tests)*/


//Task 44

function User(name) {
    this.name = name
}

const user = new User('Alex')
console.log(user.isActive)

User.prototype = {
    isActive: true
}
console.log(user.isActive)