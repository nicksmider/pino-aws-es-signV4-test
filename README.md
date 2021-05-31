# Test AWS Sign V4 with Pino Elasticsearch Stream

This is intended to be used with a local copy of `pino-elasticsearch`, specifically `https://github.com/nicksmider/pino-elasticsearch/tree/feature/connection`

PR opened for that version: https://github.com/pinojs/pino-elasticsearch/pull/84

If you want to use an active version of `pino-elasticsearch`, remove

```
"pino-elasticsearch": "file:../pino-elasticsearch"
```

from  `package.json` and reinstall normally.

## Install
```
npm ci
```

## ENV

Create file `.env` and transfer contents of `.env_base`.
You can replace the Elasticsearch endpoint with yours.

## Run

Make sure your AWS.config.credentials is set before using this particular connection.

```
npm start
```


