//Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
//nome e peso

const bici = [
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
`);