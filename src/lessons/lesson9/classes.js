class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        alert(`${this.name} бежит со скоростью ${this.speed}`)
    }

    stop() {
        this.speed = 0;
        alert(`${this.name} стоит.`)
    }
}

let animal = new Animal('Мой питомец')

class Rabbit extends Animal {
    hide() {
        alert(`${this.name} прячется!`)
    }

    stop() {
        super.stop()
        this.hide()
    }
}

let rabbit = new Rabbit('Мой кролик')
rabbit.run(5)
rabbit.hide()


/*function f(phrase) {
    return class {
        sayHi() {
            alert(phrase)
        }
    }
}

class User extends f('Привет') {
}

new User().sayHi()*/

