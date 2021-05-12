/********************
 ***** SNACK 1 ******  
********************/

//Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
//nome e peso

/* const bici = [
    {
        nome: 'Rockrider ST100',
        peso: 7,  
    },
    {
        nome: 'Bianchi City',
        peso: 12,  
    },
    {
        nome: 'Bwin Groove',
        peso: 9,  
    },
    {
        nome: 'YoCity Carbon',
        peso: 5,  
    },
    {
        nome: 'Canyon',
        peso: 10,  
    },
    {
        nome: 'ECityBike',
        peso: 18,  
    }
];

bici.sort((a, b) => (a.peso > b.peso) ? 1 : -1);

//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
const [biciPiùLeggera] = bici;
const {nome, peso} = biciPiùLeggera
//console.log(biciPiùLeggera);
console.log(`
La bici più leggera è la ${nome} con soli ${peso} kg
`); */

/********************
 ***** SNACK 2 ******  
********************/

//Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
// nome, punti fatti, falli subiti.

let squadre = [
    {
    nome: "Juventus",
    puntiFatti: 0,
    falliSubiti: 0,
    },
    {
    nome: "Inter",
    puntiFatti: 0,
    falliSubiti: 0,
    },
    {
    nome: "Milan",
    puntiFatti: 0,
    falliSubiti: 0,
    },
    {
    nome: "Torino",
    puntiFatti: 0,
    falliSubiti: 0,
    },
    {
    nome: "Napoli",
    puntiFatti: 0,
    falliSubiti: 0,
    }
];
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.

var squadreCopia =[];
for (let i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = genNumCasuali(20, 80);
    squadre[i].falliSubiti = genNumCasuali(100, 300);

    //Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti 
    const {nome, falliSubiti} = squadre[i];
    //console.log(nome);
    //console.log(falliSubiti);
    var squadra ={
        nome,
        falliSubiti,
    }
    //console.log(squadra);
    squadreCopia.push(squadra)
}
//console.log(squadre);
//e stampiamo tutto in console.
console.log(squadreCopia);


function genNumCasuali(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

/********************
****** SNACK 3 ******  
********************/

// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.
//let listaFiltrata = [];
function filtro(array, a, b) {
    const listaFiltrata = array.filter( (elemento, indice) => {
        console.log(indice);
        if (indice >= a - 1 && b - 1 >= indice) {
            return true;
        }
            return false;
        })
    return listaFiltrata
}

console.log(filtro(squadre, 1, 3));



