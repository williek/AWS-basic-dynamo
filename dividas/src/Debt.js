'use strict'

module.exports = class Debt {

    id; source; value;

    constructor({id, source, value}){
        Object.assign(this,{id, source, value})
    }

    static normalizeAll = debts => debts
        .map( d => JSON.parse(JSON.stringify(new Debt(d))) )
        .filter( d => Object.keys(d).length )

}