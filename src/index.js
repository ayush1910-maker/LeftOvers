import express from 'express';
import cors from 'cors';
import database from './db/db.js';
import fs from 'fs';
import config from './db/envConfig.js';
import path from 'path';
import {createServer} from 'http';



const app = express();

const server = createServer(app);

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.json({message: "Hello from the server"});
})


// database connectivity
database;
console.log(`Database connected to url ${database.url}`)

// server
server.listen(config.PORT, config.HOST, () =>{
    console.log(`Server is running on http://${config.HOST}:${config.PORT}`);
})
