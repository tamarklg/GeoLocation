const distancesService = require('../services/distances.service');
const serviceResponse = require('../core/serviceResponse');

const getDistance = async (req, res) => {
  try {
    const source = req.query.source;
    const destination = req.query.destination;

    const distance = await distancesService.getDistance(source, destination);

    return serviceResponse.success(res, distance);
  } catch (err) {
    return serviceResponse.error(res, err);      
  }
}

const getPopularSearch = async (req, res) => {
  try {
    const popularSearch = await distancesService.getPopularSearch(1);

    return serviceResponse.success(res, popularSearch);
  } catch (err) {
    return serviceResponse.error(res, err);      
  }
}

const getPopularSearchList = async (req, res) => {
  try {
    const popularSearch = await distancesService.getPopularSearchList();

    return serviceResponse.success(res, popularSearch);
  } catch (err) {
    return serviceResponse.error(res, err);      
  }
}

module.exports = {
    getDistance,
    getPopularSearch,
    getPopularSearchList
};