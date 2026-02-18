/*

Змінні:
const - змінна, значення якій задається один раз і не міняється
let - змінна, значення якої ми міняємо під час виконання коду
var - застаріле, не використовується

*/

// const message = "Привіт, JavaScript!";
// alert(message);

// Типи даних
// String - текст
// Number - числа: 42, -42, 42.42, 4e200, NaN, +/-Infinity
// Оператори: +, -, *, /, %
// Boolean - логічне значення: true, false
// undefined - не визначено, змінна пуста з самого початку
// null - пусто, очищено, могло щось бути
// Object - об'єкт

// Не будемо вивчати
// Symbol - унікальний ідентифікатор
// BigInt - великі цілі числа, криптографія

const userAge = Number(prompt('Введіть ваш вік'));

const nextAge = add(userAge, 1);

console.log('Наступний вік', nextAge);

if (userAge >= 18) { // <= > < !== === && ||
    console.log('Повнолітній');
} else {
    console.log('Неповнолітній');
}

// Створення функції
function add(a, b) {
  return a + b;
}