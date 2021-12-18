import express from "express";
import * as api from "./api.js";
import cors from "cors";
import bodyParser from "body-parser";


const app = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT, DELETE');
  next();
});

// JSON API
app.get('/api/employee', api.listAll);
app.get('/api/employee/random', api.getRandom);
app.get('/api/employee/:id', api.get);
app.get('/api/employee/name/:name', api.filterByName);
app.get('/api/employee/skill/:skill', api.filterBySkill);
app.post('/api/employee', api.create);
app.put('/api/employee/:id', api.update);
app.delete('/api/employee/:id', api.del);

app.listen(app.get('port'), function() {
  console.log('✔Express server listening on http://localhost:%d/', app.get('port'));
});
