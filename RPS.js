const button1 = document.querySelector(".button1");
const random1 = document.querySelector(".random1");
const random2 = document.querySelector(".random2");
const button2 = document.querySelector(".button2");
const check = document.querySelector(".check");
const wynik1 = document.querySelector(".wynik1");
const wynik2 = document.querySelector(".wynik2");
var rps = ['KAMIEŃ', 'PAPIER', 'NOŻYCE'];

button1.addEventListener('click', function(){

    random1.innerText= rps [Math.floor(Math.random() * rps.length)];

})

button2.addEventListener('click', function(){

    random2.innerText= rps [Math.floor(Math.random() * rps.length)];

})

check.addEventListener('click', function(){

    if (random1.innerText == "KAMIEŃ" && random2.innerText == "NOŻYCE"){
        wynik1.innerText = wynik1.innerText - (-1)
    }

    if (random1.innerText == "KAMIEŃ" && random2.innerText == "PAPIER"){
        wynik2.innerText = wynik2.innerText - (-1)
    }

    if (random1.innerText == "PAPIER" && random2.innerText == "NOŻYCE"){
        wynik2.innerText = wynik2.innerText - (-1)
    }

    if (random1.innerText == "PAPIER" && random2.innerText == "KAMIEŃ"){
        wynik1.innerText = wynik1.innerText - (-1)
    }

    if (random1.innerText == "NOŻYCE" && random2.innerText == "KAMIEŃ"){
        wynik2.innerText = wynik2.innerText - (-1)
    }

    if (random1.innerText == "NOŻYCE" && random2.innerText == "PAPIER"){
        wynik1.innerText = wynik1.innerText - (-1)
    }


})





