// Enums

//Tuple
//length = 4
//type of el = number
type rgb = [number, number, number, number];
let color: rgb = [122, 255, 454, 525];

//
type union = number | string | boolean;
let numStr: union = false;

//
// Generic function
function getInfo<Type>(value: Type) {
  return value;
}

getInfo<number>(4545);
getInfo<string>("hello");
getInfo<boolean>(false);

//interface

interface user {
  id: number;
  name: string;
  role: string;
}
interface admin extends user {
  access: boolean;
  employee: boolean;
}

let personObj: admin = {
  id: 1,
  name: "Aslam",
  role: "IA",
  access: false,
  employee: true,
};

// class
class Car {
  brand: string;
  model: string;
  constructor(brand: string, model: string) {
    (this.brand = brand), (this.model = model);
  }
}
let c = new Car("Suxuki", "dzire");

class Suv extends Car {
  color: string;
  constructor(brand: string, model: string, c: string) {
    super(brand, model);
    this.color = c;
  }
}
