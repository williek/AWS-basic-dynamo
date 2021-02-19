'use strict'

const Debt = require("../src/class/Debt")
const Person = require("../src/class/Person")
const assert = require('assert');

describe('Debt', function() {

    describe('#add', function() {

        it('should fail', () => assert.throws(Debt.add, Error) );
        it('should work', () => assert.ok(Debt.add({ cpf:'000.000.000-00', debts:[] })) )

    });

});

describe('Person', function() {

    describe('#add', function() {

        it('should fail', () => assert.rejects(Person.add({})))
        it('should work', () => assert.ok(Person.add({ cpf:'111.111.111-11' })) )

    });

    describe('#find', function() {

        it('should fail', () => assert.throws(Person.find, Error) );
        it('should work', () => assert.ok(Person.find('111.111.111-11')) )

    });

});
