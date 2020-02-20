const express = require('express');
const petRotas = require('./routes/pet')

const app = express();
app.use(petRotas);
app.listen(3000, ()=>{
    console.log("Funcionando!");
})