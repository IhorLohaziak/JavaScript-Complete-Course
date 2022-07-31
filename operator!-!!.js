// // Оператор !
// !10; // false
// !0; // true
// !"abc"; // false
// !""; // true
// !" "; // false
// !true; // false
// !undefined; // true

// // оператор !!
// !!10; //true
// !!0; //false
// !!"abc"; //true
// !!""; //false
// !!true; //true
// !!undefined; //false

//оператори && і ||
// && // i якщо хоча б одна з вимог не виконана, хоча б 1 false не виконується вся умова
// || // чи (або) де виконана хоча б 1 умова, виконується вираз

// Оператор ...  - дозволяє взяти властивості з попереднього обєкта для нового обєкта, при цьому ми не змінюємо попередній обєкт
// const button = {
//   with: 200,
//   text: "Buy",
// };
// const redButton = {
//   ...button,
//   color: "red", // якщо в попереднього обэкта вже є така властивість, ми її перезапишемо із новими значеннями
// };
// console.table(redButton); // table - дозволяє вивести данні у вигляді таблиці
// console.table(button);
// // Оператор ... для обєднання декількох обєктів в один
// const buttonInfo = {
//   text: "Buy",
// };
// const buttonStyle = {
//   color: "yellow",
//   width: 200,
//   height: 300,
// };
// const button = {
//   ...buttonInfo,
//   ...buttonStyle,
// };
// console.table(button);
// Конкатенація рядків
// 'Hello ' + 'world!' -> 'Hello world!'
// Змінні в конкатенації рядків
// const hello = 'Hello'
// const world = 'World'
// const greting = hello + ' ' + world
// Шаблонний рядок
// const hello = "Hello";
// const world = "World";
// const greting = `${hello} gggg ${world}`;
// console.log(greting);
// const nameMy = "Ihor";
// const city = "Lviv";
// const text = `Мене звати ${nameMy} і я живу у ${city}`;
// console.log(text);
