const sql = require('../sql').sql;

const getDistance = (source, destination) => {
    return sql({ query: 
        `SELECT distance
        FROM distances
        WHERE source = N'` + source + `' AND destination = N'` + destination + `'` });
}

const setDistance = (source, destination, distance) => {
    return sql({ query:
        `INSERT INTO distances
        VALUES(N'` + source + `', N'` + destination + `', ` + distance + `, 1)`})
}

const increaseHits = (source, destination) => {
    return sql({ query:
        `UPDATE distances
        SET hits = hits + 1
        WHERE source = N'` + source + `' AND destination = N'` + destination + `'`})
}

const getPopularSearch = (number) => {
    return sql({ query:
        `SELECT TOP(` + number + `) source, destination, hits
        FROM distances
        ORDER BY hits desc`})
}

module.exports = {
    getDistance,
    setDistance,
    increaseHits,
    getPopularSearch
}