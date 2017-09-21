// Application running at
// https://merge-data-jaqnk.c9users.io/api/merge?file=fichero1&extend=fichero2

const express = require('express');
const app = express();
const Q = require('q')
const modules = require('./modules');

// TODO: Apply object deconstruction (ES6)
// TODO: Install and run eslint to standarize code and force best practices
const File = modules.file;
const Content = modules.content;

// TODO: Apply several security packages as helmet.
// It is possible to find out how I've done before here:
// https://github.com/qnk/altran-project

// TODO: Move route to express' Router
// It is possible to find out how I've done before here:
// https://github.com/qnk/altran-project

// TODO: Avoid error control with underscore with TypeScript
// Since javascript does not support data type params check, I mainly use _.has()
// functions to ensure the right data type. Avoid this using TypeScript in future
// It is possible to find out how I've done before here:
// https://github.com/qnk/altran-project

app.get('/api/merge/', function(req, res, next) {
  console.log('Access to endpoint done');
  
  const file = req.query.file || '';
  const extend = req.query.extend || '';

  if(! file === '' || extend === '') {
    throw Error("Missing 'file' or 'extend' params on querystring");
  }

  const firstFile = File.attachExtension(file);
  const secondFile = File.attachExtension(extend);
  
  // TODO: Check for file existance after trying to open it directly

  const firstFileContent = File.content(firstFile);
  const secondFileContent = File.content(secondFile);
  
  const firstFileLines = File.splitByCariage(firstFileContent);
  const secondFileLines = File.splitByCariage(secondFileContent);
  
  const resultAsArr = Content.removeDuplicates(firstFileLines, secondFileLines);
  const finalResult = Content.convertToString(resultAsArr);
  
  // TODO: Remove hardcoded param
  File.append('fichero2.md', finalResult);
  
  res.send('done');
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
