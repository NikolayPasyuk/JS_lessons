// console.log(Array.isArray([]))
// console.log(typeof (() => {}))

let user = {
    name: 'Alex',
    age: 23,
    isStudent: true
}

let newUser = user
newUser.name = 'Bob'

console.log(user)

// let copyUser = {}
// copyUser.name = user.name
// copyUser.age = user.age
// copyUser.isStudent = user.isStudent

const copyUser = {...user}


const users = [
    {
        name: 'Bob',
        friends: ['Alex', 'Bob']
    },
    {
        name: 'Alex',
        friends: ['Alex', 'Ann']
    },
    {
        name: 'Ann',
        friends: ['Ann', 'Bob']
    },
    {
        name: 'Mary',
        friends: ['Mary', 'Bob']
    }
]

// const copyUsers = [...users, {name: 'Donald'}]
// console.log(copyUsers)

const copyUsers = users.map((user) => ({
    ...user,
    friends: [...user.friends]
}))
console.log(copyUsers)

const addFriends = users.map((user) => user.name === 'Bob' ? {
    ...user,
    friends: [...user.friends, 'Nick']} : user)
console.log(addFriends)