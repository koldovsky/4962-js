// Об'єктний літерал
const bmwX7 = {
  make: "BMW",
  model: "X7",
  price: 90_000,
  beep: function () {
    console.log(`${this.make} ${this.model} beep-beep!`);
  },
};

bmwX7.model = "X7M";
console.log(bmwX7.model);
bmwX7.beep();
bmwX7.color = "black";
console.log(bmwX7);

// Клас
class Car {
  constructor(make, model, price) {
    this.make = make;
    this.model = model;
    this.price = price;
  }
  beep() {
    console.log(`${this.make} ${this.model} beep-beep!`);
  }
}

const jeepWrangler = new Car("Jeep", "Wrangler", 70000);
console.log(jeepWrangler.model);
jeepWrangler.beep();
console.log(jeepWrangler);

const audiQ8 = new Car("Audi", "Q8", 100000);

// JSON - JavaScript Object Notation
const jsonStr = JSON.stringify(bmwX7);
console.log(jsonStr);
const jsonStrExample =
  '{"make":"BMW","model":"X7M","price":90000,"color":"black"}';
const carFromJson = JSON.parse(jsonStrExample);
// Attach to Car prototype so methods like beep() are available.
Object.setPrototypeOf(carFromJson, Car.prototype);
console.log(carFromJson);
carFromJson.beep();

// Спеціальний тип циклу для роботи з об'єктами - for...in
for (const key in bmwX7) {
  console.log(key, bmwX7[key]);
}

// Поглиблена частина

// Object.keys() - повертає масив ключів об'єкта
const keys = Object.keys(bmwX7);
console.log(keys);

// Object.values() - повертає масив значень об'єкта
const values = Object.values(bmwX7);
console.log(values);

// Як скопіювати об'єкт
const bmwX7Copy = { ...bmwX7 };
console.log(bmwX7Copy);

// Наслідування
// Приватні поля та методи (позначаються #) не доступні поза класом, навіть у спадкоємцях
class ElectricCar extends Car {
  #batteryCapacity;
  constructor(make, model, price, batteryCapacity) {
    super(make, model, price);
    this.#batteryCapacity = batteryCapacity;
  }
  charge() {
    console.log(`${this.make} ${this.model} is charging... ${this.#batteryCapacity} battery capacity.`);
  }
}

const teslaModelS = new ElectricCar("Tesla", "Model S", 120000, "100 kWh");
console.log(teslaModelS);
teslaModelS.beep();
teslaModelS.charge();
// teslaModelS.#batteryCapacity; // Error: Private field '#batteryCapacity' must be declared in an enclosing class 

// Чому слово var погано
// var має функціональну область видимості, а не блочну, що може призвести до неочікуваних результатів
function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10, бо var не має блочної області видимості
}
testVar();

console.log(typeof 'hello'); // string
console.log(typeof 42); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object (це історична помилка в JavaScript)
console.log(typeof {}); // object
console.log(typeof []); // object (масиви також є об'єктами в JavaScript)
console.log(typeof function() {}); // function