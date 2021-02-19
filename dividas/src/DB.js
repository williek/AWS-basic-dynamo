'use strict'

const CONST = require('./constants')
const AWS = require("aws-sdk");

AWS.config.update({ region: CONST.awsRegion });

const dynamo = new AWS.DynamoDB.DocumentClient();

// const { DynamoDB } = require("@aws-sdk/client-dynamodb");

// const client = new DynamoDB({ region: "sa-east-1" });

module.exports = {

    async find(cpf){

        const search = { TableName: CONST.table, Key: { cpf } }
        return await dynamo.get(search).promise()
        
    },

    save: Item => dynamo.put({ TableName: CONST.table, Item }).promise(),

}