'use strict'

const app = require('express')()
const bodyParser = require('body-parser')
const CONST = require('./src/constants');
const Debt = require('./src/class/Debt');
const Person = require('./src/class/Person');

// Create req.body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Rest mappings
app.post( '/debt', (req, res) => Debt.add(req.body).then(v => res.json(v)).catch( error => res.status(400).json({message: error.message}) ))

app.get( '/person', async (req, res) => req.body.cpf ? res.json(await Person.find(req.body.cpf)) : res.status(400).json({message: 'missing cpf'}) )
app.post( '/person', (req, res) => Person.add(req.body).then(v => res.json(v)).catch( error => res.status(400).json({message: error.message}) ))

// Start
app.listen(CONST.port)
console.log(`App running @ http://localhost:${CONST.port}`);