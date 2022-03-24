/* 
DESCRIZIONE:
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va scritto in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

// chiedere all'utente il numero di chilometri con relativo step di controllo


const km_trip = parseInt(prompt("Di quanti Km è la tratta?"));
if (isNaN(km_trip)) {
    alert('Dato inserito non corretto ricarica la pagina')}; 

// chiedere all'utente età con relativo step di controllo (no under 6 anni o Highlander)

const passenger_age = parseInt(prompt("Qual'è l'età del passeggero?"));
if (passenger_age < 6 || passenger_age > 130 || isNaN(passenger_age)) {
    alert('Dato inserito non corretto ricarica la pagina')}; 


// calcolare il prezzo totale del viaggio senza sconti

const total = km_trip * 0.21;

// appliccare se necessario sconti

if (passenger_age < 18 ) {
console.log( (total / 100 * 80).toFixed(2)+"€"); 

} else if (passenger_age > 65 ){
console.log( s(total / 100 * 60).toFixed(2)+"€");
} else{
    console.log(total.toFixed(2)+"€");
}

