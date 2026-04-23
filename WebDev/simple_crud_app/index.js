const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product')
const app = express()

require('dotenv').config();

//middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello World!') //
})

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post('/api/products', async (req, res) => {
  
  try{
    const product = await Product.create(req.body);
    res.status(200).json({ message: 'Product created successfully', product });
  }
  catch(error){
    res.status(400).json({ message: error.message });
  }
});

//update name //testing
app.put('/api/products/:id', async (req, res) => {
  try {
    const { description, quantity, name } = req.body; // whitelist fields
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { description, quantity, name },
      { new: true, runValidators: true }
    );

    if (!product) return res.status(404).json({ message: 'Product not found' });

    res.status(200).json({ message: 'Product updated successfully', product });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete('/api/products/:id', async (req, res) => {
  try{
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Product deleted successfully', product });
  }
  catch(error){
    res.status(400).json({ message: error.message });
  }
});

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected!'))
  .then(() => app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`)
  }));
