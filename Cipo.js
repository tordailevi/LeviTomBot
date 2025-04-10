export default class Cipo {
    #cipoObj;
    #szuloElem;
    #hozzaadElem;

    constructor(cipoObj, szuloElem) {
        this.#cipoObj = cipoObj;
        this.#szuloElem = szuloElem;
        this.megjelenit();
    }

    megjelenit() {
        const { nev, ar, kep } = this.#cipoObj;
        const html = `
            <div id="cipo" class="card" style="width: 16rem;">
            <img class="card-img-top" src="${kep}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${nev}</h5>
                <p class="card-text">${ar}</p>
                
            </div>
            <button class="hozzaad">Kosárba</button>
            </div>
            `;
        this.#szuloElem.insertAdjacentHTML("beforeend", html);

        this.#hozzaadElem = this.#szuloElem.querySelector("#cipo:last-child .hozzaad");
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
