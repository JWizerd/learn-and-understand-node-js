const woo = 'test'
const test = () => {}
const yo = () => { console.log(woo) }

// function constructor
function Person() {
    this.name = "jeremiah";
    this.speak = () => { console.log(name) }
}

class Dude {
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(name)
    }
}

// woo will not be accessible from outside of the module because it's wrapped in a closure
module.exports.person = {test, yo, person: Person, jeremiah: Dude}