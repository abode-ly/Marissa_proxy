const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'../public')));

// app.get('/photosandcomments/:id', (req, res) => {
//   axios.get(`http://localhost:3001/photosandcomments/${req.params.id}`)
//     .then((response) => res.send(response.data) );
// })

// app.get('/abodes/:abode_id/reviews', (req, res) => {
//   // console.log(req.params.id);
//   axios.get(`http://localhost:3002/abodes/${req.params.abode_id}/reviews`)
//     .then(response => res.send(response.data))
//     .catch(err => res.status(404).end(err));
// })

app.get('/abodes/:abode_id/reviews', (req, res) => {
  // console.log(req.params.id);
  axios.get(`http://localhost:3002/abodes/${req.params.abode_id}/reviews`)
    .then(response => res.send(response.data))
    .catch(err => res.status(404).end(err));
})


{/* <script src="http://localhost:3001/carousel.app.js"></script>
<script src="http://localhost:3002/app.js"></script>
<script src="http://localhost:3003/BookingModule.bundle.js"></script>
<script src="http://localhost:3004/nearbyHomes.app.js"></script> */}

app.listen(port, () => {
  console.log('in the server');
  console.log(`Server listening at http://localhost: ${port}`);
});
