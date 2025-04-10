export default class Web_cipoLista {
    #lista = [
        { nev: "Nike Air Force 1", ar: 32000, kep: "kepek/nikeairforce1.jpg", meret: 42 },
        { nev: "Adidas Campus", ar: 28000, kep: "kepek/adidascipo.jpg", meret: 41 },
        { nev: "Puma RS-X", ar: 31000, kep: "kepek/puma.jpg", meret: 43 }
    ];

    getLista() {
        return this.#lista;
    }
}
