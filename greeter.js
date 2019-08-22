var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + '' + lastName;
    }
    return User;
}());
function greeter(person) {
    return 'Hello,' + person.firstName + ',' + person.lastName;
}
// let User: Person = {
//     firstName: 'YT',
//     lastName: 'Z'
// }
var user = new User('white', 'zhang');
console.log(greeter(user));
