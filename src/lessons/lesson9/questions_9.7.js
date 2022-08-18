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

const a = {
    msg: 'Hello World',
    getMsg() {
        const msg = 'Hello getMsg';
        console.log(this.msg)
    }
}
a.getMsg()