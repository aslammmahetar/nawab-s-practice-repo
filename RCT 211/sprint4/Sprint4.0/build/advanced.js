// Enums
let color = [122, 255, 454, 525];
let numStr = false;
//
// Generic function
function getInfo(value) {
    return value;
}
getInfo(4545);
getInfo("hello");
getInfo(false);
let personObj = {
    id: 1,
    name: "Aslam",
    role: "IA",
    access: false,
    employee: true,
};
// class
class Car {
    constructor(brand, model) {
        (this.brand = brand), (this.model = model);
    }
}
let c = new Car("Suxuki", "dzire");
class Suv extends Car {
    constructor(brand, model, c) {
        super(brand, model);
        this.color = c;
    }
}
//# sourceMappingURL=advanced.js.map