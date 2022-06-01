console.log('Lesson 7');


// console.dir(function () {})
// console.dir(Function)
// console.dir(Object)
// console.dir( () => {})
// console.dir(class {})

/*function f() {}
console.log(typeof f.prototype)*/

/*console.dir(Array)
console.dir([])*/


/*const arrayPrototypeObj = Object.getPrototypeOf([])
console.log(Array.prototype === arrayPrototypeObj)
//@ts-ignore
console.log(Array.prototype === [].__proto__)*/

/*const obj = {name: 'Nick'}
console.log(obj)
//@ts-ignore
console.log(obj.__proto__)*/


/*
class Test {
    constructor(public name: string) {
    }

    getName() {
        return this.name
    }
}

//@ts-ignore
Test.prototype.sayHi = function () {
}

let obj = new Test('Hi')
console.dir(Test)
console.log(obj)

//@ts-ignore
obj.__proto__.someFunc = function () {}
let obj2 = new Test('Hello')
console.log(obj2)
*/


/*class Test {
    constructor(public name: string) {
    }

    getName() {
        return this.name
    }
}

let obj = new Test('Hi')
const arrayPrototypeObj = Object.getPrototypeOf(obj)
arrayPrototypeObj.setSomeProperty = function () {}
let obj2 = new Test('Hello')
console.log(obj2)*/


//@ts-ignore

/*class Test {
    constructor(public name: string) {
    }

    getName() {
        return this.name
    }
}
Test.prototype.yo = function (){}

let obj = new Test('Hi')
let arrayPrototypeObj = Object.getPrototypeOf(obj)
//@ts-ignore
arrayPrototypeObj = {f:function (){}}
console.log(obj)

//@ts-ignore
obj.__proto__={f:function (){}}
console.log(obj)

let arrayPrototypeObj = Object.getPrototypeOf(obj)
delete arrayPrototypeObj.getName

let obj2 = new Test('Yo')
console.log(obj2)*/


/*
class Test {
    constructor(public name: string) {
    }

    getName() {
        return this.name
    }
}

class SuperTest extends Test {
    constructor(name: string) {
        super(name);
    }

    getName() {
        return ''
    }
}

let obj = new SuperTest('Yo')
//@ts-ignore
obj.__proto__.__proto__.getName = 50
const objParentPrototype = Object.getPrototypeOf(Object.getPrototypeOf(obj))
objParentPrototype.getName = 100
console.log(obj)
*/




//Task 01
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают


//Task 02
// Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают


//Task 03
// Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// параметра, реализовать методы speak и think аналогично классу Animal
// проверить, что все методы работают


// Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование


// Task 05
// Используя метод Apply реализовать свой собственный метод bind


// just a plug
export default () => {
};
