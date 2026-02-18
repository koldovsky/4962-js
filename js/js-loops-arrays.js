// Цикл з передумовою
// let i = 0;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// Цикл з постумовою
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// Цикл з лічильником
// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }

// Масив
const cars = ["BMW X7", "VW Amarok", "Jeep Wrangler"];
cars[cars.length] = "Ford F150";
cars.push("Fiat Panda");
// console.log(cars);

// for (let i = 0; i < cars.length; i++) {
//     console.log(i, cars[i]);
// }

// Поглиблена частина

// break, continue
// for (let i = 0; i <= 10; i++) {
//     if (i === 3) continue;
//     console.log(i);
//     if (i === 6) break;
// }

// cars.sort().reverse();
// for (const car of cars) {
//     console.log(car);
// }

const nums = [42, 10, 4, 3, -5, 422, 100];
console.log(nums);
nums.sort((a, b) => a - b);
console.log(nums);

// Функції для масивів
// map - робить новий масив такого ж розміру, виконуючи функцію над кожним елементом
const doubledNums = nums.map((num) => num * 2);
console.log(doubledNums);
// filter - відфільтровує у новий масив по функції з умовою
const evenNums = nums.filter((num) => num % 2 === 0);
console.log(evenNums);
// reduce - проходить по масиву, виконує функцію над всіма і повертає одне значення
const sum = nums.reduce((acc, el) => acc + el);
console.log({ sum });
