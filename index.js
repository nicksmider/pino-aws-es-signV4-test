require('dotenv').config()
const AWS = require('aws-sdk')
const createAwsElasticsearchConnector = require('aws-elasticsearch-connector')
const pino = require('pino')
const pinoElastic = require('pino-elasticsearch')

const { Connection, Transport } = createAwsElasticsearchConnector(AWS.config);

const streamToElastic = pinoElastic({
  index: 'test-index',
  consistency: 'one',
  node: 'http://localhost:9200',
  'es-version': 7,
  'flush-bytes': 1000,
  Connection,
  Transport
})

const logger = pino({ level: 'info' }, streamToElastic)

logger.info('hello world');