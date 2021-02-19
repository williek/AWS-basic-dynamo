'use strict'

const CONST = require('./constants')
const AWS = require("aws-sdk");

AWS.config.update({ region: CONST.awsRegion });

const dynamo = new AWS.DynamoDB.DocumentClient();

module.exports = {

    async find(cpf){

        const search = { TableName: CONST.table, Key: { cpf } }
        return await dynamo.get(search).promise()
        
    },

    addDebts(cpf, debts){
        const update = {
            TableName: CONST.table,
            Key: { cpf },
            ReturnValues: 'ALL_NEW',
            UpdateExpression: 'set #debts = list_append(if_not_exists(#debts, :empty), :list)',
            ExpressionAttributeNames: { '#debts': 'debts' },
            ExpressionAttributeValues: { ':list': debts, ':empty': [] }
          }

        return dynamo.update(update).promise()
    },

    save: Item => dynamo.put({ TableName: CONST.table, Item }).promise(),

}