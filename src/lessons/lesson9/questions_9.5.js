//what will the console log output

/*
{
    var a = 10
}
console.log(a)
console.log(b)

{
    var b = 10
}
{
    let c = 10
}
console.log(c)*/


//what will the function foo and bar output
/*
foo()

function foo() {
    console.log('foo')
}

bar()
{
    function bar() {
        console.log('bar')
    }
}*/


//Task 58
/*
const foo = () => {
    let a = b = 10
}
foo()
console.log(typeof a === 'undefined')
console.log(b === 'undefined')*/


//Task 59
/*
{
    if (true) {
        var a = 10
    }
}
console.log(a)*/


//Task 60
/*
for (var i = 0; i < 10; i++) {
}
console.log(i)

for (let j = 0; j < 10; j++) {
}
console.log(j)*/


//Task 61
/*
function Counter() {
    let count = 0

    this.up = function () {
        return ++count
    }
    this.down = function () {
        return --count
    }
}

let counter = new Counter()
console.log(counter.up())
console.log(counter.up())
console.log(counter.down())*/


//Task 62
/*
function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let shooter = function () {
            console.log(i);
        };
        shooters.push(shooter);
        i++;
    }
    return shooters;
}

let army = makeArmy();
army[0]();
army[5]();*/


//Task 63

let user = {
    name: 'Alex',
    go: function () {
        console.log(this.name)
    }
};
user.go();
(user.go)()