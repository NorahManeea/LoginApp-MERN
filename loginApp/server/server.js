//const express = require('express') // WE CANNOT USE IMPORT IN BACKEND SO WE USE THIS, TO USE IMPORT WE HAVE TO ADD "type": "module", IN PACKAG.JSON
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app = express();

/* Middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); // less hackers know about our stack 

const port = 8080;


/** HTTP GET REQUEST */
app.get('/', (req,res)=>{
    res.status(201).json("Home Get Request");
});

/** Start Server */
app.listen(port, () => {
    console.log(`Server connected to http://localhost:${port}`);
})
