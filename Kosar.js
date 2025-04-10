import KosarElem from "./KosarElem.js";

export default class Kosar {
    #kosarLista = [];
    #szuloElem;

    constructor(szuloElem) {
        this.#szuloElem = szuloElem;
        this.megjelenit();
    }

    torol() {
        window.addEventListener("torol", (event) => {
            this.#kosarLista.splice(event.detail, 1);
            this.megjelenit();
        });
    }


    hozzaad() {
        window.addEventListener("hozzaad", (event) => {
            this.#kosarLista.push(event.detail);
            this.megjelenit();
        });
    }


    megjelenit() {
        this.#szuloElem.innerHTML = "";
        this.#kosarLista.forEach((cipo, index) => {
            new KosarElem(cipo, this.#szuloElem, index);
        });
    }
}
