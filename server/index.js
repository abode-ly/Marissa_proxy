const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'../public')));

app.get('/photosandcomments/:id', (req, res) => {
  axios.get(`http://localhost:3001/photosandcomments/${req.params.id}`)
    .then((response) => res.send(response.data) )
    .catch(err => res.status(404).end(err));
})

app.get('/abodes/:abode_id/reviews', (req, res) => {
  // console.log(req.params.id);
  axios.get(`http://localhost:3002/abodes/${req.params.abode_id}/reviews`)
    .then(response => res.send(response.data))
    .catch(err => res.status(404).end(err));
})

app.get('/homes', (req, res) => {
  axios.get(`http://localhost:3004/homes`)
    .then(response => res.send(response.data))
    .catch(err => res.status(404).end(err));
})

app.get('/bookings/:id/reserve', (req, res) => {
  axios.get(`http://localhost:3003/bookings/${req.params.id}/reserve`)
    .then(response => res.send(response.data))
    .catch(err => res.status(404).end(err));
})

app.get('/bookings/:accommodationID/reserve/:startDate&:endDate', (req, res) => {
  axios.get(`http://localhost:3003/bookings/${req.params.accommodationID}/reserve/${req.params.startDate}&${req.params.endDate}`)
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
