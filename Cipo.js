export default class Cipo {
    #cipoObj;
    #szuloElem;
    #kepElem;
    #hozzaadElem;

    constructor(cipoObj, szuloElem) {
        this.#cipoObj = cipoObj;
        this.#szuloElem = szuloElem;
        this.megjelenit();
    }

    megjelenit() {
        const { nev, ar, kep } = this.#cipoObj;
        const html = `
            <div class="cipo">
                <img src="${kep}" alt="${nev}">
                <h3>${nev}</h3>
                <p>${ar} Ft</p>
                <button class="hozzaad">Kosárba</button>
            </div>
        `;
        this.#szuloElem.insertAdjacentHTML("beforeend", html);

        this.#hozzaadElem = this.#szuloElem.querySelector(".cipo:last-child .hozzaad");
        this.#hozzaadElem.addEventListener("click", () => {
            this.hozzaad();
        });
    }

    hozzaad() {
        const esemeny = new CustomEvent("hozzaad", {
            detail: this.#cipoObj
        });
        window.dispatchEvent(esemeny);
    }
}
