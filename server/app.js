import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { serverPort } from '../etc/config.json';

import * as db from './utils/DataBaseUtils';

// Initialization of express application
export const app = express();

// Set up connection of database
db.setUpConnection();

// Using bodyParser middleware
app.use( bodyParser.json() );

// Allow requests from any origin
app.use(cors({ origin: '*' }));

// RESTful api handlers
app.get('/notes', (req, res) => {
 db.listNotes().then(data => {
  res.send(data);
 });
});

app.post('/notes', (req, res) => {
 console.log("server utils app.post()");
 db.createNote(req.body).then(data => res.send(data));
});

app.delete('/notes/:id', (req, res) => {
 console.log("server utils app.delete()");
 db.deleteNote(req.params.id).then(data => res.send(data));
});

app.put('/notes/:id', (req, res)=>{
 console.log("server utils app.put()");
 db.changeNote(req.params.id, req.body).then(data => res.send(data));
});
const server = app.listen(serverPort, function() {
 console.log(`Server is up and running on ${serverPort}`);
});
