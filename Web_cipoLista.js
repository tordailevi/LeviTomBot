export default class Web_cipoLista {
    #lista = [
        { nev: "Nike Air Max", ar: 32000, kep: "kepek/nike.jpg", meret: 42 },
        { nev: "Adidas Superstar", ar: 28000, kep: "kepek/adidas.jpg", meret: 41 },
        { nev: "Puma RS-X", ar: 31000, kep: "kepek/puma.jpg", meret: 43 }
    ];

    getLista() {
        return this.#lista;
    }
}
