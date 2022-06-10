//Task 29

/*const foo = () => {
    const bar = () => {
        console.log('bar')
    }
    bar()
    baz()

    const baz = () => {
        console.log(bazlog)
    }
    const bazlog = 'baz'
}
foo()*/

//Task 30

/*
(() => {
    let a = b = 5
})()

const c = {
    showB() {
        console.log(b)
    }
}
c.showB()*/

//Task 31

const a = (x, y) => {

    console.log(y)

    return {
        a: (z) => {
            a(y, z)
        }
    }
}
const res = a(1)
res.a(2)