// zad 1
function silnia(n){
    if(n>1){
        return n* silnia(n-1);
    }
    return 1;
}
console.log(silnia(5));

const btns = document.querySelectorAll('button');

// for (let i = 0; i < btns.lenght; i++) {
//     const btn = btns[i];
// }

let selectedBtn;

btns.forEach(btn => {

    btn.addEventListener('click', () =>{
        if(selectedBtn){
            selectedBtn.classList.remove('selected');
        }
        
        elementToHide.hidden = !elementToHide.hidden;

        if(elementToHide.style.display == 'none'){
            elementToHide.style.display = 'block';
        }
        else {
            elementToHide.style.display = 'none';
        }


        btn.classList.add('selected');
        selectedBtn = btn
    })
});