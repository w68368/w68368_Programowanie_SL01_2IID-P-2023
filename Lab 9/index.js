// let car = {
//     marka: "BMW",
//     model: "X6",
//     rok: 2023,
//     kolor: "red",
//     prędkość: 100,
// }

let activeBtn;
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
btn1.addEventListener('click', () => handleClick(btn1));
btn2.addEventListener('click', () => handleClick(btn2));
btn3.addEventListener('click', () => handleClick(btn3));

function handleClick(btn) {
    if(activeBtn) {
        activeBtn.classList.remove('active');
    }
    btn.classList.add('active');
    activeBtn = btn;
}