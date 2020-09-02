var db = require('../connecion');

var Starter = {
    getstarter: function(callback)
    {
        return db.query('SELECT * from starter', callback);
    },
    createstarter: function (Starter, callback) {
        return db.query('Insert into starter (name, description, price, image) values(?,?,?,?)',[Starter.name, Starter.description, Starter.price, Starter.image], callback);
    }
}

module.exports = Starter;