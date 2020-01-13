class User {
    fullName: string
    firstName: string
    lastName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.fullName = firstName + '' + lastName
    }
}

interface Person {
    firstName: string
    lastName: string
}

function greeter1(person: Person) {
    return 'Hello,' + person.firstName + ',' + person.lastName
}

// let User: Person = {
//     firstName: 'YT',
//     lastName: 'Z'
// }
let user = new User('white', 'zhang')

console.log(greeter1(user))