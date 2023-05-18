// let car = {
//     marka: "BMW",
//     model: "X6",
//     rok: 2023,
//     kolor: "red",
//     prędkość: 100,
// }

//Zad 1
// Получаем ссылку на все кнопки
const button1 = document.getElementById("button1"); // getElementById - возвращает ссылку на элемент по его идентификатору
const button2 = document.getElementById("button2"); // индефекаторы мы поставили в html тегом id
const button3 = document.getElementById("button3");

// Добавляем обработчик событий для каждой кнопки
button1.addEventListener("click", function () {
  resetButtonColors(); // Сбрасываем цвет для всех кнопок
  button1.style.backgroundColor = "red"; // Змінюємо колір фону для натиснутої кнопки
});
// addEventListener - добавляет событие на кнопку (тут у нас стоит так чтобы функция срабатыв при нажатии на кнопку)
// .style.backgroundColor - это функция меняет фактически сss (в данном случаи задний фон)

button2.addEventListener("click", function () {
  resetButtonColors();
  button2.style.backgroundColor = "blue";
});
// Тоже самое только для другой кнопки

button3.addEventListener("click", function () {
  resetButtonColors();
  button3.style.backgroundColor = "green";
});

//Функция для сброса цвета фона для всех кнопок

function resetButtonColors() {
  button1.style.backgroundColor = "";
  button2.style.backgroundColor = "";
  button3.style.backgroundColor = "";
}

