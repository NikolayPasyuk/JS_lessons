//Task 1
//Дана задача,что будет выведено  в консоль
/*
const square = {
    side: 5,
    area() {
        return this.side * this.side
    },
    perimeter: () => 4 * this.side
};

console.log(square.area())
console.log(square.perimeter())*/

//Task 2
//Дана задача,что пройзойдет при вызове функции
/*
var a = 15;

function foo() {
    var a = 25;

    var result = function () {
        console.log(a)
    }
    result.a = 35;

    return result
}

var bar = foo().bind({a: 45})
bar()*/

//Task 3
//Дана задача,что будет выведено  в консоль

/*
var foo = function bar() {
    return 1
}
console.log(typeof bar())*/

//Task 4
/*
var a = 50;

function f() {
    a = 100
    let b = 150
}

if (true) {
    a = 175
    let c = 200
    var d = 300
    const e = 400
}
f()
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)*/

//Task 5
/*
let a = 5
{
    a = 10
}
console.log(a)

function f2() {
    console.log(a)
    a = 20
    var b = 20
}

console.log(b)
f2()
console.log(a)*/

//Task 6
/*
{
    let c = 100
    var family = 'it-incubator'

    function f() {
        console.log(c)
    }
}
let doc = false
if (!doc) {
    function c() {
        console.log(family)
    }
}
f()
c()
console.log(family)
console.log(c)*/

//Task 7
/*
let car1 = new Promise((_, reject) => setTimeout(reject, 2000, 'Car 1 crashed in'))
let car2 = new Promise(resolve => setTimeout(resolve, 1500, 'Car 2 completed'))
let car3 = new Promise(resolve => setTimeout(resolve, 3000, 'Car 3 completed'))

Promise.race([car1, car2, car3])
    .then(value => {
        let result = `${value} the race.`
        console.log(result)
    })
    .catch(err => console.log('Race  is cancelled.', err))*/

//Task 8
/*
console.log('Start')
Promise.resolve('Success').then(console.log)
console.log('End')*/

//Task 9
/*
setCurrentUrl();
console.log('The current URL is: ' + url);

function setCurrentUrl() {
    url = window.location.href;
}*/

//Task 10
//Какие ключи будут заполнены у pet1
/*function Animal(size, type) {
    this.type = type || 'Animal'
    this.canTalk = false
}

Animal.prototype.speak = function () {
    if (this.canTalk) {
        console.log('It spoke')
    }
}
let Pet = function (size, type, name, owner) {
    Animal.call(this, size, type);
    this.size = size;
    this.name = name;
    this.owner = owner;
}
Pet.prototype = Object.create(Animal.prototype);
let pet1 = new Pet();
console.log(pet1)*/

//Task 11
/*let array = [1, 2, 3, 4, 4, 5, 4, 4]
for (let i = 0; i < array.length; i++) {
    if (array[i] === 4) {
        array.splice(i, 1)
    }
}
console.log(array)*/

//Task 12
/*
function Monster() {
}

Monster.prototype.growl = () => console.log('Grr!');
console.log(new Monster().growl === new Monster().growl)*/

//Task 13
/*
let first = 'Who';
let second = 'What';
try {
    try {
        throw new Error('Sad trombone')
    } catch (err) {
        first = 'Why';
        throw err
    } finally {
        second = 'When'
    }
} catch (err) {
    second = 'Where'
}
console.log(first)
console.log(second)*/

//Task 14
/*
setTimeout(() => console.log(1), 0)
console.log(2)
new Promise((resolve, reject) => {
    setTimeout(() => reject(console.log(3)), 1000);
}).catch(() => console.log(4))
console.log(5)*/

//Task 15
/*
let data = new Date(2020, 05, 10);
let dateDusplayOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
let formattedDate = data.toLocaleDateString('en', dateDusplayOptions)
console.log(formattedDate)*/

//Task 16
/*
let objBook = {title: 'JavaScript',}
Object.preventExtensions(objBook);
let newObjBook = objBook;
newObjBook.author = 'Robert';

console.log(objBook);
console.log(newObjBook)*/

//Task 17
/*
function getAvaliabilityMessage(item) {
    if (getAvaliability(item)) {
        var msg = 'Username avaliable'
    }
    return msg
}

function getAvaliability(name) {
    return name === 'Eugene';
}

console.log('getAvaliabilityMessage ', getAvaliabilityMessage('newUserName'))*/

//Task 18
/*
const entries = [];
entries.push('a');
entries.push('b', 'c');
console.log(entries.pop())*/

//Task 19
/*
const entries = ['a', 1, true]
console.log(entries instanceof Array)*/

//Task 20
const ratings = [1, 2, 3, 4, 5]
const result = ratings.reduce((start, next, index, array) =>
    start * next)
console.log(result)