/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    }
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
];

const gasolineCars = cars.filter( (auto) >= auto.type === 'benzina');

const dieselCars = cars.filter( (auto) => {
    auto.type === 'diesel';
});

const otherCars = cars.filter( (auto) => {
    return auto.type !== 'benzina' || auto.type !== 'diesel';
});

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);

// 1- in questo codice viene prima di tutto definita un'array di oggetti, successivamentre tramite filter si crea un nuovo array dove andranno tutte le macchine con lo stesso type (questo per le tipologie benzina, diesel e altro).
// 2- errori di sintassi:
// {
//     manufacturer: 'Seat',
//     model: 'Ibiza',
//     type: 'metano'
// }
// manca la virgola alla fine dell'oggetto

// const gasolineCars = cars.filter( (auto) >= auto.type === 'benzina');
// l'arrow function non è scritta correttamente, la sintassi corretta è:
// const dieselCars = cars.filter( (auto) => {
//     auto.type === 'benzina';
// });

// manca return nel primo e nel secondo filter
// nell'ultimo filter si deve utilizzare && e non || :
// const otherCars = cars.filter( (auto) => {
//     return auto.type !== 'benzina' && auto.type !== 'diesel';
// });
// con && prendo in cosiderazione entrambe altrimento con || prenderei in considerazione o una o l'altra


