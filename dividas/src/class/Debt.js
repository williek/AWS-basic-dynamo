'use strict'

const DB = require('../DB')

module.exports = class Debt {

    id; source; value;

    constructor({id, source, value}){
        Object.assign(this,{id, source, value})
    }

    static add({cpf, debts}){
        debts = this.normalizeAll(debts)
        return DB.addDebts(cpf, debts)
    }

    static normalizeAll = debts => debts
        .map( d => JSON.parse(JSON.stringify(new Debt(d))) )
        .filter( d => Object.keys(d).length )

}