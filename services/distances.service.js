const distancesSql = require('../sql/distances.sql');

const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyCjHqDFEysAJ136tyulCPeNGklwEVHgA08',
    Promise: Promise
});

const getDistance = async (source, destination) => {
  const sqlRes = await distancesSql.getDistance(source, destination);

  if(sqlRes[0]) {
      await increaseHits(source, destination);
      return sqlRes[0];
  }
  else {
    const googleMapsRes = await calcDistances(source, destination);

    const distanceObj = googleMapsRes.json.rows[0].elements[0];
    const distance = distanceObj.status == "OK" ? distanceObj.distance.value / 1000 : null;

    await setDistance(source, destination, distance);
    return { distance };
  }
}


const calcDistances = async (source, destination) => {
    return googleMapsClient.distanceMatrix({
        origins: [source],
        destinations: [destination],
        language: 'he'
    }).asPromise();
};

const setDistance = (source, destination, distance) => {
    return distancesSql.setDistance(source, destination, distance);
}

const increaseHits = (source, destination) => {
    return distancesSql.increaseHits(source, destination);
}

const getPopularSearch = async () => {
    const res =  await distancesSql.getPopularSearch(1);
    return res[0];
}

const getPopularSearchList = async () => {
    const number = 10;
    return distancesSql.getPopularSearch(number);
}

module.exports = {
    getDistance,
    getPopularSearch,
    getPopularSearchList
};
