# Test AWS Sign V4 with Pino Elasticsearch Stream

This is intended to be used with a local copy of `pino-elasticsearch`.

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
```
npm start
```


