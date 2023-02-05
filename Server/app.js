require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.set("strictQuery", false);
mongoose.connect(process.env.DBURI,()=>{
    console.log('DATABASE CONNECTED');
});

app.listen(process.env.PORT, ()=>{
    console.log(`SERVER: ${process.env.PORT}`);
});