const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'../public')));

app.get('/:path', (req, res) => {
  res.sendFile(path.join(__dirname,'../public/index.html'));
});

app.get('/photosandcomments/:id', (req, res) => {
  axios.get(`http://54.152.254.52/photosandcomments/${req.params.id}`)
  .then((response) => res.send(response.data) )
  .catch(err => res.status(404).end(err));
})

app.get('/abodes/:abode_id/reviews', (req, res) => {
  axios.get(`http://18.144.44.107:3002/abodes/${req.params.abode_id}/reviews`)
    .then(response => res.send(response.data))
    .catch(err => res.status(404).end(err));
})

app.get('/similarhomes/:host_id/nearby', (req, res) => {
  axios.get(`http://18.191.149.200:3004/similarhomes/${req.params.host_id}/nearby`)
    .then(response => res.send(response.data))
    .catch(err => res.status(404).end(err));
})

app.get('/bookings/:id/reserve', (req, res) => {
  axios.get(`http://ec2-18-218-39-128.us-east-2.compute.amazonaws.com:3003/bookings/${req.params.id}/reserve`)
    .then(response => res.send(response.data))
    .catch(err => res.status(404).end(err));
})

app.get('/bookings/:accommodationID/reserve/:startDate&:endDate', (req, res) => {
  axios.get(`http://ec2-18-218-39-128.us-east-2.compute.amazonaws.com:3003/bookings/${req.params.accommodationID}/reserve/${req.params.startDate}&${req.params.endDate}`)
    .then(response => res.send(response.data))
    .catch(err => res.status(404).end(err));
})

app.listen(port, () => {
  console.log('in the server');
  console.log(`Server listening at http://localhost: ${port}`);
});
