//number
let n: number = 10
n = 12

//string
let str: string = "Aslam"
str = "nawab"

//boolean
let bool: boolean = false
bool = true

//array
//array of number
let arr: number[] = [1, 2, 3, 4, 5, 6]
let arr1: Array<number> = [1, 2, 3, 4, 5]
//array of string
let strAr: string[] = ["as", "la", "m"]


//object
type useObj = { name: string; id: string; score: number; address:string}

let user :useObj= {
    name: "aslam",
    id: "fw23_0709",
    score: 9,
    address:"ahmedabad"
}

//array of object
let db: useObj[] = []
let daraBase: Array<useObj> = []


//array inside object
type newObj = { images: string[] }
let imageDd: newObj = {
    images:["image1", "image2"]
}

// union and intersection 
let numStr: number | string = 121212
numStr = "aslam"

//user
//ia

type user = { name: string; id: number; score: number; address: string }
type admin = { name: string; role: string }

const IA: user & admin = {
    name: "Nawab",
    id: 12,
    score: 45,
    address: "streett no 4",
    role:"frontend developer"
}

//function

function sum(a: number, b?: number) {
    return a + b
}
sum(1, 2)

export default {}