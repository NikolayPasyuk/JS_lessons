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
const callCount = (fn) => {
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
}

const [addCount, getCount] = callCount(sum)

addCount(1, 2)
addCount(1, 3)
addCount(2, 5)
console.log(
    getCount()
)