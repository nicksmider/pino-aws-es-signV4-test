require('dotenv').config()
const pino = require('pino')
const pinoElastic = require('pino-elasticsearch')

// Connection based on AWS Docs
// https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-request-signing.html#es-request-signing-node
const { AwsSignedConnection: Connection } = require('@smidges/aws-es-connection');

const streamToElastic = pinoElastic({
  index: 'test-index',
  consistency: 'one',
  node: process.env.ELASTICSEARCH_URL,
  'es-version': 7,
  'flush-bytes': 1000,
  Connection
})

const logger = pino({ level: 'info' }, streamToElastic)

logger.info('nick news');

// Script hands while logger is waiting to flush
// Making it clear in console
console.log('waiting for flush');