const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send('Welcome to my fake learning CSE DB');
})

app.listen(port, ()=>{
    console.log(`The Fake learning DB is running on port ${port}`);
})