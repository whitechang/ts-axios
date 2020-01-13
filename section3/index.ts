interface LabelledValue {
    label: string
}

function pringLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label)
}

let myObj = { size: 10, label: 'Size 10 Object' }

pringLabel(myObj)

// 可选属性
interface Square {
    color: string,
    area: number
}

interface SquareConfig {
    color?: string
    width?: number
    [propName: string]: any // 额外的属性检查
}

function createSquare(config: SquareConfig): Square {
    let newSquare = { color: 'white', area: 100 }
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}

let mySquare = createSquare({ color: 'black', colour: '1', width: 1 })
console.log(mySquare)

// 只读属性
interface Point {
    readonly x: number
    readonly y: number
}

let p1: Point = { x: 10, y: 20 }
// p1.x = 20

let a: number[] = [1, 2, 3, 4, 5]
let ro: ReadonlyArray<number> = a
a = ro as number[]

// 函数类型
interface SearchFunc {
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function (src: string, sub: string): boolean {
    let result = src.search(sub)
    return result > -1
}

// 可索引的类型
interface StringArray {
    [index: number]: string
}

let myArray: StringArray
myArray = ['Bob', 'Fred']

let myStr: string = myArray[0]

class Animal {
    name: string
}
class Dog extends Animal {
    breed: string
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
    [x: number]: Dog
    [x: string]: Animal
}

interface NumberDictionary {
    [index: string]: number;
    length: number;    // 可以，length是number类型
    // name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}

interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray1: ReadonlyStringArray = ['Alice', 'Bob'];
// myArray1[2] = 'Mallory'; // error!

// 类类型接口
interface ClockInterface {
    currentTime: Date
    setTime(d: Date)
}

class Clock implements ClockInterface {
    currentTime: Date
    setTime(d: Date) {
        this.currentTime = d
    }
    constructor() { }
}

interface Clock1Interface {
    tick()
}

interface Clock1Constructor {
    new(hour: number, minute: number): Clock1Interface
}

function createClock(ctor: Clock1Constructor, hour: number, minute: number): Clock1Interface {
    return new ctor(hour, minute)
}

class DigitalClock implements Clock1Interface {
    constructor(h: number, m: number) { }
    tick() {
        console.log('beep beep')
    }
}
class AnalogClock implements Clock1Interface {
    constructor(h: number, m: number) { }
    tick() {
        console.log('tick tock')
    }
}

let digital = createClock(DigitalClock, 12, 17)
let analog = createClock(AnalogClock, 7, 32)

// 继承接口
interface Shape {
    color: string
}

interface PenStroke {
    penWidth: number
}

interface Square1 extends Shape, PenStroke {
    sideLength: number
}

let square = {} as Square1
square.color = 'red'
square.sideLength = 1
square.penWidth = 1

// 混合类型
interface Counter {
    (start: number): string
    interval: number
    reset(): void
}

function getCounter(): Counter {
    let counter = (function (start: number) { }) as Counter
    counter.interval = 123
    counter.reset = function () { }
    return counter
}

let c = getCounter()
c(10)
c.reset()
c.interval = 5.0

// 接口继承类
class Control {
    private state: any
}

interface SelectableControl extends Control {
    select(): void
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// Error：“ImageC”类型缺少“state”属性。
// class ImageC implements SelectableControl {
//     select() { }
// }
