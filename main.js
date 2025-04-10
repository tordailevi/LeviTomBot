import WebAruhaz from "./WebAruhaz.js";
import Web_cipoLista from "./Web_cipoLista.js";

const szuloElem = document.querySelector("#app");
const cipoListaObj = new Web_cipoLista();
const lista = cipoListaObj.getLista();

const webaruhaz = new WebAruhaz(szuloElem);
webaruhaz.#lista = lista; // Ez privát változó! Helyette készítünk settert vagy átadjuk konstruktorban.
webaruhaz.termekMegjelenit();
webaruhaz.kosarMegjelenit();
