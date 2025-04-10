import Web_cipoLista from "./Web_cipoLista.js";
import WebAruhaz from "./WebAruhaz.js";


const webAlapElem = document.querySelector("#webalap");
const termekekElem = document.querySelector("#termekek");
const kosarElem = document.querySelector("#kosar");


const cipoListaObj = new Web_cipoLista();
const lista = cipoListaObj.getLista();


const webaruhaz = new WebAruhaz(webAlapElem, lista);
