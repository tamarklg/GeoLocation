const sql = require('./sql').sql;

const init = async () => {
    await createDB();
    process.exit(0);
}

module.exports = {
    init
};
const createDB = () => {
    return sql({ query: 
        `CREATE DATABASE newDB
        use newDB
        create table distances (
            id [int] IDENTITY(1,1) NOT NULL,
            source NVARCHAR(50) NOT NULL,
            destination NVARCHAR(50) NOT NULL,
            distance FLOAT NOT NULL,
            hits int NOT NULL
        )`
    })
}