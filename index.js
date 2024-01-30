import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
import bodyParser from 'body-parser';

import Connect from './database/dbConnect.js';
import DefaultData from './default.js';
import Router from './routes/route.js'

const app = express();

dotenv.config()

app.use(cors());
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/',Router)

const PORT = process.env.PORT


app.listen(PORT , async() =>{
     await Connect();
    console.log(`Server is running successfully on PORT: ${PORT}`)
});

DefaultData();