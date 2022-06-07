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
function a(x, y) {
    return x * y
}

const b = a.bind(null, 2)
console.log(
    b(2)
)
console.log(
    b(3)
)