//prototypes

const alex = {
    name: 'Alex',
    showName() {
        console.log(this.name)
    }
}

const hanna = {
    name: 'Hanna'
}

hanna.__proto__ = alex
hanna.showName()