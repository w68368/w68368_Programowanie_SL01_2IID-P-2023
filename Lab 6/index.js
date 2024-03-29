// zad 1
function silnia(n){
    if(n>1){
        return n* silnia(n-1);  
    }
    return 1;
}
console.log(silnia(5));

// const btns = document.querySelectorAll('button');

// for (let i = 0; i < btns.lenght; i++) {
//     const btn = btns[i];
// }

// let selectedBtn;

// btns.forEach(btn => {

//     btn.addEventListener('click', () =>{
//         if(selectedBtn){
//             selectedBtn.classList.remove('selected');
//         }
        
//         elementToHide.hidden = !elementToHide.hidden;

//         if(elementToHide.style.display == 'none'){
//             elementToHide.style.display = 'block';
//         }
//         else {
//             elementToHide.style.display = 'none';
//         }


//         btn.classList.add('selected');
//         selectedBtn = btn;
//     })
// });

// Zadanie 2

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

// Zadanie 3

// Получаем ссылку на кнопку и элемент, который будем тоглить
const toggleButton = document.getElementById("toggleButton"); // getElementById - возвращает ссылку на элемент по его идентификатору
const elementToToggle = document.getElementById("elementToToggle");

// Додаємо обробник події для кнопки
toggleButton.addEventListener("click", function () {
  if (elementToToggle.style.display === "none") {
    elementToToggle.style.display = "block"; // Если элемент скрыт, показываем его
  } else {
    elementToToggle.style.display = "none"; // Если элемент виден, скрываем его
  }
});
// Тоже добавляем событие на нажатие кнопки
// И тут уже ставим условия if else. Если при клике елемент не виден показываем его, если виден скрываем.

// Zadanie 4

// Получаем ссылку на текстовое поле, кнопку и список
const inputField = document.getElementById("inputField"); // Всё тоже самое
const addButton = document.getElementById("addButton");
const list = document.getElementById("list");

// Добавляем обработчик события для кнопки
addButton.addEventListener("click", function () {
  const value = inputField.value; // Получаем значение с текстового поля

  if (value) {
    const listItem = document.createElement("li"); // createElement - создаем новый элемент списка
    listItem.textContent = value; // textContent - устанавливаем текст элемента списка
    list.appendChild(listItem); // appendChild - добавляем элемент в список
    inputField.value = ""; // Очищаем текстовое поле
  }
});

// const toggleButton = document.getElementById("toggleButton");
// const btns = document.querySelectorAll('button');

// toggleButton.addEventListener("click", function () {
//   if (btns.style.display === "none") {
//     btns.style.display = "block";
//   } else {
//     btns.style.display = "none";
//   }
// });


// Zadanie 5
const input = document.querySelector('input');
const surnameInput = document.querySelector('#surname');
const submit = document.querySelector('#submit');
const ul = document.querySelector('ul');

const table = document.querySelector("table");
submit.addEventListener('click', () => {
  const value = input.value;
  const surname = surnameInput.value;
  const li1 = document.createElement('li1');
  li1.textContent = value;
  ul.appendChild(li1);

  const row = table.insertRow();
  const newCell1 = row.insertCell();
  newCell1.textContent = value;
  const newCell2 = row.insertCell();
  newCell2.textContent = surname;

});