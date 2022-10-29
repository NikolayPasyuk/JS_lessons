const todoListId_1 = '1'
const todoListId_2 = '2'
const getObjectKey = (n) => n * 2

const todoList = [
    {
        id: todoListId_1,
        title: 'What to learn',
        filter: 'all'
    },
    {
        id: todoListId_2,
        title: 'What to buy',
        filter: 'all'
    },
]

const tasks = {
    [todoListId_1]: [
        {id: '11', title: 'HTML', isDone: true},
        {id: '12', title: 'CSS', isDone: true},
        {id: '13', title: 'JS/TS', isDone: true}
    ],
    [todoListId_2]: [
        {id: '21', title: 'Beer', isDone: true},
        {id: '22', title: 'Fish', isDone: true},
        {id: '23', title: 'Cheese', isDone: true}
    ],
    [10 + 20]: [], //'30'
    [todoListId_1 + todoListId_2]: [], //12
    [getObjectKey(33)]: [], //'66'
    ['user name']: 'Bob'
}

console.log([...tasks[todoListId_1], {id: 14, title: 'Redux', isDone: true}])
console.log(tasks[todoListId_2].find(t => t.id === '21'))
console.log(tasks[todoListId_1][2].title)


//reduce

const numbers = [1, 2, 3, 4, 5]

console.log(numbers.reduce((acc, el) => acc + el, 0))


console.log(numbers.reduce((acc, el) => acc > el ? acc : el))


const students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: 'Alex',
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: 'John',
        age: 25,
        isMarried: false,
        scores: 100
    }
]

console.log(students.reduce((acc, el) => acc.scores > el.scores ? acc : el))