const mssql = require('mssql');

const config = {
    user: 'normal',
    password: 'Normal',
    database: 'api',
    server: 'localhost',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};


const pool = new mssql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Conectado a la base de datos');
        return pool;
    }).catch(err => {
        console.log('Error en la conexion a base de datos ' + err);
    });

module.exports = pool;