const ksiazka = {
    tutyl: "Wojna i pokoj",
    autor: "Lew Tołstoj",
    rok: 1863,
}
function Book(ksiazka){
    return this.tutyl + "-" + this.autor + "("+ this.rok+")";
}