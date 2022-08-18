//Task 71

/*
function foo() {
    bar()
    {
        function bar() {
            console.log('bar')
        }
    }
}

foo()*/


//Task 72

/*
let a = () => {
    console.log('a')
}

const run = (cb) => {
    setTimeout(cb, 1000)
}
run(a)
a = () => {
    console.log('new a')
}*/


//Task 73

/*
const a = {
    msg: 'Hello World',
    getMsg() {
        const msg = 'Hello getMsg';
        console.log(this.msg)
    }
}
a.getMsg()*/


//Task 74

/*
this.name = 'global'

const a = {
    name: 'a',
    logName: () => {
        console.log(this.name)
    }
}
setTimeout(a.logName, 100)*/


//Task 75

/*const a = {
    name: 'a',
    getName() {
        console.log(this.name)
    }
}

const b = {
    name: 'b'
}
const c = {
    name: 'c'
}
a.getName()
const foo = a.getName.bind(b)
a.getName()
a.getName.call(b)
foo.call(c)*/


//Task 76

const a = {
    name: 'a'
}
const b = {
    name: 'b',

    hi() {
        (() => {
            console.log(this.name)
        }).call(a)
    }
}

const c = {
    name: 'c'
}

b.hi.call(c)