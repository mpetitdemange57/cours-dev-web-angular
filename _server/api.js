import * as _ from "underscore"
import {base64_encode} from './encodingUtils.js';
import {where} from './objectUtils.js';

import * as LIST_EMPLOYEES from "./data/SeattleGraceEmployees.js";

var EMPLOYE = LIST_EMPLOYEES.seattleGraceEmployees.map(employe => {
  // work with timestamps, it's cleaner
  let nom =  employe.nom.toLowerCase().trim().replace(/[^\w\s]/gi, '');
  let prenom =  employe.prenom.toLowerCase().trim().replace(/[^\w\s]/gi, '');

  employe.photo = base64_encode(prenom + "-" + nom + ".jpg");

  return employe;
});

const listAll = function(req, res) {
  console.log('List all EMPLOYE');
  if (!EMPLOYE || EMPLOYE.length === 0) {
    return res.status(204).json();
  }
  return res.status(200).json(EMPLOYE);
};

const filterByName = function(req, res) {
  var name = getParam(req, 'name');
  console.log('List by name : name=' + name);

  return res.status(200).json([...where(EMPLOYE, { nom: name }), ...where(EMPLOYE, { prenom: name })]);
};

const filterBySkill = function(req, res) {
  var skill = getParam(req, 'skill');
  console.log('List by skill : skill=' + skill);

  var filteredEMPLOYE = _.filter(EMPLOYE, function(person) {
    return _.contains(person.skills, skill);
  });

  return res.status(200).json(filteredEMPLOYE);
};

const get = function(req, res) {
  var id = getId(req);
  console.log('Get person : id=' + id);

  var person = _.findWhere(EMPLOYE, { id: id });

  if (!person) {
    return res.status(404).json({ error: 'La personne avec l\'id "' + id + '" n\'existe pas.' });
  }

  return res.status(200).json(person);
};

const getRandom = function(req, res) {
  var person = EMPLOYE[Math.floor(Math.random() * EMPLOYE.length)];
  if (!person) {
    return res.status(204).json();
  }
  return res.status(200).json(person);
};

const create = function(req, res) {
  var person = req.body;
  var lastname = person.lastname;
  var firstname = person.firstname;
  console.log('Create person : lastname=' + lastname + ', firstname=' + firstname);

  var found = _.findWhere(EMPLOYE, { lastname: lastname, firstname: firstname });
  if (found) {
    return res.status(409).json({ error: 'La personne "' + lastname + ' ' + firstname + '" existe déjà.' });
  }

  delete person.id;
  person.id = createId();
  person.entryDate = parseDate('01/03/2016');
  person.birthDate = parseDate('02/06/1991');
  EMPLOYE.push(person);

  return res.status(200).json(person);
};

const update = function(req, res) {
  var id = getId(req);
  console.log('Update person : id=' + id);

  var person = req.body;

  var index = _.findIndex(EMPLOYE, function(p) {
    return p.id === id;
  });

  if (index === -1) {
    return res.status(404).json({ error: 'La personne avec l\'id "' + id + '" n\'existe pas.' });
  }

  Object.assign(EMPLOYE[index], person);

  return res.status(200).json(EMPLOYE[index]);
};

const del = function(req, res) {
  var id = getId(req);
  console.log('Delete employe : id=' + id);

  var index = _.findIndex(EMPLOYE, function(p) {
    return p.id === id;
  });

  if (index === -1) {
    return res.status(404).json({ error: 'La personne avec l\'id "' + id + '" n\'existe pas.' });
  }

  EMPLOYE.splice(index, 1);

  if (!EMPLOYE || EMPLOYE.length === 0) {
    return res.status(204).json();
  }

  return res.status(200).json(EMPLOYE);
};

function getParam(req, param) {
  return req.params[param];
}

function getId(req) {
  return getParam(req, 'id');
}

function createId() {
  return new Date().getTime() + '';
}

function parseDate(stringDate) {
  if(stringDate !== undefined){
    const dates = stringDate.split('/');
    return new Date(dates[2] + '/' + dates[1] + '/' + dates[0]).getTime();
  }else{
    throw new Error("stringDate est indéfini ");
  }
}

export {listAll,filterByName,filterBySkill,update,create,getRandom, del, get }
