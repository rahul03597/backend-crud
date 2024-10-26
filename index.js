const express = require('express')
const { default: mongoose } = require('mongoose')
const Product = require("./Product.model");
const app = express()
const cors = require('cors');
app.use(cors());
const port = 3000;

const dbUrl="mongodb+srv://rr03597:DYFGXMowD1HLV9hk@backendseconddb.4w8az.mongodb.net/?retryWrites=true&w=majority&appName=BackendSecondDb"


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World !')
})

//Create products
app.post('/api/product', async (req, res)=>{

  try{
      const product= await Product.create(req.body);
      console.log(req.body)
      console.log(product)
      res.status(200).json(product);

  } catch(error){
    res.sendStatus(500).json({message: error.message})
  }
})

//Get all products
app.get('/api/product', async (req, res)=>{
  try{
    const products = await Product.find();
    res.status(200).json(products);
  } catch(error){
    res.sendStatus(500).json({message: error.message})
  }
})

//get product by id
app.get('/api/product/:id', async (req, res)=>{
  try{
    const item = await Product.findById(req.params.id);
    res.status(200).json(item);
  } catch(error){
    res.sendStatus(500).json({message: error.message})
  }
})

//update product
app.put('/api/product/:id', async (req, res)=>{
  try{
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    // console.log(req.params.id, req.body)
    res.status(200).json(product);
 
  } catch(error){
    res.sendStatus(500).json({message: error.message})
  }
})
//delete product
app.delete('/api/product/:id', async (req, res)=>{
  try{
    const item = await Product.findByIdAndDelete(req.params.id);
    // res.status(200).json(item.name + " deleted successfully");
    res.json(item);
    
  } catch(error){
    res.sendStatus(500).json({message: error.message})
  }
})


mongoose.connect(dbUrl).then(() => {
  console.log("Database connected successfully")
  app.listen(port, () => {
    console.log(`Example app listening on port wala ${port}`)
  })
}).catch((err) => {
  console.log("Database not connected", err)
})