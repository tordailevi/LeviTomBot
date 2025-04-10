export default class Kosar {
    #kosarLista = [];
    #szuloElem;

    constructor(szuloElem) {
        this.#szuloElem = szuloElem;

        window.addEventListener("hozzaad", (event) => {
            this.#kosarLista.push(event.detail);
            this.megjelenit();
        });

        window.addEventListener("torol", (event) => {
            this.#kosarLista.splice(event.detail, 1);
            this.megjelenit();
        });

        this.megjelenit();
    }

    megjelenit() {
        this.#szuloElem.innerHTML = "";
        this.#kosarLista.forEach((cipo, index) => {
            new KosarElem(cipo, this.#szuloElem, index);
        });
    }
}
