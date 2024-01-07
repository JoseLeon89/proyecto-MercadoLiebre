//require
const express = require('express');
const path = require('path');

const app = express();
const port = 3005

//config
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, 'views', 'home.html'))
})

app.listen(port, ()=>{
    console.log(`Nuestra app corre em http://localhost:${port}`);
})