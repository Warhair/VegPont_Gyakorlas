import { adat, adatLeiras } from "./adatokLeiro.js";

class UrlapModel {
    #adat = [];
    #adatLeiras = {};

    constructor() {
        this.#adat = adat;
        this.#adatLeiras = adatLeiras;
    }
    get adat() {
        return this.#adat;
    }
    get adatLeiras() {
        return this.#adatLeiras;
    }
}
export default UrlapModel;
