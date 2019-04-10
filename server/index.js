const express = require('express');
// const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/:id', (req, res) => {
  console.log(req.params.id);
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost: ${port}`);
});
