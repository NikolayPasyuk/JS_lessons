//Task 1
//Дана задача,что будет выведено  в консоль
/*const group = {
    name: 'Samurai-1',
    users: ['Alex', 'Hanna'],
    showUsersWithGroup() {
        const handler = function (user) {
            console.log(`${this.name}: ${user}`)
        }
        group.users.forEach(handler)
    }
}
group.showUsersWithGroup()*/

//Task 2
/*
function a(x, y) {
    return x * y
}

const b = a.bind(null, 2)
console.log(
    b(2)
)
console.log(
    b(3)
)*/
//Task 3
/*
/!*const callCount = (fn) => {
    let count = 0;

    return [
        (...args) => {
            count += 1
            fn(...args)
        },
        () => {
            return count
        }
    ]
}

const sum = (a, b) => {
    return a + b
}*!/

const [addCount, getCount] = callCount(sum)

addCount(1, 2)
addCount(1, 3)
addCount(2, 5)
console.log(
    getCount()
)*/

//Task 4
/*
const user = {
    sleep() {
        this.isSleeping = true
    }
}
const john = Object.create(user)
john.sleep()
console.log(john.isSleeping)*/

//Task 5
/*
console.log(
    [].__proto__.__proto__ === null
)
console.log(
    (() => {
    }).__proto__.__proto__ === Object.prototype
)
console.log(
    Object.__proto__ === (() => {
    }).__proto__
)*/

//Task 6
/*
function User() {
}

User.prototype = {}
const user = new User.prototype.constructor()
console.log(user.constructor === User)*/

//Task 7
/*
function Rabbit() {
}

const whiteRabbit = new Rabbit()
Rabbit.prototype = {
    jumps: true
}
const blackRabbit = new whiteRabbit.constructor()
console.log(whiteRabbit.constructor === Rabbit)
console.log(whiteRabbit.jumps)

console.log(blackRabbit.jumps)
console.log(blackRabbit.constructor === Rabbit)*/

//Task 8
setTimeout(() => {
    console.log('1')
}, 30)
setTimeout(() => {
    console.log('2')
}, 20)
setTimeout(() => {
    console.log('3')
}, 10)
const p = new Promise((res) => {
    console.log('4')
    setTimeout(() => {
        res('5')
    }, 50)
})
p.then(res => console.log(res))
Promise
    .resolve('6')
    .then(res => console.log(res))
