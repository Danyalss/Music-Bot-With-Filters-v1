// server imports
const express = require('express');
const app express();
const port- 3000;
// create main route
app.get('/', (req, res) -> res.send('server connected!'));
// instantiate server
app.listen(port, () -> console.log("App is listening at http://localhost:$(port)'));
