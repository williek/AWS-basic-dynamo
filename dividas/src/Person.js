'use strict'

const DB = require('./DB')
const Debt = require('./Debt')
const normalizeCPF = cpf => cpf.replace(/[^0-9]/g, "")

module.exports = class Person {

    cpf; name; address; debts = [];

    constructor(data){
        data.cpf = normalizeCPF(data.cpf)
        Object.assign(this,data);
    }
    
    // Nice to have another method to add a single debt
    static async add(data){

        let { cpf, name, address, debts = [] } = data
        debts = Debt.normalizeAll(debts)

        if(cpf) return await DB.save(new Person({ cpf, name, address, debts }))
        else throw new Error("Missing CPF")

    }

    static find = cpf => DB.find(normalizeCPF(cpf)).then(result => result.Item || new Person({ cpf }))

}