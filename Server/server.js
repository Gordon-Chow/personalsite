const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const index = express.static(path.join(__dirname, '../Client/dist/'));
// const bundle = express.static(path.join(__dirname, '../Client/dist/bundle.js'));

app.use(express.json());

// app.use('/static', bundle)
app.use(index);
app.use('/*', index);


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
})