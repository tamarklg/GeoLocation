const api = require('express').Router();
const distancesController = require('../controllers/distances.controller');

api.get('/', distancesController.getDistance);
api.get('/popularsearch', distancesController.getPopularSearch);
api.get('/popularsearchlist', distancesController.getPopularSearchList);

module.exports = api;