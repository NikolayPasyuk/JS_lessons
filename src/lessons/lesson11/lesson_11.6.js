//class

function User(name) {
    this.name = name
}

User.prototype.sayHi = function () {
    console.log(this.name)
}

const user = new User('Alex')
console.log(user)