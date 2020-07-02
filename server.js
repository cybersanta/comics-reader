const express = require('express');
const proxy = require('html2canvas-proxy');
const config = require('./lib/config');
const apiRouter = require('./routes');

const app = new express();
app.use(express.json())
app.use('/api', apiRouter)
app.use('/picture', express.static('public'))

app.use('/', proxy());


app.listen(config.port, () => console.log(`Server has been started on port ${config.port}`))