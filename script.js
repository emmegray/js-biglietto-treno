function numeroNonValido(valore) {
    return Number.isNaN(
        parseFloat(valore)
    );
}

function calcolaSconto(prezzo, percentuale) {
    return prezzo * (percentuale / 100);            
}

function arrotonda(cifra) {
    const spostavirgola = cifra * 100;
    const numerointero = Math.ceil(spostavirgola);
    return numerointero / 100;
}

function calcolaPrezzo(km, anni) {
    if (numeroNonValido(km)) {
        return "Inserire km in numeri";
    }
    if (numeroNonValido(anni)) {
        return "Inserire età in numeri";
    }

    const prezzoKm = 0.21;
    const prezzoLordo = prezzoKm * km;
    const scontoMinorenni = 20;
    const scontoOver = 40;

    let percentualeSconto = 0;

    if (anni<18) percentualeSconto = scontoMinorenni;
    if (anni>65) percentualeSconto = scontoOver;

    const sconto = calcolaSconto(prezzoLordo, percentualeSconto);
    const prezzo = prezzoLordo - sconto;
    const prezzoArrotondato = arrotonda(prezzo);
    return prezzoArrotondato+"&euro;";
}

const km = prompt("Inserisci km");
const anni = prompt("Inserisci età");
const risultato = calcolaPrezzo(km, anni);

const elementoRisultato = document.getElementById("prezzo")

elementoRisultato.innerHTML = risultato;

if (numeroNonValido(km) || numeroNonValido(anni)) elementoRisultato.style.color = "red";