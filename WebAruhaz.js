import Kosar from "./Kosar.js";
import Cipo from "./Cipo.js";
import Web_cipoLista from "./Web_cipoLista.js"; // Import product list class

export default class WebAruhaz {
    #lista = [];
    #kosarElem;
    #termekElem;

    constructor(szuloElem) {
        this.#kosarElem = szuloElem.querySelector("#kosar");
        this.#termekElem = szuloElem.querySelector("#termekek");
        
        // Use Web_cipoLista to get the product list
        const cipoLista = new Web_cipoLista();
        this.#lista = cipoLista.getLista(); // Get product data

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
        // Add any required functionality for "atpakol"
    }
}
