// 1. //Let
// // 1. (It is a block scope, it means we cannot access variable outside of the block wich is declare with let)
// // 2. (If we can try to access before declaration it will give use error)
// // 3. (If we can try  to access it before initialization it will give use error "Cannot access before initialization")
// // 4. (We cannot re-declare same named variable but we can re-assign it)


//Examples
//
// console.log(name)
// referance error : Canot access "name" before initialization
//
let name = "Aslam"
//
console.log(name)
// works fine accessble from here
//
name = "mahetar"
//
console.log(name)
//we can re-assign with another value 

// let name = "Mahetar"
//
console.log(name)
// syntaxError : Indetifier 'name' has already been declared






// 2. //Var
// // 1. (it is a function scope)
// // 2. (it is accessble in whole function)
// // 3. (if we want to access it before initialization it will give us "UNDEFINED")
// // 4. (We can re-declare a variable with same name and we can re-assign also)


x = 5
var x
var x = 10
console.log(x)






// 3. //Const
// //1. const is also block scoped
// //2. ReferenceError when accessing a const variable before it's declared
// //3. Syntax errror when redeclaring a const variable again
// //4. Type errror when reassinging a const variable again


// the behavior is same is let


// Scopes
// If a variable is declaration is inside a function, then it is said that the variable is defined with function local scope in that function.
// So this variable is accesible in that function, and any of its nested functions.
// Otherwise it has a global scope ie.they are members of the global object.

function getname() {
    var name = "Aslam"
    return name
}
getname()
//
console.log(name)
//referncweerror name is not defined


// template literals
// " `` "
// it is allows to embed expression and value within strings
let str = "masai"
let str1 = "school"
let concat = str + " " + str1
let concat1 = `${str} ${str1}`
console.log(concat1)

let num = 50
let num1 = 100

function sum(x, y) {
    return x + y
}
let numstr = `${2 * sum(num, num1)}`
console.log(numstr)


// Array and Object Destructuring
//rest and spread oparetors

//objects
var person = {
    named: "aslam",
    id: 1,
    location: "Dhasa"
}

function getdata() {
    return person
}
// console.log(getdata())
// person.name = "aslam"
// person.id = 1
// person.location = "Dhasa"

// let pername = person.name
// let peridd = person.id
// let perloc = person.location

const { named, id } = getdata()

console.log(named, id)

let arr = ["aslam", "saad", "asad", "shagruf"]

const myname = arr[0]
const ffried = arr[1]
console.log(myname, ffried)

let temp = `first_line 
second_line`
const [fline, sline] = temp.split("\n")
console.log(fline, sline)

function fetchData({ baseurl, query, pageno }) {
    console.log(baseurl, query, pageno)
}

let obj = {
    baseurl: "url",
    query: 'masai',
    pageno: 3
}

console.log(obj)
