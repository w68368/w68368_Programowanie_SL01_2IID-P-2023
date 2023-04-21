// zad 1
function silnia(n){
    if(n>1){
        return n* silnia(n-1);
    }
    return 1;
}
console.log(silnia(5));