const express = require('express');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');

const app = express();
const port = 5000;


mongoose.connect('mongodb+srv://LExx:ayush900@cluster0.h6wdp.mongodb.net/Shops').then((res) => {
  app.listen(5000, () => {
    console.log('app listening server err');
  })
}).catch((err) => {
  console.log(`${err}`);
});




app.use(express.json());


app.get('/', (req, res) => {
  return res.status(200).json({
    status: 'Welcome',
    message: 'ecommerce app api'
  });
});



app.use(userRoutes);
app.use(productRoutes);

app.use((req, res) => {
  return res.status(404).json({
    staus: 'error',
    message: 'url not found'
  });
});