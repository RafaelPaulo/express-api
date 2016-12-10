import express from 'express'

const ENV_PORT = process.env.PORT

const app = express()

app.listen(ENV_PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});

export default app
