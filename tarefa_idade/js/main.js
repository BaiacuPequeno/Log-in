function valYd() {
    let anoAt = 2022;
    var nasc = Number(document.getElementById("year").value);
    var yearChecked = anoAt - nasc;

    if (yearChecked > 18 && yearChecked < 100) {                                       
        alert('mario de idade');
        window.location.href = "https://www.youtube.com/watch?v=sntGta76v6Y";
    }
    else if(yearChecked < 18) {
        alert('menor de idade');
    }
    else if(nasc > 2022 || nasc < 0) {
        alert('Insira um numero válido acefalo')
    }
}