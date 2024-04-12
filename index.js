const express = require('express');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
const cors = require('cors');
const fileUpload = require('express-fileupload');




app.use(cors());

mongoose.connect('mongodb+srv://teams700:moles900@cluster0.no9horl.mongodb.net/Shops').then((res) => {
  app.listen(port, () => {
    console.log('app listening server err');
  })
}).catch((err) => {
  console.log(`${err}`);
});




app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
  abortOnLimit: true
}));


app.get('/', (req, res) => {
  return res.status(200).json({
    status: 'Welcome',
    message: 'ecommerce app api'
  });
});



app.use('api/v1/users', userRoutes);
app.use('/api/v1/products', productRoutes);

app.use((req, res) => {
  return res.status(404).json({
    staus: 'error',
    message: 'url not found'
  });
});