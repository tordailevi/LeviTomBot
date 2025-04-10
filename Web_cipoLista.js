export default class Web_cipoLista {
    #lista = [
        { nev: "Jordan 4", ar: 32000, kep: "kepek/jordan4.jpg", meret: 42 },
        { nev: "Adidas Campus", ar: 28000, kep: "kepek/adidascipo.jpg", meret: 41 },
        { nev: "Jordan 6", ar: 31000, kep: "kepek/jordan6.jpg", meret: 43 },
        { nev: "Jordan Klumpa", ar: 31000, kep: "kepek/jordanKlumpa.jpg", meret: 43 },
        { nev: "Nike Air Force 1", ar: 31000, kep: "kepek/nikeairforce1.jpg", meret: 43 },
        { nev: "Nike Python", ar: 78000, kep: "kepek/nikeKigyobor.jpg", meret: 44 }
    ];

    getLista() {
        return this.#lista;
    }
}
