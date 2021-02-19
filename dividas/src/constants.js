'use strict'

module.exports = {

    awsRegion: process.env['AWS_REGION'] || 'sa-east-1',
    port: process.env['PORT'] || 3000,
    table: process.env['PERSON_DEBT_TABLE'] || 'personDebt',

}