type rgb = [number, number, number, number];
declare let color: rgb;
type union = number | string | boolean;
declare let numStr: union;
declare function getInfo<Type>(value: Type): Type;
interface user {
    id: number;
    name: string;
    role: string;
}
interface admin extends user {
    access: boolean;
    employee: boolean;
}
declare let personObj: admin;
declare class Car {
    brand: string;
    model: string;
    constructor(brand: string, model: string);
}
declare let c: Car;
declare class Suv extends Car {
    color: string;
    constructor(brand: string, model: string, c: string);
}
