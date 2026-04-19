const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product')
const app = express()

const port = 3000

//middleware
app.use(express.json()); // for parsing application/json

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/products', async (req, res) => {
  
  try{
    const product = await Product.create(req.body);
    res.status(200).json({ message: 'Product created successfully', product });
  }
  catch(error){
    res.status(400).json({ message: error.message });
  }
});

mongoose.connect('mongodb+srv://jayogunz_db_user:UxQCX3jLQcbjQDpE@cluster0.u1ylh7i.mongodb.net/?appName=Cluster0')
  .then(() => console.log('Connected!'))
  .then(() => app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}));
