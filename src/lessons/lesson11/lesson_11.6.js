//class

function User(name) {
    //this
    this.name = name
    //return this
}

//User.prototype ---> {constructor: User}.__proto__ ---> Object.prototype.__proto__ ---> null

const user = new User('Alex') // { name: 'Alex' }[[Prototype]] ---> { constructor: User } <--- User.prototype