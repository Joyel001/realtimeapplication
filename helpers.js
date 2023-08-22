let MySqli = require('mysqli');

let conn = new MySqli({
    host: 'localhost',
    port: '5500', // Corrected typo here
    user: 'root',
    password: '123456',
    db: 'mega_shop'
});

let db = conn.connect(); // Use the 'connect' method

module.exports = {
    database: db
}
