function zmienTekst() { 
    document.getElementById("tekst").innerHTML = "Witaj na mojej stronie!"; 
    } 
 
function myFunction() { 
    alert("Hello\How are you?"); 
    } 
 
for(let i = 0; i <= 100; i += 2){ 
    console.log(i); 
} 
 
s1 = Number(prompt("Give me first number:", )); 
s2 = Number(prompt("Give me second number", )); 
wynik = s1+s2;
document.write("Suma = " + wynik);
 
//var today = new Date(); 
//var now = today.toLocaleString(); 
//console.log(now) 
//document.querySelector('q1').innerHTML = now; 
/* (если число меньше десяти, перед числом добавляем ноль) */ 
function zero_first_format(value) 
{ 
    if (value < 10) 
    { 
        value='0'+value; 
    } 
    return value; 
} 
function date_time() 
    { 
        var current_datetime = new Date(); 
        var day = zero_first_format(current_datetime.getDate()); 
        var month = zero_first_format(current_datetime.getMonth()+1); 
        var year = current_datetime.getFullYear(); 
        var hours = zero_first_format(current_datetime.getHours()); 
        var minutes = zero_first_format(current_datetime.getMinutes()); 
        var seconds = zero_first_format(current_datetime.getSeconds()); 
 
        return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds; 
    } 
 
setInterval(function () { 
    document.getElementById('current_date_time_block2').innerHTML = date_time(); 
}, 1000);