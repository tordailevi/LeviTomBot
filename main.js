import WebAruhaz from "./WebAruhaz.js";
import Web_cipoLista from "./Web_cipoLista.js";

const szuloElem = document.querySelector("#app");
const cipoListaObj = new Web_cipoLista();
const lista = cipoListaObj.getLista();

const webaruhaz = new WebAruhaz(szuloElem,lista);
webaruhaz.termekMegjelenit();
webaruhaz.kosarMegjelenit();
