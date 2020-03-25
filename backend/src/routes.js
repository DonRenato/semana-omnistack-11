const express = require('express');
const ONGController = require('./controllers/ongController');
const IncidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/profileController');
const SessionController = require('./controllers/sessionController');


const routes = express.Router();


routes.post('/sessions', SessionController.create );

routes.get('/ongs', ONGController.index);

routes.post('/ongs', ONGController.create);

routes.get('/incidents', IncidentController.index);

routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);




module.exports = routes;