import express from "express";
import * as api from "./api.js";
import cors from "cors";
import bodyParser from "body-parser";
import {Url} from "./url.js";


const app = express();


app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT, DELETE');
  next();
});

// JSON API

app.get(Url._employeUrl, api.listAll);
app.get(Url._employeUrl + '/random', api.getRandom);
app.get(Url._employeUrl + '/:id', api.get);
app.get(Url._employeUrl + '/name/:name', api.filterByName);
app.get(Url._employeUrl + 'skill/:skill', api.filterBySkill);
app.post(Url._employeUrl, api.create);
app.put(Url._employeUrl + '/:id', api.update);
app.delete(Url._employeUrl + '/:id', api.del);

app.listen(app.get('port'), function() {
  console.log('✔ Express server listening on http://localhost:%d/', app.get('port'));
});
