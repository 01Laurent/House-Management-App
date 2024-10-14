const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('LandLord management system,, about to start on it!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
