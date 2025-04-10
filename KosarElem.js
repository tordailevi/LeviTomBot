export default class KosarElem {
    #nev;
    #ar;
    #meret;
    #index;

    constructor(cipo, szuloElem, index) {
        this.#nev = cipo.nev;
        this.#ar = cipo.ar;
        this.#meret = cipo.meret || 42;
        this.#index = index;

        this.megjelenit(szuloElem);
    }

    megjelenit(szuloElem) {
        const html = `
            <div class="kosar-elem">
                <p>${this.#nev} - ${this.#ar} Ft (${this.#meret})</p>
                <button class="torol">❌</button>
            </div>
        `;
        szuloElem.insertAdjacentHTML("beforeend", html);

        const torolGomb = szuloElem.querySelector(".kosar-elem:last-child .torol");
        torolGomb.addEventListener("click", () => {
            const esemeny = new CustomEvent("torol", {
                detail: this.#index
            });
            window.dispatchEvent(esemeny);
        });
    }
}
