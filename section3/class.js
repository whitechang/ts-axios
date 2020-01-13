var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'hello' + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('world');
greeter.greet();
// 继承
var class_Animal = /** @class */ (function () {
    function class_Animal() {
    }
    class_Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("Animal moved " + distance + "m.");
    };
    return class_Animal;
}());
var class_Dog = /** @class */ (function (_super) {
    __extends(class_Dog, _super);
    function class_Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_Dog.prototype.bark = function () {
        console.log('Woof! Woof!');
    };
    return class_Dog;
}(class_Animal));
var dog = new class_Dog();
dog.bark();
dog.move(10);
