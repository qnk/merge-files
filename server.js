const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// TODO: Apply several security packages as helmet.
// It is possible to find out how I've done before here:
// https://github.com/qnk/altran-project

// TODO: Move route to express' Router
// It is possible to find out how I've done before here:
// https://github.com/qnk/altran-project

app.get('/api/merge/', function(req, res, next) {
  res.send('hello world');
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).send({
        message: err.message || 'Undefined error'
    });
});

listen();

function listen() {
    const port = process.env.PORT;
    const env  = app.get('env');

    app.listen(port);

    console.log(`\n***********\nAPI started on port ${port}. Env is ${env}\n`);
}

module.exports = app;
