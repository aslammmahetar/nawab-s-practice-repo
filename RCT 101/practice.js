function counter() {
    let count = 0
    return function () {
        count++
        console.log(count)
    }
}
// console.log(counter())

let myCount = counter()
console.log(myCount())

const calc = eval("10*10+5")
console.log(calc)


