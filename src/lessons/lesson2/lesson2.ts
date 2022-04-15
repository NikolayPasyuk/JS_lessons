console.log('lesson 2');




// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

let globalScope = {
    outerScope: null,
    sum: 'Function',
}

function sum(arg: number) {
    let sumScope = {
        outerScope: globalScope,
        arg: 3,
    }
    return function (arg2: number) {
        let anonimScope = {
            outerScope: sumScope,
            arg2: 6,
        }
        return arg + arg2
    }
}

console.log(sum(3)(6))


// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

/*function makeCounter() {
    let count = 1
    return function () {
        return count++
    }
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
const counter2 = makeCounter();
console.log(counter2()); // 1
console.log(counter()); // 3*/


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

function superSum(num: number): Function {
    if (num <= 0) return () => 0
    if (num === 1) return (n: number) => n

    let _args: number[] = []

    function helper(...args: number[]) {
        _args = [..._args, ...args]
        if (_args.length >= num) {
            _args.length = num
            return _args.reduce((acc, number) => acc + number)
        } else {
            return helper
        }
    }
    return helper
}
console.log(superSum(3)(2)(5)(3)) //10
console.log(superSum(3)(2)(5, 3)) //10
console.log(superSum(3)(2, 5, 3)) //10
console.log(superSum(3)(2, 5)(3)) //10
console.log(superSum(3)(2, 5)(3, 9)) //10

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {
};
