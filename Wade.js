import express from 'express';
import path from 'path';
import * as fs from 'fs';
import { dirname } from 'path';

import  * as evs from 'express-video-stream'; // Express Video Stream
 

var app = express();
 
evs.addVideo("1", "./Fuck_these_fuckin_fascists.mp4")    //Add video to config
 
app.use(evs.middleware) //Use streaming middleware
 
app.get('/', (req, res) => {
    var page = fs.readFileSync('./index.html'); // Load html into buffer
    res.send(page + ' ');
})
 
app.listen(5004, () => {
    console.log("Test is up and running on localhost:5004!")
})