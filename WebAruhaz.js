export default class WebAruhaz {
    #lista = [];
    #kosarElem;
    #termekElem;

    constructor(szuloElem) {
        this.#kosarElem = szuloElem.querySelector("#kosar");
        this.#termekElem = szuloElem.querySelector("#termekek");
        this.#lista = [];

        this.termekMegjelenit();
        this.kosarMegjelenit();
    }

    termekMegjelenit() {
        this.#termekElem.innerHTML = "";
        this.#lista.forEach(cipoObj => {
            new Cipo(cipoObj, this.#termekElem);
        });
    }

    kosarMegjelenit() {
        new Kosar(this.#kosarElem);
    }

    atpakol() {
        // Későbbi kiegészítéshez, pl. kosár újrarajzolás
    }
}
